import basisOfGame from '../index.js';
import randomNumber from '../utils/random-number.js';

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
const getGameData = () => {
  const numberOne = randomNumber(1, 100);
  const numberTwo = randomNumber(1, 100);
  const symbols = ['+', '-', '*'];
  const chooseSymbol = randomNumber(0, symbols.length);
  const checkQuestion = `${numberOne} ${symbols[chooseSymbol]} ${numberTwo}`;
  const correctAnswer = String(calculate(numberOne, numberTwo, chooseSymbol));
  return [checkQuestion, correctAnswer];
};
const startGameCalc = () => {
  const numberOfAttempts = 3;
  const gameQuestion = 'What is the result of the expression?';
  basisOfGame(gameQuestion, getGameData, numberOfAttempts);
};
export default startGameCalc;
