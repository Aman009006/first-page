let burgerMenu = document.getElementById("burger__menu");
let burgerOpenButon = document.getElementById("burger__open");
let burgerCloseButton = document.getElementById("burger__close");

function showBurger (show) {
    if (show) {
        burgerMenu.style.top = 0;
    } else {
        burgerMenu.style.top = "-300px";
    }
}

burgerOpenButon.addEventListener("click", () => showBurger(true))
burgerCloseButton.addEventListener("click", () => showBurger(false))
