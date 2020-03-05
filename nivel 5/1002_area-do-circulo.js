/******************* Descrição do Problema *******************/
/*
    A fórmula para calcular a área de uma circunferência é: area = π . raio2. Considerando para este problema que π = 3.14159:

    - Efetue o cálculo da área, elevando o valor de raio ao quadrado e multiplicando por π.

    Entrada
    A entrada contém um valor de ponto flutuante (dupla precisão), no caso, a variável raio.

    Saída
    Apresentar a mensagem "A=" seguido pelo valor da variável area, conforme exemplo abaixo, com 4 casas após o ponto decimal. Utilize variáveis de dupla precisão (double). Como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".
*/


/* Variaveis */
var p = 3.14159;
var r = parseFloat( lines.shift() );
var a = ( p * Math.pow( r,2 ) ).toFixed( 4 );

/* Print */
console.log("A=" + a );


/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.
*/


/******************* Logica *******************/
/*
    Crie uma variavel para guardar o valor de "π";

    Crie uma variavel para "simular" uma entrada de valor para o "raio", onde, o "parseFloat()" para transformar todo o valor de entrada em ponto flutuante e, "lines.shift()" para simular a entrada desse valor;

    Crie uma variavel para calcular a area, utilizando "MAth.pow()" para, voce indicar o valor recebido e indicar qual é seu expoente e ".toFixer()" para, dizer quantas casas depois da virgula voce quer mostrar;

    Printe com "console.log()", para mostrar seus calculos.
*/


/******************* Help *******************/
/*
    A função "parseFloat()" analisa um argumento string e retorna um número de ponto flutuante.

    A função "Math.pow()" retorna a base elevada ao expoente power, ou seja, base-expoente.

    O método "toFixed()" formata um número utilizando notação de ponto fixo.
*/