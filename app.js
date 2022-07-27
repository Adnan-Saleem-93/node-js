let events = require('events') // importing events module

// event listener callback function
let listenerCallback = (name) => {
  console.log(`Hello ${name}!`)
}

let myEmitter = new events.EventEmitter()

myEmitter.on('start', listenerCallback)
myEmitter.emit('start', 'Adnan')
