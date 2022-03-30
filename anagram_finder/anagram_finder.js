const AnagramFinder = function (word) {
    this.word = word;
}

// Given a word and an array of other words you should be able to filter the array, leaving only the anagrams of the word in question in the array.

AnagramFinder.prototype.compareLength = function(otherWords) {
    const equalLengthWords = otherWords.filter(otherWord => otherWord.length === this.word.length);
    return equalLengthWords;
}

AnagramFinder.prototype.wordsNotSame = function(otherWords) {
    const equalLengthWords = this.compareLength(otherWords);
    const uniqueWords = equalLengthWords.filter(equalWord => equalWord.toLowerCase() != this.word.toLowerCase());
    return uniqueWords;
}

AnagramFinder.prototype.findAnagrams = function(otherWords) {
    const possibleAnagrams = this.wordsNotSame(otherWords);
    const wordLow = this.word.toLowerCase();
    const anagramWords = [];
    for (let possibleAnagramWord of possibleAnagrams) {
        possibleAnagramLetters = possibleAnagramWord.split('');
        if (possibleAnagramLetters.every(letter => wordLow.includes(letter.toLowerCase()))) {
            anagramWords.push(possibleAnagramWord);
        }
    }
    return anagramWords;
    
}

module.exports = AnagramFinder;
