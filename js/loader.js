var loader = document.getElementById("preloader");

window.onload = fadeOut;

function fadeOut() {
    var opacity = 1;
    var intervalID = setInterval(function () {
        if (opacity > 0) {
            opacity = opacity - 0.1;
            loader.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 50);
}

/*function fadeIn() {
    var opacity = 0;
    var intervalID = setInterval(function () {
        if (opacity < 1) {
            opacity = opacity + 0.1;
            loader.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 50);
}*/
