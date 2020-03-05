/******************* Descrição do Problema *******************/
/*
    Dois carros (X e Y) partem em uma mesma direção. O carro X sai com velocidade constante de 60 Km/h e o carro Y sai com velocidade constante de 90 Km/h.

    Em uma hora (60 minutos) o carro Y consegue se distanciar 30 quilômetros do carro X, ou seja, consegue se afastar um quilômetro a cada 2 minutos.

    Leia a distância (em Km) e calcule quanto tempo leva (em minutos) para o carro Y tomar essa distância do outro carro.

    Entrada
    O arquivo de entrada contém um número inteiro.

    Saída
    Imprima o tempo necessário seguido da mensagem "minutos".
*/

/* Variaveis */
var km = parseInt( lines.shift() );
var minutos = ( 60 * km ) / 30;

/* Print */
console.log( minutos + ' minutos' );



/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.
*/


/******************* Logica *******************/
/*
   Crie uma variavel para "simular" a entrada algum valor pelo usuario. Onde, receberá o valor de KM
   Crie uma variavel para fazer os calculos, onde, minutos será igual a 1 hora vezes a quantidade de KM colocado dividido por 30.
    Use o "console.log()" para mostrar os calculos.
*/


/******************* Help *******************/
/*
*/