our recursive function will need a node and an index to start at
base case: if index is equal to length of word

we need a variable for the char we're on in the word

our case if "."

check if character is not a period:
do our normal check of the children and return false if char isnt in children
if it is we return the function

now we handle if char is "."
we loop thru the keys of the children for this node
we call the dfs function using the node's children and increasing index by 1
we return true in that part

we return false below that

outside of the dfs function we call it starting at the root and 0 index
