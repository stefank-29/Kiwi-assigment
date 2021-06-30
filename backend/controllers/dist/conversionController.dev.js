"use strict";

var wordlist = require('wordlist-english');

var englishWords = wordlist['english'];

function convert(number, index, keyLetters, arr, words) {
  // whole permutation
  if (index == number.length) {
    words.push(arr.join(''));
    return;
  } // for numbers 0 or 1 just return number


  if (number[index] == '0' || number[index] == '1') {
    arr[index] = number[index];
    convert(number, index + 1, keyLetters, arr, words);
  } // numbers 2 to 9 all permutations


  for (var i = 0; i < keyLetters[parseInt(number[index])].length; i++) {
    arr[index] = keyLetters[parseInt(number[index])][i];
    convert(number, index + 1, keyLetters, arr, words);
  }

  return;
}

exports.convertToWords = function (req, res) {
  var number = req.query.number;
  var filter = req.query.filter;
  console.log(filter);

  if (number.length === 0) {
    return res.send([]);
  }

  var keyLetters = ['', '', // key 1
  'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz' // key 9
  ];
  var arr = [];
  var words = [];
  convert(number, 0, keyLetters, arr, words); // filter only real english words

  if (filter == 'true') {
    words = words.filter(function (word) {
      return englishWords.includes(word);
    });
  }

  res.send(words);
};