'use strict'

const express = require('express')
const router = express.Router()

// all routes for stacks interaction with the db
module.exports = function (dbMethods) {

  router.get('/', function (req, res) {
    let userId; // TODO - change to come from REQ
    dbMethods.getAllStacks(userId)
      .then(stacks => {
        res.json(stacks)
      })
      .catch(err => {
        res.status(500).send(err)
      })
  })

  router.get('/:id', function (req, res) {
    let stackId; // TODO - change to come from REQ
    dbMethods.getStackById(stackId)
      .then(stack => {
        res.json(stack)
      })
      .catch(err => {
        res.status(500).send(err)
      })
  })

  router.post('/', function (req, res) {
    let userId = req.body.userId
    let newStack = { 
      owner: { _id: userId},
      sentences: req.body.newStack
    }
    console.log(newStack)
    dbMethods.saveStack(newStack, userId)
      .then(stack => {
        res.status(201).send(stack)
      })
      .catch(err => {
        res.status(500).send(err)
      })
  })

  return router
}