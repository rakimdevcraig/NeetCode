class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let curr = this.root;

    for (const char of word) {
      if (!(char in curr.children)) {
        curr.children[char] = new TrieNode();
      }
      curr = curr.children[char];
    }
    curr.isEndOfWord = true;
  }

  search(word) {
    let curr = this.root;
    for (const char of word) {
      if (!(char in curr.children)) return false;
      curr = curr.children[char];
    }
    return curr.isEndOfWord;
  }

  startsWith(prefix) {
    let curr = this.root;

    for (let char of prefix) {
      if (!(char in curr.children)) return false;
      curr = curr.children[char];
    }
    return true;
  }
}
