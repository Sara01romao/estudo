# SASS- pré-processador de CSS
Se cria variáveis, funções, condições para css.


_nome.scss (serve para não gerar um novo arquivo .css), para importar.


#### Criar variável
$nome: valor;
$color1: blue;

#### Nesting - alinhamento dos elementos dentro de outros. & para juntar propriedade no elemento
ul{
    text-align: center;
    li{
        list-style:none;
        display: inline-block;
        a{
            color: red;
            &:hover{ 
            background-color: #999;
          }
        }
    }
}