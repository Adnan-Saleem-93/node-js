function celsiusToFahranheit(celsius) {
  return celsius * (9 / 5) + 32
}

let tempInCelsius = process.argv[2] || 0
let tempInFahranheit = celsiusToFahranheit(tempInCelsius)

console.log(`${tempInCelsius} Celsius in Fahranheit = ${tempInFahranheit}`)
