/******************* Descrição do Problema *******************/
/*
    Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

    Entrada
    O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

    Saída
    Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido. Não esqueça de imprimir o fim de linha após cada linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”.
*/

/* Variaveis */
var notasInseridas = parseInt( lines.shift() );
var atual = notasInseridas;

var notas100 = parseInt( atual / 100 );
atual -= notas100 * 100;

var notas50 = parseInt( atual / 50 );
atual -= notas50 * 50;

var notas20 = parseInt( atual / 20 );
atual -= notas20 * 20;

var notas10 = parseInt( atual / 10 );
atual -= notas10 * 10;

var notas5 = parseInt( atual / 5 );
atual -= notas5 * 5;

var notas2 = parseInt( atual / 2 );
atual -= notas2 * 2;

var notas1 = parseInt( atual );

/* Print */
console.log( notasInseridas );
console.log( notas100 + " nota(s) de R$ 100,00" );
console.log( notas50 + " nota(s) de R$ 50,00" );
console.log( notas20 + " nota(s) de R$ 20,00" );
console.log( notas10 + " nota(s) de R$ 10,00" );
console.log( notas5 + " nota(s) de R$ 5,00" );
console.log( notas2 + " nota(s) de R$ 2,00" );
console.log( notas1 + " nota(s) de R$ 1,00" );



/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.
*/


/******************* Logica *******************/
/*
    Crie uma variaval "notasInseridas" para "simular" entrada de valor pelo usuario;

    Crie uma variavel "atual" para receber o valor que esta na variavel "notasInseridas" para modificala;

    Crie uma variavel "notos100" para fazer o primeiro calculo. Onde, ele vai receber a variavel "atual" dividido pelo valor da cedula em questao. Logo depois pegue o "atual" e faça ela receber "atual" menos "notas100" vezes o valor da cedula em questão. Faça esse calculo para todas as cedulas. Lembrando que voce tem que usadar a function "parseInt()" para transformar todo o valor recebido em um numero inteiro.

    Use o "console.log()" para mostrar os calculos.
*/


/******************* Help *******************/
/*
    A função parseInt() analisa um argumento string e retorna um inteiro na base especificada.
*/