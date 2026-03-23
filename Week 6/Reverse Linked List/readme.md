# Problem:

Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.

### Example 1:

Input: head = [0,1,2,3]

Output: [3,2,1,0]

### Example 2:

Input: head = []

Output: []

### Constraints:

0 <= The length of the list <= 1000.
-1000 <= Node.val <= 1000

### Approach:

This one is hard to explain so refer to my video. But pretty much we use a prev, current & next nodes and we save the node infront of the current one before we unlink it. Once we unlink it we make current's next the prev element, then we move prev forward to where current is finally we move current forward to the next this will go on until the next element goes through the entire list and previous will end on the last element in the list
