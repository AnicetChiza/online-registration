// Événement de chargement de la page
document.addEventListener('DOMContentLoaded', startValueAnimation);
// Fonction pour démarrer l'animation des valeurs
function startValueAnimation() {
    let valueDisplays = document.querySelectorAll('.num');
    let interval = 4000;

    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute('data-Val'));
        let decimalPart = endValue % 1; // Obtenir la partie décimale
        let steps = Math.floor(endValue); // Nombre d'étapes entières
        let stepDuration = interval / steps;
        let counter = setInterval(function() {
            if (startValue < steps) {
                startValue += 1;
                valueDisplay.textContent = startValue;
            } else if (startValue === steps && decimalPart > 0) {
                // Gérer la partie décimale si présente
                startValue += decimalPart;
                valueDisplay.textContent = endValue.toFixed(1); // Afficher avec 1 décimale
            } else {
                clearInterval(counter);
            }
        }, stepDuration);
    });
}

//Header
const listHeader = document.querySelector('.header-items');
const menuIcon = document.querySelector('.menu-icon');
const exit = document.querySelector('.exit-icon');

if (openMenu) {
    openMenu.addEventListener('click', () => {
        listHeader.classList.add('toogle');
        menuIcon.style.display = 'none';
        exit.style.display = 'inline-block';
    })
}

//SHOWING INPUT PASSWORD
let passwordInput = document.querySelector('.password');
let openIcon = document.querySelector('.open');
let closeIcon = document.querySelector('.close');

passwords.setAttribute('type', 'password');

openIcon.onclick = function() {
    passwords.setAttribute('type', 'text');
    openIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
}

closeIcon.onclick = function() {
    passwords.setAttribute('type', 'password');
    openIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
}