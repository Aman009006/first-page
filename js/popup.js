let buyButton = document.getElementById('buy');
let sendButton = document.getElementById('popup__button');
let closeButton = document.getElementById("close__button");
let popup = document.getElementById('popup');

function showPopup (show) {
    if (show) {
        popup.style.opacity = 1;
        popup.style.zIndex = 10;
    } else {
        popup.style.opacity = 0;
        popup.style.zIndex = -10;
    }
}

buyButton.addEventListener("click", () => showPopup(true))
closeButton.addEventListener("click", () => showPopup(false))
sendButton.addEventListener("click", () => showPopup(false))
