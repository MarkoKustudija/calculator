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

function calculateResult(operation) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let operator;

  if (operation === ADD) {
    currentResult += enteredNumber;
    operator = "+";
  } else if (operation === SUBTRACT) {
    currentResult -= enteredNumber;
    operator = "-";
  } else if (operation === MULTIPLY) {
    currentResult *= enteredNumber;
    operator = "*";
  } else if (operation === DIVIDE) {
    if(enteredNumber === 0){
        alert("Can't divide by zero, please enter some other value!");
        return;
    }
    currentResult /= enteredNumber;
    operator = "/";
  }

  createAndWriteOutput(operator, initialResult, enteredNumber);
}


addBtn.addEventListener("click", calculateResult.bind(this,ADD));
subtractBtn.addEventListener("click", calculateResult.bind(this,SUBTRACT));
multiplyBtn.addEventListener("click", calculateResult.bind(this,MULTIPLY));
divideBtn.addEventListener("click", calculateResult.bind(this,DIVIDE));
