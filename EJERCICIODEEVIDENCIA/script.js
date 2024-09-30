function calcularCuota() {
    
    let monto = parseFloat(prompt('Ingrese el monto del préstamo: '));

    if (isNaN(monto) || monto <= 0) {
        console.log('Por favor, ingrese un monto válido.');
        return;
    }

    
    let tipo = parseInt(prompt(
        'Seleccione el tipo de préstamo:\n' +
        '1. Préstamo personal (5% anual, hasta 5 años)\n' +
        '2. Préstamo para vivienda (3% anual, hasta 20 años)\n' +
        '3. Préstamo para automóvil (4% anual, hasta 7 años)\n'
    ));

    let tasa, plazoMaximo;

    switch (tipo) {
        case 1:
            tasa = 0.05;
            plazoMaximo = 5;
            break;
        case 2:
            tasa = 0.03;
            plazoMaximo = 20;
            break;
        case 3:
            tasa = 0.04;
            plazoMaximo = 7;
            break;
        default:
            console.log('Tipo de préstamo no válido.');
            return;
    }

    
    let plazo = parseInt(prompt(`Ingrese el plazo en años (máximo ${plazoMaximo} años): `));

    if (isNaN(plazo) || plazo <= 0 || plazo > plazoMaximo) {
        console.log(`Error: El plazo debe estar entre 1 y ${plazoMaximo} años.`);
        return;
    }

    const cuotaMensual = (monto * (1 + tasa * plazo)) / (plazo * 12);

    
    console.log(`La cuota mensual es de $${cuotaMensual.toFixed(2)}.`);
}


calcularCuota();
