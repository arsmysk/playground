const http = require('http')
const settings = require('./settings')

let server = http.createServer()
let msg;

server.on('request', (req, res) => {
  switch (req.url) {
    case '/about':
      msg = "about this page"
      break
    case '/profile':
      msg = "about me"
      break
    default:
      msg = 'wrong page'
      break
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write(msg)
  res.end()
})
server.listen(settings.port, settings.host)
console.log("server listening...")
