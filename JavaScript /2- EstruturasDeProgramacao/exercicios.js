//6-armazenar em valores em varáveis com cada um dos tipoes de dados vitos. String, Number e Boolean
const nome = "Sara";
const idade =26;
const maiorIdade = true;



//7-Crie uma estritura IF que verifica a entrada na balada, se tiver mais de 18anos pode entrar
if(idade < 18){
    console.log("Não pode entrar")
}else{
    console.log('Pode Entrar')
}


//8-Crie uma constante com o seu nome como valor, depois uma estrutura if que verifica seu nome.
if(nome =="Sara"){
    console.log("Nome verdadeiro")
}

//9-A função MAth.pow() exibe a potencia de um numero
console.log(Math.pow(2,4))

//10- Armazenar a velocidade de um carro em uma variável, com o número que desejar.Faça
//uma estrutura if/else se ele está acima da velocidade permitida 80km

const velocidade = 90;
if(velocidade>80){
    console.log("Carro passou da velocidade permitida")
}

//11- Escreva um loope while que exibe numeros de 0 a 10 no console
let i =0;
while(i <=10){
    console.log(i);
    i++
}

//12- Escreva um loop for que exibe numeros de 100 a 50 no console
for(let i =100; i >= 50; i--){
    console.log(i)
}