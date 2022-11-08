const bob = document.getElementById("canvas1");
// console.log(bob);
const bobContext = bob.getContext("2d");
// console.log(bobContext);

const canvas_width = (bob.width = 600);
const canvas_height = (bob.height = 600);

let tom = 0;

let direction;

function animate() {
  bobContext.clearRect(0, 0, canvas_width, canvas_height);
  bobContext.fillRect(tom, 50, 100, 100);

  if (tom == canvas_width - 100) {
    direction = "negative";
  }
  if (tom == 0) {
    direction = "positive";
  }

  if (tom < canvas_width && direction == "positive") {
    tom += 5;
  }
  if (tom >= 0 && direction == "negative") {
    tom -= 5;
  }

  requestAnimationFrame(animate);
}

// animate();

const playerImage = new Image();
playerImage.src = "bat-sprite.png";

const spriteWidth = 128 / 4;
const spriteHeight = 128 / 4;
let frameX = 1;
let frameY = 1;
let gameFrame = 0;
const stagerFramesBy = 10;
let directionOfSprite;

function animate2() {
  bobContext.clearRect(0, 0, canvas_width, canvas_height);
  //bobContext.drawImage(playerImage, source_x, source_y,
  // source_w, source_h, destination_x,destination_y,destination_w,destination_h);
  // bobContext.scale(-1, 1);
  bobContext.drawImage(
    playerImage,
    spriteWidth * frameX,
    spriteHeight,
    spriteWidth,
    spriteHeight,
    300,
    0,
    canvas_width / 4,
    canvas_height / 4
  );
  if (gameFrame % stagerFramesBy == 0) {
    if (frameX < 3) {
      frameX++;
    } else {
      frameX = 1;
    }
  }

  gameFrame++;
  requestAnimationFrame(animate2);
}

animate2();
