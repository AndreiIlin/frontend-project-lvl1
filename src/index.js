import readlineSync from 'readline-sync';

export default function source(Question, Randomizer) {
  console.log('Welcome to the Brain Games!');
  const Yourname = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${Yourname}!`);
  console.log(`${Question}`);
  let Check = 0;
  for (let i = 0; i < 3; i += 1) {
    const [FunctionQuestion, RightAnswer] = Randomizer();
    console.log(`Question: ${FunctionQuestion}`);
    const YourAnswer = readlineSync.question('Your answer: ');
    if (YourAnswer === RightAnswer) {
      Check += 1;
      console.log('Correct!');
    } else {
      console.log(`'${YourAnswer}' is wrong answer ;(. Correct answer was '${RightAnswer}'. \n Let's try again, ${Yourname}!`);
      break;
    }
  }
  if (Check === 3) {
    console.log(`Congratulations, ${Yourname}!`);
  }
}
