

/******************* Descrição do Problema *******************/
/*
    Escreva um algoritmo que leia 2 números e imprima o resultado da divisão do primeiro pelo segundo. Caso não for possível mostre a mensagem “divisao impossivel” para os valores em questão.

    Entrada
    A entrada contém um número inteiro N. Este N será a quantidade de pares de valores inteiros (X e Y) que serão lidos em seguida.

    Saída
    Para cada caso mostre o resultado da divisão com um dígito após o ponto decimal, ou “divisao impossivel” caso não seja possível efetuar o cálculo.

    Obs.: Cuide que a divisão entre dois inteiros em algumas linguagens como o C e C++ gera outro inteiro. Utilize cast :)

/* Variaveis */
var lines = [ '3', '3 -2', '-8 0', '0 8' ];
var arr;
var n1; 
var n2;
var cases = lines.shift();

for (let i = 0; i < cases; i++) {
    
    arr = lines.shift().split( ' ' );
    n1 = arr[ 0 ]; 
    n2 = arr[ 1 ];
    
    if ( n2 == 0 ) { console.log( 'divisao impossivel' );}

    else {
        if ( n1 == n2 ) console.log( parseFloat( n1 / n2 ).toFixed( 1 ) );
        else console.log( parseFloat( n1 / n2 ).toFixed( 1 ) );
    };
    
};

