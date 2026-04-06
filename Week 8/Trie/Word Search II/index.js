class TrieNode {
  constructor() {
    this.word = null;
    this.children = new Map();
  }
}

class Solution {
  /**
   * @param {character[][]} board
   * @param {string[]} words
   * @return {string[]}
   */
  findWords(board, words) {
    const ans = [];
    if (!board || !words || board.length < 1) return [];

    const root = this.buildTrie(words);

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        this.dfs(board, i, j, root, ans);
      }
    }

    return ans;
  }

  dfs(board, i, j, trie, ans) {
    const ch = board[i][j];

    if (!trie.children.has(ch)) return;

    trie = trie.children.get(ch);

    if (trie.word) {
      ans.push(trie.word);
      trie.word = null;
    }

    board[i][j] = "#";
    if (i > 0) this.dfs(board, i - 1, j, trie, ans);
    if (j > 0) this.dfs(board, i, j - 1, trie, ans);
    if (i < board.length - 1) this.dfs(board, i + 1, j, trie, ans);
    if (j < board[0].length - 1) this.dfs(board, i, j + 1, trie, ans);
    board[i][j] = ch;
  }

  buildTrie(words) {
    const root = new TrieNode();

    for (const word of words) {
      let node = root;
      for (const ch of word) {
        if (!node.children.has(ch)) {
          node.children.set(ch, new TrieNode());
        }
        node = node.children.get(ch);
      }
      node.word = word;
    }

    return root;
  }
}
