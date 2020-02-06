/******************* Descrição do Problema *******************/
/*
    Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:

    a) a área do triângulo retângulo que tem A por base e C por altura.
    b) a área do círculo de raio C. (pi = 3.14159)
    c) a área do trapézio que tem A e B por bases e C por altura.
    d) a área do quadrado que tem lado B.
    e) a área do retângulo que tem lados A e B.
    Entrada
    O arquivo de entrada contém três valores com um dígito após o ponto decimal.

    Saída
    O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal.
*/

/* Variaveis */
var array = lines.shift().split(' ');

var A = parseFloat( array[0] );
var B = parseFloat( array[1] );
var C = parseFloat( array[2] );

var TRIANGULO = parseFloat( ( A * C  ) / 2).toFixed( 3 );
var CIRCULO = parseFloat( 3.14159 * ( C * C ) ).toFixed( 3 );
var TRAPEZIO = parseFloat( ( ( A + B ) * C ) / 2 ).toFixed( 3 );
var QUADRADO = parseFloat( B * B ).toFixed( 3 );
var RETANGULO = parseFloat( A * B ).toFixed( 3 );

/* Print */
console.log( 'TRIANGULO: ' + TRIANGULO );
console.log( 'CIRCULO: ' + CIRCULO );
console.log( 'TRAPEZIO: ' + TRAPEZIO );
console.log( 'QUADRADO: ' + QUADRADO );
console.log( 'RETANGULO: ' + RETANGULO );


/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.
*/


/******************* Logica *******************/
/*
*/


/******************* Help *******************/
/*
*/