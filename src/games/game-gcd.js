import basisOfGame from '../index.js';
import randomNumber from '../utils/random-number.js';

const findGCD = (num1, num2) => {
  if (num2 !== 0) {
    return findGCD(num2, num1 % num2);
  }
  return num1;
};
const getGameData = () => {
  const numberOne = randomNumber(1, 100);
  const numberTwo = randomNumber(1, 100);
  const checkQuestion = `${numberOne} ${numberTwo}`;
  const correctAnswer = String(findGCD(numberOne, numberTwo));
  return [checkQuestion, correctAnswer];
};
const startGameGCD = () => {
  const numberOfAttempts = 3;
  const gameQuestion = 'Find the greatest common divisor of given numbers.';
  basisOfGame(gameQuestion, getGameData, numberOfAttempts);
};
export default startGameGCD;
