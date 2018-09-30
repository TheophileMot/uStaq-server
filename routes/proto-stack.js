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

  router.post('/', function (req, res) {
    console.log("REQ.BODY:", req.body)
    let proto = req.body.proto
    let userId = req.body.userId
    let type = proto.type
    let query = proto.query ? proto.query : null
    let text = proto.text ? proto.text : null
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
          return rankedSentences
        })
        .then(protoStack => {
          let stack = {
            owner: { _id: userId},
            sentences: [protoStack]
          }
          dbMethods.saveStack(stack, userId)
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
          return rankedSentences
        })
        .then(protoStack => {
          let stack = {
            owner: { _id: userId},
            sentences: [protoStack]
          }
          dbMethods.saveStack(stack, userId)
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