const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const order = () => {
  let odds = oddsAndEvens.sort((obj1, obj2) => obj1 - obj2);
  return odds;
}

const sorted = order();
console.log(`Números em order crescente ${sorted}`); // será necessário alterar essa linha 😉