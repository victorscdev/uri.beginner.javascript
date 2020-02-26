

/******************* Descrição do Problema *******************/
/*
    Leia uma quantidade indeterminada de duplas de valores inteiros X e Y. Escreva para cada X e Y uma mensagem que indique se estes valores foram digitados em ordem crescente ou decrescente.

    Entrada
    A entrada contém vários casos de teste. Cada caso contém dois valores inteiros X e Y. A leitura deve ser encerrada ao ser fornecido valores iguais para X e Y.

    Saída
    Para cada caso de teste imprima “Crescente”, caso os valores tenham sido digitados na ordem crescente, caso contrário imprima a mensagem “Decrescente”.

/* Variaveis */
var prompt = lines.shift().split( ' ' );
var X = parseInt( prompt[ 0 ] );
var Y = parseInt( prompt[ 1 ] );
var count;

do {


    if ( X > Y ) { count = true; console.log( 'Decrescente' ); }
    else if ( X < Y ) { count = true; console.log( 'Crescente' ); }
    else { count = false }

    X = parseInt( prompt[ 0 ] );
    Y = parseInt( prompt[ 1 ] );

    count = false

} while (count);


/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.
*/