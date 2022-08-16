function factorial(num) { 
  let result = 1;
  for(index = 2; index <= num; index +=1){
    result *= index;
  }
  return result;
}
console.log(factorial(4));