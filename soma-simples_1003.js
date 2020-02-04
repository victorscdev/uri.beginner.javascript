/******************* Descrição do Problema *******************/
/*
    Leia dois valores inteiros, no caso para variáveis A e B. A seguir, calcule a soma entre elas e atribua à variável SOMA. A seguir escrever o valor desta variável.

    Entrada
    O arquivo de entrada contém 2 valores inteiros.

    Saída
    Imprima a variável SOMA com todas as letras maiúsculas, com um espaço em branco antes e depois da igualdade seguido pelo valor correspondente à soma de A e B. Como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".
*/


/* Variaveis */
var A = parseInt( lines.shift() );
var B = parseInt( lines.shift() );
var soma = A + B;

/* Print */
console.log( 'SOMA = ' + soma );


/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.
*/


/******************* Logica *******************/
/*
    Crie uma duas variaveis "A" e "B" para "simular" uma entrada de valor para os mesmos, onde usaremos o "parseInt()" para, transformar o valor recebido em valor decimal.
    Crie uma varivel "X" para somar os valores recebidos nas variaveis acima. Ex: A + B;
    Printe com "console.log()", para mostrar seus calculos.
*/


/******************* Help *******************/
/*
    A função parseInt() analisa um argumento string e retorna um inteiro na base especificada.
*/