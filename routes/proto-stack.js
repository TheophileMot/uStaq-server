'use strict'

const express = require('express')
const router = express.Router()
const api = require('./call-google.js')()
const wTextRank = require('weightedtextrank')
const HoverTree = require('../utilities/buildHoverTree')()

module.exports = function (dbMethods) {

  function tokenWeightFunction(i, sentence) {
    const AVOID_WORDS = ['it', 'its', 'they', 'their', 'this', 'these', 'those', 'other', 'another']
    const INITIAL_LINK_WORDS = ['therefore', 'consequently', 'likewise', 'similarly', 'additionally', 'moreover', 'instead', 'otherwise', 'conversely', 'nonetheless', 'nevertheless', 'regardless']

    let weight = 1;

    // Penalize vague words, especially at beginning of sentence.
    let word = sentence.tokens[i].text.content.toLowerCase();
    if (AVOID_WORDS.includes(word)) {
      weight *= 0.5;
      if (i === 0) {
        weight *= 0.1;
      }
    }

    if (INITIAL_LINK_WORDS.includes(word) && i === 0) {
      weight *= 0.01;
    }

    return weight;
  }

  function buildHideSubTree(sentence, index) {
    if (index === undefined) { return []; }

    let result = [index];
    for (let child of sentence.tokens[index].hoverInfo.children) {
      result = result.concat(buildHideSubTree(sentence, child));
    }
    return result;
  }

  router.post('/', function (req, res) {
    let { type, title, query, text } = req.body.proto
    let userId = req.body.userId
      if (type === 'wiki') {
        api.passWikiToGoogle(query)
        .then(syntax => {
          const WTR = new wTextRank(syntax, tokenWeightFunction)
          return WTR.rankSentences()
        })
        .then(rankedSentences => {
          rankedSentences.forEach(sentence => {
            HoverTree.addHoverForestToData(sentence)
          })
          rankedSentences.sort((s, t) => t.score - s.score)
          // let goodScore = 0; //Math.ceil(rankedSentences[0].score / 2)
          // let filteredSentences = rankedSentences.filter(s => s.score > goodScore)
          let filteredSentences = rankedSentences.filter(s => 20 < s.text.content.length && s.text.content.length < 200);
          return filteredSentences.slice(0, Math.min(filteredSentences.length / 2, 100))
        })
        .then(sentences => {
          sentences.forEach(sentence => {
            sentence.indicesToHide = buildHideSubTree(sentence, sentence.chefsRecommendation)
            sentence.front = sentence.tokens.map((token, index) => 
              sentence.indicesToHide.includes(index) ? "────" : token.text.content
            ).join(' ')
            sentence.back = sentence.text.content
          })
          let stack = {
            title,
            owner: { _id: userId},
            sentences
          }
          dbMethods.saveStack(stack, userId)
          res.json(stack)
        })
        .catch(err => {
          res.status(500).send()
        })
      } else if (type === 'text') {
        api.passTextToGoogle(text)
        .then(syntax => {
          const WTR = new wTextRank(syntax, tokenWeightFunction)
          return WTR.rankSentences()
        })
        .then(rankedSentences => {
          rankedSentences.forEach(sentence => {
            HoverTree.addHoverForestToData(sentence)
          })
          rankedSentences.sort((s, t) => t.score - s.score)
          // let goodScore = 0; //Math.ceil(rankedSentences[0].score / 2)
          // let filteredSentences = rankedSentences.filter(s => s.score > goodScore)
          let filteredSentences = rankedSentences.filter(s => 20 < s.text.content.length && s.text.content.length < 200);
          return filteredSentences.slice(0, Math.min(filteredSentences.length / 2, 100))
        })
        .then(sentences => {
          sentences.forEach(sentence => {
            sentence.indicesToHide = buildHideSubTree(sentence, sentence.chefsRecommendation)
            sentence.front = sentence.tokens.map((token, index) => 
              sentence.indicesToHide.includes(index) ? "────" : token.text.content
            ).join(' ');      
            sentence.back = sentence.text.content
          })
          let stack = {
            title,
            owner: { _id: userId},
            sentences
          }
          dbMethods.saveStack(stack, userId)
          res.json(stack)
        })
  
        .catch(err => {
          res.status(500).send()
        })
      }
    else {
      res.status(500).send("Empty request")
    }
  })
  return router
}