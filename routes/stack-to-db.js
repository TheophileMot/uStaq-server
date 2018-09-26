'use strict'

const express = require('express')
const router = express.Router()

// mode for taking from client and passing to db
module.exports = function(dbMethods) {

  router.get('/', function(req,res) {
    let userId; // TODO - will come from req
    dbMethods.getStacks(userId)
    .then(stacks => {
      res.json(stacks)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  })
  
  router.get('/:id', function(req, res) {
    let stackId; // TODO - will come from req
    dbMethods.getStackById(stackId)
    .then(stack => {
      res.json(stack)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  })

  router.post('/', function(req,res) {
    let newStack; // TODO - will come from req
    dbMethods.saveUser(newStack)
    .then(stack => {
      res.status(201).send(stack)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  })

  return router
}