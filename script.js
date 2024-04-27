
const navToggle = document.querySelector(".mobile-nav-toggle");
const navContainer = document.querySelector(".nav-container");

navToggle.addEventListener("click", () => {
    navContainer.toggleAttribute("data-visible");
})
