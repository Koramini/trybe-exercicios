// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// console.log(testingScope(true));

const testingScope = (escopo) => {
  const scope = 'Não devo ser utilizada fora do meu escopo (if)';
  const ifScope = (escopo === true) ? `${scope} ótimo, fui utilizada no escopo !` : `'Não devo ser utilizada fora meu escopo (else)'`
  return ifScope;
}

console.log(testingScope(false));