const fs = require('fs')
const readLine = require('readline')

let filePath = './files/shoppingList.txt'

// creating file if it doesn't exist
if (!fs.existsSync(filePath)) {
  let shoppingItems = ['bread', 'butter', 'milk', 'chees', 'fruits', 'vegetables']
  fs.writeFileSync(filePath, shoppingItems.join('\n'))
}

let myInterface = readLine.createInterface({input: fs.createReadStream(filePath)})

let count = 0
let printLine = (lineData) => {
  console.log(`Line ${++count}: ${lineData}`)
}

myInterface.on('line', printLine)
