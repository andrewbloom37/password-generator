#!/usr/bin/env node
const crypto = require('crypto');

const words = Object.keys(require('./words_dictionary.json'));

const MAX_32_U_INT = 4294967296;
const cryptographicallyRandomNumber = () =>
  crypto.randomBytes(256).readUInt32LE() / MAX_32_U_INT;

const validPosition = arr =>
  Math.round(cryptographicallyRandomNumber() * arr.length);

const randomWord = arr => arr[validPosition(arr)];

const toProperCase = word =>
  word.split('').map((v, i) => i === 0 ? v.toUpperCase() : v).join('');

const createPasswordArr = (strArr = []) =>
  (strArr.join('').length < 12 || strArr.length < 4
    ? createPasswordArr([...strArr, randomWord(words)])
    : strArr);

const createPassword = () =>
  createPasswordArr().map(toProperCase).join('');

console.log(createPassword());
