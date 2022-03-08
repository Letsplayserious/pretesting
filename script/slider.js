function init(){
    for(let i = 0; i < slides.length; i++){
        let slide = slides[i];
        slide.dataset.order = i;

        slide.style.transform = "translate(-50%; -50%)";
    }

    activeOrder = Math.floor(slides.length/2);
    update();
}

function update(){
    let{width, height} = container.getBoundingClientRect();
}

// Variable declaration

let slider = document.querySelector(".slider");
let container = document.getElementsByTagName("body")[0];
let slides = document.querySelectorAll(".slide");
let navigations = document.querySelectorAll(".slider-navigation");

// variable of central slide
let activeOrder = 0;


init();