const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
console.log(ctx);

const canvas_width = (canvas.width = 600);
const canvas_height = (canvas.height = 600);

// function animate() {
//   ctx.clearRect(0, 0, canvas_width, canvas_height);
//   ctx.fillRect(x, 50, 100, 100);
//   x++;
//   requestAnimationFrame(animate);
// }

// let x = 0;
// animate();

// const playerImage = new Image();
// playerImage.src = "bat-sprite.png";

// function animate2() {
//   ctx.clearRect(0, 0, canvas_width, canvas_height);
//   //   ctx.fillRect(50, 50, 100, 100);
//   ctx.drawImage(playerImage, 0, 0);
//   requestAnimationFrame(animate2);
// }
// animate2();
