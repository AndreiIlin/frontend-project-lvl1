import readlineSync from 'readline-sync';

export default function name() {
  const Yourname = readlineSync.question('May I have your name?');
  console.log(`Hello, ${Yourname}!`);
}
