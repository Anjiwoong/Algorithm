/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
*/

/*
Example 1:

Input: s = "leetcode"
Output: 0

Example 2:

Input: s = "loveleetcode"
Output: 2

Example 3:

Input: s = "aabb"
Output: -1
*/

/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function (s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) map.set(s[i], 1);
    else map.set(s[i], map.get(s[i]) + 1);
  }
  const result = [...map.entries()].find(([, value]) => value === 1);
  return result ? s.indexOf(result[0]) : -1;
};

// ---------------------------------------------------------------------------------------------------

var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  }
  return -1;
};

// 참고
const result = name.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});
