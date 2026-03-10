## Problem

### Valid Parentheses

You are given a string `s` consisting of the following characters:
`'('`, `')'`, `'{'`, `'}'`, `'['`, and `']'`.

The input string `s` is valid if and only if:

- Every open bracket is closed by the same type of close bracket.
- Open brackets are closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.

Return `true` if `s` is a valid string, and `false` otherwise.

### Example 1

Input: `s = "[]"`
Output: `true`

### Example 2

Input: `s = "([{}])"`
Output: `true`

### Example 3

Input: `s = "[(])"`
Output: `false`

Explanation: The brackets are not closed in the correct order.

### Constraints

- `1 <= s.length <= 1000`

## Approach

we have a stack and for each character in the string if it's an opening character (`"{"`, `"("`, `"["`) we add it to the stack if it's not an opening character (`"}"`, `")"`, `"]"`) we check if the last item added to the stack is the opposite of the closing character we're currently on if so we pop it off of the stack.If not the string is invalid so we return false. By the end we should've added all the opening characters to the stack and popped them off of the stack so if we have an empty stack that means the string was a valid one so we will return true

## Run Tests

\```bash
node --test test.js
\```
