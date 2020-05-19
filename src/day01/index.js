const fs = require("fs");
const path = require("path");

const calculateFuelRequirement = require("./calculateFuelRequirement");

const buffer = fs.readFileSync(path.resolve(__dirname, "input.txt"));
const values = buffer.toString().split("\n");

const total = values
  .filter((value) => value)
  .reduce((previousTotal, value) => previousTotal + calculateFuelRequirement(value), 0);

console.log(total);
