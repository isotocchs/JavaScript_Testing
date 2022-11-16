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

let playerImage = new Image();
playerImage.src = "bat-sprite.png";
let spriteWidthBat = 128 / 4;
let spriteHeightBat = 128 / 4;
let frameXBat = 1;
let frameYBat = 1;

let knightRun = new Image();
knightRun.src = "Knight/noBKG_KnightRun_strip.png";
let knightRunFrameX = 0;
let knightRunFrameY = 0;
let knightRunMaxFrame = 7;
let knightRunWidth = 768 / 8;
let knightRunHeight = 64;

let knightAttack = new Image();
knightAttack.src = "Knight/noBKG_KnightAttack_strip.png";
let knightAttackFrameX = 0;
let knightAttackFrameY = 0;
let knightAttackMaxFrame = 21;
let knightAttackWidth = 3168 / 22;
let knightAttackHeight = 64;

let spriteWidth;
let spriteHeight;
let sprite;
let frameX;
let frameY;
let gameFrame = 0;
let stagerFramesBy = 5;
let directionOfSprite = 1;

function animate2() {
  bobContext.clearRect(0, 0, canvas_width, canvas_height);

  if (gameFrame % stagerFramesBy == 0) {
    if (knightRunFrameX < knightRunMaxFrame) {
      sprite = knightRun;
      spriteWidth = knightRunWidth;
      spriteHeight = knightRunHeight;
      knightRunFrameX++;
      frameX = knightRunFrameX;
      frameY = knightRunFrameY;
    } else {
      if (knightAttackFrameX < knightAttackMaxFrame) {
        sprite = knightAttack;
        spriteWidth = knightAttackWidth;
        spriteHeight = knightAttackHeight;
        knightAttackFrameX += 1;
        frameX = knightAttackFrameX;
        frameY = knightAttackFrameY;
      } else {
        knightAttackFrameX = 0;
        sprite = knightRun;
        spriteWidth = knightRunWidth;
        spriteHeight = knightRunHeight;
        knightRunFrameX = 0;
        frameX = knightRunFrameX;
        frameY = knightRunFrameY;
      }
    }

    if (frameXBat < 3) {
      frameXBat++;
    } else {
      frameXBat = 1;
    }
  }

  if (tom >= canvas_width - spriteWidth) {
    direction = "negative";
  }
  if (tom <= 0) {
    direction = "positive";
  }
  if (tom < canvas_width && direction == "positive") {
    tom += 2;
    directionOfSprite = 1;
    frameYBat = 1;
  }
  if (tom >= 0 && direction == "negative") {
    tom -= 2;
    directionOfSprite = -1;
    frameYBat = 3;
  }

  bobContext.scale(directionOfSprite, 1);
  bobContext.drawImage(
    sprite,
    spriteWidth * frameX,
    spriteHeight * frameY,
    spriteWidth,
    spriteHeight,
    tom * directionOfSprite,
    325,
    (canvas_width / 3.5) * directionOfSprite,
    canvas_height / 3.5
  );

  bobContext.drawImage(
    playerImage,
    spriteWidthBat * frameXBat,
    spriteHeightBat * frameYBat,
    spriteWidthBat,
    spriteHeightBat,
    tom,
    0,
    canvas_width / 5,
    canvas_height / 5
  );

  gameFrame++;
  requestAnimationFrame(animate2);
}

animate2();
