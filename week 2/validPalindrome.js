// Valid Palindrome
// Given a string s, return true if it is a palindrome, otherwise return false.

// A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

// Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).

// Example 1:

// Input: s = "Was it a car or a cat I saw?"

// Output: true
// Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

// Example 2:

// Input: s = "tab a cat"

// Output: false

function isPalindrome(s) {
  const reversedArray = [];
  const filteredString = s
    .toLowerCase()
    .split("")
    .filter(char => {
      return (char >= "a" && char <= "z") || (char >= "0" && char <= "9");
    })
    .join("");

  let reversedString = "";

  for (let i = filteredString.length - 1; i >= 0; i--) {
    reversedString += filteredString[i];
  }

  return reversedString === filteredString;
}

// isPalindrome("Was it a car or a cat I saw?");
// isPalindrome("Was it a car or a cat I saw?");
console.log(isPalindrome("Was it a car or a cat I saw?"));
console.log(isPalindrome("tab a cat"));
