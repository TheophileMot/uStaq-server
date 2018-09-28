'use strict'

const express = require('express')
const router = express.Router()
const api = require('./call-google.js')()
const wTextRank = require('../utilities/weighted-text-rank')
const HoverTree = require('../utilities/buildHoverTree')()

module.exports = function () {

  // BUG - NOT WORKING WITH CLIENT
  router.post('/', function (req, res) {
    console.log("THIS IS REQ.BODY", req.body)
    let proto = req.body
    let error = false
    let type = proto.type
    if (type === null) {
      error = true
    }
    let query = proto.query ? proto.query : null
    let text = proto.text ? proto.text : null
    console.log('This is query:', query)
    if (error === false) {
      if (type === 'wiki') {
        api.passWikiToGoogle(query)
          .then(syntax => {
            const WTR = new wTextRank(syntax)
            return WTR.rankSentences()
          })
          .then(rankedSentences => {
            rankedSentences.forEach(sentence => {
              HoverTree.addHoverForestToData(sentence)
            })
            // return rankedSentences.sort((s, t) => t.score - s.score)
            rankedSentences.sort((s, t) => t.score - s.score)
            return rankedSentences.map(s => [s.text.content, s.hoverRoots.map(r => s.tokens[r].text.content)])
          })
          .then(protoStack => {
            res.json(protoStack)
          })
          .catch(err => {
            res.status(500).send()
          })
      } else if (type === 'text') {
        api.passTextToGoogle(text)
          .then(syntax => {
            const WTR = new wTextRank(syntax)
            return WTR.rankSentences();
          })
          .then(protoStack => {
            res.json(protoStack)
          })
          .catch(err => {
            res.status(500).send()
          })
      }
    }
    else {
      res.status(500).send("Empty request")
    }
  })
  return router
}