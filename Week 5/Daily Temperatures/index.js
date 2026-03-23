function dailyTemperatures(temperatures) {
  let output = [];
  let stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    output.push(0);
  }

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length !== 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      let popped = stack.pop();
      output[popped] = i - popped;
    }
    stack.push(i);
  }

  return output;
}

module.exports = dailyTemperatures;
