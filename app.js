const fs = require('fs')

const readDataCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`)
  } else {
    console.log(`Provided file contained: ${data}`)
  }
}
if (fs.existsSync('./file.txt')) {
  fs.readFile('./file.txt', 'utf-8', readDataCallback)
} else {
  fs.writeFileSync('./file.txt', 'secret key', {overwrite: true})
  fs.readFileSync('./file.txt', 'utf-8', readDataCallback)
}
