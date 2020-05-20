const isPossiblePassword = require("./isPossiblePassword");

test("111111 meets these criteria", () => {
  expect(isPossiblePassword(111111)).toBe(true);
});

test("223450 does not meet these criteria", () => {
  expect(isPossiblePassword(223450)).toBe(false);
});

test("123789 does not meet these criteria", () => {
  expect(isPossiblePassword(123789)).toBe(false);
});
