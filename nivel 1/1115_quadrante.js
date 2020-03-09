

/******************* Descrição do Problema *******************/
/*
    Escreva um programa para ler as coordenadas (X,Y) de uma quantidade indeterminada de pontos no sistema cartesiano. Para cada ponto escrever o quadrante a que ele pertence. O algoritmo será encerrado quando pelo menos uma de duas coordenadas for NULA (nesta situação sem escrever mensagem alguma).

    Entrada
    A entrada contém vários casos de teste. Cada caso de teste contém 2 valores inteiros.

    Saída
    Para cada caso de teste mostre em qual quadrante do sistema cartesiano se encontra a coordenada lida, conforme o exemplo.

/* Variaveis */
var lines = [ '2 2', '3 -2', '-8 -1', '-7 1', '0 2', '0 0' ];
var arr;
var X;
var Y;

while ( X != 0 && Y != 0 ) {
    
    arr = lines.shift().split( ' ' );
    X = parseInt( arr[ 0 ] );
    Y = parseInt( arr[ 1 ] );

    if ( X == 0 || Y == 0 ) break;
    else if ( Y > 0 && X > 0 ) console.log( "primeiro" );
    else if ( Y > 0 && X < 0 ) console.log( "segundo" );
    else if ( Y < 0 && X < 0 ) console.log( "terceiro" );
    else if ( Y < 0 && X > 0 ) console.log( "quarto" );
    

}