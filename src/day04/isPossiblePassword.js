const hasSameAdjacentNumber = (values) =>
  values.some((value, index, all) => index > 0 && value === all[index - 1]);

const onlyIncreases = (values) =>
  values.every((value, index, all) => index === 0 || value >= all[index - 1]);

module.exports = function isPossiblePassword(guess) {
  const guessCharacters = `${guess}`.split("");
  return hasSameAdjacentNumber(guessCharacters) && onlyIncreases(guessCharacters);
};
