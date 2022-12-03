const canvas = <HTMLCanvasElement>document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let ballX = canvas.width/2
let ballY = canvas.height - 30
let ballDX = 1
let ballDY = -1
let ballRadious = 10
let FPS = 0
let frameCount = 0
let frameLock = false

function drawLoop() {
    if(frameLock == false) {
        frameLock = true

        //Clear Frame
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        //FPS counter
        ctx.beginPath()
        ctx.font = "20px 'Pixeloid'"
        ctx.fillStyle = 'green'
        ctx.fillText("FPS: "+FPS, 10, 50)
        ctx.closePath()

        //Draw ball
        ctx.beginPath()
        ctx.arc(ballX, ballY, ballRadious, 0, Math.PI*2)
        ctx.strokeStyle = 'green'
        ctx.stroke()
        ctx.closePath()

        //Edge colision check
        if (ballY + ballDY < ballRadious || ballY + ballDY > canvas.height - ballRadious) {
            ballDY = -ballDY
        }
        if (ballX + ballDX < ballRadious || ballX + ballDX > canvas.width - ballRadious) {
            ballDX = -ballDX
        }

        //Move ball
        ballX += ballDX
        ballY += ballDY
        frameCount++

        frameLock = false
    }
}

function countFPS() {
    FPS = frameCount
    frameCount = 0
}

setInterval(countFPS, 1000)
setInterval(drawLoop, 1000/60)