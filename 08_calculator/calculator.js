const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;  
};

const sum = function (array) {
  return array.reduce((total, current) => total + current, 0);
};


const multiply = function(...nums) {
  return nums.reduce((acc, n) => acc * n, 1);
};

const power = function(base, exponent) {
  return base ** exponent;
};

const factorial = function(n) {
  if (n < 0 ) return -1;
  else if (n === 0) return 1; 
  else {
    return n * factorial(n - 1);
  }
};
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
