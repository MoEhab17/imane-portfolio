// Loader
window.addEventListener("load", () => {
  document.getElementById("loader-wrapper").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("loader-wrapper").style.display = "none";
  }, 500);
});

// Language Switch
document.getElementById("langSwitch").addEventListener("change", function () {
  const lang = this.value;
  document.querySelectorAll("[data-fr]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  const typedText = document.getElementById("typedText");
  typedText.textContent = typedText.getAttribute(`data-${lang}`);

  if (window.innerWidth >= 768) {
    typedText.style.animation = "typing 3s steps(40, end) forwards, blink 0.7s infinite";
  }
});

// Fade-in Scroll
const faders = document.querySelectorAll(".fade-in");
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  faders.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Image Modal
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
document.querySelectorAll(".gallery-img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});
document.querySelector(".close").onclick = () => modal.style.display = "none";
window.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

// Scroll to Top
const topBtn = document.getElementById("topBtn");
window.onscroll = () => {
  topBtn.style.display = (window.scrollY > 300) ? "block" : "none";
};
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// Dark Mode Toggle
document.getElementById("modeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const icon = document.getElementById("modeToggle");
  icon.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
