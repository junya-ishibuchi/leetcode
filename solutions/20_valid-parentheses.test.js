import { isValid } from "./20_valid-parentheses";

test.each(["()", "()[]{}", "((()))", "({[]})"])("truthy %s", (s) => {
  expect(isValid(s)).toBeTruthy();
});

test.each(["(]", "(", "(()))", "((())", ")("])("falsy %s", (s) => {
  expect(isValid(s)).toBeFalsy();
});
