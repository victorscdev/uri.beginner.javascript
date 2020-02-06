/******************* Descrição do Problema *******************/
/*
    Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

    Entrada
    O arquivo de entrada contém 4 valores inteiros.

    Saída
    Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade.
*/

/* Variaveis */
var A = parseInt( lines.shift() );
var B = parseInt( lines.shift() );
var C = parseInt( lines.shift() );
var D = parseInt( lines.shift() );

var DIFERENCA = parseInt( ( A * B ) - ( C * D ) );

/* Print */
console.log( 'DIFERENCA = ' + DIFERENCA );


/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.
*/


/******************* Logica *******************/
/*
    Crie quatro variaveis "A", "B", "C" e "D" para receber uma "simulação" de entrada de informação. Onde, "parseInt()" será utilizado para transformar a informação recebida pelas variaveis em numeros inteiros.

    Crie uma variavel "DIFERENCA" para calcular a diferencia entre "A * B" menos "C * D".

    Utilize o "console.log()" para, mostrar os calculos. 
*/


/******************* Help *******************/
/*
    A função parseInt() analisa um argumento string e retorna um inteiro na base especificada.
*/