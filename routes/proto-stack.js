'use strict'

const express = require('express')
const router = express.Router()
const api = require('./call-google.js')()
const wTextRank = require('weightedtextrank')
const HoverTree = require('../utilities/buildHoverTree')()

module.exports = function (dbMethods) {

  function tokenWeightFunction(i, sentence) {
    const AVOID_WORDS = ['this', 'these', 'those']
    if (AVOID_WORDS.includes(sentence.tokens[i].text.content.toLowerCase())) {
      return 0.1;
    } else {
      return 1;
    }
  }

  function buildHideSubTree(sentence, index) {
    if (!index) { return []; }

    let result = [index];
    for (let child of sentence.tokens[index].hoverInfo.children) {
      result = result.concat(buildHideSubTree(child));
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
          let goodScore = Math.ceil(rankedSentences[0].score / 2)
          let filteredSentences = rankedSentences.filter(s => s.score > goodScore)
          return filteredSentences.slice(0, 100)
        })
        .then(sentences => {
          sentences.forEach(sentence => {
            sentence.indicesToHide = buildHideSubTree(sentence, sentence.chefsRecommendation)
            sentence.front = sentence.tokens.map((token, index) => 
              sentence.indicesToHide.includes(index) ? "----" : token.text.content
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
          let goodScore = Math.ceil(rankedSentences[0].score / 2)
          let filteredSentences = rankedSentences.filter(s => s.score > goodScore)
          if (filteredSentences.length > 100) {
            return filteredSentences.slice(0, 100)
          }
          return filteredSentences
        })
        .then(sentences => {
          sentences.forEach(sentence => {
            sentence.indicesToHide = buildHideSubTree(sentence, sentence.chefsRecommendation)
            sentence.front = sentence.tokens.map((token, index) => 
              sentence.indicesToHide.includes(index) ? "----" : token.text.content
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