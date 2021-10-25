import startGame from '../index.js';

const calculate = (num1, num2, symbol) => {
  switch (symbol) {
    case 0:
      return num1 + num2;
    case 1:
      return num1 - num2;
    case 2:
      return num1 * num2;
    default:
      return null;
  }
};
const randomizer = () => {
  const numberOne = Math.floor(Math.random() * 100) + 1;
  const numberTwo = Math.floor(Math.random() * 100) + 1;
  const symbols = ['+', '-', '*'];
  const chooseSymbol = Math.floor(Math.random() * symbols.length);
  const randomSymbol = symbols[chooseSymbol];
  const gameQuestion = `${numberOne} ${randomSymbol} ${numberTwo}`;
  const correctAnswer = String(calculate(numberOne, numberTwo, chooseSymbol));
  return [gameQuestion, correctAnswer];
};
const gameCalc = () => {
  const question = 'What is the result of the expression?';
  startGame(question, randomizer);
};
export default gameCalc;
