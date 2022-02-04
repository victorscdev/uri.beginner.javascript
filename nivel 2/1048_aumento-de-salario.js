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
var lines = ['400.00', '800.01', '2000.00'];
var casos = lines;
var reajuste, novoSalario;

function calcularReajuste() {
  for (let index = 0; index < casos.length; index++) {
    let salario = parseFloat(casos[index]);

    if (salario >= 0 && salario <= 400.0) {
      saida((salario * 1.15).toFixed(2), (salario * 0.15).toFixed(2), 15);
    }

    if (salario >= 400.01 && salario <= 800.0) {
      saida((salario * 1.12).toFixed(2), (salario * 0.12).toFixed(2), 12);
    }

    if (salario >= 800.01 && salario <= 1200.0) {
      saida((salario * 1.1).toFixed(2), (salario * 0.1).toFixed(2), 10);
    }

    if (salario >= 1200.01 && salario <= 2000.0) {
      saida((salario * 1.07).toFixed(2), (salario * 0.07).toFixed(2), 7);
    }

    if (salario > 2000.0) {
      saida((salario * 1.04).toFixed(2), (salario * 0.04).toFixed(2), 4);
    }
  }
}

function saida(novoSalario, reajuste, porcentagem) {
  console.log(`Novo salario: ${novoSalario}`);
  console.log(`Reajuste ganho: ${reajuste}`);
  console.log(`Em percentual: ${porcentagem} %`);
}

calcularReajuste();
