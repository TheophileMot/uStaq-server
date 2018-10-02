// basic Express setup
'use strict';

const PORT = 8080;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const session = require('express-session');
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(express.static('public'));
app.use(session({
  secret: 'fhdifhdfhdshfds',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));



// Mongo DB setup
const MongoClient = require('mongodb').MongoClient
const MONGO_URI = 'mongodb://127.0.0.1:27017'

//Connecting to the Mongo DB client
MongoClient.connect(MONGO_URI, function(err, client) {
  if (err) throw err
  console.log(`successfully connected to DB: ${MONGO_URI}`)
  
  // instantiates the DB and passes it to helper methods module
  const db = client.db('USTAQ_DB')
  const dbMethods   = require('./utilities/dbMethods')(db)

  // passing methods to data routers
  const stackRouter = require('./routes/stack-to-db')(dbMethods)
  const userRouter  = require('./routes/user-to-db')(dbMethods)
  const protoStackRouter = require('./routes/proto-stack')(dbMethods)
 
  // setting URI path of data routers that require Mongo
  app.use('/stacks', stackRouter)
  app.use('/users', userRouter)
  app.use('/proto', protoStackRouter)
})

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.listen(PORT, () => {
  console.log('Example app listening on port ' + PORT)
})