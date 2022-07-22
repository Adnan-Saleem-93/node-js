const converters = require('./modules/converter-methods')

let tempInCelsius = 30
let tempInFahranheit = converters.celsiusToFahranheit(tempInCelsius)

console.log(`${tempInCelsius} Celsius in Fahranheit = ${tempInFahranheit}`)

tempInFahranheit = 86
tempInCelsius = converters.fahranheitToCelsius(tempInFahranheit)
console.log(`${tempInFahranheit} Fahranheit in Celsius = ${tempInCelsius.toFixed(2)}`)
