import basisOfGame from '../index.js';
import randomNumber from '../utils/random-number.js';

const isSimpleNum = (number) => {
  if (number === 1) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const getGameData = () => {
  const maybeSimpleNumber = randomNumber(1, 100);
  const checkQuestion = maybeSimpleNumber;
  const correctAnswer = isSimpleNum(maybeSimpleNumber) ? 'yes' : 'no';
  return [checkQuestion, correctAnswer];
};
const startGamePrime = () => {
  const numberOfAttempts = 3;
  const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  basisOfGame(gameQuestion, getGameData, numberOfAttempts);
};
export default startGamePrime;
