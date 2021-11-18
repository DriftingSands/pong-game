console.log('pong');





// button = document.querySelector('button').addEventListener('click')
// console.log(button)
// addEventListener






const game = new Game()
game.play()



// document.addEventListener('keydown', event => {
//     const {key} = event

//     if (key === 'w') {
//         paddleY -= 5
//     }
//     if (key === 's') {
//         paddleY += 5
//     }
// });

// let x = 100
// let y = 100
// let vx = +2
// let yx = +2
// let paddleY = 20




    /*
setInterval(() => {
    renderBackground()
    renderBall(x, y)
    renderPaddle(paddleY)
    x += vx
    y += yx

    if (x + radius >= canvasWidth || x - radius <= 0) {
        vx = -vx
    }

    // if (x - radius <= 0) {
    //     vx = -vx
    // }

    if (y + radius >= canvasHeight || y - radius <= 0) {
        yx = -yx
    }


    // y += 2
}, 20)



document.addEventListener('keypress', (event) => {
    console.log(event)
    const {key} = event

    if (key === 'w') {
        paddleY -= 5
    }
    if (key === 's') {
        paddleY += 5
    }
})
*/