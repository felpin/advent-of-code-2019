const calculateFuelRequirement = require("./calculateFuelRequirement");

test("Given 14, expects 2", () => {
  expect(calculateFuelRequirement(14)).toBe(2);
});

test("Given 1969, expects 966", () => {
  expect(calculateFuelRequirement(1969)).toBe(966);
});

test("Given 100756, expects 50346", () => {
  expect(calculateFuelRequirement(100756)).toBe(50346);
});
