let currentAnimation;
let customeAnimation = ["Blank", "Exercise", "Juggler", "Bike", "Dive"];
var myInterval;

function startAnimation() {
    currentAnimation = document.getElementById("text-area").value;
    document.getElementById("stop").disabled = false;
    document.getElementById("start").disabled = true;
    document.getElementById("animation").disabled = true;
    let count = 0;
    myInterval = setInterval(function () {
        document.getElementById("text-area").value = ANIMATIONS[customeAnimation[count++]];
        if (count == 5)
            count = 0;
    }, 250);
}

function stopAnimation() {
    clearInterval(myInterval);
    let x = document.getElementById("animation").value;
    document.getElementById("text-area").value = ANIMATIONS[x];
    document.getElementById("start").disabled = false;
    document.getElementById("animation").disabled = false;
    document.getElementById("stop").disabled = true;
}


function animationOnChange() {
    document.getElementById("text-area").value = "";
    let x = document.getElementById("animation").value;
    document.getElementById("text-area").value = ANIMATIONS[x];
}


function fontSizeOnChange() {
    let fontSize = document.getElementById("fontsize").value;
    document.getElementById("text-area").style.fontSize = fontSize;
}


function checkUncheck() {    
    let count = 0;
    if(document.getElementById("turbo").checked) {     
        myInterval = setInterval(function () {
            document.getElementById("text-area").value = ANIMATIONS[customeAnimation[count++]];
            if (count == 5)
                count = 0;
        }, 50);
    } else {
        myInterval = setInterval(function () {
            document.getElementById("text-area").value = ANIMATIONS[customeAnimation[count++]];
            if (count == 5)
                count = 0;
        }, 250);
    }
}