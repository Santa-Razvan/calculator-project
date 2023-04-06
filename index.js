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
        default: alert("This operator doesn't exist");
            break;
    }
}

const buttons = document.querySelectorAll('button');
const display = document.getElementById('display');
let displayArray = [];
let contor = 0;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
        display.textContent += e.target.value;
        displayArray += e.target.value;
        if (e.target.value === "=") {
            for (let i = 0; i < displayArray.length - 1; i++) {
                console.log(displayArray[i]);
                if ((displayArray[i] === '+') ||
                    (displayArray[i] === '-') ||
                    (displayArray[i] === '*') ||
                    (displayArray[i] === '/')) {
                    operator = displayArray[i];
                    contor++;
                } else if (contor == 1) {
                    num2 += displayArray[i];
                } else num1 += displayArray[i];
            }
            display.textContent = "";
            display.textContent = operate(+num1, +num2, operator);
        }
    });
}

