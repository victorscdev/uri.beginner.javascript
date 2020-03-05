/******************* Descrição do Problema *******************/
/*
    Leia um valor de ponto flutuante com duas casas decimais. Este valor representa um valor monetário. A seguir, calcule o menor número de notas e moedas possíveis no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2. As moedas possíveis são de 1, 0.50, 0.25, 0.10, 0.05 e 0.01. A seguir mostre a relação de notas necessárias.

    Entrada
    O arquivo de entrada contém um valor de ponto flutuante N (0 ≤ N ≤ 1000000.00).

    Saída
    Imprima a quantidade mínima de notas e moedas necessárias para trocar o valor inicial, conforme exemplo fornecido.

    Obs: Utilize ponto (.) para separar a parte decimal.
*/

/* Variaveis */
var dinheiroTotal = parseFloat( lines.shift() );
var notas = parseInt( dinheiroTotal );
var moedas = parseInt( ( ( dinheiroTotal - notas ) * 100 ) );

var notas100 = parseInt( notas / 100 );
notas -= notas100 * 100;

var notas50 = parseInt( notas / 50 );
notas -= notas50 * 50;

var notas20 = parseInt( notas / 20 );
notas -= notas20 * 20;

var notas10 = parseInt( notas / 10 );
notas -= notas10 * 10;

var notas5 = parseInt( notas / 5 );
notas -= notas5 * 5;

var notas2 = parseInt( notas / 2 );
notas -= notas2 * 2;

var moedas1 = parseInt( notas );
notas -= moedas1 * 1;

var moedas50 = parseInt( moedas / 50 );
moedas -= moedas50 * 50;

var moedas25 = parseInt( moedas / 25 );
moedas -= moedas25 * 25;

var moedas10 = parseInt( moedas / 10 );
moedas -= moedas10 * 10;

var moedas05 = parseInt( moedas / 5 );
moedas -= moedas05 * 5;

var moedas01 = parseInt( moedas );

/* Print */
console.log( 'NOTAS:' );
console.log( notas100 + ' nota(s) de R$ 100.00' );
console.log( notas50 + ' nota(s) de R$ 50.00' );
console.log( notas20 + ' nota(s) de R$ 20.00' );
console.log( notas10 + ' nota(s) de R$ 10.00' );
console.log( notas5 + ' nota(s) de R$ 5.00' );
console.log( notas2 + ' nota(s) de R$ 2.00' );

console.log( "MOEDAS:" );
console.log( moedas1 + ' moeda(s) de R$ 1.00' );
console.log( moedas50 + ' moeda(s) de R$ 0.50' );
console.log( moedas25 + ' moeda(s) de R$ 0.25' );
console.log( moedas10 + ' moeda(s) de R$ 0.10' );
console.log( moedas05 + ' moeda(s) de R$ 0.05' );
console.log( moedas01 + ' moeda(s) de R$ 0.01' );


/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.
*/


/******************* Logica *******************/
/*
    Crie uma variaval "dinheiro" para "simular" entrada de valor pelo usuario. Lembrando que para essa variavel será utilizado a function "parseFloat" para transformar toda a informação recebida em um numero decimal;

    Crie uma variavel "notas100" para fazer o primeiro calculo. Onde, ele vai receber a variavel "dinheiro" dividido pela valor da cedula em questão. Logo depois pegue o "dinheiro" e faça ela receber "dinheiro" menos "notas100" vezes o valor da cedula em questão. Faça esse mesmo calculo para todas as variaveis que tenham o prefixo "notas". Lembrando que voce tem que usadar a function "parseInt()" para transformar todo o valor recebido em um numero inteiro.

    Crie uma variave "moeda" que ira receber o valor de "dinheiro".

    Crie uma variavel "moeda1" para fazer os calculos. Onde, ele vai receber a variavel "moeda" dividido pela a moeda em questão, logo depois a variavel "moeda" receberá "moeda" menos "moeda1" vezes a moeda em questão. Faça esse mesmo calculo para as outras moedas.

    Use o "console.log()" para mostrar os calculos.
*/


/******************* Help *******************/
/*
    A função parseInt() analisa um argumento string e retorna um inteiro na base especificada.

    A função "parseFloat()" analisa um argumento string e retorna um número de ponto flutuante.
*/