# password-generator

## About

This Node.js script will generate a memorable and secure password for you to use. It uses the crypto package to generate a random number, and then randomly assembles a mixture of English words to create a long string which may be used as a password. Take all normal precautions surrounding password use!

***

## Instructions

This assumes you have Node installed on your machine. Clone down this repo, navigate to it, and run 

`node passwordGenerator.js`

from the command line. The script will log a string no less than 12 characters in length and no less than 4 words long.

***

## Credits

Created by Andrew Bloom

Idea borrowed from [Computerphile 'Diceware & Passwords'](https://www.youtube.com/watch?v=Pe_3cFuSw1E)

Word list taken from [dwyl/english-words](https://github.com/dwyl/english-words)

See also: [xkcd #936](https://xkcd.com/936/)
