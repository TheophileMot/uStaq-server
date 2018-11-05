## uStaq

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
