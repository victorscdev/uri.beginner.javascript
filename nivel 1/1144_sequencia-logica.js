

/******************* Descrição do Problema *******************/
/*
    Escreva um programa que leia um valor inteiro N. N * 2 linhas de saída serão apresentadas na execução do programa, seguindo a lógica do exemplo abaixo. Para valores com mais de 6 dígitos, todos os dígitos devem ser apresentados.

    Entrada
    O arquivo de entrada contém um número inteiro positivo N (1 < N < 1000).

    Saída
    Imprima a saída conforme o exemplo fornecido.

/* Variaveis */
var N = parseInt( lines.shift() );
var index = 1;
var count;

do {

    count = false;

    if ( index <= N ) {

        console.log( index + ' ' + ( index * index ) + ' ' + ( index * index * index )  );
        console.log( index + ' ' + ( ( index * index ) + 1) + ' ' + ( ( index * index * index ) + 1)  );

        index++
        count = true;
    }
} while ( count );


/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.
*/