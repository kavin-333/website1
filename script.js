window.addEventListener('load', () => {
    document.getElementById('loading-spinner').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';

    // Sticky Navbar on Scroll
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(0, 0, 0, 0.85)";
        } else {
            navbar.style.background = "rgba(0, 0, 0, 0.6)";
        }
    });
});

let index = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length - 1; // Ignore the last cloned slide

function autoSlide() {
    index++;
    slides.style.transition = "transform 0.8s ease-in-out"; // Adjusted transition duration
    slides.style.transform = `translateX(${-index * 800}px)`;

    // Reset to first image when reaching the cloned image
    if (index === totalSlides) {
        setTimeout(() => {
            slides.style.transition = "none"; // Remove animation for instant jump
            index = 0;
            slides.style.transform = `translateX(0)`;
        }, 800); // Wait for slide transition to complete before resetting
    }
}

setInterval(autoSlide, 3000); // Slide every 3 seconds

// Counter Animation
const counters = document.querySelectorAll(".counter");

function animateCounters() {
    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const increment = target / 100;

        function updateCounter() {
            if (count < target) {
                count += increment;
                counter.textContent = Math.floor(count);
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target;
            }
        }

        updateCounter();
    });
}

// Trigger animation on load
window.onload = animateCounters;
