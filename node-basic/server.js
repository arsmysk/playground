let http = require('http')
let server = http.createServer()
server.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write('hello world')
  res.end()
})
server.listen(1337, '10.0.1.7')
console.log("server listening...")
