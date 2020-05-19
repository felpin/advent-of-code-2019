const fs = require("fs");
const path = require("path");

const runIntcode = require("./runIntcode");

const buffer = fs.readFileSync(path.resolve(__dirname, "input.txt"));
const intcodeStringified = buffer.toString().split("\n")[0];

const intcode = intcodeStringified.split(",").map((value) => +value);

let noun, verb;
for (noun = 0; noun <= 99; noun += 1) {
  for (verb = 0; verb <= 99; verb += 1) {
    const intcodeCopy = intcode.slice();
    intcodeCopy[1] = noun;
    intcodeCopy[2] = verb;

    const result = runIntcode(intcodeCopy)[0];
    if (result === 19690720) {
      console.log(100 * noun + verb);
    }
  }
}
