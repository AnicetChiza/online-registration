// Fonction pour démarrer l'animation des valeurs lors du défilement vers le bas
function startValueAnimationOnScroll() {
    let valueDisplays = document.querySelectorAll('.num');
    let interval = 4000;
    let lastScrollTop = 0;

    function startAnimationIfVisible() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // L'utilisateur fait défiler la page vers le bas
            valueDisplays.forEach((valueDisplay) => {
                let bounding = valueDisplay.getBoundingClientRect();
                if (
                    bounding.top >= 0 &&
                    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                ) {
                    // L'élément est visible dans la fenêtre, commencer l'animation
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
                }
            });
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Met à jour la position du dernier défilement
    }

    // Démarrer l'animation si les éléments sont visibles au chargement initial
    startAnimationIfVisible();

    // Écouter l'événement de défilement et démarrer l'animation lorsque les éléments deviennent visibles
    window.addEventListener('scroll', startAnimationIfVisible);
}

// Appel de la fonction pour démarrer l'animation lors du défilement
startValueAnimationOnScroll();