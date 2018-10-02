// USAGE: `addHoverForestToData(data)`
//   where data is a sentence already processed by TextRank


module.exports = function() {
  const PROPAGATING_STARTS = ['NSUBJ', 'NSUBJPASS', 'POBJ', 'DOBJ', 'ATTR', 'CONJ', 'APPOS'];
  const LABEL_SCORE_MULTIPLIERS = {
    ACOMP: 0.5,   // An adjectival phrase that functions as a complement (like an object of the verb). This relation specifically includes `be` copula constructions with adjective predicates. 
    AMOD: 1,      // An adjectival phrase that serves to modify the meaning of a noun phrase.
    APPOS: 3,     // A noun phrase immediately to the right of another noun phrase, with the second phrase serving to define or modify the first.
    ATTR: 4,      // A nominal phrase headed by a copular verb. Note that ``ATTR`` is different from ``ACOMP`` in that the dependent is a noun phrase, not an adjective.
    CONJ: 0.5,      // The relation between two elements connected by a coordinating conjunction, such as ``and`` or ``or``. The head of the relation is the first conjunct and other conjunctions depend on it via the ``conj`` relation.
    DOBJ: 3,  	  // The noun phrase that is the accusative object of a verb.
    NN: 1,        // Any noun that serves to modify the head noun.
    // NPADVMOD: 1,  // A noun phrase used as an adverbial modifier.
    NSUBJ: 3, 	  // A noun phrase that is the syntactic subject of a clause.
    NSUBJPASS: 2, // A noun phrase that is the syntactic subject of a passive clause.
    NUM: 2, 	    // Any number phrase that serves to modify the meaning of the noun with a quantity.
    // NUMBER: 1,    // Part of a number phrase.
    POBJ: 3, 	    // The head of a noun phrase following a preposition or the adverbs ``'here'`` and ``'there'``.
  }

  return {
    // Create a forest for important nodes (nouns, adjectives, numbers): when the user hovers over
    // one of these words, it will get blanked out, as well as all its descendants in that tree.
    // The forest is added to the existing `data` structure.
    //
    // Score each tree in the forest, scaling each node by a multiplier m. Each token is associated
    // with a scaling factor scale[token] depending on its label (i.e., syntacic function in the
    // sentence); m will be the product of all factors in its subtree.
    //
    // The root of the highest-scoring tree will be the recommended node, and its score will be
    // multiplied by the score of the sentence itself (as determined by TextRank).
    addHoverForestToData: function(data) {
      // Main loop: find interesting tokens (nouns, etc.); propagate references to preceding modifiers.
      for (let i = 0; i < data.tokens.length; i++) {
        const token = data.tokens[i];
        const label = token.dependencyEdge.label;
        
        if (PROPAGATING_STARTS.includes(label)) {
          data.tokens[i].hoverable = true;
          data.tokens[i].hoverInfo = data.tokens[i].hoverInfo || {
            parent: undefined,
            score: 1,
            children: [],
          }
          let ref = (label === 'CONJ') ? token.dependencyEdge.headTokenIndex : undefined;
          this.propagateModifiers(data, i, ref);
        }
      }
      
      this.markHoverRootsInData(data);
      this.scoreHoverForest(data);
    },

    // See if token at index `node` is preceded by a modifier: if so, build edge in tree and propagate.
    // If ref is defined, it is the token referred to by a CONJ; it will become the parent node at the last step.
    //
    // NN propagates as much as it can; AMOD only once.
    propagateModifiers: function(data, node, ref = undefined) {
      let currentNode = node;
      while (currentNode > 0 && ((data.tokens[currentNode - 1].dependencyEdge.label === 'NN')
                                 || currentNode === node && data.tokens[currentNode - 1].dependencyEdge.label === 'AMOD')) {
        this.addEdgeToHoverInfo(data, currentNode - 1, currentNode);
        currentNode--;
      }
      // Propagation has finished; now connect ref if applicable.
      if (ref !== undefined) {
        this.addEdgeToHoverInfo(data, ref, currentNode);
      }
    },

    // Add child to list of children, creating list if it doesn't already exist.
    // Similarly add parent to child. I think we only need the children (to propagate
    // hover and calculate scores), but we might as well store the parent just in case.
    //
    // The score doesn't technically need to be created here (it will be calculated later);
    // it's just here to indicate the data structure.
    addEdgeToHoverInfo: function(data, parent, child) {
      data.tokens[parent].hoverable = true;
      data.tokens[parent].hoverInfo = data.tokens[parent].hoverInfo || {
        parent: undefined,
        score: 1,
        children: [],
      }
      data.tokens[parent].hoverInfo.children.push(child);

      data.tokens[child].hoverable = true;
      data.tokens[child].hoverInfo = data.tokens[child].hoverInfo || {
        parent: undefined,
        children: [],
        score: 1,
        hoverable: true,
      }
      data.tokens[child].hoverInfo.parent = parent;
    },

    markHoverRootsInData: function(data) {
      data.hoverRoots = [];
      for (let i = 0; i < data.tokens.length; i++) {
        if (data.tokens[i].hoverable && data.tokens[i].hoverInfo.parent === undefined) {
          data.hoverRoots.push(i);
        }
      }
    },

    // Recursively assign scores to all interesting nodes. Update score of sentence by multiplying
    // by best tree, the chef's recommendation.
    scoreHoverForest: function(data) {
      let bestScore = -Infinity;
      data.chefsRecommendation = null;
      for (let root of data.hoverRoots) {
        let score = this.scoreSubTree(data, root);
        if (score > bestScore) {
          bestScore = score;
          data.chefsRecommendation = root;
        }
      }
      data.score *= bestScore;
    },

    scoreSubTree: function(data, node) {
      // Look up score in chart, or use 1 if it's not there.
      let score = LABEL_SCORE_MULTIPLIERS[data.tokens[node].dependencyEdge.label] || 1;
      // Favour long words.
      score *= (1 + Math.log2(data.tokens[node].text.content.length));
      for (let child of data.tokens[node].hoverInfo.children) {
        score *= this.scoreSubTree(data, child);
      }
      data.tokens[node].hoverInfo.score = score;
      return score;
    }
  }
}