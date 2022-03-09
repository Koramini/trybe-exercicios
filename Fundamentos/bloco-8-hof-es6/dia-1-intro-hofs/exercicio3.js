const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareArrays = (rightArray, studentArray) => {
  if (rightArray === studentArray) {
    return 1;
  } if (studentArray === 'N.A') {
    return 0;
  }
  return -0.5;
};

const points = (rightArray, studentArray, sum) => {
  let counter = 0;
  for(i = 0; i < rightArray.length; i += 1) {
    const returnPoints = sum(rightArray[i], studentArray[i]);
    counter += returnPoints;
  }
  return `Resultado: ${counter};`
};

console.log(points(RIGHT_ANSWERS, STUDENT_ANSWERS, compareArrays));

// const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
// const compareAnswers = (rightAnswer, studentAnswer) => {
//   if (rightAnswer === studentAnswer) {
//     return 1;
//   } if (studentAnswer === 'N.A') {
//     return 0;
//   }
//   return -0.5;
// };

// const countPoints = (rightAnswers, studentAnswers, action) => {
//   let contador = 0;
//   for (let index = 0; index < rightAnswers.length; index += 1) {
//     const actionReturn = action(rightAnswers[index], studentAnswers[index]);
//     contador += actionReturn;
//   }
//   return `Resultado final: ${contador} pontos`;
// };

// console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));


