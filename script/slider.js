function init(){
    for(let i = 0; i < slides.length; i++){
        let slide = slides[i];
        slide.dataset.order = i;
        slide.style.transform = "translate(-50%, -50%)";
        slide.addEventListener("click", clickHandler);
    }

    activeOrder = Math.floor(slides.length/2);
    update();
}

function update(){
    let{width, height} = container.getBoundingClientRect();
    let a = width / 2;
    let b = height / 2 ;
    let delta = Math.PI / slides.length / 2;

    for(let i = 0; i < slides.length; i++){
        let leftSlide = document.querySelector(`.slide[data-order="${activeOrder - i}"]`);
        if(leftSlide){
            leftSlide.style.zIndex = slides.length - i;
            leftSlide.style.opacity = 1 - (1.3 * i) / slides.length;
            leftSlide.style.left = `${width / 2 + a * Math.cos((Math.PI * 3) / 2 - delta * i * 2)}px`;

            leftSlide.style.top = `${-b * Math.sin((Math.PI * 3) / 2 - delta * i *2)}px`;
        }

        let rightSlide = document.querySelector(`.slide[data-order="${activeOrder + i}"]`);
        if(rightSlide){
            rightSlide.style.zIndex = slides.length - i;
            rightSlide.style.opacity = 1 - (1.3 * i) / slides.length;
            rightSlide.style.left = `${width / 2 + a * Math.cos((Math.PI * 3) / 2 + delta * i * 2)}px`;

            rightSlide.style.top = `${-b * Math.sin((Math.PI * 3) / 2 + delta * i *2)}px`;
        }
    }
}

function clickHandler(){
    let order = parseInt(this.dataset.order, 10);
    activeOrder = order;
    update();
}

// Variable declaration

let slider = document.querySelector(".slider");
let container = document.getElementsByTagName("body")[0];
let slides = document.querySelectorAll(".slide");

// variable of central slide
let activeOrder = 0;


init();