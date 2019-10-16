var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("randomize");

color1.value = "#ff0000";
color2.value = "#ffff00";
setGradient();

function setGradient() {
    body.style.background = "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

    css.textContent = body.style.background + ";";
}

function randomize() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    setGradient();
}

function getRandomColor() {
    var hexValues = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += hexValues[Math.floor(Math.random() * 16)]
    }
    return color;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", randomize);
