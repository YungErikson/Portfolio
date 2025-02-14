const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 400;

let x = 50;
let y = canvas.height / 2;
let radius = 30;
let speed = 2;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();

    x += speed;
    if (x + radius > canvas.width || x - radius < 0) {
        speed = -speed;
    }

    requestAnimationFrame(animate);
}

animate();
