const runIntcode = require("./runIntcode");

test("1,0,0,0,99 becomes 2,0,0,0,99", () => {
  expect(runIntcode([1, 0, 0, 0, 99])).toEqual([2, 0, 0, 0, 99]);
});

test("2,3,0,3,99 becomes 2,3,0,6,99", () => {
  expect(runIntcode([2, 3, 0, 3, 99])).toEqual([2, 3, 0, 6, 99]);
});

test("2,4,4,5,99,0 becomes 2,4,4,5,99,9801", () => {
  expect(runIntcode([2, 4, 4, 5, 99, 0])).toEqual([2, 4, 4, 5, 99, 9801]);
});

test("1,1,1,4,99,5,6,0,99 becomes 30,1,1,4,2,5,6,0,99", () => {
  expect(runIntcode([1, 1, 1, 4, 99, 5, 6, 0, 99])).toEqual([30, 1, 1, 4, 2, 5, 6, 0, 99]);
});
