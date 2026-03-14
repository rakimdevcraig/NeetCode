Problem

Daily Temperatures

You are given an array of integers temperatures where temperatures[i] represents the daily temperatures on the ith day.

Return an array result where result[i] is the number of days after the ith day before a warmer temperature appears on a future day. If there is no day in the future where a warmer temperature will appear for the ith day, set result[i] to 0 instead.

Example 1:

Input: temperatures = [30,38,30,36,35,40,28]

Output: [1,4,1,2,1,0,0]
Example 2:

Input: temperatures = [22,21,20]

Output: [0,0,0]

Approach:
Add temperatures to the stack, as we add compare each temperature that we're on to the temp at the top of the stack. If the temp we're on is greater we calculate the days between by using the index and add that to our output array then pop that day off the stack.

## Run Tests

```bash
node --test test.js
```
