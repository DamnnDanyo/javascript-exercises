const convertToCelsius = function(x) {
  let fahrenheit = (5/9) * (x - 32)
      let fahrenheitRounded = Math.round(fahrenheit * 10) / 10
        return fahrenheitRounded
      
};

const convertToFahrenheit = function(y) {
  let celsius = 32 + (y * 9/5)
  let celsiusRounded = Math.round(celsius * 10) / 10
        return celsiusRounded
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
