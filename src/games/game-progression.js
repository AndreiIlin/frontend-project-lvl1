import basisOfGame from '../index.js';
import randomNumber from '../utils/random-number.js';

const gameQuestion = 'What number is missing in the progression?';
const numberOfAttempts = 3;
const getProgression = (number, count, length) => {
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    const num = number + count * i;
    arr.push(num);
  }
  return arr;
};
const getGameData = () => {
  const startNumber = randomNumber(1, 100);
  const randomCount = randomNumber(1, 10);
  const randomLength = randomNumber(5, 10);
  const randomHide = randomNumber(0, randomLength - 1);
  const progression = getProgression(startNumber, randomCount, randomLength);
  const hiddenElement = progression[randomHide];
  progression[randomHide] = '..';
  const checkQuestion = progression.join(' ');
  const correctAnswer = String(hiddenElement);
  return [checkQuestion, correctAnswer];
};
const startGameProgression = () => {
  basisOfGame(gameQuestion, getGameData, numberOfAttempts);
};
export default startGameProgression;
