/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */

/*
 * Time Complexity: O(1)
 * Space Complexity: O(n) where n is the number of elements of the stack
 */

// @lc code=start

var MinStack = function () {
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack[this.stack.length] = {
    val: val,
    min: Math.min(val, this.getMin()),
  };
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.length = this.stack.length - 1;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.stack.length === 0) return Infinity;
  return this.stack[this.stack.length - 1].min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

export { MinStack };
