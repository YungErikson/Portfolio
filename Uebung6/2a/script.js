const startButton = document.getElementById("start");
const resultSpan = document.getElementById("result");
const countdownSpan = document.getElementById("countdown");

startButton.addEventListener("click", () => {
    const worker = new Worker("worker.js");

    let countdown = 10;
    countdownSpan.textContent = countdown;

    const countdownInterval = setInterval(() => {
        countdown--;
        countdownSpan.textContent = countdown;
        if (countdown <= 0) {
            clearInterval(countdownInterval);
        }
    }, 1000);

    worker.postMessage("start");

    worker.onmessage = (e) => {
        resultSpan.textContent = e.data;
        clearInterval(countdownInterval);
    };
});