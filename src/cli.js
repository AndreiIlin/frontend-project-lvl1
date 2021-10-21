import readlineSync from 'readline-sync';

export default function name() {
  console.log('Welcome to the Brain Games!');
  const Yourname = readlineSync.question('May I have your name?');
  console.log(`Hello, ${Yourname}!`);
}
