import basisOfGame from '../index.js';
import randomNumber from '../utils/random-number.js';

const isEven = (number) => number % 2 === 0;
const getGameData = () => {
  const anyNumber = randomNumber(1, 100);
  const checkQuestion = `${anyNumber}`;
  const correctAnswer = isEven(anyNumber) ? 'yes' : 'no';
  return [checkQuestion, correctAnswer];
};
const startGameEven = () => {
  const numberOfAttempts = 3;
  const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
  basisOfGame(gameQuestion, getGameData, numberOfAttempts);
};
export default startGameEven;
