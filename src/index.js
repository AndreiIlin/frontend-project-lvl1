import readlineSync from 'readline-sync';

const basisOfGame = (gameQuestion, getGameData, numberOfAttempts) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(`${gameQuestion}`);
  for (let i = 0; i < numberOfAttempts; i += 1) {
    const [checkQuestion, correctAnswer] = getGameData();
    console.log(`Question: ${checkQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default basisOfGame;
