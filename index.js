// basic Express setup
"use strict";

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


// Mongo DB setup
const MongoClient = require("mongodb").MongoClient;
const MONGO_URI = "mongodb://127.0.0.1:27017/USTAQ_DB"

let db;

//Connecting to the Mongo DB client
MongoClient.connect(MONGO_URI, (err, mongoInstance) => {
  if (err) throw err;
  console.log(`successfully connected to DB: ${MONGO_URI}`);
  db = mongoInstance;
})

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});