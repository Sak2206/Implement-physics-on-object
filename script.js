const object = document.getElementById('object');
const box = {
  x: 50,
  y: 50,
  width: 50,
  height: 50,
  dx: 2, 
  dy: 0, 
  gravity: 0.1
};

function update() {
  box.x += box.dx;
  box.dy += box.gravity;
  box.y += box.dy;

  if (box.x < 0 || box.x + box.width > window.innerWidth) {
    box.dx *= -1;
  }

  if (box.y + box.height > window.innerHeight) {
    box.y = window.innerHeight - box.height;
    box.dy *= -0.8;
  }

  object.style.left = `${box.x}px`;
  object.style.top = `${box.y}px`;

  requestAnimationFrame(update);
}
update();
