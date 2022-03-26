const canvas = document.querySelector("#canvas");

const ctx = canvas.getContext("2d");

let circleArr = [];
const lineArr = [];
const rectArr = [];

const mouse = {
  x: null,
  y: null,
};

const colorArray = ["#ffaa33", "#99ffaaa", "#00ff00", "#4411aa", "#ff1100"];

const maxRadius = 40;
const minRadius = 2;

//Moving mouse event
window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

window.addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

//Circle constructor
function Circle(x, y, radius, dx, dy) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.minRadius = radius;
  this.startAngle = 0;
  this.PI = Math.PI * 2;
  this.dx = dx;
  this.dy = dy;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
}

//Draw prototype method
Circle.prototype.draw = function () {
  //Arc begin path
  ctx.beginPath();

  //Arc property
  ctx.arc(this.x, this.y, this.radius, this.startAngle, this.PI, false);

  //Draw Arc
  ctx.stroke();

  //Give arc color
  ctx.fillStyle = this.color;

  ctx.fill();
};

//Update prototype method
Circle.prototype.update = function () {
  //Velocity condition for x axis
  if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
    this.dx = -this.dx;
  }

  //Velocity condition for y axis
  if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
    this.dy = -this.dy;
  }

  //Update x and y with velocity value
  this.x += this.dx;
  this.y += this.dy;

  //Interactivity
  if (
    mouse.x - this.x < 50 &&
    mouse.x - this.x > -50 &&
    mouse.y - this.y < 50 &&
    mouse.y - this.y > -50
  ) {
    if (this.radius < maxRadius) {
      this.radius += 1;
    }
  } else if (this.radius > this.minRadius) {
    this.radius -= 1;
  }

  //draw after update
  this.draw();
};

/////////////////////////////////////

//Line Constructor
// class Line {
//   //constructor
//   constructor(moveX, moveY, lineX, lineY) {
//     this.moveX = moveX;
//     this.moveY = moveY;
//     this.lineX = lineX;
//     this.lineY = lineY;
//     this.randomColor();
//   }

//   //draw line method
//   drawLine() {
//     ctx.strokeStyle = this.rgb;
//     ctx.beginPath();
//     ctx.moveTo(this.moveX, this.moveY);
//     ctx.lineTo(this.lineX, this.lineY);
//     ctx.stroke();
//   }

//   //random color
//   randomColor() {
//     let red = Math.random() * 255;
//     let blue = Math.random() * 255;
//     let green = Math.random() * 255;
//     let value = `rgb(${red}, ${blue}, ${green})`;
//     this.rgb = value;
//   }
// }

// for (let i = 0; i < 100; i++) {
//   let moveX = Math.random() * innerWidth;
//   let moveY = Math.random() * innerHeight;
//   let lineX = Math.random() * innerWidth;
//   let lineY = Math.random() * innerHeight;

//   const line = new Line(moveX, moveY, lineX, lineY);

//   lineArr.push(line);
// }

// class Rectangle {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.width;
//     this.height;
//     this.randomRectSize();
//     this.randomColor();
//   }

//   drawRect() {
//     ctx.fillStyle = this.rgb;
//     ctx.rect(this.x, this.y, this.width, this.height);
//     ctx.fill();
//   }

//   randomRectSize() {
//     this.width = Math.random() * 255;
//     this.height = Math.random() * 255;
//   }

//   //random color
//   randomColor() {
//     let red = Math.random() * 255;
//     let blue = Math.random() * 255;
//     let green = Math.random() * 255;
//     let value = `rgb(${red}, ${blue}, ${green})`;
//     this.rgb = value;
//   }
// }

// for (let i = 0; i < 20; i++) {
//   let moveX = Math.random() * innerWidth;
//   let moveY = Math.random() * innerHeight;

//   const rect = new Rectangle(moveX, moveY);

//   rectArr.push(rect);
// }

function init() {
  circleArr = [];

  //Create 50 circle
  for (let i = 0; i < 200; i++) {
    //Randomize properties
    let radius = Math.random() * 3 + 1;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 5;
    let dy = (Math.random() - 0.5) * 5;

    //Create circle
    const circle = new Circle(x, y, radius, dx, dy);

    //Push to circleArr
    circleArr.push(circle);
  }
}

//Animate function
function animate() {
  //Request animation
  requestAnimationFrame(animate);

  //Clear canvas
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  //Draw circle and update
  for (let y = 0; y < circleArr.length; y++) {
    circleArr[y].update();
  }
}

init();

animate();
