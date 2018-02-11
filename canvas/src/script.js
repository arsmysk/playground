

class RandomBall {
  constructor(ctx, x, y, xSpeed, ySpeed) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.xSpeed = xSpeed
    this.ySpeed = ySpeed
  }

  draw() {
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
    console.log(this)
    this.draw()
    this.updatePosition()
  }
}

let elm = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
