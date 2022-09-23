/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

/*
Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const arr = [];

  for (let i = 0; i < s.length; i += 1) {
    const last = arr[arr.length - 1];
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      arr.push(s[i]);
    } else if (s[i] === ')' && last === '(' && arr.length !== 0) {
      arr.pop();
    } else if (s[i] === ']' && last === '[' && arr.length !== 0) {
      arr.pop();
    } else if (s[i] === '}' && last === '{' && arr.length !== 0) {
      arr.pop();
    } else {
      return false;
    }
  }

  return arr.length === 0;
};
