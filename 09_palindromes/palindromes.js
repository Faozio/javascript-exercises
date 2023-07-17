const palindromes = function(z) {
  // Remove non-alphanumeric characters and convert to lowercase
  const formattedWord = z.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Reverse the word
  const reversedWord = formattedWord.split('').reverse().join('');

  // Check if the original word is equal to the reversed word
  return formattedWord === reversedWord;
};
// Do not edit below this line
module.exports = palindromes;
