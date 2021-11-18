class Paddle{
    constructor(canvas, ctx, side, x) {
        this.height = 150
        this.width = 13
        this.canvas = canvas
        this.ctx = ctx

        // if (side == 'R') {
        //     this.x = this.canvas.scrollWidth - this.width - 40
        // }

        this.x = x
        this.y = 200



        this.moveing = 0

        this.keydown = document.addEventListener('keydown', event => {
            const {key} = event
        
            if (side === 'R') {
                if (key === 'ArrowUp') {
                    this.moveing = 1
                }
                if (key === 'ArrowDown') {
                    this.moveing = -1
                }
            } else{
                if (key === 'w') {
                    this.moveing = 1
                }
                if (key === 's') {
                    this.moveing = -1
                }
            }
        });

        // if (this.y >= this.canvas.scrollHeight || this.y <= 0) {
        //     this.moveing = 0w
        //     console.log('test')
        // }

        this.keyup = document.addEventListener('keyup', event => {
            const {key} = event

            if (side === 'R') {
                if (key === 'ArrowUp' || key === 'ArrowDown') {
                    this.moveing = 0
                }
            }
        
            if (side === 'L') {
            if (key === 'w' || key === 's') {
                this.moveing = 0
            }
        }
        });
    }

    render() {
        this.ctx.fillStyle = 'white'
        if (this.moveing === 1) {
            this.y -= 5
            
        } else if (this.moveing === -1) {
            this.y += 5
        }
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}