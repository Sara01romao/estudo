//1- escreva três valores em string com aspas duplas, simples e template literals.
const nome1 = "Lua";
const nome2 = 'Sol';
const nota = 10;

console.log(nome1, nome2, `Nota: ${nota}`)



//2- escreva três valores em number inteiros, decimal e aritmética.
const idade = 10;
const peso = 30.50;
const altura = 10 - 8.5;
console.log(`Idade: ${idade} Peso: ${peso} Altura: ${altura}`)

//3- escreva três comparações com boolean maior, menor e igual
const a =10;
const b = 5;
 console.log(10 > 5 ? true: false);
 console.log(10 < 5 ? true: false);
 console.log(10 === 5 ? true: false);

//4- Escreva comparações com operadores lógicos
if(idade != peso){
    console.log(true)
} 

//5- Faça uma opração que emita Nan no console.

console.log(5 * "txt")
