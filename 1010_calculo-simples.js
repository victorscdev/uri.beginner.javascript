/******************* Descrição do Problema *******************/
/*
    Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

    Entrada
    O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

    Saída
    A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.
*/

/* Variaveis */
var array1 = lines.shift().split(' ');
var codigo1 = parseInt( array1[ 0 ] );
var nPecas1 = parseInt( array1[ 1 ] );
var vUnitario1 = parseFloat( array1[ 2 ] );

var array2 = lines.shift().split(' ');
var codigo2 = parseInt( array2[ 0 ] );
var nPecas2 = parseInt( array2[ 1 ] );
var vUnitario2 = parseFloat( array2[ 2 ] );

var total = parseFloat( ( nPecas1 * vUnitario1 ) + ( nPecas2 * vUnitario2 ) ).toFixed( 2 );

/* Print */
console.log( 'VALOR A PAGAR: R$ ' + total );


/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.

    Neste cenario, usaremos "split()" para pegar todo o valor enviado pelo usuario e transformar ele em uma array (Nota: dentro "split(), voce tera que separar as os valores recebidor com espaço. Ex: .split(" ");").
*/


/******************* Logica *******************/
/*
    Crie duas variaveis "array1 e array2" para "simular" o envio de valor de um usuario utilizando "lines.shift()" e, juntar ele em uma lista(array);

    Crie duas variaveis "codigo1 e codigo2" para "simular" uma entrada valor pelo o usuario utilizando "lines.shift()" e "parseInt()" para transformar o valor recebido em numero inteiro e, posicionando esse valor em nossa lista(variavel "array"). Onde, receberá o codigo do produto em questão;

    Crie duas variaveis "nPecas1 e nPecas2" para "simular" uma entrada valor pelo o usuario utilizando "lines.shift()" e "parseInt()" para transformar o valor recebido em numero inteiro e, posicionando esse valor em nossa lista(variavel "array"). Onde, receberá a quantidade do produto em questão;

    Crie duas variaveis "vUnitario1 e vUnitario2" para "simular" uma entrada valor pelo o usuario utilizando "lines.shift()" e "parseFloat()" para transformar o valor recebido em numero decimal e, posicionando esse valor em nossa lista(variavel "array"). Onde, receberá o valor unitario do produto;

    Crie uma variavel "valorAPagar" para calcular o valor da peça 1 vezes o numero de peças 1 e, o valor da peça 2 vezes o numero de peças 2, depois sáma tudo. Onde, se utilizará "parseFloat()" para transformar todo o valor em um numero decimal e, "toFixed()" para determinar quantas casas depois da "," será mostrada.

    Utilize o "console.log()" para, mostrar o resultado dos calculos. 
*/


/******************* Help *******************/
/*
    A função "parseFloat()" analisa um argumento string e retorna um número de ponto flutuante.

    O método "toFixed()" formata um número utilizando notação de ponto fixo.

    O método "split()" divide um objeto String em um array de strings ao separar a string em substrings.
*/