

/******************* Descrição do Problema *******************/
/*
    Escreva um programa que leia um valor inteiro N. Este N é a quantidade de linhas de saída que serão apresentadas na execução do programa.

    Entrada
    O arquivo de entrada contém um número inteiro positivo N.

    Saída
    Imprima a saída conforme o exemplo fornecido.

/* Variaveis */
var lines = [ '7' ];
var N = parseInt( lines.shift() );
var pum = 1;

for ( let i = 1; i <= N; i++ ) {
    console.log( pum + ' ' + ( pum + 1 ) + ' ' + ( pum + 2 ) + ' ' + 'PUM' );
    pum++;
    pum++;
    pum++;
    pum++;
}



/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.
*/