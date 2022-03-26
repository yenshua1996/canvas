const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth - 4;
canvas.height = innerHeight - 4;
const ground = ctx.canvas.height;
const bounce = 0.5;
requestAnimationFrame(mainLoop);

//Gravity
const gravity = { x: 0, y: 0.1 };

const object = {
  pos: { x: 0, y: 0 },
  vel: { x: 0, y: 0 },
  size: { w: 100, h: 100 },
  update() {
    this.vel.x += gravity.x;
    this.vel.y += gravity.y;
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
    const g = ground - this.size.h;

    if (this.pos.y >= g) {
      this.pos.y = g - (this.pos.y - g);
      this.vel.y = -Math.abs(this.vel.y) * bounce;

      if (this.vel.y >= gravity.y) {
        this.vel.y = 0;
        this.pos.y = g - gravity.y;
      }
    }
  },

  draw() {
    ctx.fillRect(this.pos.x, this.pos.y, this.size.w, this.size.h);
  },

  reset() {
    this.pos.y = this.vel.y = this.vel.x = 0;
  },
};

function mainLoop() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  object.update();
  object.draw();
  requestAnimationFrame(mainLoop);
}

canvas.addEventListener("click", object.reset.bind(object));
