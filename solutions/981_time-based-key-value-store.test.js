import { TimeMap } from "./981_time-based-key-value-store";

test("original test case1", () => {
  const timeMap = new TimeMap();
  timeMap.set("key1", "val1", 1);
  timeMap.set("key1", "val2", 2);
  expect(timeMap.get("key1", 2)).toStrictEqual("val2");
  timeMap.set("key2", "val3", 1);
  expect(timeMap.get("key2", 1)).toStrictEqual("val3");
  timeMap.set("key1", "val3", 4);
  timeMap.set("key1", "val4", 5);
  expect(timeMap.get("key1", 100)).toStrictEqual("val4");
  timeMap.set("validKey", "ok", 1);
  expect(timeMap.get("invalidKey", 1)).toStrictEqual("");
});

test("leetcode test case1", () => {
  const timeMap = new TimeMap();
  timeMap.set("foo", "bar", 1);
  expect(timeMap.get("foo", 1)).toStrictEqual("bar");
  expect(timeMap.get("foo", 3)).toStrictEqual("bar");
  timeMap.set("foo", "bar2", 4);
  expect(timeMap.get("foo", 4)).toStrictEqual("bar2");
  expect(timeMap.get("foo", 4)).toStrictEqual("bar2");
});

test("leetcode test case2", () => {
  const timeMap = new TimeMap();
  timeMap.set("love", "high", 10);
  timeMap.set("love", "low", 20);
  expect(timeMap.get("love", 5)).toStrictEqual("");
  expect(timeMap.get("love", 10)).toStrictEqual("high");
  expect(timeMap.get("love", 15)).toStrictEqual("high");
  expect(timeMap.get("love", 20)).toStrictEqual("low");
  expect(timeMap.get("love", 25)).toStrictEqual("low");
});
