const IsogramFinder = function (word) {
    this.word = word;
}

IsogramFinder.prototype.isIsogram = function() {
    const lowerCaseWord = this.word.toLowerCase();
    const wordArray = lowerCaseWord.split('');
    return wordArray.every(letter => wordArray.indexOf(letter) === wordArray.lastIndexOf(letter));
}

module.exports = IsogramFinder;
