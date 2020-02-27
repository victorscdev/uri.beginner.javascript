

/******************* Descrição do Problema *******************/
/*
    Leia uma quantidade indeterminada de duplas de valores inteiros X e Y. Escreva para cada X e Y uma mensagem que indique se estes valores foram digitados em ordem crescente ou decrescente.

    Entrada
    A entrada contém vários casos de teste. Cada caso contém dois valores inteiros X e Y. A leitura deve ser encerrada ao ser fornecido valores iguais para X e Y.

    Saída
    Para cada caso de teste imprima “Crescente”, caso os valores tenham sido digitados na ordem crescente, caso contrário imprima a mensagem “Decrescente”.

/* Variaveis */
var lines = [ '5 4', '7 2', '3 8', '2 2' ]
var XY = lines.shift().split( ' ' );
var X = parseInt( XY[ 0 ] );
var Y = parseInt( XY[ 1 ] );

while ( X != Y ) {
    printDescIncres( X, Y );

    XY = lines.shift().split( ' ' );
    X = parseInt( XY[ 0 ] );
    Y = parseInt( XY[ 1 ] );
}


function printDescIncres( X, Y ) {
    if( X > Y ) console.log( 'Decrescente' );
    else { console.log( 'Crescente' ) }
}



/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.
*/