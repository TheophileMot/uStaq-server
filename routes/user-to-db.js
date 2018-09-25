"use strict"

const express = require('express')
const router = express.Router()

;

// mode for taking from client and passing to db
module.exports = function(dbMethods) {
    router.get("/", function(req,res) {
    // # TODO
    let userId = ObjectId("5baa90da1c2dd12bca3b47b9")
    dbMethods.getUser(userId);
    // - pass to PROMISE from dbMethods
    //   - should return collection
  })

  router.post("/", function(req,res) {

    // # TODO
    // - filter data from client
    // - pass to PROMISE from dbMethods
    //   - should add filtered data to db
  
  })
  return router;
}