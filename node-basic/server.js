const http = require('http')
const fs = require('fs')
const ejs = require('ejs')
const settings = require('./settings')

let server = http.createServer()
let template = fs.readFileSync(__dirname + '/public_html/hello.ejs', 'utf-8')
let n = 0
server.on('request', (req, res) => {
  n++
  let data = ejs.render(template, {
    title: "hello",
    content: "<strong>World!</strong>",
    n: n
  })
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write(data)
  res.end()
})
server.listen(settings.port, settings.host)
console.log("server listening...")
