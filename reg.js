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

// Mobile navigation menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");

        menuToggle.classList.toggle("active", isOpen);
        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

// Navbar background on scroll
const navbar = document.querySelector(".nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(31,31,31,0.98)";
        navbar.style.transition = "0.3s";
    } else {
        navbar.style.background = "rgba(31,31,31,0.94)";
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

// Brand logo fallbacks
document.querySelectorAll(".brand-logo img").forEach(logo => {
    if (logo.complete && logo.naturalWidth === 0) {
        logo.closest(".brand-logo").classList.add("logo-missing");
    }

    logo.addEventListener("error", () => {
        logo.closest(".brand-logo").classList.add("logo-missing");
    });
});

// Customer service widget
const supportWidget = document.querySelector(".support-widget");
const supportToggle = document.querySelector(".support-toggle");
const supportPanel = document.querySelector(".support-panel");
const supportClose = document.querySelector(".support-close");

function setSupportWidget(isOpen) {
    if (!supportWidget || !supportToggle || !supportPanel) return;

    supportWidget.classList.toggle("active", isOpen);
    supportToggle.setAttribute("aria-expanded", String(isOpen));
    supportPanel.setAttribute("aria-hidden", String(!isOpen));
}

if (supportWidget && supportToggle && supportPanel) {
    supportToggle.addEventListener("click", () => {
        setSupportWidget(!supportWidget.classList.contains("active"));
    });

    supportClose?.addEventListener("click", () => {
        setSupportWidget(false);
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            setSupportWidget(false);
        }
    });
}

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
