function longestSubstring(s) {
  if (s.length === 0) return 0;

  let stringObj = {};
  let left = 0;
  let right = 0;
  let maxLength = 0;

  while (right < s.length) {
    if (!stringObj[s[right]]) {
      stringObj[s[right]] = true;
      right++;
      maxLength = Math.max(Object.keys(stringObj).length, maxLength);
    } else {
      delete stringObj[s[left]];
      left++;
    }
  }

  return maxLength;
}

longestSubstring("zxyzxyz");
longestSubstring("xxxx");
