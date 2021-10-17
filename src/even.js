import readlineSync from 'readline-sync';

export default function even() {
  console.log('Welcome to the Brain Games!');
  const Yourname = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${Yourname}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let RightAnswer = 0;
  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${number}`);
    const YourAnswer = readlineSync.question('Your answer: ');
    if (number % 2 === 0) {
      if (YourAnswer === 'yes') {
        RightAnswer += 1;
        console.log('Correct!');
      } else {
        console.log(`'${YourAnswer}' is wrong answer ;(. Correct answer was 'yes'. \n Let's try again, ${Yourname}!`);
        break;
      }
    } else if (number % 2 !== 0) {
      if (YourAnswer === 'no') {
        RightAnswer += 1;
        console.log('Correct!');
      } else {
        console.log(`'${YourAnswer}' is wrong answer ;(. Correct answer was 'no'. \n Let's try again, ${Yourname}`);
        break;
      }
    }
  }
  if (RightAnswer === 3) {
    console.log(`Congratulations, ${Yourname}!`);
  }
}
