const canvas = document.querySelector("#canvas");
const c = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
const gravity = 1.5;

class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = 30;
    this.height = 30;
  }

  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    // gravity
    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += gravity;
    } else {
      this.velocity.y = 0;
    }
  }
}

const player = new Player();

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  player.update();

  if (keys.right.pressed) {
    player.velocity.x = 5;
  } else if (keys.left.pressed) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;
  }
}

animate();

window.addEventListener("keydown", ({ keyCode }) => {
  //Monitor event
  switch (keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = true;
      break;
    case 83:
      console.log("Down");
      break;
    case 87:
      console.log("Up");
      player.velocity.y -= 5;
      break;
    case 68:
      console.log("Right");
      keys.right.pressed = true;
      break;
  }
});

window.addEventListener("keyup", ({ keyCode }) => {
  console.log(keyCode);

  switch (keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = false;
      break;
    case 83:
      console.log("Down");
      break;
    case 87:
      console.log("Up");
      player.velocity.y -= 20;
      break;
    case 68:
      console.log("Right");
      keys.right.pressed = false;
      break;
  }
});
