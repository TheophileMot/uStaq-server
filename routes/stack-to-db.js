'use strict'

const express = require('express')
const router = express.Router()

// all routes for stacks interaction with the db
module.exports = function (dbMethods) {

  router.get('/', function (req, res) {
    dbMethods.getAllStacks()
      .then(stack => {
        res.json(stack)
      })
      .catch(err => {
        res.status(500).send(err)
      })
  })

  router.get('/:id', function (req, res) {
    let stackId = req.params.id
    console.log(stackId)
    dbMethods.getStackById(stackId)
      .then(stack => {
        res.json(stack)
      })
      .catch(err => {
        res.status(500).send(err)
      })
  })

  router.get('/user/:id', function (req, res) {
    let userId = req.params.id
    dbMethods.getUserStacks(userId)
      .then(stacks => {
        res.json(stacks)
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
    dbMethods.saveStack(newStack, userId)
      .then(stack => {
        res.status(201).send(stack)
      })
      .catch(err => {
        res.status(500).send(err)
      })
  })

  router.post('/edit/:id', function (req, res) {
    let stackId = req.params.id
    dbMethods.getStackById(stackId)
      .then(stack => dbMethods.editStack(stack, stackId))
      .then(res.status(200).send("Stack Edited"))
      .catch(err => {
        res.status(500).send(err)
      })
  })

  router.post('/delete/:id', function (req, res) {
    let stackId = req.params.id
    dbMethods.deleteStack(stackId)
      .then(res.status(200).send("Deleted"))
      .catch(err => {
        res.status(500).send(err)
      })
  })

  return router
}
