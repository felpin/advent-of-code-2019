const fs = require("fs");
const path = require("path");

const calculateClosestIntersectionDistance = require("./calculateClosestIntersectionDistance");

const buffer = fs.readFileSync(path.resolve(__dirname, "input.txt"));
const paths = buffer.toString().split("\n").slice(0, -1);

console.log(calculateClosestIntersectionDistance(paths));
