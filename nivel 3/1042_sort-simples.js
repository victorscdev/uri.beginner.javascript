

/******************* Descrição do Problema *******************/
/*
    Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.

    Entrada
    A entrada contem três números inteiros.

    Saída
    Imprima a saída conforme foi especificado.

/* Variaveis */
var lines = [ '7 21 -14' ];
var arr = lines.shift().split( ' ' );

var A = parseInt( arr[ 0 ] );
var B = parseInt( arr[ 1 ] );
var C = parseInt( arr[ 2 ] );


if ( ( A < B ) && ( A < C ) ) {

    console.log( A );

    if ( B < C ) {
        
        console.log( B );
        console.log( C );

    } else {

        console.log( C );
        console.log( B );

    }
} else if ( B < C ) {

    console.log( B );

    if ( A < C ) {

        console.log( A );
        console.log( C );

    } else {

        console.log( C );
        console.log( A );

    }
} else {

    console.log( C );

    if ( A < B ) {
        console.log( A );
        console.log( B );

    } else {
        console.log( B );
        console.log( A );

    }

}
    
    console.log( "" );
    console.log( A );
    console.log( B );
    console.log( C );

