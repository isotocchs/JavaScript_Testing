// Tell vs code you're working with canvas
/** @type {HTMLCanvasElement} */

const bob = document.getElementById("canvasE");
// console.log(bob);
const bobContext = bob.getContext("2d");
// console.log(bobContext);

const canvas_width = (bob.width = 600);
const canvas_height = (bob.height = 600);

// lets make many enemies
const numberOfEnemies = 100;
const enemiesList = [];

// let enemyx = 10;
// let enemyy = 50;
// let enemyWidth = 100;
// let enemyHeight = 100;

//create enemy object
// const enemy1 = {
//   x: 10,
//   y: 50,
//   width: 100,
//   height: 100,
// };

// const desk = {
//   color: "brown",
//   height: 10,
//   numberOfLegs: 7,
//   doesItHaveDrawers: false,
//   width: 100,
// };

// // console.log(desk);
console.log(Math.random());

// create enemy class - to produce multiple enemies
class Enemy {
  constructor() {
    //this keyword refers to the new object you are creating
    this.x = Math.random() * canvas_width;
    this.y = Math.random() * canvas_height;
    this.width = 50;
    this.height = 50;
    this.speed = Math.random() * 4 - 2;

    //lets make the initial position random instead
    // this.x = Math.random() * canvas_width;
    // this.y = Math.random() * canvas_height;

    //let change how fast the enemies move
    // this.speed = Math.random() * 4 - 2;
  }
  //classes can have custom methods.
  //Lets make one that changes the position of the enemies
  //instead of doing it by hand.
  updateMovement() {
    // this.x += 0.5;
    // this.y += 1;

    // lets use the speed to change the direction
    // this.x += this.speed;
    this.y += this.speed;
  }
  //lets also make a draw method that lets us draw enemies easier.
  drawEnemy() {
    bobContext.fillRect(this.x, this.y, this.width, this.height);

    //draw the enemy sprite that you found online.
  }
}

//lets make an enemy object
// const enemyObjectFromClass = new Enemy();
// console.log(enemyObjectFromClass);

// lets make many enemies
for (let i = 0; i < numberOfEnemies; i++) {
  //push method takes whatever you give it and
  //pushes it to the end of the array
  enemiesList.push(new Enemy());
}
//use console.log to make sure that your loop and everything else is working
// console.log(enemiesArray);

function animate() {
  // clean up the canvas
  bobContext.clearRect(0, 0, canvas_width, canvas_height);

  //move enemy in x axis
  // enemy1.x += 0.5;
  // enemyObjectFromClass.updateMovement();

  //move enemy in y axis
  // enemy1.y += 1;
  //move enemy with update method instead. make sure to end it with () when you call it.
  //enemy1.update();

  //draw the enemy rect
  // bobContext.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);

  //draw enemy with the draw method instead.
  // enemyObjectFromClass.drawEnemy();

  //use the forEach method to update and draw each enemy in the array.
  enemiesList.forEach((enemy) => {
    enemy.updateMovement();
    enemy.drawEnemy();
  });

  //create the infinate loop
  requestAnimationFrame(animate);
}

//start the animation the first time.
animate();
