# Word Search II

## Problem

Given a 2-D grid of characters `board` and a list of strings `words`, return all words that are present in the grid.

For a word to be present it must be possible to form the word with a path in the board with horizontally or vertically neighboring cells. The same cell may not be used more than once in a word.

**Example:**

**Input:**

```javascript
((board = [
  ["a", "b", "c", "d"],
  ["s", "a", "a", "t"],
  ["a", "c", "k", "e"],
  ["a", "c", "d", "n"],
]),
  (words = ["bat", "cat", "back", "backend", "stack"]));
```

**Output:** `["cat","back","backend"]`

## Approach

Build a trie from the word list, then DFS from each board cell while traversing the trie in parallel—returning early if the current path isn't a valid prefix and collecting words whenever you reach a node marked as a complete word.
