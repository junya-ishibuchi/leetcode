/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands_bfs = function (grid) {
  let islandCount = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      if (grid[row][column] === "0" || grid[row][column] === "-1") continue;

      bfs(grid, row, column);
      islandCount++;
    }
  }

  return islandCount;
};

function bfs(grid, x, y) {
  const queue = [];
  queue.push([x, y]);
  while (queue.length) {
    const [x, y] = queue.shift();
    if (grid[x][y] !== "1") continue;

    grid[x][y] = "-1";
    pushIfValid(queue, grid, x - 1, y);
    pushIfValid(queue, grid, x, y - 1);
    pushIfValid(queue, grid, x + 1, y);
    pushIfValid(queue, grid, x, y + 1);
  }
}

function pushIfValid(queue, grid, x, y) {
  if (x >= 0 && y >= 0 && x < grid.length && y < grid[0].length) {
    queue.push([x, y]);
  }
}
// @lc code=end

export { numIslands_bfs };
