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