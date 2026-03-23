# Evaluate Reverse Polish Notation

![Difficulty](https://img.shields.io/badge/Difficulty-Medium-yellow)

## Problem

You are given an array of strings `tokens` that represents a valid arithmetic
expression in Reverse Polish Notation.

Return the integer that represents the evaluation of the expression.

- The operands may be integers or the results of other operations.
- The operators include `+`, `-`, `*`, and `/`.
- Assume that division between integers always truncates toward zero.

### Example

```text
Input: tokens = ["1","2","+","3","*","4","-"]
Output: 5
Explanation: ((1 + 2) * 3) - 4 = 5
```

### Constraints

- `1 <= tokens.length <= 1000`
- `tokens[i]` is `"+"`, `"-"`, `"*"`, or `"/"`, or a string representing an
  integer in the range `[-100, 100]`

## Approach

We will map our operation function to each operation in an object. We go through
the array and if a character is a number we add it to the stack, if its an
operation we pop off the 2 items in the stack and add them to the operation and
push the result of that back into the stack. At the end we just return the lone
number that will be left in the stack after all operations are complete.

## Run Tests

```bash
node --test test.js
```
