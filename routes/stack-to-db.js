'use strict'

const express = require('express')
const router = express.Router()

module.exports = function(dbMethods) {

  router.get('/', function(req,res) {
    let userId; // TODO - will come from req
    dbMethods.getAllStacks(userId)
    .then(stacks => {
      res.json(stacks)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  })
  
  router.get('/:id', function(req, res) {
    let stackId;
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
    dbMethods.saveStack(newStack)
    .then(stack => {
      res.status(201).send(stack)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  })

  return router
}