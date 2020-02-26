

/******************* Descrição do Problema *******************/
/*
    Faça um programa que mostre os números pares entre 1 e 100, inclusive.

    Entrada
    Neste problema extremamente simples de repetição não há entrada.

    Saída
    Imprima todos os números pares entre 1 e 100, inclusive se for o caso, um em cada linha.

/* Variaveis */
var index = 1;
var count;

do {

    count = false;

    if ( index <= 100 ) {

        if ( index % 2 == 0 ) {

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