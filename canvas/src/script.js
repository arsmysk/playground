let elm = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
let x = y = 100
let xSpeed = ySpeed = 5

elm.width = window.innerWidth
elm.height = window.innerHeight

const ball = () => {
  ctx.clearRect(0, 0, elm.width, elm.height)
  ctx.beginPath()
  ctx.arc(x, y, 50, 0, Math.PI * 2)
  ctx.globalAlpha = 0.5
  ctx.fillStyle = "#77B29C"
  ctx.fill()
  ctx.closePath()
}

const draw = () => {
  ball()
  /** speedずつ移動させる */
  x += xSpeed
  y += ySpeed

  /** 範囲外になると方向を反転する */
  if (x < 0 || x > elm.width) xSpeed = xSpeed * -1
  if (y < 0 || y > elm.height) ySpeed = ySpeed * -1

  /** 再帰的に実行 */
  requestAnimationFrame(draw)

}

draw()
