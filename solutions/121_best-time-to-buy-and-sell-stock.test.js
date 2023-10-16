import { maxProfit } from "./121_best-time-to-buy-and-sell-stock";

test.each([
  [[7, 1, 5, 3, 6, 4], 5],
  [[7, 6, 10, 4, 10, 3, 10, 1, 10], 9],
  [[7, 6, 10, 4, 10, 3, 10, 1, 2], 7],
])("truthy prices:%o, output:%d", (prices, output) => {
  expect(maxProfit(prices)).toStrictEqual(output);
});

test.each([[[7, 6, 4, 3, 1], 0]])(
  "truthy falsy:%o, output:%d",
  (prices, output) => {
    expect(maxProfit(prices)).toStrictEqual(output);
  }
);
