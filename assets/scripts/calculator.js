const defaultResult = 0;
let currentResult = defaultResult;

const ADD = "ADD";
const SUBTRACT = "SUBTRACT";
const MULTIPLY = "MULTIPLY";
const DIVIDE = "DIVIDE";

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, initialResult, calculatedNumber) {
  const description = `${initialResult} ${operator} ${calculatedNumber}`;
  outputResult(currentResult, description);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  if (
    (calculationType !== ADD &&
      calculationType !== SUBTRACT &&
      calculationType !== MULTIPLY &&
      calculationType !== DIVIDE) ||
    !enteredNumber
  ) {
    return;
  }

  const initialResult = currentResult;
  let operator;

  if (calculationType === ADD) {
    currentResult += enteredNumber;
    operator = "+";
  } else if (calculationType === SUBTRACT) {
    currentResult -= enteredNumber;
    operator = "-";
  } else if (calculationType === MULTIPLY) {
    currentResult *= enteredNumber;
    operator = "*";
  } else if (calculationType === DIVIDE) {
    currentResult /= enteredNumber;
    operator = "/";
  }

  createAndWriteOutput(operator, initialResult, enteredNumber);
}

function add() {
    calculateResult(ADD);
}
function subtract(){
    calculateResult(SUBTRACT);
}
function multiply(){
    calculateResult(MULTIPLY);
}

function divide(){
    calculateResult(DIVIDE);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
