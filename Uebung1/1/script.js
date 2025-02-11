document.getElementById('actionButton').addEventListener('click', () => {
    const output = document.getElementById('output');
    output.textContent = "Der Button wurde gedrückt!";
    output.style.color = "green";
});
