/******************* Descrição do Problema *******************/
/*
    Calcule o consumo médio de um automóvel sendo fornecidos a distância total percorrida (em Km) e o total de combustível gasto (em litros).

    Entrada
    O arquivo de entrada contém dois valores: um valor inteiro X representando a distância total percorrida (em Km), e um valor real Y representando o total de combustível gasto, com um dígito após o ponto decimal.

    Saída
    Apresente o valor que representa o consumo médio do automóvel com 3 casas após a vírgula, seguido da mensagem "km/l".
*/

/* Variaveis */
var distancia = parseInt( lines.shift() );
var combustivel = parseFloat( lines.shift() );

var kmPorLitro = parseFloat( ( distancia / combustivel ) ).toFixed( 3 );

/* Print */
console.log( kmPorLitro + ' km/l' );



/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.
*/


/******************* Logica *******************/
/*
    Crie duas variaveis para receber a informação do usuario;
    Crie uma variavel para calcular quantos km fazem com um litro, usando "distancia" dividido por "combustivel";
    Use o "console.log()" para mostrar os calculos.
*/


/******************* Help *******************/
/*
    A função "parseFloat()" analisa um argumento string e retorna um número de ponto flutuante.

    A função parseInt() analisa um argumento string e retorna um inteiro na base especificada.

    O método "toFixed()" formata um número utilizando notação de ponto fixo.
*/