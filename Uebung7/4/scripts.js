function addTask() {
    const taskText = document.getElementById('task-text').value;
    const taskColor = document.getElementById('task-color').value;

    if (taskText.trim() === '') {
        alert('Bitte geben Sie einen Aufgabentext ein.');
        return;
    }

    const task = document.createElement('div');
    task.className = 'task';
    task.style.backgroundColor = taskColor;
    task.draggable = true;
    task.ondragstart = drag;

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Bearbeiten';
    editBtn.onclick = () => editTask(task);

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Löschen';
    deleteBtn.style.display = 'none';
    deleteBtn.onclick = () => deleteTask(task);

    task.appendChild(taskContent);
    task.appendChild(editBtn);
    task.appendChild(deleteBtn);

    document.getElementById('todo').querySelector('.tasks').appendChild(task);

    document.getElementById('task-text').value = '';
}

function deleteTask(task) {
    const isInTrash = task.closest('#trash .tasks') !== null;
    if (isInTrash) {
        task.remove();
    } else {
        alert('Aufgaben können nur im Trash-Bereich gelöscht werden!');
    }
}

let draggedTask = null;

function drag(event) {
    draggedTask = event.target;
    event.dataTransfer.setData('text', event.target.outerHTML);
    event.target.classList.add('dragging');
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const targetColumn = event.target.closest('.tasks');

    if (targetColumn && draggedTask) {
        draggedTask.remove();

        targetColumn.appendChild(draggedTask);

        if (targetColumn.parentElement.id === 'done') {
            draggedTask.classList.add('done');
        } else {
            draggedTask.classList.remove('done');
        }

        const deleteBtn = draggedTask.querySelector('.delete-btn');
        if (targetColumn.parentElement.id === 'trash') {
            deleteBtn.style.display = 'block';
        } else {
            deleteBtn.style.display = 'none';
        }
    }
}

document.querySelectorAll('.tasks').forEach(column => {
    column.ondragover = allowDrop;
    column.ondrop = drop;
});

function editTask(task) {
    const newText = prompt('Neuer Aufgabentext:', task.querySelector('span').textContent);
    if (newText !== null && newText.trim() !== '') {
        task.querySelector('span').textContent = newText;
    }

    const newColor = prompt('Neue Farbe (Hex-Code):', task.style.backgroundColor);
    if (newColor !== null && newColor.trim() !== '') {
        task.style.backgroundColor = newColor;
    }
}
