module.exports = function(textData, tokenWeightFunction = token => 1) {
  const { sentences: dataSentences, tokens: dataTokens } = textData;

  this.rankSentences = function() {
    let graph = this.scoreGraph(this.makeSentenceGraph());
    graph.sort((v, w) => w.score - v.score);
    return graph;
  }

  // Score the vertices using TextRank algorithm: iteratively share score to neighbours until stable.
  // 0 ≤ D ≤ 1 is the damping factor, a magic number from TextRank paper (following PageRank, q.v.)
  // usually set to 0.85. It controls how much score is transferred from each vertex at each iteration.
  this.scoreGraph = function([vertices, outgoingEdges]) {
    const D = 0.85;
    const MAX_ITERATIONS = 1000;
    const ERROR_THRESHOLD = 0.000001;

    // iterate until ∆score < threshold for each vertex
    for (let iter = 0; iter < MAX_ITERATIONS; iter++) {
      let newScore = [];
      for (let v = 0; v < vertices.length; v++) {
        let incomingScore = 0;
        for (let e = 0; e < outgoingEdges[v].length; e++) {
          let w = outgoingEdges[v][e].tail;
          incomingScore += outgoingEdges[w].filter(edge => edge.tail === v)[0].weight * vertices[w].score;
        }
        newScore[v] = (1 - D) + D * incomingScore;
      }

      let worstError = -Infinity;
      for (let v = 0; v < vertices.length; v++) {
        worstError = Math.max(worstError, Math.abs(newScore[v] - vertices[v].score));
        vertices[v].score = newScore[v];
      }

      if (worstError < ERROR_THRESHOLD) { break; }
    }
    return vertices;
  }

  // The TextRank algorithm scales the intersection size down by a factor proportional
  // to the log of the product of sentence lengths.
  this.makeSentenceGraph = function() {
    let vertices = this.matchSentencesWithTokens();
    let outgoingEdges = [];
    for (let v = 0; v < vertices.length; v++) {
      vertices[v].score = 1;
      outgoingEdges[v] = [];
      totalWeight = 0;
      for (let w = 0; w < vertices.length; w++) {
        if (v !== w) {
          let intersection = this.intersect(vertices[v].keyTokens, vertices[w].keyTokens);
          if (intersection.size > 0) {
            // If the default weight function is used, all tokens have weight 1, so
            // totalIntersectionWeight is just the size of the intersection.
            let totalIntersectionWeight = 0;
            intersection.forEach(token => totalIntersectionWeight += tokenWeightFunction(token));
            weight = totalIntersectionWeight / (Math.log(vertices[v].text.content.length) + Math.log(vertices[w].text.content.length));
            totalWeight += weight;
            outgoingEdges[v].push({
              tail: w,
              weight,
            });
          }
        }
      }
      // normalize outgoing edge weights
      for (let edge of outgoingEdges[v]) {
        edge.weight /= totalWeight;
      }
    }

    return [vertices, outgoingEdges];
  }

  // The Google API gives a single array of tokens without saying which sentence belong to; we need to
  // reconstruct the sentences one at a time and store the associated token information. Along the way,
  // record lemmatized desirable tokens (nouns and adjectives).
  this.matchSentencesWithTokens = function() {
    const DESIRABLE_TOKEN_TAGS = ['NOUN', 'ADJ'];

    let searchStartPos = 0;
    let tokenIndexOffset = 0;
    let sentencesIndex = 0;

    let matchedSentences = [];

    for (let token of dataTokens) {
      let word = token.text.content;
      let sentence = dataSentences[sentencesIndex].text.content;
      let pos = sentence.indexOf(word, searchStartPos);
      while (pos === -1) {
        // Token not found: reset search start position; update token offset so that indices
        // are relative to current sentence, not entire body of text; move to next sentence.
        searchStartPos = 0;
        tokenIndexOffset += matchedSentences[sentencesIndex].tokens.length;
        sentencesIndex++;
        if (sentencesIndex >= dataSentences.length) {
          throw (`Error in matchSentencesWithTokens: tokens don't match sentences. Stopped looking at "${word}".`);
        }
        let sentence = dataSentences[sentencesIndex].text.content;
        pos = sentence.indexOf(word, searchStartPos);
      }
      searchStartPos = pos + 1;

      if (sentencesIndex === matchedSentences.length) {
        matchedSentences[sentencesIndex] = {
          text: {
            content: dataSentences[sentencesIndex].text.content,
          },
          tokens: [],
          keyTokens: new Set,
        };
      }
      matchedSentences[sentencesIndex].tokens.push(
        { text: {
            content: token.text.content,
          },
          partOfSpeech: {
            tag: token.partOfSpeech.tag,
          },
          dependencyEdge: {
            headTokenIndex: token.dependencyEdge.headTokenIndex - tokenIndexOffset,
            label: token.dependencyEdge.label,
          },
          lemma: token.lemma.toLowerCase(),
        }
      );
      if (DESIRABLE_TOKEN_TAGS.includes(token.partOfSpeech.tag)) {
        matchedSentences[sentencesIndex].keyTokens.add(token.lemma.toLowerCase());
      }
    }

    return matchedSentences;
  }

  this.intersect = function(setA, setB) {
    let result = new Set;
    setA.forEach(x => {
      if (setB.has(x)) {
        result.add(x);
      }
    });
    return result;
  }

  // TODO: function makeWordGraph() { ... }
};