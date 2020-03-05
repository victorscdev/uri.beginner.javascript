/******************* Descrição do Problema *******************/
/*
    Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

    Entrada
    O arquivo de entrada contém um valor inteiro N.

    Saída
    Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.
*/

/* Variaveis */
var duracaoSegundos = parseInt( lines.shift() );

var horas = parseInt( duracaoSegundos / 3600 );
duracaoSegundos -= horas * 3600;

var minutos = parseInt( duracaoSegundos / 60 );
duracaoSegundos -= minutos * 60;

var segundos = duracaoSegundos;

/* Print */
console.log( horas + ":" + minutos + ":" + segundos );



/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.
*/


/******************* Logica *******************/
/*
    Crie uma variaval "duracaoSegundos" para "simular" entrada de valor pelo usuario;

    Crie uma variavel "horas" para fazer o primeiro calculo. Onde, ele vai receber a variavel "duracaoSegundos" dividido pela quantidade de segundos que tem em uma hora. Logo depois pegue o "duracaoSegundos" e faça ela receber "duracaoSegundos" menos "horas" vezes a quantidade de segundos que tem em uma hora. Faça esse mesmo calculo para a variavel "munutos", para a variavel "segundos" só será necessario ele receber a variavel "duracaoSegundos" pois depois de todos os calculos ira sobrar exatamento o que voce precisa. Lembrando que voce tem que usadar a function "parseInt()" para transformar todo o valor recebido em um numero inteiro.

    Use o "console.log()" para mostrar os calculos.
*/


/******************* Help *******************/
/*
    A função parseInt() analisa um argumento string e retorna um inteiro na base especificada.
*/