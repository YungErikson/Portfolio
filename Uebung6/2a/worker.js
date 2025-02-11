// Berechnung einer großen Zahl (z. B. die Summe von 1 bis 10 Milliarden)
self.onmessage = () => {
    let sum = 0;
    for (let i = 1; i <= 1_000_000_000_0; i++) {
        sum += i;
    }
    postMessage(sum);
};
