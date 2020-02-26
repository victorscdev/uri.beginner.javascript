/******************* Descrição do Problema *******************/
/*
    Você deve fazer um programa que leia um valor qualquer e apresente uma mensagem dizendo em qual dos seguintes intervalos ([0,25], (25,50], (50,75], (75,100]) este valor se encontra. Obviamente se o valor não estiver em nenhum destes intervalos, deverá ser impressa a mensagem “Fora de intervalo”.

    O símbolo ( representa "maior que". Por exemplo:
    [0,25]  indica valores entre 0 e 25.0000, inclusive eles.
    (25,50] indica valores maiores que 25 Ex: 25.00001 até o valor 50.0000000

    Entrada
    O arquivo de entrada contém um número com ponto flutuante qualquer.

Saída
A saída deve ser uma mensagem conforme exemplo abaixo.

/* Variaveis */
var N = parseFloat( lines.shift() );

if ( N >= 0 && N <= 25 ) {

    console.log( 'Intervalo [0,25]' );

} else if ( N > 25 && N <= 50 ) {

    console.log( 'Intervalo (25,50]' );

} else if ( N > 50 && N <= 75 ) {

    console.log( 'Intervalo (50,75]' );

} else if ( N > 75 && N <= 100 ) {

    console.log( 'Intervalo (75,100]' );

} else {

    console.log( 'Fora de intervalo' );

}


/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.
*/