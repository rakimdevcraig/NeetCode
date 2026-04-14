function topKFrequent(nums, k) {
  const counts = {};
  for (const n of nums) {
    counts[n] = (counts[n] || 0) + 1;
  }

  const freq = Array.from({ length: nums.length + 1 }, () => []);

  for (const n in counts) {
    const c = counts[n];
    freq[c].push(Number(n));
  }

  const res = [];
  for (let i = freq.length - 1; i >= 0; i--) {
    for (const n of freq[i]) {
      res.push(n);
      if (res.length === k) {
        return res;
      }
    }
  }
}

console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2));
