// ==========================
// MOBILE MENU
// ==========================

const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
};

// ==========================
// ACTIVE NAVBAR ON SCROLL
// ==========================

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

window.onscroll = () => {

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            const activeLink = document.querySelector('.navbar a[href*=' + id + ']');
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }

    });

};

// ==========================
// SCROLL REVEAL
// ==========================

function reveal() {

    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {

        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            reveals[i].classList.add("active");

        }

    }

}

window.addEventListener("scroll", reveal);
reveal();

// ==========================
// STICKY HEADER
// ==========================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    header.classList.toggle("sticky", window.scrollY > 50);

});

// ==========================
// TYPING EFFECT
// ==========================

const typingText = [
    "Data Analytics Enthusiast",
    "Python Developer",
    "SQL Learner",
    "Power BI Developer",
    "Future Data Scientist"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === typingText.length) {
        count = 0;
    }

    currentText = typingText[count];

    letter = currentText.slice(0, ++index);

    const h4 = document.querySelector(".home-content h4");

    if (h4) {
        h4.textContent = letter;
    }

    if (letter.length === currentText.length) {

        setTimeout(() => {

            index = 0;
            count++;

            setTimeout(type, 300);

        }, 1500);

    } else {

        setTimeout(type, 80);

    }

})();

// ==========================
// BACK TO TOP BUTTON
// ==========================

const topBtn = document.createElement("a");

topBtn.href = "#home";
topBtn.className = "top";
topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

// ==========================
// BUTTON RIPPLE EFFECT
// ==========================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function(e) {

        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripple = document.createElement("span");

        ripple.style.left = x + "px";
        ripple.style.top = y + "px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

// ==========================
// CONSOLE MESSAGE
// ==========================

console.log("Welcome to Sandhyashree's Portfolio 🚀");