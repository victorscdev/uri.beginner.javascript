

/******************* Descrição do Problema *******************/
/*
    Leia um valor inteiro X (1 <= X <= 1000). Em seguida mostre os ímpares de 1 até X, um valor por linha, inclusive o X, se for o caso.

    Entrada
    O arquivo de entrada contém 1 valor inteiro qualquer.

    Saída
    Imprima todos os valores ímpares de 1 até X, inclusive X, se for o caso.

/* Variaveis */
var X = parseInt( lines.shift() );
var index = 1;
var count;

do {

    count = false;

    if ( index <= X ) {

        if ( index % 2 == 1 ) {

            console.log( index );

        }

        index++
        count = true;
    }
} while ( count )

/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.
*/