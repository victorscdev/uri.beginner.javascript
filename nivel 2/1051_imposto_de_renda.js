var lines = ['3002.00', '1701.12', '4520.00'];
var casos = lines;
var imposto;

function calcularImposto() {
	for (let index = 0; index < casos.length; index++) {
		let salario = parseFloat(casos[index]);

		if (salario <= 2000) {
			console.log('Isento');
		} else {
			if (salario > 2000 && salario <= 3000) {
				imposto = (salario - 2000) * 0.08;
				console.log(`R$ ${imposto.toFixed(2)}`);
			} else if (salario > 3000 && salario <= 4500) {
				let calculoImposto = 1000 * 0.08;
				imposto = (salario - 3000) * 0.18 + calculoImposto;
				console.log(`R$ ${imposto.toFixed(2)}`);
			} else if (salario > 4500) {
				let calculoImposto = 1000 * 0.08 + 1500 * 0.18;
				imposto = (salario - 4500) * 0.28 + calculoImposto;
				console.log(`R$ ${imposto.toFixed(2)}`);
			}
		}
	}
}
calcularImposto();
