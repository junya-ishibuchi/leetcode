/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */


// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numsSet = new Set();
    for (let num of nums) {
        if (numsSet.has(num)) {
            return true;
        }
        numsSet.add(num);
    }
    
    return false;
};
// @lc code=end

export { containsDuplicate };