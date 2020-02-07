/******************* Descrição do Problema *******************/
/*
    Joaozinho quer calcular e mostrar a quantidade de litros de combustível gastos em uma viagem, ao utilizar um automóvel que faz 12 KM/L. Para isso, ele gostaria que você o auxiliasse através de um simples programa. Para efetuar o cálculo, deve-se fornecer o tempo gasto na viagem (em horas) e a velocidade média durante a mesma (em km/h). Assim, pode-se obter distância percorrida e, em seguida, calcular quantos litros seriam necessários. Mostre o valor com 3 casas decimais após o ponto.

'    Entrada
    O arquivo de entrada contém dois inteiros. O primeiro é o tempo gasto na viagem (em horas) e o segundo é a velocidade média durante a mesma (em km/h).

    Saída   
    Imprima a quantidade de litros necessária para realizar a viagem, com três dígitos após o ponto decimal'
*/

/* Variaveis */
var kmL = 12;
var tempoH = lines.shift();
var velocidadeMedia = lines.shift();

var totalLitros = parseFloat( ( velocidadeMedia * tempoH ) / kmL ).toFixed( 3 );

/* Print */
console.log( totalLitros );



/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.
*/


/******************* Logica *******************/
/*
    Crie tres variaveis, uma para setar a kilometragem por litro, mais uma para receber a informação do usuario sóbre o tempo gasto em horas e outra para receber a informação da velocidade media que o carro vai percorrer.
    Crie uma variavel para calcular a velocidade media vezes o tempo em horas dividido pelo KM/l. Usaremos "parseFloat()" para transformar toda a informação em decimal e "toFixed()" para determinar quantas casas depois da virgula usaremos no programa;
    Use o "console.log()" para mostrar os calculos.
*/


/******************* Help *******************/
/*
    A função "parseFloat()" analisa um argumento string e retorna um número de ponto flutuante.

    O método "toFixed()" formata um número utilizando notação de ponto fixo.
*/