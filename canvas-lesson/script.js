// const canvas = document.querySelector("#canvas");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const ctx = canvas.getContext("2d");

// ctx.fillRect(20, 20, 100, 100);

/* 
    Essential Skills for canvas 

    1. Creating and Resizing your canvas. 
    2. Drawing Element in canvas. 
    3. Animating Element in canvas. 
    4. Interacting with Element in canvas. 

    Canvas Element/Object 
     
    1. Rectangle 
    2. Lines 
    3. Arc/Circle 
    4. Bezier Curves 
    5. Images 
    6. Text
*/

//Create canvas
function createCanvas(id, option) {
  const canvas = document.querySelector(id);
  const ctx = canvas.getContext("2d");
  canvas.width = option.width;
  canvas.height = option.height;

  return {
    ctx,
  };
}

const render = createCanvas("#canvas", {
  width: window.innerWidth,
  height: window.innerHeight,
  context: "2d",
});

//Rectangle
// render.ctx.fillRect(x, y, height, width)
// render.ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
// render.ctx.fillRect(10, 10, 100, 100);

// render.ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
// render.ctx.fillRect(120, 10, 100, 100);

// render.ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
// render.ctx.fillRect(230, 10, 100, 100);

//Random rectangle
// setInterval(() => {
//   for (let i = 0; i < 10; i++) {
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     let red = Math.random() * 255;
//     let blue = Math.random() * 255;
//     let green = Math.random() * 255;
//     let rectWidth = Math.random() * 100;
//     let rectHeight = Math.random() * 100;
//     let rgb = `rgb(${red}, ${blue}, ${green}, ${Math.random() * 1})`;

//     render.ctx.fillStyle = rgb;
//     render.ctx.fillRect(x, y, rectWidth, rectHeight);
//   }
// }, 60000);

//Line
//render.ctx.beginPath();
//render.ctx.moveTo(x, y);
//render.ctx.lineTo(x, y);
//render.ctx.stroke()

// render.ctx.beginPath();
// render.ctx.moveTo(100, 400);
// render.ctx.lineTo(400, 400);
// render.ctx.lineTo(123, 200);
// render.ctx.lineTo(300, 100);
// render.ctx.strokeStyle = "blue";
// render.ctx.stroke();

//Arc/Circle
// render.ctx.beginPath();
// render.ctx.arc(100, 400, 30, 0, Math.PI * 2, false);
// render.ctx.strokeStyle = "pink";
// render.ctx.stroke();

// for (let i = 0; i < 100; i++) {
//   //random coords
//   const x = Math.random() * window.innerWidth;
//   const y = Math.random() * window.innerHeight;

//   //random color
//   const red = Math.trunc(Math.random() * 255);
//   const green = Math.trunc(Math.random() * 255);
//   const blue = Math.trunc(Math.random() * 255);

//   //draw object
//   render.ctx.beginPath();
//   render.ctx.arc(x, y, 30, 0, Math.PI * 2, false);
//   render.ctx.strokeStyle = `rgb(${red}, ${green}, ${blue})`;
//   render.ctx.stroke();
// }

let x = 200;
let y = 200;
let dx = 10;
let dy = 10;
let radius = 30;

function animate() {
  //Recursive
  requestAnimationFrame(animate);
  //Clear canvas
  render.ctx.clearRect(0, 0, innerWidth, innerHeight);
  //Draw circle
  render.ctx.beginPath();
  render.ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  render.ctx.strokeStyle = "red";
  render.ctx.stroke();

  //Increment velocity

  if (x + radius > innerWidth || x - radius < 0) {
    dx = -dx;
  }

  if (y + radius > innerHeight || y - radius < 0) {
    dy = -dy;
  }

  x += dx;
  y += dy;
}

animate();
