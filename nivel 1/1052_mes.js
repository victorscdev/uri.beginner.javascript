

/******************* Descrição do Problema *******************/
/*
    Leia um valor inteiro entre 1 e 12, inclusive. Correspondente a este valor, deve ser apresentado como resposta o mês do ano por extenso, em inglês, com a primeira letra maiúscula.

    Entrada
    A entrada contém um único valor inteiro.

    Saída
    Imprima por extenso o nome do mês correspondente ao número existente na entrada, com a primeira letra em maiúscula.

/* Variaveis */
var mes = parseInt( lines.shift() );

switch ( mes ) {
    case 1: console.log( 'January' );break;
    case 2: console.log( 'February' );break;
    case 3: console.log( 'March' );break;
    case 4: console.log( 'April' );break;
    case 5: console.log( 'May' );break;
    case 6: console.log( 'June' );break;
    case 7: console.log( 'July' );break;
    case 8: console.log( 'August' );break;
    case 9: console.log( 'September' );break;
    case 10: console.log( 'October' );break;
    case 11: console.log( 'November' );break;
    case 12: console.log( 'December' );break;
}

/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.
*/