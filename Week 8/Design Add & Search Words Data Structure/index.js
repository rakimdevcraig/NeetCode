class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
    let curr = this.root;
    for (let char of word) {
      if (!(char in curr.children)) {
        curr.children[char] = new TrieNode();
      }
      curr = curr.children[char];
    }
    curr.isEndOfWord = true;
  }

  search(word) {
    function dfs(node, i) {
      if (i === word.length) return node.isEndOfWord;

      const char = word[i];

      if (char !== ".") {
        if (!(char in node.children)) return false;
        return dfs(node.children[char], i + 1);
      }

      for (const key in node.children) {
        if (dfs(node.children[key], i + 1)) return true;
      }
      return false;
    }

    return dfs(this.root, 0);
  }
}
