const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerWidth / 2;
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerWidth / 2;
  blockDi = canvas.width / 500 * 25;
}
window.addEventListener('resize', resizeCanvas);

let blockDi = canvas.width / 500 * 10;

let player = {
  x: canvas.width - blockDi,
  y: blockDi
};
let keys = {
  "ArrowUp": false,
  "ArrowDown": false,
  "ArrowRight": false,
  "ArrowLeft": false
};
document.addEventListener('keydown', e => keys[e.key] = true);
document.addEventListener('keyup', e => keys[e.key] = false);
function drawPlayer() {
  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.arc(player.x, player.y, blockDi, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}
const speed = 5;
function movePlayer() {
  if(keys["ArrowUp"]) {
    player.y -= speed;
  }
  if(keys["ArrowDown"]) {
    player.y += speed;
  }
  if(keys["ArrowRight"]) {
    player.x += speed;
  }
  if(keys["ArrowLeft"]) {
    player.x -= speed;
  }
  if(player.x + blockDi > canvas.width) {
    player.x = canvas.width - blockDi;
  }
  if(player.x - blockDi < 0) {
    player.x = blockDi;
  }
  if(player.y + blockDi > canvas.height) {
    player.y = canvas.height - blockDi;
  }
  if(player.y - blockDi < 0) {
    player.y = blockDi;
  }
}



function updateFrame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer();
  movePlayer();

  requestAnimationFrame(updateFrame);
}
updateFrame();
