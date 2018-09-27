'use strict'

const express = require('express')
const router = express.Router()
const api = require('./call-google.js')();

module.exports = function() {

  // router.get('/', function(req, res) {
  //   res.status(200).send("HEY")
  // })

  router.post('/', function(req, res) {
    let query = req.body.query; 
    console.log('This is query:', query)
    api.passWikiToGoogle(query)
    // TODO: test this route with client
  })

  return router
}