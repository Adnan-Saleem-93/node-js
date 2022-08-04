const http = require('http')
const server = http.createServer((req, res) => {
  res.end('Hello World')
})

server.listen(3599, () => {
  const {port, address} = server.address()
  console.log(port, address)
})
