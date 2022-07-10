//Maneiras de salvar valores

var msg = "variável";
const nome = "Sara"; // constante não altera o valor
let idade = 26;

//Função Nativa Math

let maior = Math.max(2, 5, 36, 4);
console.log(maior);

let arredondar = Math.round(5.55555);
console.log(arredondar);

//Estruturas de Controle- com a estrutura podemos modelar o fluxo do programa
//if, else e else if
if (idade > 18) {
  console.log("Pode entrar");
} else if (idade == 18) {
  console.log("18 anos pode entrar");
} else {
  console.log("Não pode Entrar");
}

//Estrutura de Repetição

//While - faça até a condição seja atingida
let x = 5;
while (x > 0) {
  console.log("while", x);
  x = x - 1;
}

//do- while
let y = 0;
do {
  console.log("do-while", y);
  y = y + 1;
} while (y >= 10);

//for
for (let n = 0; n < 5; n++) {
  console.log("for", n);
}

//switch/case
const resposta = "A"

switch (resposta) {
  case "A":
    console.log("a");
    break;
  case "B":
    console.log("b");
    break;
  default:
      console.log('nenhuma');
      break;
}
