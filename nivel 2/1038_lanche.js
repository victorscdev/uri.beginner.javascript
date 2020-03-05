/******************* Descrição do Problema *******************/
/*
    Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.



    Entrada
    O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme tabela acima.

    Saída
    O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal.

/* Variaveis */
var prompt = lines.shift().split( ' ' );
var codigo = parseInt( prompt[ 0 ] );
var quantidade = parseInt( prompt[ 1 ] );
var totalAPagar;

switch (codigo) {
    case 1: totalAPagar = quantidade * 4.00; break;
    case 2: totalAPagar = quantidade * 4.50; break;
    case 3: totalAPagar = quantidade * 5.00; break;
    case 4: totalAPagar = quantidade * 2.00; break;
    case 5: totalAPagar = quantidade * 1.50; break;
    default: totalAPagar = 0;
}

console.log( 'Total: R$ ' + totalAPagar.toFixed( 2 ) );


/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.
*/