const http = require('http')

// Creates server instance
const server = http.createServer((req, res) => {
  // Write server code here
  const {method} = req

  switch (method) {
    case 'GET':
      handleGetRequest(req, res)
  }
})

const handleGetRequest = (req, res) => {
  const {pathname} = req.url

  if (pathname === '/users') {
    res.setHeader('Content-Type', 'application/json')
    return res.end(JSON.stringify([]))
  }

  res.statusCode = 404
  return res.end('Requested resource does not exist')
}

// Starts server listening on specified port
server.listen(4001, () => {
  const {address, port} = server.address()
  console.log(`Server is listening on: http://${address}:${port}`)
})
