// Tell vs code you're working with canvas
/** @type {HTMLCanvasElement} */

const bob = document.getElementById("canvasPAS");
const bobContext = bob.getContext("2d");

const canvas_width = (bob.width = 600);
const canvas_height = (bob.height = 600);

const colCan = document.getElementById("collisionCanvas");
const colCanContext = colCan.getContext("2d");

const colCanvas_width = (colCan.width = 600);
const colCas_height = (colCan.height = 600);

let canvasPosition = bob.getBoundingClientRect();
const explosions = [];

let backgroundImg = new Image();
backgroundImg.src = "background.jpg";

let playerImage = new Image();
playerImage.src = "bat-sprite.png";
let spriteWidthBat = 128 / 4;
let spriteHeightBat = 128 / 4;

let playerImage2 = new Image();
playerImage2.src = "alien.png";
let spriteWidthBat2 = 558 / 6;
let spriteHeightBat2 = 632 / 4;

let playerKnight = new Image();
playerKnight.src = "simpleKnight.png";
let spriteWidthKnight = 291;
let spriteHeightKnight = 362;

let gameFrame = 0;
let stagerFramesBy = 8;

const numberOfEnemies = 10;
const numberOfEnemies2 = 10;

let enemiesArray = [];
let enemiesArray2 = [];

let score = 0;
bobContext.font = "30px Impact";

var keyPressed = "none";

let xMove = canvas_width / 2;
let yMove = canvas_height - 100;

window.addEventListener("keydown", function (e) {
  if (
    e.key === "ArrowUp" ||
    e.key === "ArrowDown" ||
    e.key === "ArrowRight" ||
    e.key === "ArrowLeft"
  ) {
    keyPressed = e.key;
  }
  console.log(enemiesArray.length);
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

let explosionSoundHit = new Audio("explosionSound.wav");
explosionSoundHit.volume = 0.3;

explosionSoundHit.load();
explosionSoundHit.play();

// let explosionSoundMiss = new Audio("explosionSound2.wav");
// explosionSoundMiss.volume = 0.3;

//lets listen for a mouse click
window.addEventListener("click", function (e) {
  let expPositionX = e.x - canvasPosition.left;
  let expPositionY = e.y - canvasPosition.top;
  explosions.push(new Explosion(expPositionX, expPositionY));

  //lets do collision detection based on colors
  const clickedPixelColor = colCanContext.getImageData(
    expPositionX,
    expPositionY,
    1,
    1
  );
  console.log("X Pos: " + expPositionX + " Y Pos: " + expPositionY);

  const colorData = clickedPixelColor.data;

  explosionSoundHit.load();
  explosionSoundHit.play();

  enemiesArray.forEach((enemyInfo) => {
    if (
      enemyInfo.randomColors[0] === colorData[0] &&
      enemyInfo.randomColors[1] === colorData[1] &&
      enemyInfo.randomColors[2] === colorData[2]
    ) {
      enemyInfo.killed = true;
      score += 1;
    }
  });

  enemiesArray2.forEach((enemyInfo) => {
    if (
      enemyInfo.randomColors[0] === colorData[0] &&
      enemyInfo.randomColors[1] === colorData[1] &&
      enemyInfo.randomColors[2] === colorData[2]
    ) {
      enemyInfo.killed = true;
      score += 1;
    }
  });
  if (0 === colorData[0] && 0 === colorData[1] && 0 === colorData[2]) {
    score--;
  }

  if (expPositionX > 500 && expPositionY < 55) {
    score = 0;
    enemiesArray = [];

    for (let index = 0; index < numberOfEnemies; index++) {
      enemiesArray.push(new EnemyBlueprint());
    }
    enemiesArray2 = [];

    for (let index = 0; index < numberOfEnemies2; index++) {
      enemiesArray2.push(new EnemyBlueprint2());
    }
  }
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
    this.y = Math.random() * (canvas_height - this.height - 200);
    this.speed = Math.random() * 2 + 1;
    this.frameXBat = 1;
    this.frameYBat = 3;
    this.famedir = "pos";

    this.randomColors = [
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
    ];
    this.color =
      "rgb(" +
      this.randomColors[0] +
      "," +
      this.randomColors[1] +
      "," +
      this.randomColors[2] +
      ")";

    this.angle = 0;
    this.frequencyChange = Math.random() * 0.2;
    this.amplitude = Math.random() * 2;

    this.killed = false;
  }
  updateMovement() {
    if (this.x + this.width < 0) {
      this.x = canvas_width;
    }
    this.x -= 0.01;
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
    }
  }
  drawEnemy() {
    // bobContext.fillStyle = this.color;
    // bobContext.fillRect(this.x, this.y, this.width, this.height);
    colCanContext.fillStyle = this.color;
    colCanContext.fillRect(this.x, this.y, this.width, this.height);

    //lets make circles for collision detection
    // .arc( x-coord, y-coord, radius, stargin angle, ending angle)

    // bobContext.beginPath();
    // bobContext.arc(
    //   this.x + this.width / 2,
    //   this.y + this.height / 2,
    //   this.width / 2.5,
    //   0,
    //   Math.PI * 2
    // );
    // bobContext.stroke();

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

class EnemyBlueprint2 {
  constructor() {
    this.width = 100;
    this.height = 100;
    this.x = Math.random() * (canvas_width - this.width);
    this.y = Math.random() * (canvas_height - this.height - 200);
    this.speed = Math.random() * 2 + 1;
    this.frameXBat = 1;
    this.frameYBat = 3;
    this.famedir = "pos";

    this.randomColors = [
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
    ];
    this.color =
      "rgb(" +
      this.randomColors[0] +
      "," +
      this.randomColors[1] +
      "," +
      this.randomColors[2] +
      ")";

    this.angle = 0;
    this.frequencyChange = Math.random() * 0.2;
    this.amplitude = Math.random() * 2;

    this.killed = false;
  }
  updateMovement() {
    if (this.x + this.width < 0) {
      this.x = canvas_width;
    }
    this.x -= 0.01;
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
    }
  }
  drawEnemy() {
    // bobContext.fillStyle = this.color;
    // bobContext.fillRect(this.x, this.y, this.width, this.height);
    colCanContext.fillStyle = this.color;
    colCanContext.fillRect(this.x, this.y, this.width, this.height);

    //lets make circles for collision detection
    // .arc( x-coord, y-coord, radius, stargin angle, ending angle)

    // bobContext.beginPath();
    // bobContext.arc(
    //   this.x + this.width / 2,
    //   this.y + this.height / 2,
    //   this.width / 2.5,
    //   0,
    //   Math.PI * 2
    // );
    // bobContext.stroke();

    bobContext.drawImage(
      playerImage2,
      spriteWidthBat2 * this.frameXBat,
      spriteHeightBat2 * this.frameYBat,
      spriteWidthBat2,
      spriteHeightBat2,
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

for (let index = 0; index < numberOfEnemies2; index++) {
  enemiesArray2.push(new EnemyBlueprint2());
}

// lets put a score up
function drawScore() {
  // bobContext.fillStyle = "white";
  // bobContext.fillText("Score: " + score, 25, 50);
  bobContext.fillStyle = "black";
  bobContext.fillText("Score: " + score, 27, 52);
}

//lets calculate collision detection for the circles
function calcCollision(playerX, playerY) {
  enemiesArray.forEach((enemy) => {
    const distX = enemy.x - playerX;
    const distY = enemy.y - playerY;
    const distance = Math.sqrt(distX * distX + distY * distY);
    if (distance < enemy.width / 2.5 + 100 / 2) {
      enemiesArray.splice(enemiesArray.indexOf(enemy), 1);
      score += 1;
    }
  });
  enemiesArray2.forEach((enemy) => {
    const distX = enemy.x - playerX;
    const distY = enemy.y - playerY;
    const distance = Math.sqrt(distX * distX + distY * distY);
    if (distance < enemy.width / 2.5 + 100 / 2) {
      enemiesArray2.splice(enemiesArray2.indexOf(enemy), 1);
      score += 1;
    }
  });
}

function animate() {
  bobContext.clearRect(0, 0, canvas_width, canvas_height);
  colCanContext.clearRect(0, 0, canvas_width, canvas_height);

  bobContext.drawImage(backgroundImg, 0, 0, canvas_width, canvas_height);

  bobContext.fillStyle = "blue";
  bobContext.fillRect(canvas_width - 100, 0, 100, 50);

  bobContext.fillStyle = "red";
  bobContext.fillText("Reset", canvas_width - 85, 35);

  drawScore();
  enemiesArray.forEach((enemies) => {
    enemies.updateMovement();
    if (enemies.killed === false) {
      enemies.drawEnemy();
      // console.log("point2");
    }
  });

  enemiesArray2.forEach((enemies) => {
    enemies.updateMovement();
    if (enemies.killed === false) {
      enemies.drawEnemy();
      // console.log("point2");
    }
  });

  if (keyPressed === "ArrowUp" && yMove >= 0) {
    yMove -= 3;
  }
  if (
    keyPressed === "ArrowDown" &&
    yMove <= canvas_height - canvas_height / 5
  ) {
    yMove += 3;
  }
  if (keyPressed === "ArrowLeft" && xMove >= 0) {
    xMove -= 3;
  }
  if (keyPressed === "ArrowRight" && xMove <= canvas_width - canvas_width / 5) {
    xMove += 3;
  }

  // bobContext.beginPath();
  // bobContext.arc(xMove + 100 / 2, yMove + 100 / 2, 100 / 2, 0, Math.PI * 2);
  // bobContext.stroke();
  bobContext.drawImage(
    playerKnight,
    0,
    0,
    spriteWidthKnight,
    spriteHeightKnight,
    xMove,
    yMove,
    100,
    100
  );

  // calcCollision(xMove, yMove);

  for (let i = 0; i < explosions.length; i++) {
    explosions[i].update();
    explosions[i].draw();
  }

  gameFrame++;

  requestAnimationFrame(animate);
}
animate();
