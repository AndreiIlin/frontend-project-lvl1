import source from '../index.js';

const Question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
function SetArray(number) {
  const Arr = new Array(number);
  for (let i = 0; i < number; i += 1) {
    Arr[i] = i + 1;
    if (number % Arr[i] !== 0) {
      Arr.splice(i, 1);
    }
  }
  return Arr;
}
function Clear(Arr) {
  if (Arr.filter((element) => element !== undefined).length > 2) {
    return 'no';
  }
  return 'yes';
}

function Randomizer() {
  const RandomNumber = Math.floor(Math.random() * 100) + 1;
  const FunctionQuestion = RandomNumber;
  const ClearAnswer = SetArray(RandomNumber);
  const Answer = Clear(ClearAnswer);
  const RightAnswer = Answer;
  return [FunctionQuestion, RightAnswer];
}
export default function Prime() {
  source(Question, Randomizer);
}
