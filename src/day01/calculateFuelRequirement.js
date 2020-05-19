module.exports = function calculateFuelRequirement(mass) {
  const fuel = Math.floor(mass / 3) - 2;
  return fuel <= 0 ? 0 : fuel + calculateFuelRequirement(fuel);
};
