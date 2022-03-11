// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//   const isItName = arr.some((element) => element === name);
//   return isItName;
// }

// console.log(hasName(names, 'Ana'))

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  const everyAge = arr.every((array) => array.age >= minimumAge);
  return everyAge;
}

console.log(verifyAges(people, 18));