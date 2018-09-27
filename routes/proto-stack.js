'use strict'

const express = require('express')
const router = express.Router()
const api = require('./call-google.js')();

module.exports = function() {

  router.post('/', function(req, res) {
    let type = req.body.type
    let query = req.body.query ? req.body.query : null
    let text = req.body.text ? req.body.text : null
    console.log('This is query:', query)
    if (type === 'wiki') {
      api.passWikiToGoogle(query)
        .then(protoStack => {
          res.json(protoStack)
        })
        .catch(err => {
          res.status(500).send()
        })
      } else if (type === 'text') {
        api.passTextToGoogle(text)
        .then(protoStack => {
          res.json(protoStack)
        })
        .catch(err => {
          res.status(500).send()
        })
      }
    // TODO: test this route with client
  })

  return router
}