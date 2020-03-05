/******************* Descrição do Problema *******************/
/*
    Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:



    Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.

    Entrada
    O arquivo de entrada contém três valores inteiros.

    Saída
    Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".
*/

/* Variaveis */
var array = lines.shift().split(' ');

var A = parseInt( array[0] );
var B = parseInt( array[1] );
var C = parseInt( array[2] );

if (A > B && A > C) {
    console.log( A + ' eh o maior' );
}else if ( B > C) {
    console.log( B + ' eh o maior' );
}else {
    console.log( C + ' eh o maior' );
}

/* Print */


/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.

    Neste cenario, usaremos "split()" para pegar todo o valor enviado pelo usuario e transformar ele em uma array (Nota: dentro "split(), voce tera que separar as os valores recebidor com espaço. Ex: .split(" ");").
*/


/******************* Logica *******************/
/*
    Crie tres variaveis para receber a informação do usuario;
    Faça uma estrutura de condição "if e else" para, saber qual numero é o maior;
*/


/******************* Help *******************/
/*
    O método "split()" divide um objeto String em um array de strings ao separar a string em substrings.
*/