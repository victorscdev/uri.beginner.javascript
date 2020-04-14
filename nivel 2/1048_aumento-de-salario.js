

/******************* Descrição do Problema *******************/
/*
    A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo:


    Salário	Percentual de Reajuste
    0 - 400.00
    400.01 - 800.00
    800.01 - 1200.00
    1200.01 - 2000.00
    Acima de 2000.00

    15%
    12%
    10%
    7%
    4%

    Leia o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste ganho e o índice reajustado, em percentual.

    Entrada
    A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

    Saída
    Imprima 3 linhas na saída: o novo salário, o valor ganho de reajuste e o percentual de reajuste ganho, conforme exemplo abaixo.

/* Variaveis */
var lines = [ '400.00' ];
var salario = parseFloat( lines.shift() );
var reajuste;
var novoSalario;


if ( salario > 0 || salario <= 400.00 ) {
    reajuste = parseFloat( salario * 0.15 );
    novoSalario = parseFloat( salario + reajuste ).toFixed( 2 );

    console.log( 'Novo salario: ' + novoSalario );
    console.log( 'Reajuste ganho: ' + reajuste );
    console.log( 'Em percentual: 15 %' );
}
