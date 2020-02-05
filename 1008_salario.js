/******************* Descrição do Problema *******************/
/*
    Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse funcionário. A seguir, mostre o número e o salário do funcionário, com duas casas decimais.

    Entrada
    O arquivo de entrada contém 2 números inteiros e 1 número com duas casas decimais, representando o número, quantidade de horas trabalhadas e o valor que o funcionário recebe por hora trabalhada, respectivamente.

    Saída
    Imprima o número e o salário do funcionário, conforme exemplo fornecido, com um espaço em branco antes e depois da igualdade. No caso do salário, também deve haver um espaço em branco após o $.
*/

/* Variaveis */
var numeroFuncionario = lines.shift();
var horasTrabalhadas = lines.shift();
var valorHoraTrabalhada = parseFloat( lines.shift() );
var salarioFuncionario = parseFloat( ( horasTrabalhadas * valorHoraTrabalhada ) ).toFixed( 2 );

/* Print */
console.log( 'NUMBER = ' + numeroFuncionario );
console.log( 'SALARY = U$ ' + salarioFuncionario );


/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.
*/


/******************* Logica *******************/
/*
    Crie uma variavel "numeroFuncionario" para "simular" uma entrada valor pelo o usuario utilizando "lines.shift()". Onde, recebe o numero do funcionario;
    Crie uma variavel "horasTrabalhadas" para "simular" uma entrada valor pelo o usuario utilizando "lines.shift()". Onde, recebe as horas que o funcionario trabalhou no mes;
    Crie uma variavel "valorHoraTrabalhada" para "simular" uma entrada valor pelo o usuario utilizando "lines.shift()" e "parseFloat()" para transformar o valor recebido em numero decimal. Onde, recebe o valor da hora trabalhada;
    Crie uma variavel "salarioFuncionario" para calcular as horas trabalhadas do funcionario vezes o valor da hora trabalhada. Onde, se utilizará "parseFloat()" para transformar todo o valor em um numero decimal e, "toFixed()" para determinar quantas casas depois da "," será mostrada.
    Utilize o "console.log()" para, mostrar os calculos. 
*/


/******************* Help *******************/
/*
    A função "parseFloat()" analisa um argumento string e retorna um número de ponto flutuante.
    O método "toFixed()" formata um número utilizando notação de ponto fixo.
*/