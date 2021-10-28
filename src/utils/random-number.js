const randomNumber = (minNumber, maxNumber) => {
  const generationOfNumber = Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
  return generationOfNumber;
};
export default randomNumber;
