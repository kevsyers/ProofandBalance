const navbar = document.querySelector(".navbar");
const logoImg = document.querySelector(".logo img");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
        logoImg.src = "./assets/images/PB-logo.svg";
    } else {
        navbar.classList.remove("scrolled");
        logoImg.src = "./assets/images/PB-logo-reverse.svg";
    }
});
