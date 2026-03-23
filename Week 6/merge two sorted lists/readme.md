# Merge Two Sorted Linked Lists

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one sorted linked list and return the head of the new sorted linked list. The new list should be made up of nodes from `list1` and `list2`.

## Examples

### Example 1

**Input:** `list1 = [1,2,4]`, `list2 = [1,3,5]`  
**Output:** `[1,1,2,3,4,5]`

### Example 2

**Input:** `list1 = []`, `list2 = [1,2]`  
**Output:** `[1,2]`

### Example 3

**Input:** `list1 = []`, `list2 = []`  
**Output:** `[]`

## Approach

Use a dummy node and a `current` pointer to compare list heads, attaching the smaller node to `current.next` to add that value to our new list while advancing `current` with each step. Once one list is exhausted, link the remainder of the other list to `current.next` to finish adding all remaining values to our new list.
