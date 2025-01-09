let slideIndex = {
    ongoing: 0,
    previous: 0
};

// Show the specified slide for a specific category (foreground)
function showSlide(n, category) {
    const slides = document.querySelectorAll(`.slideshow-container .mySlides.${category}`);
    slides.forEach(slide => slide.style.display = "none");
    slideIndex[category] = (n + slides.length) % slides.length; // Loop around
    slides[slideIndex[category]].style.display = "block";
}

// Navigate slides for a specific category
function plusSlides(n, category) {
    showSlide(slideIndex[category] + n, category);
}

// Initialize foreground slides
function initForegroundSlides() {
    ["ongoing", "previous"].forEach(category => {
        showSlide(0, category);
    });
}

// Background slideshow
function startBackgroundSlideshow() {
    ["ongoing", "previous"].forEach(category => {
        const backgroundSlides = document.querySelectorAll(`.background-slideshow .mySlides.${category}`);
        let index = 0;

        const updateBackground = () => {
            backgroundSlides.forEach(slide => slide.style.display = "none");
            backgroundSlides[index].style.display = "block";
            index = (index + 1) % backgroundSlides.length;
        };

        updateBackground();
        setInterval(updateBackground, 4000); // Change background every 4 seconds
    });
}

// Initialize everything
document.addEventListener("DOMContentLoaded", () => {
    initForegroundSlides();
    startBackgroundSlideshow();
});

document.addEventListener("DOMContentLoaded", () => {
    const backToTopButton = document.getElementById("backToTop");

    // Show the button when scrolling down
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });

    // Scroll to the top when the button is clicked
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
// Add an event listener to the About Us link
document.getElementById('about-us-link').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor behavior
    const footer = document.getElementsByClassName('footer')[0];
    footer.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the footer
});