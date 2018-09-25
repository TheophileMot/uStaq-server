const request = require("request");
const strip = require("strip")


module.exports = function makeApiHelpers() {
  return {
    
    // returns text of full Wikipedia page -- plain text
    getWikiPage: (query) => {
      const options = { method: 'GET',
        url: 'https://en.wikipedia.org/w//api.php',
        qs: 
        { format: 'json',
          action: 'query',
          prop: 'extracts',
          exlimit: 'max',
          redirects: 'true',
          titles: query 
          }
        };
      return new Promise(function(resolve, reject) {
        let wikiPage = request(options, function (error, response, body) {
          if (error) {
            reject(error)
          } 
          let result = JSON.parse(body)
          let pageId = Object.keys(result.query.pages)[0]
          let usableText = strip(JSON.stringify(result.query.pages[pageId].extract))
          resolve(usableText)
          })
      })
    }
  }
}
