const randomNumber = (myNumber, verify) => {
  const number = Math.round(Math.random() * (5 - 1) + 1);
  console.log(number);
  return verify(myNumber, number) ? 'Parabéns você ganhou' : 'Tente Novamente';
};

const isItMyNumber = (myNumber, number) => myNumber === number;


console.log(randomNumber(3, isItMyNumber));


