// Referenz auf den Button und die Ausgabefläche
const startButton = document.getElementById("start-sort");
const output = document.getElementById("output");

// Web Worker initialisieren
const worker = new Worker("worker.js");

// Nachricht vom Worker empfangen
worker.onmessage = function (event) {
    const { sortedArray, timeTaken } = event.data;

    // Sortiertes Array und Zeit anzeigen
    output.innerHTML += `<p><strong>Sortiertes Array:</strong> ${sortedArray}</p>`;
    output.innerHTML += `<p><strong>Sortierzeit:</strong> ${timeTaken} ms</p>`;
};

// Button-Click-Event
startButton.addEventListener("click", () => {
    const array = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));

    // Unsortiertes Array anzeigen
    output.innerHTML = `<p><strong>Unsortiertes Array:</strong> ${array}</p>`;

    // Array an den Worker senden
    worker.postMessage(array);
});
