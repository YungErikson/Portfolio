// Startbutton und Resultatelemente
const startButton = document.getElementById("start");
const resultSpan = document.getElementById("result");
const countdownSpan = document.getElementById("countdown");

// Eventlistener für Startbutton
startButton.addEventListener("click", () => {
    const worker = new Worker("worker.js");

    let countdown = 10;
    countdownSpan.textContent = countdown;

    // Countdown-Anzeige
    const countdownInterval = setInterval(() => {
        countdown--;
        countdownSpan.textContent = countdown;
        if (countdown <= 0) {
            clearInterval(countdownInterval);
        }
    }, 1000);

    // Nachricht an den Worker senden
    worker.postMessage("start");

    // Ergebnis vom Worker empfangen
    worker.onmessage = (e) => {
        resultSpan.textContent = e.data;
        clearInterval(countdownInterval);
    };
});