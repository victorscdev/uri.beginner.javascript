/******************* Descrição do Problema *******************/
/*
    Leia dois valores inteiros. A seguir, calcule o produto entre estes dois valores e atribua esta operação à variável PROD. A seguir mostre a variável PROD com mensagem correspondente.   

    Entrada
    O arquivo de entrada contém 2 valores inteiros.

    Saída
    Imprima a variável PROD conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade. Não esqueça de imprimir o fim de linha após o produto, caso contrário seu programa apresentará a mensagem:
*/

/* Variaveis */
var A = parseInt( lines.shift() );
var B = parseInt( lines.shift() );
var PROD = A * B;

/* Print */
console.log( 'PROD = ' + PROD );


/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.
*/


/******************* Logica *******************/
/*
    Crie uma duas variaveis "A" e "B" para "simular" uma entrada de valor para os mesmos, onde usaremos o "parseInt()" para, transformar o valor recebido em valor decimal e, "lines.shift()" para simular a entrada desse valor;
    Crie uma varivel "PROD" para Multiplicar os valores recebidos das variaveis acima. Ex: A * B;
    Printe com "console.log()", para mostrar seus calculos.
*/


/******************* Help *******************/
/*
    
*/