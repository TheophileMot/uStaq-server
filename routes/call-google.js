process.env.GOOGLE_APPLICATION_CREDENTIALS = './ga.json'
const api = require('./call-wiki.js')();

// Imports the Google Cloud client library
const language = require('@google-cloud/language');

// Creates a Google Cloud Language
const nlpClient = new language.LanguageServiceClient();

api.getWikiPage("Stack Overflow")
  .then(function(text) {
    let document = {
      content: text,
      type: 'PLAIN_TEXT',
    }
    nlpClient
      .analyzeSyntax({document: document})
      .then((results) => {
        const syntax = results[0];
        console.log(syntax)
        
        // console.log('Tokens:');
        // syntax.tokens.forEach((part, i)  => {
        //   console.log(`${i}: ${part.partOfSpeech.tag} "${part.text.content}"`);
        //   console.log(`Refs: ${part.dependencyEdge.label}, ${part.dependencyEdge.headTokenIndex}`)
        //   console.log(" ")
        // });
      })
      .catch((err) => {
      console.error('ERROR:', err);
    });
  })