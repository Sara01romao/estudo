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

### Mixins - encapsula valores para serem usados. 
@mixin title-large{
    font-size:4em;
    line-height: 1;
    font-weight:bold;
    
}

h1{
     @include title-large;
    
}

#### com Argumento
@mixin title-large($color){
    font-size:4em;
    line-height: 1;
    font-weight:bold;
    background: $color;
}

h1{
     @include title-large($color);
   
}
#### @content
@mixin mobile{
    @media (max-width:600px){
        @content;
    }
}

h1{
    @include mobile{
        color: pink
    }
}

### Condicionais

$tema: light;
$color1: rgb(83, 209, 24);
$color2: rgb(48, 80, 223);

@if $tema == dark{
  $color1: rgb(209, 24, 24);
  $color2: white;

}@else if $tema == light{
   $color1: rgb(9, 95, 255);
   $color2: black;
}

h2{
  color: $color2;
  background: $color1;
}

#### Funções
 - lighten e Darken: altera a cor
 background: lighten(blue, 20%);

 - transparentize
  background: transparentize(blue, 0.5);

-round: arredonda o numero em algum calculo
 width: round($width /3);
- criar

  @funtion tamanho($pixels){
      @return ($pixel * 2)
  }

  h1{
      font-size: tamanho($pixels)
  }

  ### @for,  @while e @each
  loop de 1 até 6. #{variável} serve para css reconhecer o valor da variável 
  @for $i from 1 through 6{
      .item-#{$i}{
          width:100px * $i;
      }
  }

    $i : 1;
    @while $i <=6 {
        .type-#{$i}{
            font-size:16px * $i;
        }
        $i: $i +1;
    }


    $redes: github linkedin instagram; //lista de itens
    @each $rede in $redes{
        .#{rede}-icon{
            background-image:url('../img/#{rede}.png');
        }
    }