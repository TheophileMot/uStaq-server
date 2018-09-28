'use strict'

const express = require('express')
const router = express.Router()
const api = require('./call-google.js')();
const wTextRank = require('../utilities/weighted-text-rank')

module.exports = function () {

  router.post('/', function (req, res) {
    let type = req.body.type
    let query = req.body.query ? req.body.query : null
    let text = req.body.text ? req.body.text : null
    console.log('This is query:', query)
    if (type === 'wiki') {
      api.passWikiToGoogle(query)
        .then(syntax => {
          const WTR = new wTextRank(syntax)
          return WTR.rankSentences();
        })
        // TODO: ADD SECOND UTILITY
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
  })
  return router
}