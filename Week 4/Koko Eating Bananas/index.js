function minEatingSpeed(piles, h) {
  let left = 1;
  let right = 0;
  let result = right;
  for (let num of piles) {
    if (num > right) right = num;
  }

  while (left <= right) {
    let k = Math.floor((left + right) / 2);
    let hours = 0;

    for (let p of piles) {
      hours += Math.ceil(p / k);
    }

    if (hours <= h) {
      result = k;
      right = k - 1;
    } else {
      left = k + 1;
    }
  }

  return result;
}

module.exports = minEatingSpeed;
