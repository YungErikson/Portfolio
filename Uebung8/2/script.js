const loadButton = document.getElementById("loadButton");
const output = document.getElementById("output");

loadButton.addEventListener("click", () => {
    
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                output.innerHTML += `<p>${xhr.responseText}</p>`;
            } else {
                output.innerHTML += `<p style="color: red;">Fehler beim Laden der Daten!</p>`;
            }
        }
    };

    xhr.open("GET", "daten.txt", true);

    xhr.send();
});
