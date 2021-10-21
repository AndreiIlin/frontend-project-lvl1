import source from '../index.js';

const Question = 'What number is missing in the progression?';
function SetArray(number, count, Arrlenght) {
  const Arr = [];
  let Num = number;
  for (let i = 0; i < Arrlenght; i += 1) {
    const NewNumber = Num + count;
    Arr.push(NewNumber);
    Num = NewNumber;
  }
  return Arr;
}
function Randomizer() {
  const RandomNumber = Math.floor(Math.random() * 100) + 1;
  const RandomCount = Math.floor(Math.random() * 10) + 1;
  const RandomLength = Math.floor(Math.random() * (11 - 5) + 5);
  const RandomHide = Math.floor(Math.random() * (RandomLength - 1) + 1);
  const FirstArr = SetArray(RandomNumber, RandomCount, RandomLength);
  const RightHide = FirstArr[RandomHide];
  FirstArr.splice(RandomHide, 1, '..');
  const FunctionQuestion = FirstArr.join(' ');
  const RightAnswer = String(RightHide);
  return [FunctionQuestion, RightAnswer];
}
export default function Progression() {
  source(Question, Randomizer);
}
