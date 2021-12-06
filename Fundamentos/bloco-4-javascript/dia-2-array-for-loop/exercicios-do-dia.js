let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Passo 1
/*for (let n of numbers){
    console.log(n);
} */

//Passo 2
/*for (let sum of numbers){
    sum += 1;
    console.log(sum);
}*/

//Passo 3 e 4
/*let sum = 0;
let mediaAritmetica = 0;
for (let i = 0; i < numbers.length; i+=1) {
    sum += numbers[i];
}
mediaAritmetica = sum / numbers.length;

if(mediaAritmetica > 20){
    console.log("Esse valor " + mediaAritmetica + " " + "é maior que 20");
} else {
    console.log("Esse valor " + mediaAritmetica + " " + "é menor que 20");
}*/

//Passo 5
/*let biggestNumber = 0;
for (i = 0; i < numbers.length; i+=1) {
    if (numbers[i] > biggestNumber){
        biggestNumber = numbers[i];
    }
}

console.log(biggestNumber);*/

//Passo 6
/*let counter = 0;

for(i = 0; i < numbers.length; i+=1){
    if(numbers[i] % 2 == 1){
        counter +=1
    }
}
if (counter > 0){
    console.log(counter);
} else{
    console.log("nenhum valor ímpar encontrado");
}*/

//Passo 7
/*let smallestNumber = numbers[0];

for(i = 0; i < numbers.length; i+=1){
    if (smallestNumber > numbers[i]){
        smallestNumber = numbers[i];
    }
}
console.log(smallestNumber);*/

//Passo 8 e 9
let array = [];

for(i = 0; i <= 25; i+=1){
    array.push(i);
    array[i] = array[i] / 2;
}

console.log(array);
