const isPossiblePassword = require("./isPossiblePassword");

test("111111 does not", () => {
  expect(isPossiblePassword(111111)).toBe(false);
});

test("223450 does not", () => {
  expect(isPossiblePassword(223450)).toBe(false);
});

test("123789 does not", () => {
  expect(isPossiblePassword(123789)).toBe(false);
});

test("112233 does", () => {
  expect(isPossiblePassword(112233)).toBe(true);
});

test("123444 does not", () => {
  expect(isPossiblePassword(123444)).toBe(false);
});

test("111122 does", () => {
  expect(isPossiblePassword(111122)).toBe(true);
});

test("688889 does not", () => {
  expect(isPossiblePassword(688889)).toBe(false);
});
