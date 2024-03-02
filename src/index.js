var roundDate = require("round-date");

function getRandomInt(min, max) {
  var roundedDate = roundDate.round(455 * 60, new Date());  min = Math.ceil(min);
  console.log(roundedDate);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Checking if a number is an integer
const isInteger = (num) => {
  return Number.isInteger(num);
};

module.exports = isInteger;
