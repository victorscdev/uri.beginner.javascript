

/******************* Descrição do Problema *******************/
/*
    Leia um valor inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste de dois inteiros X e Y. Você deve apresentar a soma de todos os ímpares existentes entre X e Y.

    Entrada
    A primeira linha de entrada é um inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste em uma linha contendo dois inteiros X e Y.

    Saída
    Imprima a soma de todos valores ímpares entre X e Y.

/* Variaveis */
var lines = ["7", "4 5", "13 10", "6 4", "3 3", "3 5", "3 4", "3 8"]
var N = parseInt( lines.shift() );

for(i = 0; i < N; i++){
    var XY = lines.shift().split(' ')
    var X = parseInt( XY[ 0 ] );
    var Y = parseInt( XY[ 1 ] );

    if(X < Y) solution(X, Y)
    else solution(Y, X)
}

function solution(X, Y){
        var soma = 0;
        for ( let i = (X + 1); i < Y; i++ ) {
            if ( i % 2 != 0 ) soma += i;
        }    
        console.log(soma);
}



/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.
*/