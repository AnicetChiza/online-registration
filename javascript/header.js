// Événement de chargement de la page
document.addEventListener('DOMContentLoaded', startValueAnimation);

//Header changing background
jQuery(function($) {
    const $header = $('header');
    $(window).scroll(function(event) {
        const $current = $(this).scrollTop();
        if ($current > 150) {
            $header.addClass('header-color');
        } else {
            $header.removeClass('header-color');
        }
    });
});