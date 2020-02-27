

/******************* Descrição do Problema *******************/
/*
    Leia um valor inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste de dois inteiros X e Y. Você deve apresentar a soma de todos os ímpares existentes entre X e Y.

    Entrada
    A primeira linha de entrada é um inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste em uma linha contendo dois inteiros X e Y.

    Saída
    Imprima a soma de todos valores ímpares entre X e Y.

/* Variaveis */
var line = lines.shift().split( ' ' )
var N = parseInt( lines.shift() );
var X = parseInt( line[ 0 ] );
var Y = parseInt( line[ 1 ] );
var soma;

for ( let i = 0; i < N; i++ ) {
    soma = 0;
    
    if ( Y > X ) {
        for ( let j = X + 1; j < Y; j++ ) {
            if ( j % 2 != 0 ) soma += j;
        }
    } else {
        for ( let j = Y + 1; j < X; j++ ) {
            if ( j % 2 != 0 ) soma += j;
        }
    }

    console.log(soma);

}



/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.
*/