//Questão 2) segue abaixo o código fonte:

const numero = parseInt(prompt("Digite um número:"));

let a = 0;
let b = 1;
let c;

while (b < numero) {
    c = a + b;
    a = b;
    b = c;
}

if (b === numero) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}

//Questão 5) segue abaixo o código fonte: 

let string = "Target Sistemas";
let novaString = "";

for (let i = string.length - 1; i >= 0; i--) {
    novaString += string[i];
}

console.log(novaString); // "sametsiS tegraT"