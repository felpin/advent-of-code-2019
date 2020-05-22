const hasSameAdjacentNumberExactTimes = (digits, times = 2) => {
  const repeat = [];

  digits.forEach((value, index, all) => {
    if (index === 0 || value !== all[index - 1]) {
      repeat.push(1);
    } else {
      repeat.push(repeat[index - 1] + 1);
    }
  });

  return repeat.some((value, index, all) => {
    return value === times && (index === all.length - 1 || all[index + 1] === 1);
  });
};

const onlyIncreases = (values) =>
  values.every((value, index, all) => index === 0 || value >= all[index - 1]);

module.exports = function isPossiblePassword(guess) {
  const guessCharacters = `${guess}`.split("");
  return onlyIncreases(guessCharacters) && hasSameAdjacentNumberExactTimes(guessCharacters);
};
