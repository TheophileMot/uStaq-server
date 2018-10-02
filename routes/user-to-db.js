'use strict'

const express = require('express')
const router = express.Router()

const OAuth= require('oauthio');
OAuth.initialize('_iSZVvDIMwLHtJgOQQ8gXsOftQI', 'qHNjEpcNZqGdL5d-5WS_IW3h8i8');

// mode for taking from client and passing to db
module.exports = function(dbMethods) {

  router.get('/', function(req, res) {
    res.status(200).send(req.session.user);
  })

  router.get('/token', function(req, res) {
    var token = OAuth.generateStateToken(req.session);
    res.send(200, {token:token});
  })

  router.post('/auth', function(req, res) {
    console.log("REQ SESSGION!!!!!!!!!!!", req.session)
    OAuth.auth('github', req.session, {
      code: req.body.code
    }).then(function(oauthResult) {
      console.log("THIS IS RESULT OAUTH", oauthResult)
      return oauthResult.me()
      //oauthResult.access_token oauthResult.refresh_token
    }).then((data) => {
      let newUser = {_id: data.id, email: data.email, name: data.name, alias: data.alias}
      req.session.user = newUser;
      dbMethods.saveUser(newUser); 
    }).then(user => {
      res.status(201).send()
    })
    .catch(err => {
      res.status(500).send(err)
    })

  });

  // router.post('/', function(req,res) {
  //   let newUser = req.body
  //   dbMethods.saveUser(newUser)
  //   .then(user => {
  //     res.status(201).send()
  //   })
  //   .catch(err => {
  //     res.status(500).send(err)
  //   })
  // })

  // router.post('/authorize', OAuthProvider.OAuth2.postauthorize());
  // router.post('/token', OAuthProvider.OAuth2.token());

    
  return router
}