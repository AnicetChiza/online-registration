// Événement de chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    startValueAnimation();
    setupMenuToggle();
    setupPasswordToggle();
});

// Fonction pour démarrer l'animation des valeurs
function startValueAnimation() {
    let valueDisplays = document.querySelectorAll('.num');
    let interval = 4000;

    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseFloat(valueDisplay.getAttribute('data-Val')); // Use parseFloat to handle decimals
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
                clearInterval(counter); // Stop the counter after reaching the end value
            } else {
                clearInterval(counter);
            }
        }, stepDuration);
    });
}

// Fonction pour gérer le menu toggle
document.addEventListener('DOMContentLoaded', function() {
    setupMenuToggle();
});

function setupMenuToggle() {
    const listHeader = document.querySelector('.header-items');
    const menuIcon = document.querySelector('.menu-icon');
    const exit = document.querySelector('.exit-icon');

    if (menuIcon && exit && listHeader) {
        menuIcon.addEventListener('click', () => {
            listHeader.classList.add('active');
            menuIcon.style.display = 'none';
            exit.style.display = 'inline-block';
        });

        exit.addEventListener('click', () => {
            listHeader.classList.remove('active');
            menuIcon.style.display = 'inline-block';
            exit.style.display = 'none';
        });
    }
}

// Fonction pour gérer le toggle de mot de passe
function setupPasswordToggle() {
    let passwordInput = document.querySelector('.password');
    let openIcon = document.querySelector('.open');
    let closeIcon = document.querySelector('.close');

    if (passwordInput && openIcon && closeIcon) {
        passwordInput.setAttribute('type', 'password');

        openIcon.onclick = function() {
            passwordInput.setAttribute('type', 'text');
            openIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        };

        closeIcon.onclick = function() {
            passwordInput.setAttribute('type', 'password');
            openIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        };
    }
}