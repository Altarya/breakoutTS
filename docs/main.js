/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("var canvas = document.getElementById('canvas');\r\nvar ctx = canvas.getContext('2d');\r\nvar ballX = canvas.width / 2;\r\nvar ballY = canvas.height - 30;\r\nvar ballDX = 1;\r\nvar ballDY = -1;\r\nvar ballRadious = 10;\r\nvar FPS = 0;\r\nvar frameCount = 0;\r\nvar frameLock = false;\r\nvar paddleH = 10;\r\nvar paddleW = 50;\r\nvar paddleX = (canvas.width - paddleW) / 2;\r\nvar paddleY = canvas.height - paddleH;\r\nvar moveLeft = false;\r\nvar moveRight = false;\r\nvar paddleSpeed = 7;\r\nfunction drawLoop() {\r\n    if (frameLock == false) {\r\n        frameLock = true;\r\n        //Clear Frame\r\n        ctx.clearRect(0, 0, canvas.width, canvas.height);\r\n        //FPS counter\r\n        ctx.beginPath();\r\n        ctx.font = \"20px 'Pixeloid'\";\r\n        ctx.fillStyle = 'green';\r\n        ctx.fillText(\"FPS: \" + FPS, 10, 50);\r\n        ctx.closePath();\r\n        //Draw ball\r\n        ctx.beginPath();\r\n        ctx.arc(ballX, ballY, ballRadious, 0, Math.PI * 2);\r\n        ctx.strokeStyle = 'green';\r\n        ctx.stroke();\r\n        ctx.closePath();\r\n        //Draw Paddle\r\n        ctx.beginPath();\r\n        ctx.fillStyle = 'green';\r\n        ctx.fillRect(paddleX, paddleY, paddleW, paddleH);\r\n        ctx.closePath();\r\n        //Edge colision check\r\n        if (ballY + ballDY < ballRadious || ballY + ballDY > canvas.height - ballRadious) {\r\n            ballDY = -ballDY;\r\n        }\r\n        if (ballX + ballDX < ballRadious || ballX + ballDX > canvas.width - ballRadious) {\r\n            ballDX = -ballDX;\r\n        }\r\n        if (moveRight && paddleX - paddleSpeed < canvas.width - paddleW) {\r\n            paddleX += paddleSpeed;\r\n        }\r\n        else if (moveLeft && paddleX + paddleSpeed > 0 + paddleW) {\r\n            paddleX -= paddleSpeed;\r\n        }\r\n        //Move ball\r\n        ballX += ballDX;\r\n        ballY += ballDY;\r\n        frameCount++;\r\n        frameLock = false;\r\n    }\r\n}\r\nfunction countFPS() {\r\n    FPS = frameCount;\r\n    frameCount = 0;\r\n}\r\nfunction keyDownH(e) {\r\n    if (e.key == 'ArrowRight' || e.key == 'Right' || e.key == 'KeyD' || e.key == 'd') {\r\n        moveRight = true;\r\n    }\r\n    if (e.key == 'ArrowLeft' || e.key == 'Left' || e.key == 'KeyA' || e.key == 'a') {\r\n        moveLeft = true;\r\n    }\r\n}\r\nfunction keyUpH(e) {\r\n    if (e.key == 'ArrowRight' || e.key == 'Right' || e.key == 'KeyD' || e.key == 'd') {\r\n        moveRight = false;\r\n    }\r\n    if (e.key == 'ArrowLeft' || e.key == 'Left' || e.key == 'KeyA' || e.key == 'a') {\r\n        moveLeft = false;\r\n    }\r\n}\r\ndocument.addEventListener('keydown', keyDownH, false);\r\ndocument.addEventListener('keyup', keyUpH, false);\r\nsetInterval(countFPS, 1000);\r\nsetInterval(drawLoop, 1000 / 60);\r\n\n\n//# sourceURL=webpack://breakoutts/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;