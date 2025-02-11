// Initialisierung
const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');

// Canvas-Größe festlegen
canvas.width = 800;
canvas.height = 400;

// Animationsparameter
let x = 50; // Anfangsposition des Kreises
let y = canvas.height / 2; // Mitte des Canvas
let radius = 30;
let speed = 2; // Geschwindigkeit der Bewegung

// Animationsfunktion
function animate() {
    // Canvas leeren
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Kreis zeichnen
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();

    // Bewegung logik
    x += speed;
    if (x + radius > canvas.width || x - radius < 0) {
        speed = -speed; // Richtung umkehren
    }

    // Nächste Animationsebene aufrufen
    requestAnimationFrame(animate);
}

// Animation starten
animate();
