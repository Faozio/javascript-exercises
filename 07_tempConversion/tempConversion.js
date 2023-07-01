const convertToCelsius = function(f) {
  f = (((f - 32) * (5 / 9) * 10) / 10).toFixed(1);
  return Number(f);
};

const convertToFahrenheit = function(c) {
  c = ((((c * 9) / 5 + 32) * 10) / 10).toFixed(1);
  return Number(c);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
