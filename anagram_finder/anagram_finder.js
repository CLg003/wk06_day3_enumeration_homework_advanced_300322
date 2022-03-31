const AnagramFinder = function (word) {
    this.word = word;
}

// Given a word and an array of other words you should be able to filter the array, leaving only the anagrams of the word in question in the array.

// Check the possible anagrams are same length as word
AnagramFinder.prototype.compareLength = function(otherWords) {
    const equalLengthWords = otherWords.filter(otherWord => otherWord.length === this.word.length);
    return equalLengthWords;
}

// Check if any of the possible anagrams are actually the same as the word
AnagramFinder.prototype.wordsNotSame = function(otherWords) {
    const uniqueWords = otherWords.filter(equalWord => equalWord.toLowerCase() != this.word.toLowerCase());
    return uniqueWords;
}

// Call word length and same word functions and then check all letters of each possible anagram against the letters in the word
// ORIGINAL SUBMITTED AS HW WEDNESDAY EVE:
// AnagramFinder.prototype.findAnagrams = function(otherWords) {
//     const equalLengthWords = this.compareLength(otherWords);
//     const possibleAnagrams = this.wordsNotSame(equalLengthWords);
//     const wordLow = this.word.toLowerCase();
//     const anagramWords = [];
//     for (let possibleAnagramWord of possibleAnagrams) {
//         possibleAnagramLetters = possibleAnagramWord.split('');
//         if (possibleAnagramLetters.every(letter => wordLow.includes(letter.toLowerCase()))) {
//             anagramWords.push(possibleAnagramWord);
//         }
//     }
//     return anagramWords;
// }

// REFACTORING THURSDAY AM:
AnagramFinder.prototype.findAnagrams = function(otherWords) {
    const equalLengthWords = this.compareLength(otherWords);
    const possibleAnagrams = this.wordsNotSame(equalLengthWords);
    const wordLow = this.word.toLowerCase();
    const anagramWords = [];
    possibleAnagrams.forEach(possibleAnagramWord => {
        possibleAnagramLetters = possibleAnagramWord.split('');
        if (possibleAnagramLetters.every(letter => wordLow.includes(letter.toLowerCase()))) {
            anagramWords.push(possibleAnagramWord);
        }
    });
    return anagramWords;
}

module.exports = AnagramFinder;
