

/******************* Descrição do Problema *******************/
/*
    O seu professor gostaria de fazer um programa com as seguintes características:

    Leia os dados de um CPF no formato XXX.YYY.ZZZ-DD;
    Imprima os quatro números, sendo um valor por linha.

    Entrada
    A entrada consiste vários arquivos de teste. Em cada arquivo de teste tem uma linha. A linha tem o seguinte formato XXX.YYY.ZZZ-DD, onde XXX, YYY, ZZZ, DD são números inteiros. Conforme mostrado no exemplo de entrada a seguir.

    Saída
    Para cada arquivo da entrada, terá um arquivo de saída. O arquivo de saída tem quatro linhas com um número inteiro em cada uma delas, conforme foi entrado. Conforme mostra o exemplo de saída a seguir.

/* Variaveis */
var lines = [ '000.000.000-00' ];
var cpf = lines.shift().split( /[.-]+/ );

for (let index = 0; index < cpf.length; index++) {
    console.log( cpf[ index ] );
    
}

// cpf = lines.shift();

// var XXX =  cpf.toString(2);

// cpf = lines.shift();
// var YYY = cpf.toString(2);

// cpf = lines.shift();
// var ZZZ = cpf.toString(2);

// cpf = lines.shift();
// var DD = cpf.toString(2);

// console.log( XXX );
// console.log( YYY );
// console.log( ZZZ );
// console.log( DD );



/******************* Observações *******************/
/*
    No URI quando usamos javascript deve-se "simular" a entrada do usuário, por isso, não use o método prompt(). sempre use lines.shift() para "simular" a entrada do usuário.
*/