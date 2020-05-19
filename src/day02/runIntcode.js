const ADD = 1;
const HALT = 99;
const MULTIPLY = 2;

module.exports = function runIntcode(intcode) {
  if (!intcode.length) throw new Error("Intcode is empty");

  const result = intcode.slice();

  let opcodeIndex = 0;
  let opcodeValue = result[opcodeIndex];

  while (opcodeValue !== HALT) {
    if (opcodeValue !== ADD && opcodeValue !== MULTIPLY) throw new Error("Unknown opcode");

    const integer1 = result[result[opcodeIndex + 1]];
    const integer2 = result[result[opcodeIndex + 2]];

    result[result[opcodeIndex + 3]] =
      opcodeValue === ADD ? integer1 + integer2 : integer1 * integer2;

    opcodeIndex += 4;
    if (opcodeIndex >= result.length) throw new Error("Couldn't reach end of program");
    opcodeValue = result[opcodeIndex];
  }

  return result;
};
