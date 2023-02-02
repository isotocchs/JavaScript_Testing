// Tell vs code you're working with canvas
/** @type {HTMLCanvasElement} */

const bob = document.getElementById("canvasPAS");
const bobContext = bob.getContext("2d");

const canvas_width = (bob.width = 600);
const canvas_height = (bob.height = 600);

// const colCan = document.getElementById("collisionCanvas");
// const colCanContext = colCan.getContext("2d");

// const colCanvas_width = (colCan.width = 600);
// const colCas_height = (colCan.height = 600);

let canvasPosition = bob.getBoundingClientRect();
const explosions = [];

let backgroundImg = new Image();
backgroundImg.src = "background.jpg";

let playerImage = new Image();
playerImage.src = "bat-sprite.png";
let spriteWidthBat = 128 / 4;
let spriteHeightBat = 128 / 4;
let gameFrame = 0;
let stagerFramesBy = 8;

const numberOfEnemies = 10;
const enemiesArray = [];

let score = 0;
bobContext.font = "30px Impact";

//lets listen for a mouse click
window.addEventListener("click", function (e) {
  let expPositionX = e.x - canvasPosition.left;
  let expPositionY = e.y - canvasPosition.top;
  explosions.push(new Explosion(expPositionX, expPositionY));

  //lets do collision detection based on colors
  // const clickedPixelColor = colCanContext.getImageData(
  //   expPositionX,
  //   expPositionY,
  //   1,
  //   1
  // );
  // console.log(clickedPixelColor);

  // const colorData = clickedPixelColor.data;

  // enemiesArray.forEach((object) => {
  //   if (
  //     object.randomColors[0] === colorData[0] &&
  //     object.randomColors[1] === colorData[1] &&
  //     object.randomColors[2] === colorData[2]
  //   ) {
  //     object.killed = true;
  //     score++;
  //   }
  // });
});

class Explosion {
  //now constructor takes in Info - (x,y) coordinates
  constructor(x, y) {
    this.expMaxFramesX = 8;
    this.expMaxFramesY = 6;
    this.expWidth = 1920 / this.expMaxFramesX;
    this.expHeight = 1440 / this.expMaxFramesY;
    this.drawWidth = this.expWidth * 0.4;
    this.drawHeight = this.expHeight * 0.4;
    this.expX = x - this.drawWidth / 2;
    this.expY = y - this.drawHeight / 2;

    //new way to import the image
    this.expImage = new Image();
    this.expImage.src = "explosions.png";
    this.expFrameX = 0;
    this.expFrameY = 0;
    this.gameFrame = 0;
  }
  update() {
    this.gameFrame++;
    if (this.gameFrame % 2 === 0) {
      if (this.expFrameX < this.expMaxFramesX - 1) {
        this.expFrameX++;
      } else {
        this.expFrameY++;
        this.expFrameX = 0;
      }
    }
  }

  draw() {
    bobContext.drawImage(
      this.expImage,
      this.expWidth * this.expFrameX,
      this.expHeight * this.expFrameY,
      this.expWidth,
      this.expHeight,
      this.expX,
      this.expY,
      this.drawWidth,
      this.drawHeight
    );
  }
}

class EnemyBlueprint {
  constructor() {
    this.width = 100;
    this.height = 100;
    this.x = Math.random() * (canvas_width - this.width);
    this.y = Math.random() * (canvas_height - this.height);
    this.speed = Math.random() * 2 + 1;
    this.frameXBat = 1;
    this.frameYBat = 3;
    this.famedir = "pos";

    this.angle = 0;
    this.frequencyChange = Math.random() * 0.2;
    this.amplitude = Math.random() * 5;

    // this.randomColors = [
    //   Math.floor(Math.random() * 255),
    //   Math.floor(Math.random() * 255),
    //   Math.floor(Math.random() * 255),
    // ];
    // this.color =
    //   "rgb(" +
    //   this.randomColors[0] +
    //   "," +
    //   this.randomColors[1] +
    //   "," +
    //   this.randomColors[2] +
    //   ")";

    // this.killed = false;
  }
  updateMovement() {
    if (this.x + this.width < 0) {
      this.x = canvas_width;
    }
    this.x -= this.speed;
    this.y += Math.sin(this.angle) * this.amplitude;
    this.angle += this.frequencyChange;

    if (gameFrame % stagerFramesBy == 0) {
      if (this.frameXBat == 3) {
        this.framedir = "neg";
      } else if (this.frameXBat == 1) {
        this.framedir = "pos";
      }
      if (this.framedir == "pos") {
        this.frameXBat++;
      } else if (this.framedir == "neg") {
        this.frameXBat--;
      }
      // if (this.frameXBat < 3) {
      //   this.frameXBat++;
      // } else {
      //   this.frameXBat = 1;
      // }
      // console.log(this.frameXBat);
    }
  }
  drawEnemy() {
    // bobContext.fillStyle = this.color;
    // bobContext.fillRect(this.x, this.y, this.width, this.height);
    // colCanContext.fillStyle = this.color;
    // colCanContext.fillRect(this.x, this.y, this.width, this.height);
    bobContext.drawImage(
      playerImage,
      spriteWidthBat * this.frameXBat,
      spriteHeightBat * this.frameYBat,
      spriteWidthBat,
      spriteHeightBat,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

for (let index = 0; index < numberOfEnemies; index++) {
  enemiesArray.push(new EnemyBlueprint());
}

//lets put a score up
// function drawScore() {
//   bobContext.fillStyle = "white";
//   bobContext.fillText("Score: " + score, 25, 50);
//   bobContext.fillStyle = "black";
//   bobContext.fillText("Score: " + score, 27, 52);
// }

function animate() {
  bobContext.clearRect(0, 0, canvas_width, canvas_height);
  // colCanContext.clearRect(0, 0, canvas_width, canvas_height);

  bobContext.drawImage(backgroundImg, 0, 0, canvas_width, canvas_height);

  // drawScore();
  enemiesArray.forEach((enemies) => {
    enemies.updateMovement();
    // if (enemies.killed === false) {
    enemies.drawEnemy();
    // }
  });

  for (let i = 0; i < explosions.length; i++) {
    explosions[i].update();
    explosions[i].draw();
  }

  gameFrame++;

  requestAnimationFrame(animate);
}
animate();
