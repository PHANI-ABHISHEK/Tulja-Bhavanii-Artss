// =============================
// TULJA BHAVANII ARTS
// script.js
// =============================

// Smooth fade-in animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.15
});

sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";
    observer.observe(section);
});

// Active navigation link
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
    link.addEventListener("click", function () {
        navLinks.forEach((item) => item.classList.remove("active"));
        this.classList.add("active");
    });
});

// Scroll to top button
const topBtn = document.createElement("button");
topBtn.innerHTML = "⬆";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#ff6b00";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "20px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Welcome message
window.addEventListener("load", () => {
    console.log("Welcome to TULJA BHAVANII ARTS");
});
// Mobile Menu

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if(menuToggle){

menuToggle.addEventListener("click",()=>{

navbar.classList.toggle("active");

});

}
// =============================
// Automatic Image Slider
// =============================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

if(slides.length > 0){

setInterval(()=>{

slides[currentSlide].classList.remove("active");

currentSlide++;

if(currentSlide >= slides.length){

currentSlide = 0;

}

slides[currentSlide].classList.add("active");

},3000);

}