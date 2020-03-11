

/******************* Descrição do Problema *******************/
/*
    Ler um número inteiro N e calcular todos os seus divisores.

    Entrada
    O arquivo de entrada contém um valor inteiro.

    Saída
    Escreva todos os divisores positivos de N, um valor por linha.

/* Variaveis */
var lines = [ '6' ];
var X = parseInt( lines.shift() );

for ( let i = 0; i <= X; i++ ) {
    
    if ( X % i == 0 ) console.log( i );

}