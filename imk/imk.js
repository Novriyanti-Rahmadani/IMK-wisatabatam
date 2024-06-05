document.addEventListener("DOMContentLoaded", function() {
    // Slider
    var sliderIndex = 0;
    var slides = document.querySelectorAll(".slide");
    var sliderImages = document.querySelector(".slider-images");

    function showSlider() {
        var offset = sliderIndex * -100;
        sliderImages.style.transform = `translateX(${offset}%)`;
    }

    document.querySelector(".next").addEventListener("click", function() {
        sliderIndex = (sliderIndex + 1) % slides.length;
        showSlider();
    });

    document.querySelector(".prev").addEventListener("click", function() {
        sliderIndex = (sliderIndex - 1 + slides.length) % slides.length;
        showSlider();
    });

    // Initialize slider
    showSlider();
});
