document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".bg-video");

  if (video) {
    video.playbackRate = 0.75; // 0.5 = half speed (slow motion)
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var typed = new Typed("#typed", {
    strings: [
        "Computer Science Graduate Student",
        "Software Engineer",
        "AWS Certified Developer-Associate",
        "Machine Learning Practitioner"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
  });
});

const navbar = document.querySelector(".navbar");
const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");
const heroSection = document.querySelector("#home");

/* Mobile menu toggle */
if (hamburger && menu) {
  hamburger.addEventListener("click", function () {
    const hamIcon = this.querySelector(".hamburger-icon");
    const crossIcon = this.querySelector(".cross-icon");
    const isOpen = menu.classList.contains("menu-open");

    if (isOpen) {
      menu.classList.remove("menu-open");
      hamIcon.style.display = "inline-block";
      crossIcon.style.display = "none";
    } else {
      menu.classList.add("menu-open");
      hamIcon.style.display = "none";
      crossIcon.style.display = "inline-block";
    }
  });
}

/* Navbar background on scroll */
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

if (heroSection && navbar) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          navbar.classList.remove("nav-hidden");
        } else {
          navbar.classList.add("nav-hidden");
        }
      },
      {
        threshold: 0.15
      }
    );

    observer.observe(heroSection);
  }
});