# Add Two Numbers

You are given two non-empty linked lists, l1 and l2, where each represents a non-negative integer.

The digits are stored in reverse order, e.g. the number 321 is represented as 1 -> 2 -> 3 -> in the linked list.

Each of the nodes contains a single digit. You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Return the sum of the two numbers as a linked list.

## Example 1:

Input: l1 = [1,2,3], l2 = [4,5,6]

Output: [5,7,9]

Explanation: 321 + 654 = 975.

## Example 2:

Input: l1 = [9], l2 = [9]

Output: [8,1]

## Approach:

I'll walk through both linked lists side by side, adding the digits at each position together along with any carry from the previous position. Once I've processed all digits and there's no carry left, I'm done—the resulting linked list contains the sum in reverse order.
