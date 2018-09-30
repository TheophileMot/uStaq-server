'use strict'

const express = require('express')
const router = express.Router()

// mode for taking from client and passing to db
module.exports = function(dbMethods) {

  router.post('/', function(req,res) {
    let newUser = req.body
    dbMethods.saveUser(newUser)
    .then(user => {
      res.status(201).send()
    })
    .catch(err => {
      res.status(500).send(err)
    })
  })
  
  return router
}