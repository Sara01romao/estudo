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