

/******************* Descrição do Problema *******************/
/*
    Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.

    Entrada
    A entrada contém valores inteiros.

    Saída
    A saída deve conter uma das mensagens conforme descrito acima.

/* Variaveis */
var lines = [ '6 24' ];
var arr = lines.shift().split( ' ' );

var A = parseInt( arr[ 0 ] );
var B = parseInt( arr[ 1 ] );

if ( A % B == 0 || B % A == 0 ) console.log( 'Sao Multiplos' );
else console.log( 'Nao sao Multiplos' );