// Funktion erlaubt das Ablegen eines Elements
function allowDrop(event) {
    event.preventDefault(); // Muss sein, damit das Ablegen funktioniert
    const dropzone = event.target.closest('#dropzone'); // Stellt sicher, dass die Dropzone erkannt wird
    if (dropzone) {
        dropzone.classList.add('drag-over');
    }
}


// Funktion wird beim Verlassen der Dropzone ausgelöst
function dragLeave(event) {
    const dropzone = event.target;
    if (dropzone.id === 'dropzone') {
        dropzone.classList.remove('drag-over'); // Entfernt den visuellen Hinweis
    }
}

// Funktion für das Starten des Drag-Events
function drag(event) {
    event.dataTransfer.setData('text', event.target.id); // Speichert die ID des Elements
}

// Funktion wird ausgelöst, wenn das Element abgelegt wird
function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text'); 
    const draggedElement = document.getElementById(data);

    // Richtiges Dropzone-Element finden
    const dropzone = event.target.closest('#dropzone');

    if (dropzone) {
        dropzone.appendChild(draggedElement);
        dropzone.classList.remove('drag-over'); 
    }
}


