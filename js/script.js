let operandoA;
let operandoB;
let operacionActual;

function agregarNumero(numero) {
    const resultado = document.getElementById('resultado');
    // Evitar ceros al inicio
    if (resultado.value === '0' && numero === '0') return;
    if (resultado.value === '0' && numero !== '.') {
        resultado.value = numero;
    } else {
        resultado.value += numero;
    }
}

function operacion(op) {
    operandoA = parseFloat(document.getElementById('resultado').value);
    operacionActual = op;
    document.getElementById('resultado').value = '';
}

function calcular() {
    operandoB = parseFloat(document.getElementById('resultado').value);
    let resultado;
    switch (operacionActual) {
        case '+':
            resultado = operandoA + operandoB;
            break;
        case '-':
            resultado = operandoA - operandoB;
            break;
        case '*':
            resultado = operandoA * operandoB;
            break;
        case '/':
            if (operandoB === 0) {
                alert("No se puede dividir por 0");
                limpiar();
                return;
            }
            resultado = operandoA / operandoB;
            break;
        default:
            return;
    }
    document.getElementById('resultado').value = resultado;
    operacionActual = undefined;
}

function limpiar() {
    document.getElementById('resultado').value = '';
    operandoA = undefined;
    operandoB = undefined;
    operacionActual = undefined;
}
