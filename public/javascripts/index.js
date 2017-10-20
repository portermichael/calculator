'use strict';

let valuesToCalc = [];
let lastValuesCalc = [];
let lastCalc;

function handleCurrentInput () {
  let displayInput = document.getElementsByClassName('showCurrentEquation');
  displayInput[0].innerHTML = valuesToCalc.join('  ');
}

function handleOlderValues () {
  let displayLastInput = document.getElementsByClassName('showLastEquation');
  displayLastInput[0].innerHTML = lastValuesCalc.join('  ');
  let displayLastSolution = document.getElementsByClassName('showLastSolution');
  displayLastSolution[0].innerHTML = lastCalc;
};

function addValueToCalculator (addValueToArray) {
  valuesToCalc.push(addValueToArray);
  handleCurrentInput();
};

function handleNumberInput () {
  let numberInput = document.getElementsByClassName('numberInput');
  valuesToCalc.push(numberInput[0].value);
  numberInput[0].value = null;
  handleCurrentInput();
}

function multiplyOrDivide (toDoArray) {
  let taskCompleted = [];
  for (let i = 0; i < toDoArray.length; i++) {
    if (toDoArray[i] === '*') {
      console.log(taskCompleted[-1])
      taskCompleted[taskCompleted.length - 1] = taskCompleted[taskCompleted.length - 1] * toDoArray[i + 1];
      i++;
      console.log(taskCompleted, 'mult')
    } else if (toDoArray[i] === '/') {
      taskCompleted[taskCompleted.length - 1] = taskCompleted[taskCompleted.length - 1] / toDoArray[i + 1];
      i++;
      console.log(taskCompleted, 'div')
    } else {
      console.log(taskCompleted, 'push')
      taskCompleted.push(toDoArray[i]);
    }
  }
  return taskCompleted;
}

function addOrSubtract (addOrSubArray) {
  let addOrSubCompleted = [];
  let prevValue = addOrSubArray[0];
  if (addOrSubArray.length === 1) {
    return prevValue;
  }
  for (let j = 1; j < addOrSubArray.length; j++) {
    if (addOrSubArray[j] === '+') {
      prevValue = parseInt(prevValue) + parseInt(addOrSubArray[j + 1]);
      j++;
    } else if (addOrSubArray[j] === '-') {
      prevValue = parseInt(prevValue) - parseInt(addOrSubArray[j + 1]);
      j++;
    }
  }
  return prevValue;
}

function evaluateArray () {
  lastValuesCalc = valuesToCalc;
  let stepOne = multiplyOrDivide(valuesToCalc);
  lastCalc = addOrSubtract(stepOne);
  valuesToCalc = [];
  handleOlderValues();
  handleCurrentInput();
  return lastCalc;
};

function clearCurrentValues () {
  valuesToCalc = [];
  handleCurrentInput();
}
