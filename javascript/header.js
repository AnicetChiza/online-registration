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

//Header
const allItems = document.querySelector('.header-items');
const openMenu = document.querySelector('.menu-icon');
const closeMenu = document.querySelector('.exit-icon');

if (openMenu) {
    openMenu.addEventListener('click', () => {
        allItems.classList.add('toogle');
        openMenu.style.display = 'none';
        closeMenu.style.display = 'inline-block';
    })
}