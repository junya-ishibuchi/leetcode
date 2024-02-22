/*
 * @lc app=leetcode id=211 lang=javascript
 *
 * [211] Design Add and Search Words Data Structure
 */

// @lc code=start

var TrieNode = function () {
  this.children = {};
  this.isEndWord = false;
};

var WordDictionary = function () {
  this.root = new TrieNode();
};

/**
 * Time Complexity: O(L) where L is the length of the word
 * Time Complexity: O(L)
 */
/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let current = this.root;
  for (const char of word) {
    if (!current.children[char]) {
      current.children[char] = new TrieNode();
    }
    current = current.children[char];
  }
  current.isEndWord = true;
};

/**
 * Time Complexity: O(L) where L is the length of the word
 * Time Complexity: O(L)
 */
/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  function dfs(j, root) {
    let current = root;
    for (let i = j; i < word.length; i++) {
      if (word[i] === ".") {
        for (const childKey of Object.keys(current.children)) {
          if (dfs(i + 1, current.children[childKey])) {
            return true;
          }
        }
        return false;
      } else {
        if (!current.children || !current.children[word[i]]) {
          return false;
        }
        current = current.children[word[i]];
      }
    }
    return current.isEndWord;
  }

  return dfs(0, this.root);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end

export { WordDictionary };
