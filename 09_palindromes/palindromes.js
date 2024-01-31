const palindromes = function (word) {
    word = word.toLowerCase();
    word = word.replaceAll(/[\s,.!]/g, '');
    let wordArray = Array.from(word);
    wordArray = wordArray.reverse();
    let wordRev = wordArray.join();
    wordRev = wordRev.replaceAll(/,/g, '');
    if (word === wordRev) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
