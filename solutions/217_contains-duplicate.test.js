import { containsDuplicate } from "./217_contains-duplicate";

test.each([[[1, 2, 3, 1]], [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]]])(
  "true",
  (array) => {
    expect(containsDuplicate(array)).toBeTruthy;
  }
);

test.each([[[1, 2, 3]], [[1]], [[]]])("false", (array) => {
  expect(containsDuplicate(array)).toBeTruthy;
});
