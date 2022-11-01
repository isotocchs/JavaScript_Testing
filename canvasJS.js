const bob = document.getElementById("canvas1");
// console.log(bob);
const bobContext = bob.getContext("2d");
// console.log(bobContext);

const canvas_width = (bob.width = 600);
const canvas_height = (bob.height = 600);

function animate() {
  bobContext.clearRect(0, 0, canvas_width, canvas_height);
  bobContext.fillRect(50, tom, 100, 100);
  tom++;
  requestAnimationFrame(animate);
}

let tom = 0;
// animate();

const playerImage = new Image();
playerImage.src = "bat-sprite.png";

const spriteWidth = 128 / 4;
const spriteHeight = 128 / 4;
let frameX = 1;
let frameY = 1;
let gameFrame = 0;
const stagerFramesBy = 10;

function animate2() {
  bobContext.clearRect(0, 0, canvas_width, canvas_height);
  //bobContext.fillRect(50, 50, 100, 100);
  //bobContext.drawImage(playerImage, source_x, source_y, source_w, source_h, destination_x,destination_y,destination_w,destination_h);
  bobContext.drawImage(
    playerImage,
    frameX * spriteWidth,
    frameY * spriteHeight,
    spriteWidth,
    spriteHeight,
    0,
    0,
    canvas_width,
    canvas_height
  );
  // if (gameFrame % stagerFramesBy == 0) {
  //   if (frameX < 3) {
  //     frameX++;
  //   } else {
  //     frameX = 1;
  //   }
  // }

  // gameFrame++;
  requestAnimationFrame(animate2);
}

// animate2();
