<?php

//Declarar variável
$nome ="Sara";

//comando de saída
echo "Nome: $nome";

//**----------------------------------------- */

//ARRAYS 
$lista = ["sol", "lua", "terra"];


echo "<br> Array $lista[1] <br>";
print_r($lista);

echo "<br>";
//array associativo
$arr = ['nome' => 'Sara', 'idade' =>26];
print_r($arr);
echo "<br>";

$carro = ['cor' => 'azul', 'marca' =>'scort', 'ano'=> 1996];

echo "Marca: $carro[marca] ";
echo "Cor: $carro[cor]";

echo "<br>";
$pessoa = [
    'nome' => "sara",
    'idade' => 26,
    'altura' => 1.56,
];



if($pessoa['idade'] > 18){
    echo "$pessoa[nome] é maior de idade";
}else{
    echo "meno de idade";
}


?>