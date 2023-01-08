module.exports = function reverse (n) {
  let absoluteNumber = Math.abs(n);
  let reverseString = absoluteNumber.toString().split("").reverse().join("");
  return +reverseString;
};