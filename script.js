const menuToggle = document.getElementById("menu-toggle");
const navItem = document.getElementById("nav-item");

menuToggle.addEventListener("click", () => {
    navItem.classList.toggle("show");
    
    const icon = menuToggle.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
});


document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
