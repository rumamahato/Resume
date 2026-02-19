// Page loaded message
console.log("Resume website loaded successfully!");

// Button click alert example
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector(".btn-custom");

    if (btn) {
        btn.addEventListener("click", function () {
            alert("Button clicked!");
        });
    }
});

// Smooth scroll example
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
