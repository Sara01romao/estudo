<?php

//molde é a classe com métodos
class Pessoa{

    function falar(){
        echo "Olá pessoal!";
    }
}

$sara = new Pessoa();

//add propriedade
$sara ->nome ="Sara";

echo $sara->nome;
echo "<br>";

$sara->falar();


class Cachorro{
    
    function latir(){
        echo "auau";
    }
}

$ferra = new Cachorro();
$ferra->nome="Ferra";
echo "<br>";
echo $ferra->nome;

?>