# Maximum Depth of Binary Tree

## Description

Given the root of a binary tree, return its depth.

The depth of a binary tree is the number of nodes along the longest path
from the root node down to the farthest leaf node.

## Example 1

**Input:** `root = [1,2,3,null,null,4]`  
**Output:** `3`

## Example 2

**Input:** `root = []`  
**Output:** `0`

## Approach

We Traverse the tree level by level and count how many levels there are. The number of levels is the maximum depth.
