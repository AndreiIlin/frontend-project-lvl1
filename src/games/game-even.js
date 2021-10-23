import startGame from '../index.js';

const checkEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
const randomizer = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const gameQuestion = `${number}`;
  const correctAnswer = checkEven(number);
  return [gameQuestion, correctAnswer];
};
const gameEven = () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(question, randomizer);
};
export default gameEven;
