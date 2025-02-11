// Aufgabe 2.2, 2.4, 2.5: Elementreferenz und Event-Listener
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('textElement');
    const texts = [
        "Neuer Text 1",
        "Neuer Text 2",
        "Neuer Text 3"
    ];

    function changeText() {
        const randomIndex = Math.floor(Math.random() * texts.length);
        textElement.textContent = texts[randomIndex];
    }

    textElement.addEventListener('click', changeText);
});

// Aufgabe 3: Klasse Person
class Person {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    static genPerson() {
        const name = document.getElementById('nameInput').value;
        const age = document.getElementById('ageInput').value;
        return new Person(name, age);
    }
}

// Funktion zur Ausgabe der Person
function createPerson() {
    const person = Person.genPerson();
    document.getElementById('output').textContent = 
        `Name: ${person.name}, Alter: ${person.age}`;
}

// Aufgabe 4: Bild ein-/ausblenden
function toggleImage() {
    const image = document.getElementById('toggleImage'); // Korrekte Anführungszeichen
    image.style.visibility = 
        image.style.visibility === 'hidden' ? 'visible' : 'hidden';
}