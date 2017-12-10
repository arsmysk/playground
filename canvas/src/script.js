let elm = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
let x = y = 100
let xSpeed = ySpeed = 1

ctx.beginPath()
ctx.arc(x, y, 50, 0, Math.PI * 2)
ctx.globalAlpha = 0.5
ctx.fillStyle = "#77B29C"
ctx.fill()
ctx.closePath()
