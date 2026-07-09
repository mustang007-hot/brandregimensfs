// ================================
// BRAND REGIMEN SFS
// Main JavaScript
// ================================

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });
});

// Navbar background on scroll
const navbar = document.querySelector(".nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0,0,0,0.95)";
        navbar.style.transition = "0.3s";
    } else {
        navbar.style.background = "rgba(0,0,0,0.75)";
    }

});

// Fade-in animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".section, .card, .cta").forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// Button hover effect
document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-3px)";
        btn.style.boxShadow = "0 12px 30px rgba(212,175,55,.35)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0)";
        btn.style.boxShadow = "none";

    });

});

// Simple counter animation (for future statistics section)
function animateCounter(counter, target) {

    let count = 0;

    const speed = target / 120;

    const update = () => {

        count += speed;

        if (count < target) {

            counter.innerText = Math.floor(count);

            requestAnimationFrame(update);

        } else {

            counter.innerText = target;

        }

    };

    update();

}

// Automatically animate counters if they exist
document.querySelectorAll("[data-count]").forEach(counter => {

    animateCounter(counter, Number(counter.dataset.count));

});

console.log("Brand Regimen SFS website loaded successfully.");