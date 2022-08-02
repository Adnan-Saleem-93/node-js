const fs = require('fs')
const readLine = require('readline')

let filePath = './files/shoppingList.txt'
let outputFilePath = './files/shoppingResult.txt'

const myInterface = readLine.createInterface({
  input: fs.createReadStream(filePath)
})

const fileStream = fs.createWriteStream(outputFilePath)

const transformData = (line) => {
  fileStream.write(`They were out of line: ${line}\n`)
}

myInterface.on('line', transformData)
