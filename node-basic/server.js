const http = require('http')
const settings = require('./settings')

let server = http.createServer()
server.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write('hello world')
  res.end()
})
server.listen(settings.port, settings.host)
console.log("server listening...")
