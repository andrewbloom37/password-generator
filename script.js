const fs = require('fs');

const oldWords = require('./words_dictionary');

const newWords = Object.keys(JSON.parse(oldWords)).filter(w => w.length <= 10);

const obj = {};

newWords.forEach(v => {
  obj[v] = true;
});

const stringifiedNewWords = JSON.stringify(obj);

fs.writeFileSync('./new_words_dictionary.js', `module.exports = '${stringifiedNewWords}';`);

