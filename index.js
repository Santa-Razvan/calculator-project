function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function modulo(num1, num2) {
    return num1 % num2;
}

let num1 = '';
let num2 = '';
let operator = '';

function operate(num1, num2, operator) {
    switch (operator) {
        case '+': return add(num1, num2);
            break;
        case '-': return subtract(num1, num2);
            break;
        case '*': return multiply(num1, num2);
            break;
        case '/': return divide(num1, num2);
            break;
        case '%': return modulo(num1, num2);
            break;
        default: alert("This operator doesn't exist");
            break;
    }
}

const dotButton = document.getElementById('btn1');
const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');
let displayArray = [];

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        if (e.target.value === '.') {
            dotButton.disabled = true;
        }
        display.textContent += e.target.value;
        displayArray += e.target.value;
        if ((e.target.value === "+") ||
            (e.target.value === "-") ||
            (e.target.value === "*") ||
            (e.target.value === "/") ||
            (e.target.value === "%")) {
            operator = e.target.value;
            for (let i = 0; i < displayArray.length - 1; i++) {
                num1 += displayArray[i];
            }
            displayArray = '';
            dotButton.disabled = false;
        }
        if (e.target.value === '.') {
            dotButton.disabled = true;
        }
        if (e.target.value === '=') {
            for (let i = 0; i < displayArray.length - 1; i++) {
                num2 += displayArray[i];
            }
            display.textContent = "";
            displayArray = "";
            let num3 = operate(+num1, +num2, operator);
            if (!isFinite(num3)) {
                display.textContent = "You can't do that!";
                num1 = '';
                num2 = '';
            } else {
                displayArray += num3;
                display.textContent = num3;
                num1 = '';
                num2 = '';
            }
        }
        if (e.target.value === "cle") {
            displayArray = [];
            num1 = '';
            num2 = '';
            contor = 0;
            display.textContent = '';
        }
    });
}

