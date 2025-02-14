// 3.2 Erstellen eines Canvas
const canvas = document.getElementById('imageCanvas');
const ctx = canvas.getContext('2d');

// 3.3 Generieren eines HTMLImageElements
function loadAndDrawImage() {
    const img = new Image();

    // 3.4 Sicherstellen des Ladens vor Zeichnen des Bildes
    img.onload = function () {
        // 3.5 Zeichnen des Bildes auf Canvas als Hintergrund
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        drawOverlay();
    };

    img.src = './beispiel.png';
}

// 3.6 Manuelles Zeichnen auf Canvas
function drawOverlay() {
    ctx.beginPath();
    ctx.moveTo(20, 110);
    ctx.lineTo(390, 110);
    ctx.lineTo(390, 280);
    ctx.lineTo(20, 280);
    ctx.closePath();
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 4;
    ctx.stroke();
}

// 3.7 Rufen der Funktion
loadAndDrawImage();
