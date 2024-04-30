let valueDisplays = document.querySelectorAll('.num');
let interval = 4000;

valueDisplays.forEach((valueDisplay), => {
    let startValue = 0;
    let endValue = perseInt(valueDisplay.getAttribute('data-Val'));
    let duration = Math.floor(interval / endValue);
});