// Valid Anagram

// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: s = "racecar", t = "carrace"

// Output: true
// Example 2:

// Input: s = "jar", t = "jam"

// Output: false

function validAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sCount = {};
  const tCount = {};

  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    sCount[charS] = (sCount[charS] || 0) + 1;

    let charT = t[i];
    tCount[charT] = (tCount[charT] || 0) + 1;
  }

  for (let key in sCount) {
    if (sCount[key] !== tCount[key]) {
      return false;
    }
  }

  return true;
}
console.log(validAnagram("racecar", "carrace"));
