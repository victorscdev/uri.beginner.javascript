

/******************* Descrição do Problema *******************/
/*
    Leia 2 valores com uma casa decimal (x e y), que devem representar as coordenadas de um ponto em um plano. A seguir, determine qual o quadrante ao qual pertence o ponto, ou se está sobre um dos eixos cartesianos ou na origem (x = y = 0).



    Se o ponto estiver na origem, escreva a mensagem “Origem”.

    Se o ponto estiver sobre um dos eixos escreva “Eixo X” ou “Eixo Y”, conforme for a situação.

    Entrada
    A entrada contem as coordenadas de um ponto.

    Saída
    A saída deve apresentar o quadrante em que o ponto se encontra.

/* Variaveis */
var lines = [ '4.5 -2.2' ];
var arr = lines.shift().split( ' ' );

var x = parseFloat( arr[ 0 ] );
var y = parseFloat( arr[ 1 ] );

// Origem
if ( ( x == 0 ) && ( y == 0 ) ) console.log( 'Origem' );

// Eixo X
if ( ( x > 0 ) && ( y == 0 ) || ( x < 0 ) && ( y == 0 ) ) console.log( 'Eixo X' );

// Eixo Y
if ( ( x == 0 ) && ( y > 0 ) || ( x == 0 ) && ( y < 0 ) ) console.log( 'Eixo Y' );

// Q1
if ( ( x > 0 ) && ( y > 0 ) ) console.log( 'Q1' );

// Q2
if ( ( x < 0 ) && ( y > 0 ) ) console.log( 'Q2' );

// Q3
if ( ( x < 0 ) && ( y < 0 ) ) console.log( 'Q3' );

// Q4
if ( ( x > 0 ) && ( y < 0 ) ) console.log( 'Q4' );
