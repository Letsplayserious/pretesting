document.addEventListener("DOMContentLoaded", function() {
    // SLIDER
    let showSlider = new Swiper('.showcase-carousel', {
        loop:true,
        slidesPerView: 3,
        speed: 1800,
        centeredSlides: true
    });

    //VIDEO SPEED
    document.querySelector('video').playbackRate = 2;
});
