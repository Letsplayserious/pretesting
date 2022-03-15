document.addEventListener("DOMContentLoaded", function() {
    let showSlider = new Swiper('.showcase-carousel', {
        loop:true,
        slidesPerView: 3,
    });


    document.querySelector('video').playbackRate = 2;
});