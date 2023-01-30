// Tell vs code you're working with canvas
/** @type {HTMLCanvasElement} */

const bob = document.getElementById("canvasE");
// console.log(bob);
const bobContext = bob.getContext("2d");
// console.log(bobContext);

const canvas_width = (bob.width = 600);
const canvas_height = (bob.height = 600);

// lets make many enemies
const numberOfEnemies = 25;
const enemiesArray = [];

let playerImage = new Image();
playerImage.src = "bat-sprite.png";

let spriteWidthBat = 128 / 4;
let spriteHeightBat = 128 / 4;

let directionX = 10;

let gameFrame = 0;
let stagerFramesBy = 8;

class EnemyBlueprint {
  constructor() {
    this.width = 100;
    this.height = 100;
    this.x = Math.random() * (canvas_width - this.width);
    this.y = Math.random() * (canvas_height - this.height);
    this.speed = Math.random() * 4 + 1;
    this.frameXBat = 1;
    this.frameYBat = 3;
    this.famedir = "pos";

    this.angle = 0;
    this.frequencyChange = Math.random() * 4;
    this.amplitude = Math.random() * 400;
  }
  updateMovement() {
    if (this.x + this.width < 0) {
      this.x = canvas_width;
    }

    this.angle += this.frequencyChange;

    this.x =
      Math.cos((this.angle * Math.PI) / 180) * this.amplitude +
      (canvas_width / 2 - this.width / 2);

    this.y =
      Math.sin((this.angle * Math.PI) / 180) * this.amplitude +
      (canvas_height / 2 - this.height / 2);

    // this.x =
    //   (Math.cos((this.angle * Math.PI) / 90) * canvas_width) / 2 +
    //   (canvas_width / 2 - this.width / 2);

    // this.y =
    //   (Math.sin((this.angle * Math.PI) / 270) * canvas_height) / 2 +
    //   (canvas_height / 2 - this.height / 2);

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
      console.log(this.frameXBat);
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
