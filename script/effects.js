document.addEventListener("DOMContentLoaded", function() {
    let showSlider = new Swiper('.showcase-carousel', {
        loop:true,
        slidesPerView: 3,
        speed: 1800
    });


    document.querySelector('video').playbackRate = 2;
});

// new Swiper('.swiper-container');
