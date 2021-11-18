class Game{
    constructor() {
        this.canvas = document.querySelector('canvas')
        this.ctx = this.canvas.getContext('2d')
        this.ball = new Ball('red', 10, this.canvas.scrollWidth / 2, this.canvas.scrollHeight / 2, this.canvas, this.ctx)
        this.paddleL = new Paddle(this.canvas, this.ctx, 'L', 40 )
        this.paddleR = new Paddle(this.canvas, this.ctx, 'R', (this.canvas.scrollWidth - 60))

        // this.button = document.getElementsById('button').addEventListener('click', function() {
        //     this.ball.x = this.canvas.scrollWidth / 2
        //     this.ball.y = this.canvas.scrollHeight / 2
        // })
    }

    play() {
        setInterval(() => {
            this.resetCanvas()
            this.checkCollision()
            this.ball.move()
            this.paddleL.render()
            this.paddleR.render()
            // this.button.addEventListener('click', resetBall())
        }, 17)
    }

    

    resetBall() {
        console.log('test')
        setInterval(() => {
        this.ball.x = this.canvas.scrollWidth / 2
        this.ball.y = this.canvas.scrollHeight / 2
    })}

    resetCanvas() {
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(0, 0, this.canvas.scrollWidth, this.canvas.scrollHeight)
    }

    checkCollision() {
        

        let ballHitboxX = this.ball.x + this.ball.radius
        let ballHitboxY = this.ball.y + this.ball.radius

        //Collision detection for walls
        if (ballHitboxX >= this.canvas.scrollWidth + 200 || ballHitboxX - this.ball.radius * 2 <= -200) {
            if (this.ball.vx > 0) {
                this.ball.x = 150
            } else {
                this.ball.x= this.canvas.scrollWidth - 150
            }
            this.ball.y = this.canvas.scrollHeight / 2
        }
        if (ballHitboxY >= this.canvas.scrollHeight || ballHitboxY - this.ball.radius * 2 <= 0) {
            this.ball.vy = -this.ball.vy
        }

        // Collision detection for paddle L
        if (ballHitboxX <= (this.paddleL.x + this.paddleL.width + 20 ) && ballHitboxX >= this.paddleL.x && ballHitboxY >= this.paddleL.y && ballHitboxY <= this.paddleL.y + this.paddleL.height) {
            console.log('ping')
            this.ball.vx = -this.ball.vx
        }

        // Collision detection for paddle R
        if (ballHitboxX >= this.paddleR.x && ballHitboxX <= (this.paddleR.x + this.paddleR.width + 20) && ballHitboxY >= this.paddleR.y && ballHitboxY <= this.paddleR.y + this.paddleR.height) {
            console.log('pong')
            this.ball.vx = -this.ball.vx
        }

        // Stopping paddle L at wall

        if (this.paddleL.y <= 0) {
            this.paddleL.y = 0
        }
        if ((this.paddleL.y + this.paddleL.height) >= this.canvas.scrollHeight) {
            this.paddleL.y = (this.canvas.scrollHeight - this.paddleL.height)
        }


        // Stopping paddle R at wall

        if (this.paddleR.y <= 0) {
            this.paddleR.y = 0
        }
        if ((this.paddleR.y + this.paddleL.height) >= this.canvas.scrollHeight) {
            this.paddleR.y = (this.canvas.scrollHeight - this.paddleL.height)
        }
        
    }

    

}