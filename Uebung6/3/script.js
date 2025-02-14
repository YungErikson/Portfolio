const startButton = document.getElementById("start-sort");
const output = document.getElementById("output");


const worker = new Worker("worker.js");

worker.onmessage = function (event) {
    const { sortedArray, timeTaken } = event.data;

    output.innerHTML += `<p><strong>Sortiertes Array:</strong> ${sortedArray}</p>`;
    output.innerHTML += `<p><strong>Sortierzeit:</strong> ${timeTaken} ms</p>`;
};

startButton.addEventListener("click", () => {
    const array = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));

    output.innerHTML = `<p><strong>Unsortiertes Array:</strong> ${array}</p>`;

    worker.postMessage(array);
});
