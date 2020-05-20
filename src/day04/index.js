const isPossiblePassword = require("./isPossiblePassword");

let possiblePasswordsCount = 0;
for (let i = 248345; i <= 746315; i++) {
  if (isPossiblePassword(i)) {
    possiblePasswordsCount++;
  }
}

console.log(possiblePasswordsCount);
