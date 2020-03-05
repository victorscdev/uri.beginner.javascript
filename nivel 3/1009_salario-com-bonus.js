/******************* Descrição do Problema *******************/
/*
    Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.

    Entrada
    O arquivo de entrada contém um texto (primeiro nome do vendedor) e 2 valores de dupla precisão (double) com duas casas decimais, representando o salário fixo do vendedor e montante total das vendas efetuadas por este vendedor, respectivamente.

    Saída
    Imprima o total que o funcionário deverá receber, conforme exemplo fornecido.
*/

/* Variaveis */
var nomeDoVendedor = lines.shift();
var salario = parseFloat( lines.shift() );
var vendasEfetuadas = parseFloat( lines.shift() );
var salarioTotal = parseFloat( ( salario + (vendasEfetuadas * 1.5) / 10 )  ).toFixed( 2 );

/* Print */
console.log( 'TOTAL = R$ ' + salarioTotal );


/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.
*/


/******************* Logica *******************/
/*
    Crie uma variavel "nomeDoVendedor" para "simular" uma entrada valor pelo o usuario utilizando "lines.shift()". Onde, recebe o nome do vendedor;

    Crie uma variavel "salario" para "simular" uma entrada valor pelo o usuario utilizando "lines.shift()" e "parseFloat()" para transformar o valor recebido em numero decimal. Onde, recebe a informação do salario fixo do vendedor;

    Crie uma variavel "vendasEfetuadas" para "simular" uma entrada valor pelo o usuario utilizando "lines.shift()" e "parseFloat()" para transformar o valor recebido em numero decimal. Onde, recebe a informação em dinheiro das vendas feita no mes em questão;

    Crie uma variavel "salarioTotal" para calcular o valor total das vendas efetuadas no mes  vezes a porcentagem que o vendedor receberá pelas vendas mais o salario fixo dividido pelo porcentagem total das vendas efetuadas. Onde, se utilizará "parseFloat()" para transformar todo o valor em um numero decimal e, "toFixed()" para determinar quantas casas depois da "," será mostrada.

    Utilize o "console.log()" para, mostrar os calculos. 
*/


/******************* Help *******************/
/*
    A função "parseFloat()" analisa um argumento string e retorna um número de ponto flutuante.

    O método "toFixed()" formata um número utilizando notação de ponto fixo.
*/