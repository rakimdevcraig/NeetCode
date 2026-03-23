function minWindow(s, t) {
  if (t.length > s.length) return "";

  const neededChars = {};

  for (let char of t) {
    if (neededChars[char]) {
      neededChars[char] = neededChars[char] + 1;
    } else {
      neededChars[char] = 1;
    }
  }

  let left = 0;
  let right = 0;
  let neededLength = Object.keys(neededChars).length;
  let substring = "";

  while (right < s.length) {
    const rightChar = s[right];
    neededChars[rightChar]--;
    if (neededChars[rightChar] === 0) neededLength--;

    while (neededLength === 0) {
      if (!substring || substring.length > right - left + 1) {
        substring = s.slice(left, right + 1);
      }

      const leftChar = s[left];
      if (neededChars[leftChar] === 0) {
        neededLength++;
      }
      neededChars[leftChar]++;
      left++;
    }

    right++;
  }

  return substring;
}
