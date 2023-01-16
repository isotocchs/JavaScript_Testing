const bob = document.getElementById("canvasM");
// console.log(bob);
const bobContext = bob.getContext("2d");
// console.log(bobContext);

const canvas_width = (bob.width = 600);
const canvas_height = (bob.height = 600);

var keyPressed = "none";

window.addEventListener("keydown", function (e) {
  if (
    e.key === "ArrowUp" ||
    e.key === "ArrowDown" ||
    e.key === "ArrowRight" ||
    e.key === "ArrowLeft"
  ) {
    keyPressed = e.key;
  }
  console.log(keyPressed);
});

window.addEventListener("keyup", function (e) {
  if (
    e.key === "ArrowUp" ||
    e.key === "ArrowDown" ||
    e.key === "ArrowRight" ||
    e.key === "ArrowLeft"
  ) {
    keyPressed = "none";
  }
  console.log(keyPressed);
});

let playerImage = new Image();
playerImage.src = "bat-sprite.png";
let spriteWidthBat = 128 / 4;
let spriteHeightBat = 128 / 4;
let frameXBat = 1;
let frameYBat = 1;
let gameFrame = 0;
let stagerFramesBy = 10;
let xMove = canvas_width / 2 - canvas_width / 5;
let yMove = canvas_height / 2 - canvas_width / 5;

let backgroundImg = new Image();
backgroundImg.src = "background.jpg";

let xBack1 = 0;

let xBack2 = canvas_width;

let xBack3 = -canvas_width;

let xSquare = 350;
let ySquare = 200;

let Square_Width = 100;
let Square_Height = 100;

function animate1() {
  bobContext.clearRect(0, 0, canvas_width, canvas_height);

  if (gameFrame % stagerFramesBy == 0) {
    if (frameXBat < 3) {
      frameXBat++;
    } else {
      frameXBat = 1;
    }
  }

  if (keyPressed === "ArrowUp" && yMove >= 0) {
    if (yMove >= 290 || xSquare >= 300 || xSquare <= 80 || yMove <= 96) {
      yMove -= 3;
    }
    frameYBat = 2;
    console.log("y coordinates of the bat: " + yMove);
    console.log("x coordinates of the square: " + xSquare);
  }
  if (
    keyPressed === "ArrowDown" &&
    yMove <= canvas_height - canvas_height / 5
  ) {
    if (yMove <= 95 || xSquare >= 300 || xSquare <= 90 || yMove >= 288) {
      yMove += 3;
    }

    frameYBat = 0;

    console.log("y coordinates of the bat: " + yMove);
    console.log("x coordinates of the square: " + xSquare);
  }
  if (keyPressed === "ArrowLeft" && xMove >= 0) {
    // xMove -= 3;
    frameYBat = 3;

    if (xBack1 >= canvas_width) {
      xBack1 = 0;
    }
    if (xBack2 >= canvas_width * 2) {
      xBack2 = canvas_width;
    }
    if (xBack3 >= 0) {
      xBack3 = -canvas_width;
    }
    if (xSquare >= 275 || yMove <= 95 || yMove >= 290 || xSquare <= 100) {
      xBack1 += 3;
      xBack2 += 3;
      xBack3 += 3;

      xSquare += 3;
    }

    console.log("y coordinates of the bat: " + yMove);
    console.log("x coordinates of the square: " + xSquare);
  }
  if (keyPressed === "ArrowRight" && xMove <= canvas_width - canvas_width / 5) {
    // xMove += 3;
    frameYBat = 1;

    if (xSquare >= 285 || yMove <= 90 || yMove >= 300 || xSquare <= 101) {
      xBack1 -= 3;
      xBack2 -= 3;
      xBack3 -= 3;
      xSquare -= 3;
    }

    if (xBack1 <= -canvas_width) {
      xBack1 = 0;
    }
    if (xBack2 <= 0) {
      xBack2 = canvas_width;
    }
    if (xBack3 <= -canvas_width * 2) {
      xBack3 = -canvas_width;
    }
    console.log("y coordinates of the bat: " + yMove);
    console.log("x coordinates of the square: " + xSquare);
  }

  // console.log("back1: " + xBack1);
  // console.log("back2: " + xBack2);
  // console.log("back3: " + xBack3);

  bobContext.drawImage(backgroundImg, xBack1, 0, canvas_width, canvas_height);

  bobContext.drawImage(backgroundImg, xBack2, 0, canvas_width, canvas_height);
  bobContext.drawImage(backgroundImg, xBack3, 0, canvas_width, canvas_height);

  bobContext.drawImage(
    playerImage,
    spriteWidthBat * frameXBat,
    spriteHeightBat * frameYBat,
    spriteWidthBat,
    spriteHeightBat,
    xMove,
    yMove,
    canvas_width / 5,
    canvas_height / 5
  );

  bobContext.fillRect(xSquare, ySquare, Square_Width, Square_Height);

  gameFrame++;
  requestAnimationFrame(animate1);
}

animate1();
