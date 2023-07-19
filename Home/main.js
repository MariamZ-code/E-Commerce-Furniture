// slider One
var imgSrc1 = document.getElementById("sliderOneImg")
var sliderOneArr = ["../img/slider/homes3.jpg", "../img/slider/homes2.jpg", "../img/slider/homes1.jpg"];

// slider Two
var imgSrc = document.getElementById("sliderTwoImg")
var sliderTwoArr = ["../img/slider/s1.jpg", "../img/slider/s2.jpg", "../img/slider/s3.jpg"];
var i = 0;
var counter = 0;
var timer;
function play() {
    counter++;
    for (var i = 0; i < sliderOneArr.length; i++) {
        imgSrc1.setAttribute("src", sliderOneArr[counter]);
        if (counter == sliderOneArr.length) {
            counter = 0
        }
    }

    
    timer = setTimeout(play, 2000);
}

window.onload(play());


// slider One 
function nextSliderOne() {
    clearTimeout(timer);
    i++
    if (i == sliderOneArr.length) {
        i = 0
    }

    imgSrc1.setAttribute("src", sliderOneArr[i]);

}
function backSliderOne() {
    clearTimeout(timer);
    i--;
    if (i < 0) {
        i = sliderOneArr.length - 1
    }

    imgSrc1.setAttribute("src", sliderOneArr[i]);

}

// slider Two

function nextSlider() {
    i++
    if (i == sliderTwoArr.length) {
        i = 0
    }

    imgSrc.setAttribute("src", sliderTwoArr[i]);

}

function backSlider() {
    i--;
    if (i < 0) {
        i = sliderTwoArr.length - 1
    }

    imgSrc.setAttribute("src", sliderTwoArr[i]);

}


