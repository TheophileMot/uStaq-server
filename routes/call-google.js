process.env.GOOGLE_APPLICATION_CREDENTIALS = './ga.json'
const api = require('./call-wiki.js')();

// Imports the Google Cloud client library
const language = require('@google-cloud/language');

// Creates a Google Cloud Language Client instance
const nlpClient = new language.LanguageServiceClient();


module.exports = function makeGoogleHelpers() {
  return {

    passTextToGoogle: text => {
      let document = {
        content: text,
        type: 'PLAIN_TEXT',
      }
      return nlpClient
        .analyzeSyntax({ document: document })
        .then(results => results[0])
        .catch((err) => {
          console.error('ERROR:', err);
        })
    },

    passWikiToGoogle: query => {
      return api.getWikiPage(query)
        .then(text => Promise.resolve({
          content: text,
          type: 'PLAIN_TEXT',
        }))
        .then(document => nlpClient.analyzeSyntax({ document: document }))
        .then(results => results[0])
        .catch((err) => {
          console.error('ERROR:', err);
        })
    }
  }
}


// // FOR DEV
// function manualGetSyntaxBreakdown() {
//   let document = {
//     content: `The common hippopotamus (Hippopotamus amphibius), or hippo, is a large, mostly herbivorous, semiaquatic mammal native to sub-Saharan Africa, and one of only two extant species in the family Hippopotamidae, the other being the pygmy hippopotamus (Choeropsis liberiensis or Hexaprotodon liberiensis). The name comes from the ancient Greek for "river horse" (ἱπποπόταμος). After the elephant and rhinoceros, the common hippopotamus is the third-largest type of land mammal and the heaviest extant artiodactyl. Despite their physical resemblance to pigs and other terrestrial even-toed ungulates, the closest living relatives of the Hippopotamidae are cetaceans (whales, dolphins, porpoises, etc.) from which they diverged about 55 million years ago.
//     Common hippos are recognisable by their barrel-shaped torsos, wide-opening mouths revealing large canine tusks, nearly hairless bodies, columnar legs and large size; adults average 1,500 kg (3,310 lb) and 1,300 kg (2,870 lb) for males and females respectively. Despite its stocky shape and short legs, it is capable of running 30 km/h (19 mph) over short distances.
//     The common hippopotamus inhabits rivers, lakes and mangrove swamps, where territorial bulls preside over a stretch of river and groups of five to thirty females and young. During the day, they remain cool by staying in the water or mud; reproduction and childbirth both occur in water. They emerge at dusk to graze on grasses. While hippopotamuses rest near each other in the water, grazing is a solitary activity and hippos are not territorial on land. The hippopotamus is among the most dangerous animals in the world as it is highly aggressive and unpredictable. They are threatened by habitat loss and poaching for their meat and ivory canine teeth.`,
//     type: 'PLAIN_TEXT',
//   }
//   nlpClient
//     .analyzeSyntax({ document: document })
//     .then((results) => {
//       const syntax = results[0];
//       console.log(JSON.stringify(syntax))
//     })
//     .catch((err) => {
//       console.error('ERROR:', err);
//     })
// }