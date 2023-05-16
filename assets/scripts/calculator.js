const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  const enteredNumber = parseInt(userInput.value);
  const description = `${currentResult} + ${enteredNumber}`;
  currentResult += enteredNumber;
  outputResult(currentResult, description);
}

function subtract() {
  const enteredNumber = parseInt(userInput.value);
  const description = `${currentResult} - ${enteredNumber}`;
  currentResult -= enteredNumber;
  outputResult(currentResult, description);
}

function multiply() {
  const enteredNumber = parseInt(userInput.value);
  const description = `${currentResult} * ${enteredNumber}`;
  currentResult *= enteredNumber;
  outputResult(currentResult, description);
}

function divide() {
  const enteredNumber = parseInt(userInput.value);
  const description = `${currentResult} / ${enteredNumber}`;
  currentResult /= enteredNumber;
  outputResult(currentResult, description);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
