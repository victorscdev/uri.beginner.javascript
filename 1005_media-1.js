/******************* Descrição do Problema *******************/
/*
    Leia 2 valores de ponto flutuante de dupla precisão A e B, que correspondem a 2 notas de um aluno. A seguir, calcule a média do aluno, sabendo que a nota A tem peso 3.5 e a nota B tem peso 7.5 (A soma dos pesos portanto é 11). Assuma que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.

    Entrada
    O arquivo de entrada contém 2 valores com uma casa decimal cada um.

    Saída
    Calcule e imprima a variável MEDIA conforme exemplo abaixo, com 5 dígitos após o ponto decimal e com um espaço em branco antes e depois da igualdade. Utilize variáveis de dupla precisão (double) e como todos os problemas, não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".
*/

/* Variaveis */
var A = parseFloat( lines.shift() );
var B = parseFloat( lines.shift() );
var MEDIA = parseFloat( ( ( A * 3.5 ) + ( B * 7.5 ) ) / 11 ).toFixed( 5 );

/* Print */
console.log( 'MEDIA = ' + MEDIA );


/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.
*/


/******************* Logica *******************/
/*
    Crie duas variaveis "A" e "B" para "simular" a entrada de informação do usuario. Onde, "lines.shift()" é utilizado para a simulação de entrada de informação e, "parseFloat()" para transformar toda a informação numerica em decimal.

    Crie uma variavel "MEDIA". Onde, "parseFloat()" será utilizado para transformar a informação em decimal. Será calculado as variaveis "A e B" vezes os seus respectivos pesos, depois calcular "A + B" dividido pela soma do peso (11). Usar "toFixed()" para indicar quantos numeros depois da "," será mostrado.

    Utilize o "console.log()" para, mostrar os calculos. 
*/


/******************* Help *******************/
/*
    A função "parseFloat()" analisa um argumento string e retorna um número de ponto flutuante.

    O método "toFixed()" formata um número utilizando notação de ponto fixo.
*/