class Ball{
    constructor(color, radius, x, y, canvas, ctx) {
        this.radius = radius
        this.x = x
        this.y = y
        this.color = color
        
        this.vx = +4
        this.vy = +4
        
        this.canvas = canvas
        this.ctx = ctx
    }
    
    render(x, y) {
        this.x = x
        this.y = y
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false)
        this.ctx.fillStyle = this.color
        this.ctx.fill()
    }
    
    move() {
        this.x = this.x + this.vx
        this.y = this.y + this.vy
        this.render(this.x, this.y)
    }
}
