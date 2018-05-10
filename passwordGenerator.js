const crypto = require('crypto');

const words = Object.keys(JSON.parse(require('./words_dictionary')));

const max32UInt = 4294967296;
const cryptoRando = () => crypto.randomBytes(256).readUInt32LE() / max32UInt;

const randomWord = arr => arr[Math.round(cryptoRando() * arr.length)];
const randomNumber = () => String(Math.floor(cryptoRando() * 10));
const coinFlip = () => Math.round(cryptoRando());

const createPassword = strArr => (strArr.join('').length < 24 ? createPassword([...strArr, (coinFlip() ? randomWord(words) : randomNumber())]) : strArr);

// only side-effect:
console.log(createPassword(['']).map(e => e.split('').map((v, i) => i === 0 ? v.toUpperCase() : v).join('')).join(''));
