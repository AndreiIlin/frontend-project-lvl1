import startGame from '../index.js';

const setArray = (number, count, arrLenght) => {
  const arr = [];
  for (let i = 0; i < arrLenght; i += 1) {
    const num = number + count * i;
    arr.push(num);
  }
  return arr;
};
const randomizer = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const randomCount = Math.floor(Math.random() * 10) + 1;
  const randomLength = Math.floor(Math.random() * (11 - 5) + 5);
  const randomHide = Math.floor(Math.random() * (randomLength - 1) + 1);
  const firstArr = setArray(randomNumber, randomCount, randomLength);
  const rightHide = firstArr[randomHide];
  firstArr[randomHide] = '..';
  const gameQuestion = firstArr.join(' ');
  const correctAnswer = String(rightHide);
  return [gameQuestion, correctAnswer];
};
const gameProgression = () => {
  const question = 'What number is missing in the progression?';
  startGame(question, randomizer);
};
export default gameProgression;
