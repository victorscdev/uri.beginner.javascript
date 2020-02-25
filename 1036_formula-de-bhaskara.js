/******************* Descrição do Problema *******************/
/*
    Leia 3 valores de ponto flutuante e efetue o cálculo das raízes da equação de Bhaskara. Se não for possível calcular as raízes, mostre a mensagem correspondente “Impossivel calcular”, caso haja uma divisão por 0 ou raiz de numero negativo.

    Entrada
    Leia três valores de ponto flutuante (double) A, B e C.

    Saída
    Se não houver possibilidade de calcular as raízes, apresente a mensagem "Impossivel calcular". Caso contrário, imprima o resultado das raízes com 5 dígitos após o ponto, com uma mensagem correspondente conforme exemplo abaixo. Imprima sempre o final de linha após cada mensagem.

/* Variaveis */
var prompt = lines.shift().split(" ");
var A = parseFloat( prompt[ 0 ] );
var B = parseFloat( prompt[ 1 ] );
var C = parseFloat( prompt[ 2 ] );

if ((A === 0) || ( B * B - 4 * A * C < 0 ) ) {
    console.log( "Impossivel calcular" );
}

var bhaskara = Math.sqrt( ( B * B ) - 4 * A * C );
var R1 = ( -B + bhaskara ) / (2 * A);
var R2 = ( -B - bhaskara ) / (2 * A);

console.log( 'R1 = ' + R1.toFixed( 5 ) );
console.log( 'R2 = ' + R2.toFixed( 5 ) );


/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.
*/