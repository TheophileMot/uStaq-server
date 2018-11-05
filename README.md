## uStaq

**uStaq** is an automatic cue card generator running on a MERN stack and WebSockets. The app uses the Google NLP API and a series of custom rank and filter algorithms to intelligently create fill-in-the-blank-style cue cards from a block of text. Users can review collections or play a multiplayer quiz game.

This is half the uStaq project -- server side: https://github.com/TheophileMot/uStaq-server

# Getting Started
1) running this project requires authentication with Google's NLP API 
  - create a project with Google Cloud and activate the api
  - create `ga.json` file in root of the *server* directory
  - paste credentials into the above file 
  
2) Install MongoDb

3) `npm install` in both server and client folders
 
3) start up the servers:
 - start Mongo instance 
 - ustaq server `npm run local`
 - ustaq client `npm start`
 - socket-server (in client subfolder) `node server.js`

# Screenshots

Review a stack of cards:

![Reviewing a card in Bulgaria collection](https://github.com/TheophileMot/uStaq-server/blob/master/uStaq-review.png)

Edit the cards:

![Editing a card in Bulgaria collection](https://github.com/TheophileMot/uStaq-server/blob/master/uStaq-edit.png)

Quiz mode:

![Playing quiz in Bulgaria collection](https://github.com/TheophileMot/uStaq-server/blob/master/uStaq-quiz.png)
