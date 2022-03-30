const UpperCaser = function (words) {
    this.words = words;
}

UpperCaser.prototype.toUpperCase = function() {
    result = this.words.map(word => word.toUpperCase());
    return result;
}

module.exports = UpperCaser;
