

/******************* Descrição do Problema *******************/
/*
    Neste problema, você deverá ler 3 palavras que definem o tipo de animal possível segundo o esquema abaixo, da esquerda para a direita.  Em seguida conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.

    Entrada
    A entrada contém 3 palavras, uma em cada linha, necessárias para identificar o animal segundo a figura acima, com todas as letras minúsculas.

    Saída
    Imprima o nome do animal correspondente à entrada fornecida.

/* Variaveis */
var lines = [ 'vertebrado', 'mamifero', 'onivoro' ];

var subfilo = lines.shift();
var tipo = lines.shift();
var alimento = lines.shift();

if ( ( subfilo == 'vertebrado' ) && ( tipo == 'ave' ) && ( alimento == 'carnivoro' ) ) console.log( 'aguia' );
if ( ( subfilo == 'vertebrado' ) && ( tipo == 'ave' ) && ( alimento == 'onivoro' ) ) console.log( 'pomba' );

if ( ( subfilo == 'vertebrado' ) && ( tipo == 'mamifero' ) && ( alimento == 'onivoro' ) ) console.log( 'homem' );
if ( ( subfilo == 'vertebrado' ) && ( tipo == 'mamifero' ) && ( alimento == 'herbivoro' ) ) console.log( 'vaca' );

if ( ( subfilo == 'invertebrado' ) && ( tipo == 'inseto' ) && ( alimento == 'hematofago' ) ) console.log( 'pulga' );
if ( ( subfilo == 'invertebrado' ) && ( tipo == 'inseto' ) && ( alimento == 'herbivoro' ) ) console.log( 'lagarta' );

if ( ( subfilo == 'invertebrado' ) && ( tipo == 'anelideo' ) && ( alimento == 'hematofago' ) ) console.log( 'sanguessuga' );
if ( ( subfilo == 'invertebrado' ) && ( tipo == 'anelideo' ) && ( alimento == 'onivoro' ) ) console.log( 'minhoca' );