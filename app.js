const http = require('http')

// Creates server instance
const server = http.createServer((req, res) => {
  const {method} = req

  switch (method) {
    case 'GET':
      return handleGetRequest(req, res)
    case 'POST':
      return handlePostRequest(req, res)
    default:
      throw new Error(`Unsupported request method: ${method}`)
  }
})

const handleGetRequest = (req, res) => {
  // Set GET status code here
  res.statusCode = 200
  return res.end(JSON.stringify({data: []}))
}

const handlePostRequest = (req, res) => {
  // Set POST status code here
  res.statusCode = 500
  return res.end('Unable to create record')
}

// Starts server listening on specified port
server.listen(4001, () => {
  const {address, port} = server.address()
  console.log(`Server is listening on: http://${address}:${port}`)
})
