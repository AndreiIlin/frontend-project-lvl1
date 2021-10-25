import startGame from '../index.js';

const findGCD = (num1, num2) => {
  if (num2 !== 0) {
    return findGCD(num2, num1 % num2);
  }
  return num1;
};
const randomizer = () => {
  const numberOne = Math.floor(Math.random() * 100) + 1;
  const numberTwo = Math.floor(Math.random() * 100) + 1;
  const gameQuestion = `${numberOne} ${numberTwo}`;
  const correctAnswer = String(findGCD(numberOne, numberTwo));
  return [gameQuestion, correctAnswer];
};
const gameGCD = () => {
  const question = 'Find the greatest common divisor of given numbers.';
  startGame(question, randomizer);
};
export default gameGCD;
