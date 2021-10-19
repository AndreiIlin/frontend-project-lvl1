import source from '../index.js';

const Question = 'Find the greatest common divisor of given numbers.';
function FindGCD(num1, num2) {
  while (num2 !== 0) {
    return FindGCD(num2, num1 % num2);
  }
  return num1;
}
function Randomizer() {
  const numberOne = Math.floor(Math.random() * 100) + 1;
  const numberTwo = Math.floor(Math.random() * 100) + 1;
  const FunctionQuestion = `${numberOne} ${numberTwo}`;
  const RightAnswer = String(FindGCD(numberOne, numberTwo));
  return [FunctionQuestion, RightAnswer];
}
export default function GameGCD() {
  source(Question, Randomizer);
}
