/* Case de testes */
var input = '10.0 3.0 5.0';
var lines = input.split('\n');
const lineSplited = lines[0].split(' ')

// Variaveis
let a = lineSplited[0]
let b = lineSplited[1]
let c = lineSplited[2]


function calcularDelta(a, b, c) {
    return (b * b) - (4 * a * c);
}

function calcularX1(a, b, delta) {
    return (-b + Math.sqrt(delta)) / (2 * a);
}

function calcularX2(a, b, delta) {
    return (-b - Math.sqrt(delta)) / (2 * a);
}

function resultado(a, b, c) {
    const delta = calcularDelta(a, b, c);
    const r1 = calcularX1(a, b, delta);
    const r2 = calcularX2(a, b, delta);
    if (delta < 0 || a == 0) {
        console.log('Impossivel calcular');
        return
    }
    console.log(`R1 = ${r1.toFixed(5)}`);
    console.log(`R2 = ${r2.toFixed(5)}`);
}

resultado(a, b, c);