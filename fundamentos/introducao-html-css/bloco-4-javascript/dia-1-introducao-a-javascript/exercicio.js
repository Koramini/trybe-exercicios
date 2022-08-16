// Passo 1
/*let a = 50;
let b = 32;

console.log(a + b);
console.log(a - b);
console.log(a/b);
console.log(a*b);
console.log(a%b);
*/

//Passo 2
/*const a = 60;
const b = 100;

if (a > b) {
    console.log("A é maior que B");
} else {
    console.log("B é maior que A");
}*/

//Passo 3
/*const a = 150
const b = 120
const c = 180

if (a > b && a > c) {
    console.log("A maior que B e C");
} else if(b > a && b > c) {
    console.log("B maior que A e C");
} else {
    console.log("C maior que A e B");
}*/

//Passo 4
/*const a = 0;

if(a > 0) {
    console.log("positive");
} else if (a < 0) {
    console.log("negative")
} else {
    console.log("zero");
}*/

//Passo 5
/*const anguloA = 20;
const anguloB = 60;
const anguloC = 100;

if (anguloA + anguloB + anguloC == 180){
    console.log(true);
} else {
    console.log(false);
}*/

//Passo 6
/*let peca = "Rainha";

switch (peca.toLowerCase()) {
    case "rainha":
        console.log("Anda em qualquer direção");
        break;
    
    case "torre":
        console.log("Anda somente na vertical e horizontal");
        break;

    case "bispo":
        console.log("Anda somente na diagonal");
        break;

    default:
        console.log("Não é uma peça");
}*/

//Passo 7
/*const percentage = 50;

if (percentage >= 90) {
    console.log("A");
} else if (percentage >= 80 && percentage < 90) {
    console.log("B");
} else if (percentage >= 70 && percentage < 80) {
    console.log("C");
} else if (percentage >= 60 && percentage < 70) {
    console.log("D")
} else if (percentage >= 50 && percentage < 60) {
    console.log("E");
} else {
    console.log("F");
}*/

//Passo 8
/*const a = 2;
const b = 3;
const c = 5;

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    console.log(true);
} else {
    console.log(false);
}*/

//Passo 9
/*const a = 2;
const b = 4;
const c = 15;

if (a % 2 == 1 || b % 2 == 1 || c % 2 == 1) {
    console.log(true);
} else {
    console.log(false);
}*/

//Passo 10
/*const custoProduto = 100;
const preco = 200;
let custoProdutoTotal;
let lucro;

if (custoProduto <= 0 && lucro <= 0){
    console.log("Não é possível ser menor que 0");
} else {
    custoProdutoTotal = custoProduto * 1.2;
    lucro = preco - custoProdutoTotal;
}
console.log(lucro);*/

//Passo 11
let salarioBruto = 5000;
let salarioInss;
let liquido;
let inss;
let ir;
let parcela;

if (salarioBruto <= 1556.94) {
    inss = 0.92;
    salarioInss = salarioBruto * inss;
} else if(salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    inss = 0.91
    salarioInss = salarioBruto * inss;
} else if(salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    inss = 0.89
    salarioInss = salarioBruto * inss;
} else {
    inss = 570.88;
    salarioInss = salarioBruto - inss;
}

if(salarioInss <= 1903.98){
    liquido = salarioInss;
} else if(salarioInss > 1903.99 && salarioInss <= 2826.65){
    ir = 0.925;
    parcela = 142.80;
    liquido = (salarioInss * ir) + parcela;
} else if(salarioInss > 2826.65 && salarioInss <= 3751.05){
    ir = 0.85;
    parcela = 354.80;
    liquido = (salarioInss * ir) + parcela;
} else if(salarioInss > 3751.06 && salarioInss <= 4664.68){
    ir = 0.775;
    parcela = 636.13;
    liquido = (salarioInss * ir) + parcela;
} else{
    ir = 0.725;
    parcela = 869.63;
    liquido = (salarioInss * ir) + parcela;
}
console.log(liquido);

