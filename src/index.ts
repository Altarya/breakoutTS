const canvas = <HTMLCanvasElement>document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let ballX = canvas.width/2
let ballY = canvas.height - 30
let ballDX = 1
let ballDY = -1
const ballRadious = 10
let FPS = 0
let frameCount = 0
let frameLock = false
const paddleH = 10
const paddleW = 50
let paddleX = (canvas.width - paddleW)/2
let paddleY = canvas.height - paddleH
let moveLeft = false
let moveRight = false
let paddleSpeed = 7
let gameOver = false
const brickRowCount = 3
const brickColumnCount = 5
const brickW = 75
const brickH = 20
const brickPadding = 10
const brickOffsetTop = 30
const brickOffsetLeft = 30
const bricks: {x: number, y: number, isAlive: boolean}[][] = new Array();
for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, isAlive: true};
    }
}


function drawLoop() {
    if(frameLock == false) {
        frameLock = true

        //Clear Frame
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        //FPS counter
        ctx.beginPath()
        ctx.font = "20px 'Pixeloid'"
        ctx.fillStyle = 'green'
        ctx.textAlign = 'left'
        ctx.fillText("FPS: "+FPS, 10, 20)
        ctx.closePath()

        //Draw ball
        ctx.beginPath()
        ctx.arc(ballX, ballY, ballRadious, 0, Math.PI*2)
        ctx.strokeStyle = 'green'
        ctx.stroke()
        ctx.closePath()

        //Draw Paddle
        ctx.beginPath()
        ctx.fillStyle = 'green'
        ctx.fillRect(paddleX, paddleY, paddleW, paddleH)
        ctx.closePath()

        //Draw Border
        ctx.beginPath()
        ctx.strokeStyle = 'green'
        ctx.strokeRect(0, 0, canvas.width-1, canvas.height-1)
        ctx.closePath()

        //Draw Bricks
        for (let c = 0; c < brickColumnCount; c++) {
            for (let r = 0; r < brickRowCount; r++) {
                if(bricks[c][r].isAlive) {
                    bricks[c][r].x = c * (brickW + brickPadding) + brickOffsetLeft;
                    bricks[c][r].y = r * (brickH + brickPadding) + brickOffsetTop;
                    ctx.beginPath()
                    ctx.strokeStyle = 'green'
                    ctx.strokeRect(bricks[c][r].x, bricks[c][r].y, brickW, brickH)
                    ctx.closePath()
                }
            }
        }

        //Colision check
        if (ballY + ballDY < ballRadious) {
            ballDY = -ballDY
        } else if (ballY + ballDY > canvas.height - ballRadious) {
            if (ballX > paddleX && ballX < paddleX + paddleW) {
                ballDY = -ballDY
            } else {
                gameOver = true
            }
        }
        if (ballX + ballDX < ballRadious || ballX + ballDX > canvas.width - ballRadious) {
            ballDX = -ballDX
        }
        for (let c = 0; c < brickColumnCount; c++) {
            for (let r = 0; r < brickRowCount; r++) {
                const brick = bricks[c][r]
                if (ballX > brick.x && ballX < brick.x + brickW && ballY > brick.y && ballY < brick.y + brickH && brick.isAlive) {
                    ballDY = -ballDY
                    brick.isAlive = false
                }
            }
        }

        if(!gameOver) {
            //Move check
            if (moveRight && paddleX - paddleSpeed < canvas.width - paddleW) {
                paddleX += paddleSpeed
            } else if (moveLeft && paddleX + paddleSpeed > 0) {
                paddleX -= paddleSpeed
            }

            //Move ball
            ballX += ballDX
            ballY += ballDY
        } else {
            ctx.beginPath()
            ctx.font = "40px 'Pixeloid'"
            ctx.fillStyle = 'green'
            ctx.textAlign = 'center'
            ctx.fillText("GAME OVER", canvas.width/2, canvas.height/2)
            ctx.closePath()
        }

        frameCount++
        frameLock = false
    }
}

function countFPS() {
    FPS = frameCount
    frameCount = 0
}

function keyDownH(e: KeyboardEvent) {
    if (e.key == 'ArrowRight' || e.key == 'Right' || e.key == 'KeyD' || e.key == 'd') {
        moveRight = true
    }
    if (e.key == 'ArrowLeft' || e.key == 'Left' || e.key == 'KeyA' || e.key == 'a') {
        moveLeft = true
    }
}

function keyUpH(e: KeyboardEvent) {
    if (e.key == 'ArrowRight' || e.key == 'Right' || e.key == 'KeyD' || e.key == 'd') {
        moveRight = false
    }
    if (e.key == 'ArrowLeft' || e.key == 'Left' || e.key == 'KeyA' || e.key == 'a') {
        moveLeft = false
    }
}

document.addEventListener('keydown', keyDownH, false)
document.addEventListener('keyup', keyUpH, false)

setInterval(countFPS, 1000)
setInterval(drawLoop, 1000/60)