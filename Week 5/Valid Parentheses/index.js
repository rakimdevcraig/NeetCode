function isValid(s) {
  const stack = [];
  const opposites = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (opposites[char] !== stack[stack.length - 1]) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}

module.exports = isValid;
