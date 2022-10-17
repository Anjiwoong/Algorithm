/*
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
*/

/*
Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.

Example 2:

Input: sentence = "leetcode"
Output: false
*/

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  const map = {};

  for (let i = 0; i < sentence.length; i++) {
    map[sentence[i]] = map[sentence[i]] ? map[sentence[i]] + 1 : 1;
  }
  return Object.keys(map).length === 26;
};
