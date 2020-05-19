const fs = require("fs");
const path = require("path");

const runIntcode = require("./runIntcode");

const buffer = fs.readFileSync(path.resolve(__dirname, "input.txt"));
const intcodeStringified = buffer.toString().split("\n")[0];

const intcode = intcodeStringified.split(",").map((value) => +value);
intcode[1] = 12;
intcode[2] = 2;

const result = runIntcode(intcode);

console.log(result[0]);
