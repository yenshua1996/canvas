const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const timeInterval = 100;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//RANDOM Object

// //Create Random rectangle shapes
// setInterval(() => {
//   for (let i = 0; i < 5; i++) {
//     let x = Math.trunc(Math.random() * window.innerWidth);
//     let y = Math.trunc(Math.random() * window.innerHeight);
//     let rectHeight = Math.trunc(Math.random() * 150);
//     let rectWidth = Math.trunc(Math.random() * 150);
//     let red = Math.trunc(Math.random() * 255);
//     let green = Math.trunc(Math.random() * 255);
//     let blue = Math.trunc(Math.random() * 255);
//     let alpha = Math.random() * 1;
//     let rgba = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

//     ctx.fillStyle = rgba;
//     ctx.fillRect(x, y, rectWidth, rectHeight);
//   }
// }, timeInterval);

// //Create Random Line
// setInterval(() => {
//   for (let i = 0; i < 10; i++) {
//     let posX = Math.trunc(Math.random() * window.innerWidth);
//     let posY = Math.trunc(Math.random() * window.innerHeight);
//     let lineX = Math.trunc(Math.random() * window.innerWidth);
//     let lineY = Math.trunc(Math.random() * window.innerHeight);
//     let red = Math.trunc(Math.random() * 255);
//     let green = Math.trunc(Math.random() * 255);
//     let blue = Math.trunc(Math.random() * 255);
//     let alpha = Math.random() * 1;
//     let rgba = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

//     ctx.beginPath();
//     ctx.strokeStyle = rgba;
//     ctx.moveTo(posX, posY);
//     ctx.lineTo(lineX, lineY);
//     ctx.stroke();
//   }
// }, timeInterval);

// setInterval(() => {
//   for (let i = 0; i < 10; i++) {
//     let x = Math.trunc(Math.random() * window.innerWidth);
//     let y = Math.trunc(Math.random() * window.innerHeight);
//     let arcRadius = Math.trunc(Math.random() * 50);
//     let startAngle = 0;
//     let red = Math.trunc(Math.random() * 255);
//     let green = Math.trunc(Math.random() * 255);
//     let blue = Math.trunc(Math.random() * 255);
//     let alpha = Math.random() * 1;
//     let rgba = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

//     ctx.beginPath();
//     ctx.strokeStyle = rgba;
//     ctx.arc(x, y, arcRadius, startAngle, Math.PI * 2);
//     ctx.stroke();
//   }
// }, timeInterval);

//Animating object

function bouncingBall() {
  //State
  let x = 200;
  let y = 200;
  let dx = 5;
  let dy = 5;
  let arcRadius = 50;

  //Animate function
  function animate() {
    //Request animation frame fn
    requestAnimationFrame(animate);

    //Clear canvas
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    //Draw
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "yellow";
    ctx.arc(x, y, arcRadius, 0, Math.PI * 2);
    ctx.stroke();

    //Check x
    if (x + arcRadius > innerWidth || x - arcRadius < 0) {
      dx = -dx;
    }

    //Check y
    if (y + arcRadius > innerHeight || y - arcRadius < 0) {
      dy = -dy;
    }

    //Increment and assign speed variable
    x += dx;
    y += dy;
  }

  animate();
}

bouncingBall();
