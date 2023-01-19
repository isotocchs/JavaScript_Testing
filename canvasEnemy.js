// Tell vs code you're working with canvas
/** @type {HTMLCanvasElement} */

const bob = document.getElementById("canvasE");
// console.log(bob);
const bobContext = bob.getContext("2d");
// console.log(bobContext);

const canvas_width = (bob.width = 600);
const canvas_height = (bob.height = 600);

// lets make many enemies
const numberOfEnemies = 1000;
const enemiesArray = [];

let playerImage = new Image();
playerImage.src = "bat-sprite.png";

let spriteWidthBat = 128 / 4;
let spriteHeightBat = 128 / 4;
let frameXBat = 1;
let frameYBat = 1;

// create enemy class - to produce multiple enemies

class EnemyBlueprint {
  constructor() {
    this.x = Math.random() * canvas_width;
    this.y = Math.random() * canvas_height;
    this.width = 50;
    this.height = 50;
    this.speed = Math.random() * 4 - 2;
  }
  updateMovement() {
    this.x += this.speed;
    this.y += this.speed;
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

  requestAnimationFrame(animate);
}
animate();
