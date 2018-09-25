// basic Express setup
"use strict";

const  express = require('express')
const urlencoded = require('body-parser')
const PORT = 8080;
const app = express();

app.use(urlencoded({ extended: true }))
app.use(express.static("public"))

// Mongo DB setup
const mongo = require("mongodb")
const MongoClient = mongo.MongoClient
const MONGO_URI = "mongodb://127.0.0.1:27017/USTAQ_DB"

let db;

//Connecting to the Mongo DB client
MongoClient.connect(MONGO_URI, (err, mongoInstance) => {
  if (err) throw err
  console.log(`successfully connected to DB: ${MONGO_URI}`)
  db = mongoInstance
  const dbMethods = require('./utilities/dbMethods')(db)

  // const stackRouter = require('./routes/stack-to-db')(dbMethods)
  const userRouter = require('./routes/user-to-db')(dbMethods)
  
  // TODO: figure out express 4.x syntax for the below
  // app.use('/stacks', stackRouter)
  // app.get('/users', userRouter)
})

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT)
})