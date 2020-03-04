

/******************* Descrição do Problema *******************/
/*
    Leia quatro números (N1, N2, N3, N4), cada um deles com uma casa decimal, correspondente às quatro notas de um aluno. Calcule a média com pesos 2, 3, 4 e 1, respectivamente, para cada uma destas notas e mostre esta média acompanhada pela mensagem "Media: ". Se esta média for maior ou igual a 7.0, imprima a mensagem "Aluno aprovado.". Se a média calculada for inferior a 5.0, imprima a mensagem "Aluno reprovado.". Se a média calculada for um valor entre 5.0 e 6.9, inclusive estas, o programa deve imprimir a mensagem "Aluno em exame.".

    No caso do aluno estar em exame, leia um valor correspondente à nota do exame obtida pelo aluno. Imprima então a mensagem "Nota do exame: " acompanhada pela nota digitada. Recalcule a média (some a pontuação do exame com a média anteriormente calculada e divida por 2). e imprima a mensagem "Aluno aprovado." (caso a média final seja 5.0 ou mais ) ou "Aluno reprovado.", (caso a média tenha ficado 4.9 ou menos). Para estes dois casos (aprovado ou reprovado após ter pego exame) apresente na última linha uma mensagem "Media final: " seguido da média final para esse aluno.

    Entrada
    A entrada contém quatro números de ponto flutuante correspendentes as notas dos alunos.

    Saída
    Todas as respostas devem ser apresentadas com uma casa decimal. As mensagens devem ser impressas conforme a descrição do problema. Não esqueça de imprimir o enter após o final de cada linha, caso contrário obterá "Presentation Error".

/* Variaveis */
var lines = [ '9.0 4.0 8.5 9.0' ];
var arr = lines.shift().split( ' ' );
var n1 = parseFloat( arr[ 0 ] ).toFixed( 1 );
var n2 = parseFloat( arr[ 1 ] ).toFixed( 1 );
var n3 = parseFloat( arr[ 2 ] ).toFixed( 1 );
var n4 = parseFloat( arr[ 3 ] ).toFixed( 1 );
var arr2;
var media;
var nExame;
var mediaFinal;

media = parseFloat( ( ( n1 * 2 ) + ( n2 * 3 ) + ( n3 * 4 ) + ( n4 * 1 ) ) / 10 ).toFixed( 1 );
console.log( 'Media: ' + media );

if ( media >= 7.0 ) {
    
    console.log( 'Aluno aprovado.' );

} else {

    if ( media < 5.0 ) {

        console.log( 'Aluno reprovado.' );
    
    } else {
        
        console.log( 'Aluno em exame.' );

        lines = [ '6.4' ];
        arr2 = lines.shift();
        nExame = parseFloat( arr2 ).toFixed( 1 );

        console.log( 'Nota do exame: ' + nExame );

        mediaFinal = ( parseFloat( ( nExame * 1 )  +  ( media * 1 ) ) / 2 ).toFixed( 1 );

        if ( mediaFinal >= 5.0 ) {

            console.log( 'Aluno aprovado.' );
        
        } else {
            
            console.log( 'Aluno reprovado.' );
        
        }
    
        console.log( 'Media final: ' + mediaFinal )
    }


}