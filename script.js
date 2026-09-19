const modeBtn = document.getElementById("modeBtn");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  modeBtn.textContent = document.body.classList.contains("dark") ? "☀" : "◐";
});

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// Final interaction polish
document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.querySelector(".footer-year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});