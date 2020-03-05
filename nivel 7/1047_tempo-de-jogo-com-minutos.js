

/******************* Descrição do Problema *******************/
/*
    Leia a hora inicial, minuto inicial, hora final e minuto final de um jogo. A seguir calcule a duração do jogo.

    Obs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.

    Entrada
    Quatro números inteiros representando a hora de início e fim do jogo.

    Saída
    Mostre a seguinte mensagem: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” .

/* Variaveis */
var lines = [ '7 7 7 7' ];
var arr = lines.shift().split( ' ' );

var h_i = parseInt( arr[ 0 ] );
var m_i = parseInt( arr[ 1 ] );
var h_f = parseInt( arr[ 2 ] );
var m_f = parseInt( arr[ 3 ] );
var h_t = 0;
var m_t = 0;

var t_i = ( h_i * 60 ) + m_i
var t_f = ( h_f * 60 ) + m_f;

if( t_i >= t_f ) {
    t_f = t_f + ( 24 * 60 );
    for ( let i = t_i; i < t_f; i++ ) {
        m_t++;
        if ( m_t == 60 ) {
            h_t++;
            m_t = 0;
        }
    }
}
else {
    for ( let i = t_i; i < t_f; i++ ) {
        m_t++;
        if ( m_t == 60 ) {
            h_t++;
            m_t = 0;
        }
    }
}
console.log( 'O JOGO DUROU '+ h_t + ' HORA(S) E ' + m_t + ' MINUTO(S)' );
