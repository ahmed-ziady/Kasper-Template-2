// 1. Mobile Menu Toggle
const toggleBtn = document.querySelector(".toggle-menu");
const navLinks = document.querySelector("nav ul");

toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

// 2. Landing Background Slider
const landing = document.querySelector(".landing");
const leftBtn = document.querySelector(".fa-angle-left");
const rightBtn = document.querySelector(".fa-angle-right");
const bullets = document.querySelectorAll(".landing .bullets li");

const images = ["landing1.jpg", "landing2.jpg", "landing3.jpg"];
let index = 0;

function updateBackground() {
    landing.style.backgroundImage = `url('Images/${images[index]}')`;
    bullets.forEach((bullet, i) =>
        bullet.classList.toggle("active", i === index)
    );
}

leftBtn.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    updateBackground();
});

rightBtn.addEventListener("click", () => {
    index = (index + 1) % images.length;
    updateBackground();
});

bullets.forEach((bullet, i) => {
    bullet.addEventListener("click", () => {
        index = i;
        updateBackground();
    });
});

// 3. Contact Form Validation
const form = document.querySelector(".contact form");
const inputs = form.querySelectorAll(".main-input");

form.addEventListener("submit", (e) => {
    let valid = true;

    inputs.forEach((input) => {
        if (input.value.trim() === "") {
            valid = false;
            input.style.borderColor = "red";
        } else {
            input.style.borderColor = "#ccc";
        }
    });

    if (!valid) {
        e.preventDefault();
        alert("Please fill in all fields.");
    }
});
