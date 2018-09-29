let exampleSentences = 
    [
      {
        title: "Sea Otters",
        owner: { "_id" : 3},
        sentences: 
          [
            {
              "text": {
                "content": "Many methods can remove caffeine from coffee, but all involve either soaking the green seeds in hot water (often called the \"Swiss water process\") or steaming them, then using a solvent to dissolve caffeine-containing oils."
              },
              "tokens": [
                {
                  "text": {
                    "content": "Many"
                  },
                  "partOfSpeech": {
                    "tag": "ADJ"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 1,
                    "label": "AMOD"
                  },
                  "lemma": "many",
                  "hoverable": true,
                  "hoverInfo": {
                    "score": 3,
                    "children": [
                      1
                    ]
                  }
                },
                {
                  "text": {
                    "content": "methods"
                  },
                  "partOfSpeech": {
                    "tag": "NOUN"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 3,
                    "label": "NSUBJ"
                  },
                  "lemma": "method",
                  "hoverable": true,
                  "hoverInfo": {
                    "parent": 0,
                    "score": 3,
                    "children": []
                  }
                },
                {
                  "text": {
                    "content": "can"
                  },
                  "partOfSpeech": {
                    "tag": "VERB"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 3,
                    "label": "AUX"
                  },
                  "lemma": "can"
                },
                {
                  "text": {
                    "content": "remove"
                  },
                  "partOfSpeech": {
                    "tag": "VERB"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 3,
                    "label": "ROOT"
                  },
                  "lemma": "remove",
                  "hoverable": true,
                  "hoverInfo": {
                    "score": 0.5,
                    "children": [
                      10
                    ]
                  }
                },
                {
                  "text": {
                    "content": "caffeine"
                  },
                  "partOfSpeech": {
                    "tag": "NOUN"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 3,
                    "label": "DOBJ"
                  },
                  "lemma": "caffeine",
                  "hoverable": true,
                  "hoverInfo": {
                    "score": 3,
                    "children": []
                  }
                },
                {
                  "text": {
                    "content": "from"
                  },
                  "partOfSpeech": {
                    "tag": "ADP"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 3,
                    "label": "PREP"
                  },
                  "lemma": "from"
                },
                {
                  "text": {
                    "content": "coffee"
                  },
                  "partOfSpeech": {
                    "tag": "NOUN"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 5,
                    "label": "POBJ"
                  },
                  "lemma": "coffee",
                  "hoverable": true,
                  "hoverInfo": {
                    "score": 3,
                    "children": []
                  }
                },
                {
                  "text": {
                    "content": ","
                  },
                  "partOfSpeech": {
                    "tag": "PUNCT"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 3,
                    "label": "P"
                  },
                  "lemma": ","
                },
                {
                  "text": {
                    "content": "but"
                  },
                  "partOfSpeech": {
                    "tag": "CONJ"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 3,
                    "label": "CC"
                  },
                  "lemma": "but"
                },
                {
                  "text": {
                    "content": "all"
                  },
                  "partOfSpeech": {
                    "tag": "DET"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 10,
                    "label": "NSUBJ"
                  },
                  "lemma": "all",
                  "hoverable": true,
                  "hoverInfo": {
                    "score": 3,
                    "children": []
                  }
                },
                {
                  "text": {
                    "content": "involve"
                  },
                  "partOfSpeech": {
                    "tag": "VERB"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 3,
                    "label": "CONJ"
                  },
                  "lemma": "involve",
                  "hoverable": true,
                  "hoverInfo": {
                    "parent": 3,
                    "score": 0.5,
                    "children": []
                  }
                },
                {
                  "text": {
                    "content": "either"
                  },
                  "partOfSpeech": {
                    "tag": "CONJ"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 12,
                    "label": "PRECONJ"
                  },
                  "lemma": "either"
                },
                {
                  "text": {
                    "content": "soaking"
                  },
                  "partOfSpeech": {
                    "tag": "VERB"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 10,
                    "label": "CCOMP"
                  },
                  "lemma": "soak",
                  "hoverable": true,
                  "hoverInfo": {
                    "score": 0.5,
                    "children": [
                      30
                    ]
                  }
                },
                {
                  "text": {
                    "content": "the"
                  },
                  "partOfSpeech": {
                    "tag": "DET"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 15,
                    "label": "DET"
                  },
                  "lemma": "the"
                },
                {
                  "text": {
                    "content": "green"
                  },
                  "partOfSpeech": {
                    "tag": "ADJ"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 15,
                    "label": "AMOD"
                  },
                  "lemma": "green",
                  "hoverable": true,
                  "hoverInfo": {
                    "score": 3,
                    "children": [
                      15
                    ]
                  }
                },
                {
                  "text": {
                    "content": "seeds"
                  },
                  "partOfSpeech": {
                    "tag": "NOUN"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 12,
                    "label": "DOBJ"
                  },
                  "lemma": "seed",
                  "hoverable": true,
                  "hoverInfo": {
                    "parent": 14,
                    "score": 3,
                    "children": []
                  }
                },
                {
                  "text": {
                    "content": "in"
                  },
                  "partOfSpeech": {
                    "tag": "ADP"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 15,
                    "label": "PREP"
                  },
                  "lemma": "in"
                },
                {
                  "text": {
                    "content": "hot"
                  },
                  "partOfSpeech": {
                    "tag": "ADJ"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 18,
                    "label": "AMOD"
                  },
                  "lemma": "hot",
                  "hoverable": true,
                  "hoverInfo": {
                    "score": 3,
                    "children": [
                      18
                    ]
                  }
                },
                {
                  "text": {
                    "content": "water"
                  },
                  "partOfSpeech": {
                    "tag": "NOUN"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 16,
                    "label": "POBJ"
                  },
                  "lemma": "water",
                  "hoverable": true,
                  "hoverInfo": {
                    "parent": 17,
                    "score": 3,
                    "children": []
                  }
                },
                {
                  "text": {
                    "content": "("
                  },
                  "partOfSpeech": {
                    "tag": "PUNCT"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 15,
                    "label": "P"
                  },
                  "lemma": "("
                },
                {
                  "text": {
                    "content": "often"
                  },
                  "partOfSpeech": {
                    "tag": "ADV"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 21,
                    "label": "ADVMOD"
                  },
                  "lemma": "often"
                },
                {
                  "text": {
                    "content": "called"
                  },
                  "partOfSpeech": {
                    "tag": "VERB"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 15,
                    "label": "VMOD"
                  },
                  "lemma": "call"
                },
                {
                  "text": {
                    "content": "the"
                  },
                  "partOfSpeech": {
                    "tag": "DET"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 26,
                    "label": "DET"
                  },
                  "lemma": "the"
                },
                {
                  "text": {
                    "content": "\""
                  },
                  "partOfSpeech": {
                    "tag": "PUNCT"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 26,
                    "label": "P"
                  },
                  "lemma": "\""
                },
                {
                  "text": {
                    "content": "Swiss"
                  },
                  "partOfSpeech": {
                    "tag": "ADJ"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 26,
                    "label": "AMOD"
                  },
                  "lemma": "swiss"
                },
                {
                  "text": {
                    "content": "water"
                  },
                  "partOfSpeech": {
                    "tag": "NOUN"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 26,
                    "label": "NN"
                  },
                  "lemma": "water",
                  "hoverable": true,
                  "hoverInfo": {
                    "score": 4,
                    "children": [
                      26
                    ]
                  }
                },
                {
                  "text": {
                    "content": "process"
                  },
                  "partOfSpeech": {
                    "tag": "NOUN"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 21,
                    "label": "ATTR"
                  },
                  "lemma": "process",
                  "hoverable": true,
                  "hoverInfo": {
                    "parent": 25,
                    "score": 4,
                    "children": []
                  }
                },
                {
                  "text": {
                    "content": "\""
                  },
                  "partOfSpeech": {
                    "tag": "PUNCT"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 26,
                    "label": "P"
                  },
                  "lemma": "\""
                },
                {
                  "text": {
                    "content": ")"
                  },
                  "partOfSpeech": {
                    "tag": "PUNCT"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 15,
                    "label": "P"
                  },
                  "lemma": ")"
                },
                {
                  "text": {
                    "content": "or"
                  },
                  "partOfSpeech": {
                    "tag": "CONJ"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 12,
                    "label": "CC"
                  },
                  "lemma": "or"
                },
                {
                  "text": {
                    "content": "steaming"
                  },
                  "partOfSpeech": {
                    "tag": "VERB"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 12,
                    "label": "CONJ"
                  },
                  "lemma": "steam",
                  "hoverable": true,
                  "hoverInfo": {
                    "parent": 12,
                    "score": 0.5,
                    "children": []
                  }
                },
                {
                  "text": {
                    "content": "them"
                  },
                  "partOfSpeech": {
                    "tag": "PRON"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 30,
                    "label": "DOBJ"
                  },
                  "lemma": "them",
                  "hoverable": true,
                  "hoverInfo": {
                    "score": 3,
                    "children": []
                  }
                },
                {
                  "text": {
                    "content": ","
                  },
                  "partOfSpeech": {
                    "tag": "PUNCT"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 12,
                    "label": "P"
                  },
                  "lemma": ","
                },
                {
                  "text": {
                    "content": "then"
                  },
                  "partOfSpeech": {
                    "tag": "ADV"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 12,
                    "label": "ADVMOD"
                  },
                  "lemma": "then"
                },
                {
                  "text": {
                    "content": "using"
                  },
                  "partOfSpeech": {
                    "tag": "VERB"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 12,
                    "label": "DEP"
                  },
                  "lemma": "use"
                },
                {
                  "text": {
                    "content": "a"
                  },
                  "partOfSpeech": {
                    "tag": "DET"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 36,
                    "label": "DET"
                  },
                  "lemma": "a"
                },
                {
                  "text": {
                    "content": "solvent"
                  },
                  "partOfSpeech": {
                    "tag": "NOUN"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 34,
                    "label": "DOBJ"
                  },
                  "lemma": "solvent",
                  "hoverable": true,
                  "hoverInfo": {
                    "score": 3,
                    "children": []
                  }
                },
                {
                  "text": {
                    "content": "to"
                  },
                  "partOfSpeech": {
                    "tag": "PRT"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 38,
                    "label": "AUX"
                  },
                  "lemma": "to"
                },
                {
                  "text": {
                    "content": "dissolve"
                  },
                  "partOfSpeech": {
                    "tag": "VERB"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 34,
                    "label": "XCOMP"
                  },
                  "lemma": "dissolve"
                },
                {
                  "text": {
                    "content": "caffeine"
                  },
                  "partOfSpeech": {
                    "tag": "NOUN"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 41,
                    "label": "NPADVMOD"
                  },
                  "lemma": "caffeine"
                },
                {
                  "text": {
                    "content": "-"
                  },
                  "partOfSpeech": {
                    "tag": "PUNCT"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 41,
                    "label": "P"
                  },
                  "lemma": "-"
                },
                {
                  "text": {
                    "content": "containing"
                  },
                  "partOfSpeech": {
                    "tag": "VERB"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 42,
                    "label": "AMOD"
                  },
                  "lemma": "contain",
                  "hoverable": true,
                  "hoverInfo": {
                    "score": 3,
                    "children": [
                      42
                    ]
                  }
                },
                {
                  "text": {
                    "content": "oils"
                  },
                  "partOfSpeech": {
                    "tag": "NOUN"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 38,
                    "label": "DOBJ"
                  },
                  "lemma": "oil",
                  "hoverable": true,
                  "hoverInfo": {
                    "parent": 41,
                    "score": 3,
                    "children": []
                  }
                },
                {
                  "text": {
                    "content": "."
                  },
                  "partOfSpeech": {
                    "tag": "PUNCT"
                  },
                  "dependencyEdge": {
                    "headTokenIndex": 3,
                    "label": "P"
                  },
                  "lemma": "."
                }
              ],
              "keyTokens": {},
              "score": 7.562024964283815,
              "hoverRoots": [
                0,
                3,
                4,
                6,
                9,
                12,
                14,
                17,
                25,
                31,
                36,
                41
              ],
              "chefsRecommendation": 25
            },
            { "text": { "content": "The largest bats are a few species of  Pteropus  megabats and the giant golden-crowned flying fox, ( Acerodon jubatus ), which can weigh 1.6 kilograms (3.5 lb) with a wingspan of 1.7 metres (5.6 ft)." }, "tokens": [{ "text": { "content": "The" }, "partOfSpeech": { "tag": "DET" }, "dependencyEdge": { "headTokenIndex": 2, "label": "DET" }, "lemma": "the" }, { "text": { "content": "largest" }, "partOfSpeech": { "tag": "ADJ" }, "dependencyEdge": { "headTokenIndex": 2, "label": "AMOD" }, "lemma": "large", "hoverable": true, "hoverInfo": { "score": 3, "children": [2] } }, { "text": { "content": "bats" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 3, "label": "NSUBJ" }, "lemma": "bat", "hoverable": true, "hoverInfo": { "parent": 1, "score": 3, "children": [] } }, { "text": { "content": "are" }, "partOfSpeech": { "tag": "VERB" }, "dependencyEdge": { "headTokenIndex": 3, "label": "ROOT" }, "lemma": "be" }, { "text": { "content": "a" }, "partOfSpeech": { "tag": "DET" }, "dependencyEdge": { "headTokenIndex": 6, "label": "DET" }, "lemma": "a" }, { "text": { "content": "few" }, "partOfSpeech": { "tag": "ADJ" }, "dependencyEdge": { "headTokenIndex": 6, "label": "AMOD" }, "lemma": "few", "hoverable": true, "hoverInfo": { "score": 4, "children": [6] } }, { "text": { "content": "species" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 3, "label": "ATTR" }, "lemma": "species", "hoverable": true, "hoverInfo": { "parent": 5, "score": 4, "children": [] } }, { "text": { "content": "of" }, "partOfSpeech": { "tag": "ADP" }, "dependencyEdge": { "headTokenIndex": 6, "label": "PREP" }, "lemma": "of" }, { "text": { "content": "Pteropus" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 9, "label": "NN" }, "lemma": "pteropus", "hoverable": true, "hoverInfo": { "score": 1.5, "children": [9] } }, { "text": { "content": "megabats" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 7, "label": "POBJ" }, "lemma": "megabat", "hoverable": true, "hoverInfo": { "parent": 8, "score": 1.5, "children": [16] } }, { "text": { "content": "and" }, "partOfSpeech": { "tag": "CONJ" }, "dependencyEdge": { "headTokenIndex": 9, "label": "CC" }, "lemma": "and" }, { "text": { "content": "the" }, "partOfSpeech": { "tag": "DET" }, "dependencyEdge": { "headTokenIndex": 17, "label": "DET" }, "lemma": "the" }, { "text": { "content": "giant" }, "partOfSpeech": { "tag": "ADJ" }, "dependencyEdge": { "headTokenIndex": 17, "label": "AMOD" }, "lemma": "giant" }, { "text": { "content": "golden" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 15, "label": "NPADVMOD" }, "lemma": "golden" }, { "text": { "content": "-" }, "partOfSpeech": { "tag": "PUNCT" }, "dependencyEdge": { "headTokenIndex": 15, "label": "P" }, "lemma": "-" }, { "text": { "content": "crowned" }, "partOfSpeech": { "tag": "VERB" }, "dependencyEdge": { "headTokenIndex": 17, "label": "AMOD" }, "lemma": "crown" }, { "text": { "content": "flying" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 17, "label": "NN" }, "lemma": "flying", "hoverable": true, "hoverInfo": { "parent": 9, "score": 0.5, "children": [17] } }, { "text": { "content": "fox" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 9, "label": "CONJ" }, "lemma": "fox", "hoverable": true, "hoverInfo": { "parent": 16, "score": 0.5, "children": [] } }, { "text": { "content": "," }, "partOfSpeech": { "tag": "PUNCT" }, "dependencyEdge": { "headTokenIndex": 17, "label": "P" }, "lemma": "," }, { "text": { "content": "(" }, "partOfSpeech": { "tag": "PUNCT" }, "dependencyEdge": { "headTokenIndex": 21, "label": "P" }, "lemma": "(" }, { "text": { "content": "Acerodon" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 21, "label": "NN" }, "lemma": "acerodon", "hoverable": true, "hoverInfo": { "score": 3, "children": [21] } }, { "text": { "content": "jubatus" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 17, "label": "APPOS" }, "lemma": "jubatus", "hoverable": true, "hoverInfo": { "parent": 20, "score": 3, "children": [] } }, { "text": { "content": ")" }, "partOfSpeech": { "tag": "PUNCT" }, "dependencyEdge": { "headTokenIndex": 21, "label": "P" }, "lemma": ")" }, { "text": { "content": "," }, "partOfSpeech": { "tag": "PUNCT" }, "dependencyEdge": { "headTokenIndex": 17, "label": "P" }, "lemma": "," }, { "text": { "content": "which" }, "partOfSpeech": { "tag": "DET" }, "dependencyEdge": { "headTokenIndex": 26, "label": "NSUBJ" }, "lemma": "which", "hoverable": true, "hoverInfo": { "score": 3, "children": [] } }, { "text": { "content": "can" }, "partOfSpeech": { "tag": "VERB" }, "dependencyEdge": { "headTokenIndex": 26, "label": "AUX" }, "lemma": "can" }, { "text": { "content": "weigh" }, "partOfSpeech": { "tag": "VERB" }, "dependencyEdge": { "headTokenIndex": 17, "label": "RCMOD" }, "lemma": "weigh" }, { "text": { "content": "1.6" }, "partOfSpeech": { "tag": "NUM" }, "dependencyEdge": { "headTokenIndex": 28, "label": "NUM" }, "lemma": "1.6" }, { "text": { "content": "kilograms" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 26, "label": "DOBJ" }, "lemma": "kilogram", "hoverable": true, "hoverInfo": { "score": 3, "children": [] } }, { "text": { "content": "(" }, "partOfSpeech": { "tag": "PUNCT" }, "dependencyEdge": { "headTokenIndex": 28, "label": "P" }, "lemma": "(" }, { "text": { "content": "3.5" }, "partOfSpeech": { "tag": "NUM" }, "dependencyEdge": { "headTokenIndex": 31, "label": "NUM" }, "lemma": "3.5" }, { "text": { "content": "lb" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 28, "label": "APPOS" }, "lemma": "lb", "hoverable": true, "hoverInfo": { "score": 3, "children": [] } }, { "text": { "content": ")" }, "partOfSpeech": { "tag": "PUNCT" }, "dependencyEdge": { "headTokenIndex": 28, "label": "P" }, "lemma": ")" }, { "text": { "content": "with" }, "partOfSpeech": { "tag": "ADP" }, "dependencyEdge": { "headTokenIndex": 26, "label": "PREP" }, "lemma": "with" }, { "text": { "content": "a" }, "partOfSpeech": { "tag": "DET" }, "dependencyEdge": { "headTokenIndex": 35, "label": "DET" }, "lemma": "a" }, { "text": { "content": "wingspan" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 33, "label": "POBJ" }, "lemma": "wingspan", "hoverable": true, "hoverInfo": { "score": 3, "children": [] } }, { "text": { "content": "of" }, "partOfSpeech": { "tag": "ADP" }, "dependencyEdge": { "headTokenIndex": 35, "label": "PREP" }, "lemma": "of" }, { "text": { "content": "1.7" }, "partOfSpeech": { "tag": "NUM" }, "dependencyEdge": { "headTokenIndex": 38, "label": "NUM" }, "lemma": "1.7" }, { "text": { "content": "metres" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 36, "label": "POBJ" }, "lemma": "metre", "hoverable": true, "hoverInfo": { "score": 3, "children": [] } }, { "text": { "content": "(" }, "partOfSpeech": { "tag": "PUNCT" }, "dependencyEdge": { "headTokenIndex": 38, "label": "P" }, "lemma": "(" }, { "text": { "content": "5.6" }, "partOfSpeech": { "tag": "NUM" }, "dependencyEdge": { "headTokenIndex": 41, "label": "NUM" }, "lemma": "5.6" }, { "text": { "content": "ft" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 38, "label": "APPOS" }, "lemma": "ft", "hoverable": true, "hoverInfo": { "score": 3, "children": [] } }, { "text": { "content": ")" }, "partOfSpeech": { "tag": "PUNCT" }, "dependencyEdge": { "headTokenIndex": 38, "label": "P" }, "lemma": ")" }, { "text": { "content": "." }, "partOfSpeech": { "tag": "PUNCT" }, "dependencyEdge": { "headTokenIndex": 3, "label": "P" }, "lemma": "." }], "keyTokens": {}, "score": 6.613527952759306, "hoverRoots": [1, 5, 8, 20, 24, 28, 31, 35, 38, 41], "chefsRecommendation": 5 }, { "text": { "content": "\"          Bats  are mammals of the order  Chiroptera ; with their forelimbs adapted as wings, they are the only mammals naturally capable of true and sustained flight." }, "tokens": [{ "text": { "content": "\"" }, "partOfSpeech": { "tag": "PUNCT" }, "dependencyEdge": { "headTokenIndex": 2, "label": "P" }, "lemma": "\"" }, { "text": { "content": "Bats" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 2, "label": "NSUBJ" }, "lemma": "bat", "hoverable": true, "hoverInfo": { "score": 3, "children": [] } }, { "text": { "content": "are" }, "partOfSpeech": { "tag": "VERB" }, "dependencyEdge": { "headTokenIndex": 2, "label": "ROOT" }, "lemma": "be" }, { "text": { "content": "mammals" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 2, "label": "ATTR" }, "lemma": "mammal", "hoverable": true, "hoverInfo": { "score": 4, "children": [] } }, { "text": { "content": "of" }, "partOfSpeech": { "tag": "ADP" }, "dependencyEdge": { "headTokenIndex": 3, "label": "PREP" }, "lemma": "of" }, { "text": { "content": "the" }, "partOfSpeech": { "tag": "DET" }, "dependencyEdge": { "headTokenIndex": 6, "label": "DET" }, "lemma": "the" }, { "text": { "content": "order" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 4, "label": "POBJ" }, "lemma": "order", "hoverable": true, "hoverInfo": { "score": 3, "children": [] } }, { "text": { "content": "Chiroptera" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 6, "label": "APPOS" }, "lemma": "chiroptera", "hoverable": true, "hoverInfo": { "score": 3, "children": [] } }, { "text": { "content": ";" }, "partOfSpeech": { "tag": "PUNCT" }, "dependencyEdge": { "headTokenIndex": 2, "label": "P" }, "lemma": ";" }, { "text": { "content": "with" }, "partOfSpeech": { "tag": "ADP" }, "dependencyEdge": { "headTokenIndex": 17, "label": "PREP" }, "lemma": "with" }, { "text": { "content": "their" }, "partOfSpeech": { "tag": "PRON" }, "dependencyEdge": { "headTokenIndex": 11, "label": "POSS" }, "lemma": "their" },
            { "text": { "content": "forelimbs" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 9, "label": "POBJ" }, "lemma": "forelimb", "hoverable": true, "hoverInfo": { "score": 3, "children": [] } }, { "text": { "content": "adapted" }, "partOfSpeech": { "tag": "VERB" }, "dependencyEdge": { "headTokenIndex": 11, "label": "VMOD" }, "lemma": "adapt" }, { "text": { "content": "as" }, "partOfSpeech": { "tag": "ADP" }, "dependencyEdge": { "headTokenIndex": 12, "label": "PREP" }, "lemma": "as" }, { "text": { "content": "wings" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 13, "label": "POBJ" }, "lemma": "wing", "hoverable": true, "hoverInfo": { "score": 3, "children": [] } }, { "text": { "content": "," }, "partOfSpeech": { "tag": "PUNCT" }, "dependencyEdge": { "headTokenIndex": 17, "label": "P" }, "lemma": "," }, { "text": { "content": "they" }, "partOfSpeech": { "tag": "PRON" }, "dependencyEdge": { "headTokenIndex": 17, "label": "NSUBJ" }, "lemma": "they", "hoverable": true, "hoverInfo": { "score": 3, "children": [] } }, { "text": { "content": "are" }, "partOfSpeech": { "tag": "VERB" }, "dependencyEdge": { "headTokenIndex": 2, "label": "PARATAXIS" }, "lemma": "be" }, { "text": { "content": "the" }, "partOfSpeech": { "tag": "DET" }, "dependencyEdge": { "headTokenIndex": 20, "label": "DET" }, "lemma": "the" }, { "text": { "content": "only" }, "partOfSpeech": { "tag": "ADJ" }, "dependencyEdge": { "headTokenIndex": 20, "label": "AMOD" }, "lemma": "only", "hoverable": true, "hoverInfo": { "score": 4, "children": [20] } }, { "text": { "content": "mammals" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 17, "label": "ATTR" }, "lemma": "mammal", "hoverable": true, "hoverInfo": { "parent": 19, "score": 4, "children": [] } }, { "text": { "content": "naturally" }, "partOfSpeech": { "tag": "ADV" }, "dependencyEdge": { "headTokenIndex": 22, "label": "ADVMOD" }, "lemma": "naturally" }, { "text": { "content": "capable" }, "partOfSpeech": { "tag": "ADJ" }, "dependencyEdge": { "headTokenIndex": 20, "label": "AMOD" }, "lemma": "capable" }, { "text": { "content": "of" }, "partOfSpeech": { "tag": "ADP" }, "dependencyEdge": { "headTokenIndex": 22, "label": "PREP" }, "lemma": "of" }, { "text": { "content": "true" }, "partOfSpeech": { "tag": "ADJ" }, "dependencyEdge": { "headTokenIndex": 27, "label": "AMOD" }, "lemma": "true", "hoverable": true, "hoverInfo": { "score": 0.5, "children": [26] } }, { "text": { "content": "and" }, "partOfSpeech": { "tag": "CONJ" }, "dependencyEdge": { "headTokenIndex": 24, "label": "CC" }, "lemma": "and" }, { "text": { "content": "sustained" }, "partOfSpeech": { "tag": "ADJ" }, "dependencyEdge": { "headTokenIndex": 24, "label": "CONJ" }, "lemma": "sustained", "hoverable": true, "hoverInfo": { "parent": 24, "score": 0.5, "children": [] } }, { "text": { "content": "flight" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 23, "label": "POBJ" }, "lemma": "flight", "hoverable": true, "hoverInfo": { "score": 3, "children": [] } }, { "text": { "content": "." }, "partOfSpeech": { "tag": "PUNCT" }, "dependencyEdge": { "headTokenIndex": 2, "label": "P" }, "lemma": "." }], "keyTokens": {}, "score": 6.4837803793611535, "hoverRoots": [1, 3, 6, 7, 11, 14, 16, 19, 24, 27], "chefsRecommendation": 3 }, { "text": { "content": "Many moth species have a hearing organ called a tympanum, which responds to an incoming bat signal by causing the moth's flight muscles to twitch erratically, sending the moth into random evasive manoeuvres." }, "tokens": [{ "text": { "content": "Many" }, "partOfSpeech": { "tag": "ADJ" }, "dependencyEdge": { "headTokenIndex": 2, "label": "AMOD" }, "lemma": "many" }, { "text": { "content": "moth" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 2, "label": "NN" }, "lemma": "moth", "hoverable": true, "hoverInfo": { "score": 3, "children": [2] } }, { "text": { "content": "species" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 3, "label": "NSUBJ" }, "lemma": "species", "hoverable": true, "hoverInfo": { "parent": 1, "score": 3, "children": [] } }, { "text": { "content": "have" }, "partOfSpeech": { "tag": "VERB" }, "dependencyEdge": { "headTokenIndex": 3, "label": "ROOT" }, "lemma": "have" }, { "text": { "content": "a" }, "partOfSpeech": { "tag": "DET" }, "dependencyEdge": { "headTokenIndex": 6, "label": "DET" }, "lemma": "a" }, { "text": { "content": "hearing" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 6, "label": "NN" }, "lemma": "hearing", "hoverable": true, "hoverInfo": { "score": 3, "children": [6] } }, { "text": { "content": "organ" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 3, "label": "DOBJ" }, "lemma": "organ", "hoverable": true, "hoverInfo": { "parent": 5, "score": 3, "children": [] } }, { "text": { "content": "called" }, "partOfSpeech": { "tag": "VERB" }, "dependencyEdge": { "headTokenIndex": 6, "label": "VMOD" }, "lemma": "call" }, { "text": { "content": "a" }, "partOfSpeech": { "tag": "DET" }, "dependencyEdge": { "headTokenIndex": 9, "label": "DET" }, "lemma": "a" }, { "text": { "content": "tympanum" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 7, "label": "ATTR" }, "lemma": "tympanum", "hoverable": true, "hoverInfo": { "score": 4, "children": [] } }, { "text": { "content": "," }, "partOfSpeech": { "tag": "PUNCT" }, "dependencyEdge": { "headTokenIndex": 6, "label": "P" }, "lemma": "," }, { "text": { "content": "which" }, "partOfSpeech": { "tag": "DET" }, "dependencyEdge": { "headTokenIndex": 12, "label": "NSUBJ" }, "lemma": "which", "hoverable": true, "hoverInfo": { "score": 3, "children": [] } }, { "text": { "content": "responds" }, "partOfSpeech": { "tag": "VERB" }, "dependencyEdge": { "headTokenIndex": 6, "label": "RCMOD" }, "lemma": "respond" }, { "text": { "content": "to" }, "partOfSpeech": { "tag": "ADP" }, "dependencyEdge": { "headTokenIndex": 12, "label": "PREP" }, "lemma": "to" }, { "text": { "content": "an" }, "partOfSpeech": { "tag": "DET" }, "dependencyEdge": { "headTokenIndex": 17, "label": "DET" }, "lemma": "an" }, { "text": { "content": "incoming" }, "partOfSpeech": { "tag": "ADJ" }, "dependencyEdge": { "headTokenIndex": 17, "label": "AMOD" }, "lemma": "incoming" }, { "text": { "content": "bat" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 17, "label": "NN" }, "lemma": "bat", "hoverable": true, "hoverInfo": { "score": 3, "children": [17] } }, { "text": { "content": "signal" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 13, "label": "POBJ" }, "lemma": "signal", "hoverable": true, "hoverInfo": { "parent": 16, "score": 3, "children": [] } }, { "text": { "content": "by" }, "partOfSpeech": { "tag": "ADP" }, "dependencyEdge": { "headTokenIndex": 12, "label": "PREP" }, "lemma": "by" }, { "text": { "content": "causing" }, "partOfSpeech": { "tag": "VERB" }, "dependencyEdge": { "headTokenIndex": 18, "label": "PCOMP" }, "lemma": "cause" }, { "text": { "content": "the" }, "partOfSpeech": { "tag": "DET" }, "dependencyEdge": { "headTokenIndex": 21, "label": "DET" }, "lemma": "the" }, { "text": { "content": "moth" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 24, "label": "POSS" }, "lemma": "moth" }, { "text": { "content": "'s" }, "partOfSpeech": { "tag": "PRT" }, "dependencyEdge": { "headTokenIndex": 21, "label": "PS" }, "lemma": "'s" }, { "text": { "content": "flight" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 24, "label": "NN" }, "lemma": "flight", "hoverable": true, "hoverInfo": { "score": 3, "children": [24] } }, { "text": { "content": "muscles" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 26, "label": "NSUBJ" }, "lemma": "muscle", "hoverable": true, "hoverInfo": { "parent": 23, "score": 3, "children": [] } }, { "text": { "content": "to" }, "partOfSpeech": { "tag": "PRT" }, "dependencyEdge": { "headTokenIndex": 26, "label": "AUX" }, "lemma": "to" }, { "text": { "content": "twitch" }, "partOfSpeech": { "tag": "VERB" }, "dependencyEdge": { "headTokenIndex": 19, "label": "XCOMP" }, "lemma": "twitch" }, { "text": { "content": "erratically" }, "partOfSpeech": { "tag": "ADV" }, "dependencyEdge": { "headTokenIndex": 26, "label": "ADVMOD" }, "lemma": "erratically" }, { "text": { "content": "," }, "partOfSpeech": { "tag": "PUNCT" }, "dependencyEdge": { "headTokenIndex": 26, "label": "P" }, "lemma": "," }, { "text": { "content": "sending" }, "partOfSpeech": { "tag": "VERB" }, "dependencyEdge": { "headTokenIndex": 26, "label": "XCOMP" }, "lemma": "send" }, { "text": { "content": "the" }, "partOfSpeech": { "tag": "DET" }, "dependencyEdge": { "headTokenIndex": 31, "label": "DET" }, "lemma": "the" }, { "text": { "content": "moth" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 29, "label": "DOBJ" }, "lemma": "moth", "hoverable": true, "hoverInfo": { "score": 3, "children": [] } }, { "text": { "content": "into" }, "partOfSpeech": { "tag": "ADP" }, "dependencyEdge": { "headTokenIndex": 29, "label": "PREP" }, "lemma": "into" }, { "text": { "content": "random" }, "partOfSpeech": { "tag": "ADJ" }, "dependencyEdge": { "headTokenIndex": 35, "label": "AMOD" }, "lemma": "random" }, { "text": { "content": "evasive" }, "partOfSpeech": { "tag": "ADJ" }, "dependencyEdge": { "headTokenIndex": 35, "label": "AMOD" }, "lemma": "evasive", "hoverable": true, "hoverInfo": { "score": 3, "children": [35] } }, { "text": { "content": "manoeuvres" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 32, "label": "POBJ" }, "lemma": "manoeuvre", "hoverable": true, "hoverInfo": { "parent": 34, "score": 3, "children": [] } }, { "text": { "content": "." }, "partOfSpeech": { "tag": "PUNCT" }, "dependencyEdge": { "headTokenIndex": 3, "label": "P" }, "lemma": "." }], "keyTokens": {}, "score": 6.452778919225553, "hoverRoots": [1, 5, 9, 11, 16, 23, 31, 34], "chefsRecommendation": 9 }, { "text": { "content": "Mexican free-tailed bats are one of the few species to \"sing\" like birds." }, "tokens": [{ "text": { "content": "Mexican" }, "partOfSpeech": { "tag": "ADJ" }, "dependencyEdge": { "headTokenIndex": 4, "label": "AMOD" }, "lemma": "mexican" }, { "text": { "content": "free" }, "partOfSpeech": { "tag": "ADJ" }, "dependencyEdge": { "headTokenIndex": 3, "label": "DEP" }, "lemma": "free" }, { "text": { "content": "-" }, "partOfSpeech": { "tag": "PUNCT" }, "dependencyEdge": { "headTokenIndex": 3, "label": "P" }, "lemma": "-" }, { "text": { "content": "tailed" }, "partOfSpeech": { "tag": "VERB" }, "dependencyEdge": { "headTokenIndex": 4, "label": "AMOD" }, "lemma": "tail", "hoverable": true, "hoverInfo": { "score": 3, "children": [4] } }, { "text": { "content": "bats" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 5, "label": "NSUBJ" }, "lemma": "bat", "hoverable": true, "hoverInfo": { "parent": 3, "score": 3, "children": [] } }, { "text": { "content": "are" }, "partOfSpeech": { "tag": "VERB" }, "dependencyEdge": { "headTokenIndex": 5, "label": "ROOT" }, "lemma": "be" }, { "text": { "content": "one" }, "partOfSpeech": { "tag": "NUM" }, "dependencyEdge": { "headTokenIndex": 5, "label": "ATTR" }, "lemma": "one", "hoverable": true, "hoverInfo": { "score": 4, "children": [] } }, { "text": { "content": "of" }, "partOfSpeech": { "tag": "ADP" }, "dependencyEdge": { "headTokenIndex": 6, "label": "PREP" }, "lemma": "of" }, { "text": { "content": "the" }, "partOfSpeech": { "tag": "DET" }, "dependencyEdge": { "headTokenIndex": 10, "label": "DET" }, "lemma": "the" }, { "text": { "content": "few" }, "partOfSpeech": { "tag": "ADJ" }, "dependencyEdge": { "headTokenIndex": 10, "label": "AMOD" }, "lemma": "few", "hoverable": true, "hoverInfo": { "score": 3, "children": [10] } }, { "text": { "content": "species" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 7, "label": "POBJ" }, "lemma": "species", "hoverable": true, "hoverInfo": { "parent": 9, "score": 3, "children": [] } }, { "text": { "content": "to" }, "partOfSpeech": { "tag": "PRT" }, "dependencyEdge": { "headTokenIndex": 13, "label": "AUX" }, "lemma": "to" }, { "text": { "content": "\"" }, "partOfSpeech": { "tag": "PUNCT" }, "dependencyEdge": { "headTokenIndex": 13, "label": "P" }, "lemma": "\"" }, { "text": { "content": "sing" }, "partOfSpeech": { "tag": "VERB" }, "dependencyEdge": { "headTokenIndex": 10, "label": "VMOD" }, "lemma": "sing" }, { "text": { "content": "\"" }, "partOfSpeech": { "tag": "PUNCT" }, "dependencyEdge": { "headTokenIndex": 13, "label": "P" }, "lemma": "\"" }, { "text": { "content": "like" }, "partOfSpeech": { "tag": "ADP" }, "dependencyEdge": { "headTokenIndex": 13, "label": "PREP" }, "lemma": "like" }, { "text": { "content": "birds" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 15, "label": "POBJ" }, "lemma": "bird", "hoverable": true, "hoverInfo": { "score": 3, "children": [] } }, { "text": { "content": "." }, "partOfSpeech": { "tag": "PUNCT" }, "dependencyEdge": { "headTokenIndex": 5, "label": "P" }, "lemma": "." }], "keyTokens": {}, "score": 6.310828399976012, "hoverRoots": [3, 6, 9, 16], "chefsRecommendation": 6 }, { "text": { "content": "Wings and flight     Bats are the only mammals capable of sustained flight, as opposed to gliding, as in the flying squirrel." }, "tokens": [{ "text": { "content": "Wings" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 4, "label": "NSUBJ" }, "lemma": "wing", "hoverable": true, "hoverInfo": { "score": 1.5, "children": [2] } }, { "text": { "content": "and" }, "partOfSpeech": { "tag": "CONJ" }, "dependencyEdge": { "headTokenIndex": 0, "label": "CC" }, "lemma": "and" }, { "text": { "content": "flight" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 3, "label": "NN" }, "lemma": "flight", "hoverable": true, "hoverInfo": { "parent": 0, "score": 0.5, "children": [3] } }, { "text": { "content": "Bats" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 0, "label": "CONJ" }, "lemma": "bat", "hoverable": true, "hoverInfo": { "parent": 2, "score": 0.5, "children": [] } }, { "text": { "content": "are" }, "partOfSpeech": { "tag": "VERB" }, "dependencyEdge": { "headTokenIndex": 4, "label": "ROOT" }, "lemma": "be" }, { "text": { "content": "the" }, "partOfSpeech": { "tag": "DET" }, "dependencyEdge": { "headTokenIndex": 7, "label": "DET" }, "lemma": "the" }, { "text": { "content": "only" }, "partOfSpeech": { "tag": "ADJ" }, "dependencyEdge": { "headTokenIndex": 7, "label": "AMOD" }, "lemma": "only", "hoverable": true, "hoverInfo": { "score": 4, "children": [7] } }, { "text": { "content": "mammals" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 4, "label": "ATTR" }, "lemma": "mammal", "hoverable": true, "hoverInfo": { "parent": 6, "score": 4, "children": [] } }, { "text": { "content": "capable" }, "partOfSpeech": { "tag": "ADJ" }, "dependencyEdge": { "headTokenIndex": 7, "label": "AMOD" }, "lemma": "capable" }, { "text": { "content": "of" }, "partOfSpeech": { "tag": "ADP" }, "dependencyEdge": { "headTokenIndex": 8, "label": "PREP" }, "lemma": "of" }, { "text": { "content": "sustained" }, "partOfSpeech": { "tag": "ADJ" }, "dependencyEdge": { "headTokenIndex": 11, "label": "AMOD" }, "lemma": "sustained", "hoverable": true, "hoverInfo": { "score": 3, "children": [11] } }, { "text": { "content": "flight" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 9, "label": "POBJ" }, "lemma": "flight", "hoverable": true, "hoverInfo": { "parent": 10, "score": 3, "children": [] } }, { "text": { "content": "," }, "partOfSpeech": { "tag": "PUNCT" }, "dependencyEdge": { "headTokenIndex": 4, "label": "P" }, "lemma": "," }, { "text": { "content": "as" }, "partOfSpeech": { "tag": "ADP" }, "dependencyEdge": { "headTokenIndex": 14, "label": "MARK" }, "lemma": "as" }, { "text": { "content": "opposed" }, "partOfSpeech": { "tag": "VERB" }, "dependencyEdge": { "headTokenIndex": 4, "label": "ADVCL" }, "lemma": "oppose" }, { "text": { "content": "to" }, "partOfSpeech": { "tag": "ADP" }, "dependencyEdge": { "headTokenIndex": 14, "label": "PREP" }, "lemma": "to" }, { "text": { "content": "gliding" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 15, "label": "POBJ" }, "lemma": "gliding", "hoverable": true, "hoverInfo": { "score": 3, "children": [] } }, { "text": { "content": "," }, "partOfSpeech": { "tag": "PUNCT" }, "dependencyEdge": { "headTokenIndex": 14, "label": "P" }, "lemma": "," }, { "text": { "content": "as" }, "partOfSpeech": { "tag": "ADP" }, "dependencyEdge": { "headTokenIndex": 14, "label": "PREP" }, "lemma": "as" }, { "text": { "content": "in" }, "partOfSpeech": { "tag": "ADP" }, "dependencyEdge": { "headTokenIndex": 18, "label": "PCOMP" }, "lemma": "in" }, { "text": { "content": "the" }, "partOfSpeech": { "tag": "DET" }, "dependencyEdge": { "headTokenIndex": 22, "label": "DET" }, "lemma": "the" }, { "text": { "content": "flying" }, "partOfSpeech": { "tag": "VERB" }, "dependencyEdge": { "headTokenIndex": 22, "label": "AMOD" }, "lemma": "fly", "hoverable": true, "hoverInfo": { "score": 3, "children": [22] } }, { "text": { "content": "squirrel" }, "partOfSpeech": { "tag": "NOUN" }, "dependencyEdge": { "headTokenIndex": 19, "label": "POBJ" }, "lemma": "squirrel", "hoverable": true, "hoverInfo": { "parent": 21, "score": 3, "children": [] } }, { "text": { "content": "." }, "partOfSpeech": { "tag": "PUNCT" }, "dependencyEdge": { "headTokenIndex": 4, "label": "P" }, "lemma": "." }], "keyTokens": {}, "score": 6.220955972767602, "hoverRoots": [0, 6, 10, 16, 21], "chefsRecommendation": 6 }
          ]
      }]