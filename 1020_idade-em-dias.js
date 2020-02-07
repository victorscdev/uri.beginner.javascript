/******************* Descrição do Problema *******************/
/*
    Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

    Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com objetivo de testar raciocínio matemático simples.

    Entrada
    O arquivo de entrada contém um valor inteiro.

    Saída
    Imprima a saída conforme exemplo fornecido.
*/

/* Variaveis */
var idadeEmDias = parseInt( lines.shift() );

var ano = parseInt( idadeEmDias / 365 );
idadeEmDias -= ano * 365;

var mes = parseInt( idadeEmDias / 30 );
idadeEmDias -= mes * 30;

var dia = idadeEmDias;

/* Print */
console.log( ano + ' ano(s)' );
console.log( mes + ' mes(es)' );
console.log( dia + ' dia(s)' );


/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.
*/


/******************* Logica *******************/
/*
    Crie uma variaval "idadeEmDias" para "simular" entrada de valor pelo usuario;

    Crie uma variavel "ano" para fazer o primeiro calculo. Onde, ele vai receber a variavel "idadeEmDias" dividido pela quantidade quantidade de dias em um ano. Logo depois pegue o "idadeEmDias" e faça ela receber "idadeEmDias" menos "ano" vezes a quantidade de dias em um ano. Faça esse mesmo calculo para a variavel "mes", para a variavel "dia" só será necessario ele receber a variavel "idadeEmDias" pois depois de todos os calculos ira sobrar exatamento o que voce precisa. Lembrando que voce tem que usadar a function "parseInt()" para transformar todo o valor recebido em um numero inteiro.

    Use o "console.log()" para mostrar os calculos.
*/


/******************* Help *******************/
/*
    A função parseInt() analisa um argumento string e retorna um inteiro na base especificada.
*/