import source from '../index.js';

const Question = 'What is the result of the expression?';
const symbols = ['+', '-', '*'];
const chooseSymbol = Math.floor(Math.random() * 3);
function calculate(num1, num2) {
  let getAnswer = 0;
  switch (chooseSymbol) {
    case 0: getAnswer = num1 + num2; break;
    case 1: getAnswer = num1 - num2; break;
    case 2: getAnswer = num1 * num2; break;
    default: break;
  }
  return getAnswer;
}
function Randomizer() {
  const numberOne = Math.floor(Math.random() * 100) + 1;
  const numberTwo = Math.floor(Math.random() * 100) + 1;
  const randomSymbol = symbols[chooseSymbol];
  const FunctionQuestion = `${numberOne} ${randomSymbol} ${numberTwo}`;
  const RightAnswer = String(calculate(numberOne, numberTwo));
  return [FunctionQuestion, RightAnswer];
}
export default function GameCalc() {
  source(Question, Randomizer);
}
