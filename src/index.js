// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const numButton = document.querySelector(".number");
//const operator = document.querySelectorAll(".operator");
const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");
const text = document.querySelector(".result");

let number1 = [];
let number2 = [];
let operand1;
let oper;
let operand2;

function clear(event) {
  text.innerText = "";
  number1.splice(0, number1.length);
  number2 = [];
  oper = undefined;
  operand1 = undefined;
  operand2 = undefined;
}

function paintResult(answer) {
  if (answer) {
    text.innerText = answer;
  } else {
    text.innerText = "paint function";
  }
}

function equal(event) {
  if (operand1 && oper && operand2) {
    const aParsed = parseInt(operand1, 10);
    const bParsed = parseInt(operand2, 10);
    let answer;

    switch (oper) {
      case "+":
        answer = aParsed + bParsed;
        break;
      case "-":
        answer = aParsed - bParsed;
        break;
      case "*":
        answer = aParsed * bParsed;
        break;
      case "/":
        answer = aParsed / bParsed;
        break;
      default:
    }
    parseInt(answer, 10);
    clear();
    paintResult(answer);

    operand1 = answer;

    return answer;
  }
}

function secondNumber(num) {
  if (isItOperator(num)) {
    oper = num;
  } else {
    number2.push(num);

    operand2 = parseInt(number2.join(""), 10);
    paintResult(operand2);
  }
}

function isItOperator(oper) {
  const operaoterValue = ["+", "-", "*", "/"];
  return operaoterValue.find((element) => element === oper);
}

function firstNumber(event) {
  const inputNum = event.target.value;

  if (isItOperator(inputNum)) {
    if (operand1 && operand2) {
      equal();
    }
    oper = inputNum;
  } else if (operand1 && oper) {
    secondNumber(inputNum);
  } else if (parseInt(inputNum, 10)) {
    number1.push(inputNum);
    operand1 = parseInt(number1.join(""), 10);
    paintResult(operand1);
  } else return;
}

function init() {
  numButton.addEventListener("click", firstNumber);
  equalBtn.addEventListener("click", equal);
  clearBtn.addEventListener("click", clear);
}
init();
