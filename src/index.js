import readlineSync from 'readline-sync';

const startGame = (question, functionName) => {
  console.log('Welcome to the Brain Games!');
  const yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}!`);
  console.log(`${question}`);
  for (let i = 0; i < 3; i += 1) {
    const [gameQuestion, correctAnswer] = functionName();
    console.log(`Question: ${gameQuestion}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \n Let's try again, ${yourName}!`);
    }
  }
  return console.log(`Congratulations, ${yourName}!`);
};
export default startGame;
