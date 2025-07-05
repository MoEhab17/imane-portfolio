// Page loader
window.addEventListener("load", () => {
  document.getElementById("loader-wrapper").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("loader-wrapper").style.display = "none";
  }, 500);
});

// Language switch
document.getElementById('langSwitch').addEventListener('change', function () {
  const lang = this.value;
  document.querySelectorAll('[data-fr]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  const typedText = document.getElementById("typedText");
  typedText.style.width = "0";
  void typedText.offsetWidth;
  typedText.textContent = typedText.getAttribute(`data-${lang}`);
  typedText.style.animation = "typing 3s steps(40, end) forwards, blink 0.7s infinite";
});

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  faders.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Image Modal
const modal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.gallery-img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
  });
});
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
window.addEventListener('click', e => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Scroll-to-top button
const topBtn = document.getElementById("topBtn");
window.onscroll = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById("themeToggle");
function setTheme(mode) {
  if (mode === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
  localStorage.setItem("theme", mode);
}
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
});
themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark-mode");
  setTheme(isDark ? "light" : "dark");
});
