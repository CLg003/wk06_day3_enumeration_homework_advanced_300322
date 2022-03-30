const PangramFinder = function (phrase) {
  this.phrase = phrase;
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}

PangramFinder.prototype.isPangram = function() {
  const lowerCasePhrase = this.phrase.toLowerCase();
  return this.alphabet.every(letter => lowerCasePhrase.includes(letter));
}

module.exports = PangramFinder;
