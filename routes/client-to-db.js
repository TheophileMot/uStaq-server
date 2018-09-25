"use strict"

import express from 'express'
const router = express.Router()

// mode for taking from client and passing to db
module.exports = function(dbMethods) {

  router.get("/", function(req,res) {
    // # TODO
    // - pass to PROMISE from dbMethods
    //   - should return collection
  })

  router.post("/", function(req,res) {

    // # TODO
    // - filter data from client
    // - pass to PROMISE from dbMethods
    //   - should add filtered data to db
  })
}