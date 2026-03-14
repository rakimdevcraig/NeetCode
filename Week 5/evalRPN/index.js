function evalRPN(tokens) {
  let stack = [];
  let operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "/": (a, b) => Math.trunc(a / b),
    "*": (a, b) => a * b,
  };

  for (let i = 0; i < tokens.length; i++) {
    let char = tokens[i];

    if ("+-/*".includes(char)) {
      let one = stack.pop();
      let two = stack.pop();
      let result = operations[char](two, one);
      stack.push(result);
    } else {
      stack.push(parseInt(char));
    }
  }

  return stack[0];
}

evalRPN(["1", "2", "+", "3", "*", "4", "-"]);
// evalRPN(["1", "2", "+"]);
module.exports = evalRPN;
