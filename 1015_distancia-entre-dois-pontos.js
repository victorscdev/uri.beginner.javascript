/******************* Descrição do Problema *******************/
/*
    Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, segundo a fórmula:

    Distancia =

    Entrada
    O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.

    Saída
    Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal.
*/

/* Variaveis */
var array1 = lines.shift().split(' ');
var x1 = parseFloat( array1[0] );
var y1 = parseFloat( array1[1] );

var array2 = lines.shift().split(' ');
var x2 = parseFloat( array2[0] );
var y2 = parseFloat( array2[1] );

var distancia = ( Math.sqrt( Math.pow( ( x2 - x1 ) , 2 ) + Math.pow( ( y2 - y1 ) , 2 ) ) ).toFixed( 4 );

/* Print */
console.log( distancia );



/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.
*/


/******************* Logica *******************/
/*
    Crie quatro variaveis "x1,y1 e x2,y2" para receber a informação do usuario e coloca-las em duas listas(array1 e array2);
    Crie uma variavel para calcular a distancia entre as variaveis acima, utilizando "Math.sqrt()" para achar a raiz quadrada;
    Use o "console.log()" para mostrar os calculos.
*/


/******************* Help *******************/
/*
    A função "parseFloat()" analisa um argumento string e retorna um número de ponto flutuante.

    A função Math.sqrt() retorna a raiz quadrada de um número (\sqrt{x}) .

    O método "toFixed()" formata um número utilizando notação de ponto fixo.
*/