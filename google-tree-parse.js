// Imports the Google Cloud client library
const language = require('@google-cloud/language');

// Creates a client
const client = new language.LanguageServiceClient();

/**
 * TODO(developer): Uncomment the following line to run this code.
 */
const text = "Tomorrow I will make sure to eat at least two meals."

// Prepares a document, representing the provided text
const document = {
  content: text,
  type: 'PLAIN_TEXT',
};

// Detects syntax in the document
client
  .analyzeSyntax({document: document})
  .then(results => {
    const syntax = results[0];

    console.log('Tokens:');
    syntax.tokens.forEach((part, i)  => {
      console.log(`${i} ${part.partOfSpeech.tag}: ${part.text.content}`);
      // console.log(`Morphology:`, part.partOfSpeech);
      console.log(`Dependency:`, part.dependencyEdge)
    });
  })
  .catch(err => {
    console.error('ERROR:', err);
  });