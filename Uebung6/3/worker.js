onmessage = function (event) {
    const array = event.data;

    // Zeitmessung starten
    const startTime = performance.now();

    // Selection Sort Algorithmus
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        // Elemente tauschen
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }

    // Zeitmessung beenden
    const endTime = performance.now();
    const timeTaken = (endTime - startTime).toFixed(2); // Zeit in Millisekunden

    // Sortiertes Array und Zeit zurück an den Haupt-Thread senden
    postMessage({ sortedArray: array, timeTaken });
};
