# Balanced Binary Tree

## Difficulty

Easy

## Description

Given a binary tree, return `true` if it is height-balanced and `false`
otherwise.

A height-balanced binary tree is defined as a binary tree in which the
left and right subtrees of every node differ in height by no more than
`1`.

## Example 1

**Input:** `root = [1,2,3,null,null,4]`  
**Output:** `true`

## Example 2

**Input:** `root = [1,2,3,null,null,4,null,5]`  
**Output:** `false`

## Example 3

**Input:** `root = []`  
**Output:** `true`

## Approach

We check the height of each subtree from the bottom up. If the left and right sides of any node differ in height by more than 1, we return -1 right away; otherwise, we return that subtree’s height.
