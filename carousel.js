const carousel = document.getElementsByClassName('imgCar')[0];
valor = 0;

function fadeAway() {
    let sliderCurrent = document.querySelector('#slider-current');
    sliderCurrent.id = 'slider';
    if (valor == carousel.children.length - 1) {
        valor = 0;
        carousel.children[valor].id = 'slider-current';
    } else {
        carousel.children[++valor].id = 'slider-current';
    }
}

setInterval(fadeAway, 5000);
