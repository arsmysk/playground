

class RandomBall {
  constructor(x, y, xSpeed, ySpeed) {
    this.x = x
    this.y = y
    this.xSpeed = xSpeed
    this.ySpeed = ySpeed
  }

  draw() {
    ctx.clearRect(0, 0, elm.width, elm.height)
    ctx.beginPath()
    ctx.arc(this.x, this.y, 50, 0, Math.PI * 2)
    ctx.globalAlpha = 0.5
    ctx.fillStyle = "#77B29C"
    ctx.fill()
    ctx.closePath()
  }

  updatePosition() {
    /** speedずつ移動させる */
    this.x += this.xSpeed
    this.y += this.ySpeed

    /** 範囲外になると方向を反転する */
    if (this.x < 0 || this.x > elm.width) this.xSpeed = this.xSpeed * -1
    if (this.y < 0 || this.y > elm.height) this.ySpeed = this.ySpeed * -1
  }

  render() {
    this.draw()
    this.updatePosition()

    /** 再帰的に実行 */
    requestAnimationFrame(this.render())
  }
}

let elm = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

elm.width = window.innerWidth
elm.height = window.innerHeight

const randomBall = new RandomBall(100, 100, 5, 5)

randomBall.render()
