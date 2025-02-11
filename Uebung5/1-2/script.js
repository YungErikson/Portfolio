// 1. Rotes Rechteck
const rectangleCanvas = document.getElementById('rectangleCanvas');
const rectCtx = rectangleCanvas.getContext('2d');

rectCtx.fillStyle = 'red';
rectCtx.fillRect(50, 50, 200, 100);

// 2. Text
const textCanvas = document.getElementById('textCanvas');
const textCtx = textCanvas.getContext('2d');

textCtx.font = '20px Arial';
textCtx.fillStyle = 'blue';

textCtx.fillText('Text innerhalb der Grenzen', 10, 30);

textCtx.fillText('Dies ist ein sehr langer Text, der aus dem Canvas herausläuft', 10, 80);

// zweiter Text wird abgeschnitten, da Canvas zu klein ist; ist also nicht mehr nach den Canvas-Grenzen sichtbar