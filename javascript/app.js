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

// Événement de chargement de la page
document.addEventListener('DOMContentLoaded', startValueAnimation);

//Header changing background
jQuery(function($) {
    const $header = $('header');
    const $list = $('.header-items .link');
    $(window).scroll(function(event) {
        const $current = $(this).scrollTop();
        if ($current > 150) {
            $header.addClass('header-color');
            $list.addClass('link-color'); // Utilisez $listItems ici au lieu de $listItem
        } else {
            $header.removeClass('header-color');
            $list.removeClass('link-color'); // Utilisez $listItems ici au lieu de $listItem
        }
    });
});