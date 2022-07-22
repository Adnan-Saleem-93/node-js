function celsiusToFahranheit(celsius) {
  return celsius * (9 / 5) + 32
}

module.exports.celsiusToFahranheit = celsiusToFahranheit

module.exports.fahranheitToCelsius = function (fahranheit) {
  return (fahranheit - 32) * (5 / 9)
}
