/*
 * @lc app=leetcode id=981 lang=javascript
 *
 * [981] Time Based Key-Value Store
 */

// @lc code=start

var TimeMap = function () {
  this.map = [];
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
/**
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.map[key]) {
    this.map[key] = [];
  }
  this.map[key].push([timestamp, value]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
/**
 * Time Complexity: O(logN) where n is the number of timestamps
 * Space Complexity: O(1)
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (!this.map[key]) {
    return "";
  }
  let left = 0;
  let right = this.map[key].length - 1;
  let value = "";

  while (left <= right) {
    const mid = (left + right) >> 1;
    const [tsInMap, guessValue] = this.map[key][mid];

    if (tsInMap === timestamp) {
      return guessValue;
    }

    if (tsInMap < timestamp) {
      value = guessValue;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return value;
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
// @lc code=end
export { TimeMap };
