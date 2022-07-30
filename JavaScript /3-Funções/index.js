//Funções são estruturas de código enores que são reaproveitadas durante a construção do programa
//objetivo poupar repetição

//exemplo estrutura
function nomeFuncao(){
    console.log('texto')
}

nomeFuncao()


//função anônima
const funcaoAnonima = function (){
    console.log('Tesxto')
}
funcaoAnonima()

//função com paramêtro
const txtParametro = function(texto){
    console.log(texto)
}
txtParametro('Textto parametro')

//ESCOPO- o que acontece dentro de uma função fica separado do escopo global 

let n =20;

const numero= function(){
    let n = 5;
    console.log(n);
}

console.log(n);

//ARROW FUNCTIONS - uma forma de escrever funções
const par = (n)=>{
    return n % 2;
}

console.log(3)


