/******************* Descrição do Problema *******************/
/*
    Leia 2 valores inteiros e armazene-os nas variáveis A e B. Efetue a soma de A e B atribuindo o seu resultado na variável X. Imprima X conforme exemplo apresentado abaixo. Não apresente mensagem alguma além daquilo que está sendo especificado e não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "Presentation Error".

    Entrada
    A entrada contém 2 valores inteiros.

    Saída
    Imprima a mensagem "X = " (letra X maiúscula) seguido pelo valor da variável X e pelo final de linha. Cuide para que tenha um espaço antes e depois do sinal de igualdade.
*/

/* Variaveis */
var A = parseInt( lines.shift() );
var B = parseInt( lines.shift() );
var X = A + B;

/* Print */
console.log( "X = " + X );


/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.
*/


/******************* Logica *******************/
/*
    Crie uma duas variaveis "A" e "B" para "simular" uma entrada de valor para os mesmos, onde usaremos o "parseInt()" para, transformar o valor recebido em valor decimal.

    Crie uma varivel "X" para somar os valores recebidos nas variaveis acima. Ex: A + B;
    Printe com "console.log()", para mostrar seus calculos.
*/


/******************* Help *******************/
/*
    A função parseInt() analisa um argumento string e retorna um inteiro na base especificada.
*/