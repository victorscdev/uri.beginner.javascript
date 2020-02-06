/******************* Descrição do Problema *******************/
/*
    Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno. A seguir, calcule a média do aluno, sabendo que a nota A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5. Considere que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

    Entrada
    O arquivo de entrada contém 3 valores com uma casa decimal, de dupla precisão (double).

    Saída
    Imprima a variável MEDIA conforme exemplo abaixo, com 1 dígito após o ponto decimal e com um espaço em branco antes e depois da igualdade. Assim como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".
*/

/* Variaveis */
var A = lines.shift();
var B = lines.shift();
var C = lines.shift();

var MEDIA = parseFloat( ( ( A * 2 ) + ( B * 3 ) + ( C * 5 ) ) / 10 ).toFixed( 1 );

/* Print */
console.log( 'MEDIA = ' + MEDIA );


/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.
*/


/******************* Logica *******************/
/*
    Crie tres variaveis "A", "B" e "C" para "simular" a entrada de informação do usuario. Onde, "parseFloat()" será utilizado para transformar toda a informação numerica em decimal.

    Crie uma variavel "MEDIA". Onde, "parseFloat()" será utilizado para transformar a informação em decimal. Será calculado as variaveis "A, B e C" vezes os seus respectivos pesos, depois calcular "A + B + C" dividido pela soma dos pesos (10). Usar "toFixed()" para indicar quantos numeros depois da "," será mostrado.

    Utilize o "console.log()" para, mostrar os calculos. 
*/


/******************* Help *******************/
/*
    A função "parseFloat()" analisa um argumento string e retorna um número de ponto flutuante.

    O método "toFixed()" formata um número utilizando notação de ponto fixo.
*/