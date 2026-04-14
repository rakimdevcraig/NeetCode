function longestConsecutive(nums) {
  const numLookup = {};

  for (const n of nums) {
    numLookup[n] = true;
  }

  let longest = 0;

  for (const n of nums) {
    if (!numLookup[n - 1]) {
      let length = 0;
      while (numLookup[n + length]) {
        length += 1;
      }
      longest = Math.max(length, longest);
    }
  }

  return longest;
}
