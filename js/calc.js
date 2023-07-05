let buttons = document.getElementsByClassName("count__button");
let display = document.getElementById("count");

function calcCount (calc) {
    if (calc === '+'){
        display.innerText = Number(display.innerText) + 1
    } else if (1 < Number(display.innerText)) {
        display.innerText = Number(display.innerText) - 1
    }
}

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => calcCount(buttons[i].innerText))
}