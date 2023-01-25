// Tell vs code you're working with canvas
/** @type {HTMLCanvasElement} */

const bob = document.getElementById("canvasE");
// console.log(bob);
const bobContext = bob.getContext("2d");
// console.log(bobContext);

const canvas_width = (bob.width = 600);
const canvas_height = (bob.height = 600);

// lets make many enemies
const numberOfEnemies = 5;
const enemiesArray = [];

let playerImage = new Image();
playerImage.src = "bat-sprite.png";

let spriteWidthBat = 128 / 4;
let spriteHeightBat = 128 / 4;

let directionX = 10;

let gameFrame = 0;
let stagerFramesBy = 10;

class EnemyBlueprint {
  constructor() {
    this.width = 100;
    this.height = 100;
    this.x = Math.random() * (canvas_width - this.width);
    this.y = Math.random() * (canvas_height - this.height);
    this.speed = Math.random() * 4 - 2;
    this.frameXBat = 1;
    this.frameYBat = 1;
  }
  updateMovement() {
    if (this.x <= 0) {
      this.speed *= -1;
    }
    if (this.x >= canvas_width - this.width) {
      this.speed *= -1;
    }
    // if (this.y <= 0) {
    //   this.speed *= -1;
    // }
    // if (this.y >= canvas_height - this.height) {
    //   this.speed *= -1;
    // }

    console.log(this.speed);
    console.log(this.x);
    // this.x += this.speed;
    this.y += this.speed;

    if (gameFrame % stagerFramesBy == 0) {
      if (this.frameXBat < 3) {
        this.frameXBat++;
      } else {
        this.frameXBat = 1;
      }
    }
  }
  drawEnemy() {
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

function animate() {
  bobContext.clearRect(0, 0, canvas_width, canvas_height);

  enemiesArray.forEach((enemies) => {
    enemies.updateMovement();
    enemies.drawEnemy();
  });

  gameFrame++;
  requestAnimationFrame(animate);
}
animate();
