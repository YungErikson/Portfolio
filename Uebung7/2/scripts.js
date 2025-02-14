function allowDrop(event) {
    event.preventDefault();
    const dropzone = event.target.closest('#dropzone');
    if (dropzone) {
        dropzone.classList.add('drag-over');
    }
}

function dragLeave(event) {
    const dropzone = event.target;
    if (dropzone.id === 'dropzone') {
        dropzone.classList.remove('drag-over');
    }
}

function drag(event) {
    event.dataTransfer.setData('text', event.target.id);
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text'); 
    const draggedElement = document.getElementById(data);

    const dropzone = event.target.closest('#dropzone');

    if (dropzone) {
        dropzone.appendChild(draggedElement);
        dropzone.classList.remove('drag-over'); 
    }
}


