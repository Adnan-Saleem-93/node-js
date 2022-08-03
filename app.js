let buffer1 = Buffer.from('hello')
let buffer2 = Buffer.from('world')

let bufferConcat = Buffer.concat([buffer1, buffer2])

setTimeout(() => {
  console.log(bufferConcat.toString())
}, 3000)
