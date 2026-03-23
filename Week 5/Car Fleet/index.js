function carFleet(target, position, speed) {
  const stack = [];
  const map = {};

  for (let i = 0; i < position.length; i++) {
    map[position[i]] = speed[i];
  }

  let sorted = position.sort((a, b) => b - a);

  for (let position of sorted) {
    let timeTaken = (target - position) / map[position];

    if (stack.length === 0 || timeTaken > stack[stack.length - 1]) {
      stack.push(timeTaken);
    }
  }
  return stack.length;
}

module.exports = carFleet;
