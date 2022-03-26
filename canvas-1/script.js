const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let x = 0;
let y = 0;
let dx = 1;
let dy = 20;

class Rectangle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.draw();
  }

  draw() {
    ctx.fillStyle = "orange";
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fill();
  }

  updateCoordsX(x) {
    this.x = x;

    this.draw();
  }

  updateCoordsY(y) {
    this.y = y;

    this.draw();
  }
}

const rectangle = new Rectangle(x, y, 15, 15);

function animate() {
  requestAnimationFrame(animate);

  ctx.clearRect(0, 0, innerWidth, innerHeight);

  x += dx;

  rectangle.updateCoordsX(x);
}

animate();

// window.addEventListener("keydown", (e) => {
//   if (e.key === "d") {
//     x += dx;

//     if (x > innerWidth) {
//       console.log("You lose");
//       ctx.clearRect(0, 0, innerWidth, innerHeight);
//     } else {
//       rectangle.updateCoordsX(x);
//     }
//   }

//   if (e.key === "a") {
//     x -= dx;

//     rectangle.updateCoordsX(x);
//   }

//   if (e.key === "s") {
//     y += dy;
//     rectangle.updateCoordsY(y);
//   }

//   if (e.key === "w") {
//     y -= dy;
//     rectangle.updateCoordsY(y);
//   }
// });
