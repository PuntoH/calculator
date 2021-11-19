// All buttons' DOM

const outputViewer = document.querySelector(".output-viewer");
let outputViewerContent = document.querySelector(".output_viewer-content");

const additionOperatorButton = document.querySelector(".addition-operator");
const subtractionOperatorButton = document.querySelector(".subtraction-operator");
const multiplicationOperatorButton = document.querySelector(".multiplication-operator");
const divisionOperatorButton = document.querySelector(".division-operator");
const resultOfOperation = document.querySelector(".result");
const decimalButton = document.querySelector(".decimal");
const clearButton = document.querySelector(".clear-button");

const number0 = document.querySelector(".number-0");
const number1 = document.querySelector(".number-1");
const number2 = document.querySelector(".number-2");
const number3 = document.querySelector(".number-3");
const number4 = document.querySelector(".number-4");
const number5 = document.querySelector(".number-5");
const number6 = document.querySelector(".number-6");
const number7 = document.querySelector(".number-7");
const number8 = document.querySelector(".number-8");
const number9 = document.querySelector(".number-9");

// Functions for the four basic operators; + - * /

const addNumbers = (num1, num2) => {
    const resultOfAddition = num1 + num2;
    console.log(resultOfAddition);
    value = resultOfAddition;
    outputViewerContent.innerText = value;
}

const subtractNumbers = (num1, num2) => {
    const resultOfSubtraction = num1 - num2;
    console.log(resultOfSubtraction);
    value = resultOfSubtraction;
    outputViewerContent.innerText = value;
}

const multiplyNumbers = (num1, num2) => {
    const resultOfMultiplication = num1 * num2;
    console.log(resultOfMultiplication);
    value = resultOfMultiplication;
    outputViewerContent.innerText = value;
}

const divideNumbers = (num1, num2) => {
    const resultOfDivision = num1 / num2;
    console.log(resultOfDivision);
    value = resultOfDivision;
    outputViewerContent.innerText = value;
}

// Function that takes one of the previous functions depending on the user's input.

const operateInput = (operator, num1, num2) => {
    if (operator === "addition") {
        addNumbers(num1, num2);
    } else if (operator === "subtraction") {
        subtractNumbers(num1, num2);
    } else if (operator === "multiplication") {
        multiplyNumbers(num1, num2);
    } else if (operator === "division") {
        divideNumbers(num1, num2);
    }
}

let value = "";
let value2 = "";

number0.addEventListener("click", () => {
    value = value + "0";
    value2 = value2 + "0";
    outputViewerContent.textContent = outputViewerContent.textContent + 0;
});
number1.addEventListener("click", () => {
    value = value + "1";
    value2 = value2 + "1";
    outputViewerContent.textContent = outputViewerContent.textContent + 1;
});
number2.addEventListener("click", () => {
    value = value + "2";
    value2 = value2 + "2";
    outputViewerContent.textContent = outputViewerContent.textContent + 2;
});
number3.addEventListener("click", () => {
    value = value + "3";
    value2 = value2 + "3";
    outputViewerContent.textContent = outputViewerContent.textContent + 3;
});
number4.addEventListener("click", () => {
    value = value + "4";
    value2 = value2 + "4";
    outputViewerContent.textContent = outputViewerContent.textContent + 4;
});
number5.addEventListener("click", () => {
    value = value + "5";
    value2 = value2 + "5";
    outputViewerContent.textContent = outputViewerContent.textContent + 5;
});
number6.addEventListener("click", () => {
    value = value + "6";
    value2 = value2 + "6";
    outputViewerContent.textContent = outputViewerContent.textContent + 6;
});
number7.addEventListener("click", () => {
    value = value + "7";
    value2 = value2 + "7";
    outputViewerContent.textContent = outputViewerContent.textContent + 7;
});
number8.addEventListener("click", () => {
    value = value + "8";
    value2 = value2 + "8";
    outputViewerContent.textContent = outputViewerContent.textContent + 8;
});
number9.addEventListener("click", () => {
    value = value + "9";
    value2 = value2 + "9";
    outputViewerContent.textContent = outputViewerContent.textContent + 9;
});

decimalButton.addEventListener("click", () => {
    value = value + ".";
    outputViewerContent.textContent = outputViewerContent.textContent + ".";
});

let operator;

additionOperatorButton.addEventListener("click", () => {
    operator = "addition";
    firstValue = value;
    value = 0;
    value2 = 0;
    outputViewerContent.textContent = "+";
});
subtractionOperatorButton.addEventListener("click", () => {
    operator = "subtraction"
    firstValue = value;
    value = 0;
    outputViewerContent.textContent = "-";

});
multiplicationOperatorButton.addEventListener("click", () => {
    operator = "multiplication"
    firstValue = value;
    value = 0;
    outputViewerContent.textContent = "*";
});
divisionOperatorButton.addEventListener("click", () => {
    operator = "division"
    firstValue = value;
    value = 0;
    outputViewerContent.textContent = "/";
});
clearButton.addEventListener("click", () => {
    operator = ""
    firstValue = 0;
    value = 0;
    outputViewerContent.textContent = "";
});



resultOfOperation.addEventListener("click", () => 
operateInput(operator, parseFloat(firstValue), parseFloat(value))
);





// Function that displays the value on the output's viewer.

outputViewerContent.textContent;