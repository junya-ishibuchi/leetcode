/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 * Time Complexity: O(r * c) where r is the rows in the grid and c is the columns in the grid
 * Space Complexity: O(r * c) where r is the rows in the grid and c is the columns in the grid
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands_dfs = function (grid) {
  let islandCount = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      if (grid[row][column] === "0" || grid[row][column] === "-1") continue;

      dfs(grid, row, column);
      islandCount++;
    }
  }

  return islandCount;
};

function dfs(grid, x, y) {
  if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) {
    return;
  }

  if (grid[x][y] === "1") {
    grid[x][y] = "-1";
    dfs(grid, x - 1, y);
    dfs(grid, x, y - 1);
    dfs(grid, x + 1, y);
    dfs(grid, x, y + 1);
  }
}
// @lc code=end

export { numIslands_dfs };
