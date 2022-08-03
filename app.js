setTimeout(() => {
  console.log('logged')
}, 0)

setImmediate(() => {
  console.log('logging right away')
})
