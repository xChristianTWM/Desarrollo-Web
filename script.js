document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuBar = document.querySelector(".menu-bar");

    menuToggle.addEventListener("click", function() {
        menuBar.classList.toggle("active");
    });
});
