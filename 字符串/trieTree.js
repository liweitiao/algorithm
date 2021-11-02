/**
 * p9
 */

class TrieNode {
  constructor() {
    this.path = 0;
    this.end = 0;
    this.nexts = new Array(27);
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    if (word == null) {
      return;
    }
    let index = 0;
    let node = this.root;
    node.path++;
    for (let i = 0; i < word.length; i++) {
      index = word[i].charCodeAt() - 'a'.charCodeAt();
      if (node.nexts[index] == undefined) {
        node.nexts[index] = new TrieNode();
      }
      node = node.nexts[index];
      node.path++;
    }
    node.end++;
  }

  search(word) {
    if (word == null) {
      return 0;
    }
    let node = this.root;
    let index = 0;
    for (let i = 0; i < word.length; i++) {
      index = word[i].charCodeAt() - 'a'.charCodeAt();
      if (node.nexts[index] == undefined) {
        return 0;
      }
      node = node.nexts[index];
    }
    return node.end;
  }

  delete(word) {
    if (this.search(word) != 0) {
      let node = this.root;
      let index = 0;
      for (let i = 0; i < word.length; i++) {
        index = word[i].charCodeAt() - 'a'.charCodeAt();
        if (--node.nexts[index].path == 0) {
          node.nexts[index] = undefined;
          return;
        }
        node = node.nexts[index];
      }
      node.end--;
    }
  }

  prefixNumber(pre) {
    if (pre == null) {
      return 0;
    }
    let node = this.root;
    let index = 0;
    for (let i = 0; i < pre.length; i++) {
      index = pre[i].charCodeAt() - 'a'.charCodeAt();
      if (node.nexts[index] == undefined) {
        return 0;
      }
      node = node.nexts[index];
    }
    return node.path;
  }
}

let trie = new Trie();
console.log(trie.search('zuo'));
trie.insert('zuo');
trie.insert('')
// trie.delete('zuo')
trie.insert('zuo');
trie.insert('zuofgrf');
trie.insert('zuofgrtggf');
// console.log(trie.search('zuo'));
console.log(trie.prefixNumber('zuo'))