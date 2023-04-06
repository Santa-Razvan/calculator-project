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
        if ((e.target.value === "+") ||
            (e.target.value === "-") ||
            (e.target.value === "*") ||
            (e.target.value === "/")) {
            operator = e.target.value;
            for (let i = 0; i < displayArray.length - 1; i++) {
                num1 += displayArray[i];
            }
            displayArray = '';
            console.log(num1);
            console.log(operator);
        }
        if (e.target.value === '=') {
            for (let i = 0; i < displayArray.length - 1; i++) {
                num2 += displayArray[i];
            }
            display.textContent = "";
            displayArray = "";
            let num3 = operate(+num1, +num2, operator);
            displayArray += num3;
            console.log(displayArray);
            display.textContent = operate(+num1, +num2, operator);
            num1 = '';
            num2 = '';
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

