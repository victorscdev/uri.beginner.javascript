

/******************* Descrição do Problema *******************/
/*
    Leia um valor inteiro X. Em seguida apresente os 6 valores ímpares consecutivos a partir de X, um valor por linha, inclusive o X ser for o caso.

    Entrada
    A entrada será um valor inteiro positivo.

    Saída
    A saída será uma sequência de seis números ímpares.

/* Variaveis */
var lines = [ '20' ];
var X = parseInt( lines.shift() );

for (let i = 0; i < 6; i++) {
    
    if ( X % 2 == 1 ) {
        
        console.log( X );
        X += 2;

    } else if ( X % 2 == 0 ) {

        X += 1;
        console.log( X )
        X += 2;

    }

}