// Tell vs code you're working with canvas
/** @type {HTMLCanvasElement} */

const bob = document.getElementById("canvasPAS");
const bobContext = bob.getContext("2d");

const canvas_width = (bob.width = 600);
const canvas_height = (bob.height = 600);

let canvasPosition = bob.getBoundingClientRect();
const explosions = [];

//lets listen for a mouse click
window.addEventListener("click", function (e) {
  let testWidth = 50;
  let testHeight = 50;
  console.log(e);
  //   let positionX = e.x - canvasPosition.left - testWidth / 2;
  //   let positionY = e.y - canvasPosition.top - testHeight / 2;

  bobContext.fillRect(e.x, e.y, testWidth, testHeight);
  //   let expPositionX = e.x - canvasPosition.left;
  //   let expPositionY = e.y - canvasPosition.top;

  //   explosions.push(new Explosion(expPositionX, expPositionY));
});

// class Explosion {
//   //now constructor takes in Info - (x,y) coordinates
//   constructor(x, y) {
//     this.expMaxFramesX = 8;
//     this.expMaxFramesY = 6;
//     this.expWidth = 1920 / this.expMaxFramesX;
//     this.expHeight = 1440 / this.expMaxFramesY;
//     this.drawWidth = this.expWidth * 0.7;
//     this.drawHeight = this.expHeight * 0.7;
//     this.expX = x - this.drawWidth / 2;
//     this.expY = y - this.drawHeight / 2;

//     //new way to import the image
//     this.expImage = new Image();
//     this.expImage.src = "explosions.png";
//     this.expFrameX = 0;
//     this.expFrameY = 0;
//     this.gameFrame = 0;
//   }
//   update() {
//     this.gameFrame++;
//     if (this.gameFrame % 2 === 0) {
//       if (this.expFrameX < this.expMaxFramesX - 1) {
//         this.expFrameX++;
//       } else {
//         this.expFrameY++;
//         this.expFrameX = 0;
//       }
//     }
//   }

//   draw() {
//     bobContext.drawImage(
//       this.expImage,
//       this.expWidth * this.expFrameX,
//       this.expHeight * this.expFrameY,
//       this.expWidth,
//       this.expHeight,
//       this.expX,
//       this.expY,
//       this.drawWidth,
//       this.drawHeight
//     );
//   }
// }

// function animate() {
//   bobContext.clearRect(0, 0, canvas_width, canvas_height);
//   for (let i = 0; i < explosions.length; i++) {
//     explosions[i].update();
//     explosions[i].draw();
//   }
//   requestAnimationFrame(animate);
// }
// animate();
