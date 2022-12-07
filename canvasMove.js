const bob = document.getElementById("canvasM");
// console.log(bob);
const bobContext = bob.getContext("2d");
// console.log(bobContext);

const canvas_width = (bob.width = 600);
const canvas_height = (bob.height = 600);

var keyPressed = "none";

// window.addEventListener("keydown", function (e) {
//   console.log(e.key);
// });

window.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp") {
    keyPressed = e.key;
  }
  console.log(keyPressed);
});

window.addEventListener("keyup", function (e) {
  if (e.key === "ArrowUp") {
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

let xMove = canvas_width / 2;
let yMove = canvas_height / 2;

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
    yMove -= 3;
    frameYBat = 2;
  }

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

  gameFrame++;
  requestAnimationFrame(animate1);
}

animate1();
