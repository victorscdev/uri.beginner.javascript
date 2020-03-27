

/******************* Descrição do Problema *******************/
/*
    Faça um programa que leia 6 valores. Estes valores serão somente negativos ou positivos (desconsidere os valores nulos). A seguir, mostre a quantidade de valores positivos digitados.

    Entrada
    Seis valores, negativos e/ou positivos.

    Saída
    Imprima uma mensagem dizendo quantos valores positivos foram lidos.

/* Variaveis */
var lines = [ '7', '-5', '6', '-3.4', '4.6', '12' ];
var arr;
var counts = 0;

for ( let i = 0; i < 6; i++ ) {

    arr = lines.shift();
    counts;
    
    if ( arr >= 1 ) counts++;


}
console.log( counts + ' valores positivos' );