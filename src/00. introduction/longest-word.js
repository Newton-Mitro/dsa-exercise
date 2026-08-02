// longest word
// Write a function, longestWord, that takes in a sentence string as an argument. The function should return the longest word in the sentence.
// If there is a tie, return the word that occurs later in the sentence.

// You can assume that the sentence is non-empty.

const sentence = "what a wonderful world";
const longestWord = (sentence) => {
  const words = sentence.split(" ");
  let longest = "";

  for (let word of words) {
    if (word.length >= longest.length) {
      longest = word;
    }
  }

  return longest;
};

console.log(longestWord(sentence));
