import startGame from '../index.js';

const isSimpleNum = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const randomizer = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const gameQuestion = randomNumber;
  const correctAnswer = isSimpleNum(randomNumber);
  return [gameQuestion, correctAnswer];
};
const gamePrime = () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startGame(question, randomizer);
};
export default gamePrime;
