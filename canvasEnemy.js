// Tell vs code you're working with canvas
/** @type {HTMLCanvasElement} */

const bob = document.getElementById("canvasE");
// console.log(bob);
const bobContext = bob.getContext("2d");
// console.log(bobContext);

const canvas_width = (bob.width = 600);
const canvas_height = (bob.height = 600);

// lets make many enemies
const numberOfEnemies = 50;
const enemiesArray = [];

let playerImage = new Image();
playerImage.src = "bat-sprite.png";

let spriteWidthBat = 128 / 4;
let spriteHeightBat = 128 / 4;
let frameXBat = 1;
let frameYBat = 1;

let gameFrame = 0;
let stagerFramesBy = 10;

class EnemyBlueprint {
  constructor() {
    this.x = Math.random() * canvas_width;
    this.y = Math.random() * canvas_height;
    this.width = 100;
    this.height = 100;
    this.speed = Math.random() * 4 - 2;
  }
  updateMovement() {
    this.x += this.speed;
    this.y += this.speed;

    if (gameFrame % stagerFramesBy == 0) {
      if (frameXBat < 3) {
        frameXBat++;
      } else {
        frameXBat = 1;
      }
    }
  }
  drawEnemy() {
    bobContext.drawImage(
      playerImage,
      spriteWidthBat * frameXBat,
      spriteHeightBat * frameYBat,
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
