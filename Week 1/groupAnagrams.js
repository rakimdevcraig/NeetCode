// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: strs = ["act","pots","tops","cat","stop","hat"]

// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

// Example 2:

// Input: strs = ["x"]

// Output: [["x"]]

function groupAnagrams(strs) {
  let groups = {};

  for (let str of strs) {
    let key = str.split("").sort().join("");
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(str);
  }

  return Object.values(groups);
}
console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]));
