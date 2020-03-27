

/******************* Descrição do Problema *******************/
/*
    Leia 1 valor inteiro N (2 < N < 1000). A seguir, mostre a tabuada de N:      
    1 x N = N      2 x N = 2N        ...       10 x N = 10N

    Entrada
    A entrada contém um valor inteiro N (2 < N < 1000).

    Saída
    Imprima a tabuada de N, conforme o exemplo fornecido.

/* Variaveis */
var lines = [ '140' ];
var N = parseInt( lines.shift() );
var i = 1;
var mult = ( N * i );

while ( i <= 10 ) {
    mult = ( N * i );
    console.log( i + ' x ' + N + ' = ' + mult );
    i++
}