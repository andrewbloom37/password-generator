#!/usr/bin/env node
const crypto = require('crypto');

const words = require('./words.json');

const MAX_32_U_INT = 4294967296;
const getCryptographicallyRandomNumber = () =>
  crypto.randomBytes(256).readUInt32LE() / MAX_32_U_INT;

const getValidPosition = () =>
  Math.floor(getCryptographicallyRandomNumber() * words.length);

const getRandomWord = () => words[getValidPosition()];

const toProperCase = word =>
  word.split('').map((v, i) => i === 0 ? v.toUpperCase() : v).join('');

const createPasswordArr = (strArr = []) =>
  (strArr.length < 4 || strArr.join('').length < 12
    ? createPasswordArr([...strArr, getRandomWord()])
    : strArr);

const createPassword = () =>
  createPasswordArr().map(toProperCase).join('');

console.log(createPassword());
