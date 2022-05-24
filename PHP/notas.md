 # Declarar e imprimir valores

 Variável
   $nome = "Sara";
 
 Saída
   echo "Nome: $nome";


# Arrays
 $lista = ["sol", "lua", "terra"];
 echo "<br> Array $lista[1] <br>";
 print_r($lista);

 ## array associativo
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


