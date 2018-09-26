'use strict'

const express = require('express')
const router = express.Router()

let user = {first_name: "Dia", last_name: "Apostolakis"}

// mode for taking from client and passing to db
module.exports = function(dbMethods) {

  router.get('/', function(req,res) {
    let userId; // TODO - req.body.userId (or similar)
    dbMethods.getUser(userId)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.status(500).send(err)
    })
  })

  router.post('/', function(req,res) {
    let newUser;// TODO -  will come from req
    dbMethods.saveUser(newUser)
    .then(user => {
      res.status(200).send(user)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  })
  return router
}