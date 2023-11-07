import { generateParenthesis } from "./22_generate-parentheses";

test.each([
  [3, ["((()))", "(()())", "(())()", "()(())", "()()()"]],
  [1, ["()"]],
])("test", (n, output) => {
  expect(generateParenthesis(n).sort()).toEqual(output.sort());
});
