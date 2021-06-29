const wordlist = require('wordlist-english');
const englishWords = wordlist['english'];

function convert(number, index, keyLetters, arr, words) {
    // whole permutation
    if (index == number.length) {
        words.push(arr.join(''));
        return;
    }
    // for numbers 0 or 1 just return number
    if (number[index] == '0' || number[index] == '1') {
        arr[index] = number[index];
        convert(number, index + 1, keyLetters, arr, words);
    }
    // numbers 2 to 9 all permutations
    for (let i = 0; i < keyLetters[parseInt(number[index])].length; i++) {
        arr[index] = keyLetters[parseInt(number[index])][i];
        convert(number, index + 1, keyLetters, arr, words);
    }
    return;
}

exports.convertToWords = (req, res) => {
    const number = req.query.number;

    if (number.length === 0) {
        return res.send([]);
    }

    const keyLetters = [
        '',
        '', // key 1
        'abc',
        'def',
        'ghi',
        'jkl',
        'mno',
        'pqrs',
        'tuv',
        'wxyz', // key 9
    ];

    let arr = [];
    let words = [];

    convert(number, 0, keyLetters, arr, words);

    // filter only real english words
    //words = words.filter((word) => englishWords.includes(word));

    res.send(words);
};
