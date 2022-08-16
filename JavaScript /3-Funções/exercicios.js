//Escrever uma função que imprime "Hello World" no console.

function hello(){
    console.log("Hello World");
}

hello();

//Escrever uma função que recebe um parâmetro de idade, que imprima "Você tem x anos" com template literals.
const idade = 26;

function msgAnos(idade){
 console.log(`Você tem ${idade} anos`)
}

msgAnos(idade)


// Escreva uma função que some dois números e retorne eles e imprima o retorno.

function soma(){
    const num1 = 3;
    const num2 = 4;

    return(num1+num2)
}

console.log(soma());

//Escreva uma função que retorne um número aleatório. O numero máximo retornado deve ser passado via parâmetro.
 function numAleatorio(max){
     console.log(Math.random()*(max - 1)+1);
 }

 numAleatorio(2)

 