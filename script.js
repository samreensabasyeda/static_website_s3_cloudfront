// AOS Animation Initialization
AOS.init({
  duration: 800, // Animation duration in ms
  once: true     // Whether animation should happen only once - while scrolling down
});

// Dark Mode Toggle
function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  // Optional: store user preference in localStorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// Load preferred theme on page load
window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
};

// Smooth Scroll for "Back to Top" button and nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smoo
