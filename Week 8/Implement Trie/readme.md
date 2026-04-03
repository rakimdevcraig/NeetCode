# Problem

A prefix tree (also known as a trie) is a tree data structure used to efficiently store and retrieve keys in a set of strings. Some applications of this data structure include auto-complete and spell checker systems.

Implement the `PrefixTree` class:

- `PrefixTree()` Initializes the prefix tree object.
- `void insert(String word)` Inserts the string `word` into the prefix tree.
- `boolean search(String word)` Returns `true` if the string `word` is in the prefix tree (i.e., was inserted before), and `false` otherwise.
- `boolean startsWith(String prefix)` Returns `true` if there is a previously inserted string word that has the prefix `prefix`, and `false` otherwise.

Example 1:

Input:
["Trie", "insert", "dog", "search", "dog", "search", "do", "startsWith", "do", "insert", "do", "search", "do"]

Output:
[null, null, true, false, true, null, true]

Explanation:
PrefixTree prefixTree = new PrefixTree();
prefixTree.insert("dog");
prefixTree.search("dog"); // return true
prefixTree.search("do"); // return false
prefixTree.startsWith("do"); // return true
prefixTree.insert("do");
prefixTree.search("do"); // return true

Constraints:

- 1 <= word.length, prefix.length <= 1000
- word and prefix are made up of lowercase English letters.

# Approach

Insert: for each letter in the word we're inserting we'll check if the letter is a child; if so we'll move into that letter and keep checking. If it’s not, we’ll make a node for that letter and continue making nodes for every letter until we get to the end.

Search: We'll start at the root and for each letter in the word we'll search the children of the trie node for that letter. If at any letter we don't find it in the children, that means it doesn't exist, and we return `false`. At the end, if the `endOfWord` property is `true`, we return `true`.

Prefix (startsWith): Same as search except we don't need to check for the `endOfWord` property on the last letter.
