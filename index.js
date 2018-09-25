// basic Express setup
"use strict";

import express, { static } from "express";
import { urlencoded } from "body-parser";
const PORT = 8080;
const app = express();

app.use(urlencoded({ extended: true }));
app.use(static("public"));

// Mongo DB setup
import { MongoClient } from "mongodb";
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