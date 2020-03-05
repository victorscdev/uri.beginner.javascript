/******************* Descrição do Problema *******************/
/*
    Faça um programa que calcule e mostre o volume de uma esfera sendo fornecido o valor de seu raio (R). A fórmula para calcular o volume é: (4/3) * pi * R3. Considere (atribua) para pi o valor 3.14159.

    Dica: Ao utilizar a fórmula, procure usar (4/3.0) ou (4.0/3), pois algumas linguagens (dentre elas o C++), assumem que o resultado da divisão entre dois inteiros é outro inteiro.

    Entrada
    O arquivo de entrada contém um valor de ponto flutuante (dupla precisão), correspondente ao raio da esfera.

    Saída
    A saída deverá ser uma mensagem "VOLUME" conforme o exemplo fornecido abaixo, com um espaço antes e um espaço depois da igualdade. O valor deverá ser apresentado com 3 casas após o ponto.
*/

/* Variaveis */
const p = 3.14159;
const vEsfera = 4.0 / 3;
var raio = parseFloat( lines.shift() );

var volume = parseFloat( vEsfera * p * Math.pow( raio , 3 ) ).toFixed( 3 );

/* Print */
console.log( 'VOLUME = ' + volume );


/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.
*/


/******************* Logica *******************/
/*
    Crie uma variavel "vEsfora" para setar o volume da esfera;

    Crie uma variavel "raio" para "simular" uma entrada valor pelo o usuario utilizando "lines.shift()" e "parseInt()" para transformar o valor recebido em numero inteiro. Onde, receberá os valor do raio da esfera;

    Crie uma variavel "p" para setar o valor de pi.

    Crie uma variavel "volume" para fazer os calculos. Onde, se utilizará "parseFloat()" para transformar todo o valor em um numero decimal e, "toFixed()" para determinar quantas casas depois da "," será mostrada e, "Math.pow()" para indicar o valor e qual potencia ele será elevado. Ex: Math.pow( raio,3 );

    Utilize o "console.log()" para, mostrar o resultado dos calculos. 
*/


/******************* Help *******************/
/*
    A função "parseFloat()" analisa um argumento string e retorna um número de ponto flutuante.

    O método "toFixed()" formata um número utilizando notação de ponto fixo.

    A função Math.pow() retorna a base elevada ao expoente power, ou seja, base-expoente.
*/