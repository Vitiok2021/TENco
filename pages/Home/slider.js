

autoSlider();
var left = 0;
var timer;

function autoSlider() {

    timer = setTimeout(function () {
        var polosa = document.querySelector('#polosa');
        left = left - 250;
        if (left < -1500) {
            left = 0;
            clearTimeout(timer);
        }
        polosa.style.left = left + "px";
        autoSlider();
    }, 5000);
}





