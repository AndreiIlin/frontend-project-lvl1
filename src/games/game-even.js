import source from '../index.js';

const Question = 'What is the result of the expression?';
export function even() {
  const number = Math.floor(Math.random() * 100) + 1;
  const FunctionQuestion = `${number}`;
  const RightAnswer = number % 2 === 0 ? 'yes' : 'no';
  return [FunctionQuestion, RightAnswer];
}
export default function GameEven() {
  source(Question, even);
}
