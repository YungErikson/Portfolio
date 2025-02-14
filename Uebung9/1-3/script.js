let startTime;
let endTime;

document.addEventListener('DOMContentLoaded', function() {
    startTime = new Date();
    document.querySelectorAll('input, select').forEach(function(element) {
        element.addEventListener('focus', function() {
            logInteraction(`Fokus auf ${element.id} um ${new Date().toLocaleTimeString()}`);
        });
    });
});

function logInteraction(message) {
    const logEntry = document.createElement('li');
    logEntry.textContent = message;
    document.getElementById('logEntries').appendChild(logEntry);
}

function validateForm(event) {
    event.preventDefault();
    let isValid = true;

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const birthdate = document.getElementById('birthdate').value;
    const country = document.getElementById('country').value;
    const terms = document.getElementById('terms').checked;

    if (fullName === "") {
        document.getElementById('fullNameError').textContent = "Der vollständige Name darf nicht leer sein.";
        document.getElementById('fullNameError').style.display = "block";
        isValid = false;
    } else {
        document.getElementById('fullNameError').style.display = "none";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
        document.getElementById('emailError').style.display = "block";
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = "none";
    }

    if (password.length < 8) {
        document.getElementById('passwordError').textContent = "Das Passwort muss mindestens 8 Zeichen lang sein.";
        document.getElementById('passwordError').style.display = "block";
        isValid = false;
    } else {
        document.getElementById('passwordError').style.display = "none";
    }

    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = "Die Passwörter stimmen nicht überein.";
        document.getElementById('confirmPasswordError').style.display = "block";
        isValid = false;
    } else {
        document.getElementById('confirmPasswordError').style.display = "none";
    }

    if (birthdate === "") {
        document.getElementById('birthdateError').textContent = "Das Geburtsdatum darf nicht leer sein.";
        document.getElementById('birthdateError').style.display = "block";
        isValid = false;
    } else {
        document.getElementById('birthdateError').style.display = "none";
    }

    if (country === "") {
        document.getElementById('countryError').textContent = "Bitte wählen Sie ein Land aus.";
        document.getElementById('countryError').style.display = "block";
        isValid = false;
    } else {
        document.getElementById('countryError').style.display = "none";
    }

    if (!terms) {
        document.getElementById('termsError').textContent = "Bitte akzeptieren Sie die allgemeinen Geschäftsbedingungen.";
        document.getElementById('termsError').style.display = "block";
        isValid = false;
    } else {
        document.getElementById('termsError').style.display = "none";
    }

    if (isValid) {
        showSummary(fullName, email, birthdate, country);
    }
}

function showSummary(fullName, email, birthdate, country) {
    document.getElementById('summaryFullName').textContent = fullName;
    document.getElementById('summaryEmail').textContent = email;
    document.getElementById('summaryBirthdate').textContent = birthdate;
    document.getElementById('summaryCountry').textContent = document.getElementById('country').options[document.getElementById('country').selectedIndex].text;
    document.getElementById('summary').style.display = "block";
}

function resetForm() {
    document.getElementById('registrationForm').reset();
    document.getElementById('summary').style.display = "none";
    document.querySelectorAll('.text-danger').forEach(function(element) {
        element.style.display = "none";
    });
}

function submitForm() {
    endTime = new Date();
    const timeDiff = (endTime - startTime) / 1000;
    logInteraction(`Formular abgeschickt um ${endTime.toLocaleTimeString()}`);
    logInteraction(`Benötigte Zeit zum Ausfüllen: ${timeDiff} Sekunden`);
    alert('Formular erfolgreich abgeschickt!');
    resetForm();
}