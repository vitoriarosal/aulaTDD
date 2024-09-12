class Calculadora {
    constructor() {
        this.resultado = 0;
    }

    soma(valor) {
        const numero = Number(valor);
        if (isNaN(numero)) {
            throw new TypeError("O argumento deve ser um número válido");
        }
        this.resultado += numero;
    }

    subtrai(valor) {
        const numero = Number(valor);
        if (isNaN(numero)) {
            throw new TypeError("O argumento deve ser um número válido");
        }
        this.resultado -= numero;
    }

    multiplica(valor) {
        const numero = Number(valor);
        if (isNaN(numero)) {
            throw new TypeError("O argumento deve ser um número válido");
        }
        this.resultado *= numero;
    }

    divide(valor) {
        const numero = Number(valor);
        if (isNaN(numero)) {
            throw new TypeError("O argumento deve ser um número válido");
        }
        if (numero === 0) {
            throw new Error("divisão ilegal por zero");
        }
        this.resultado /= numero;
    }

    inverte() {
        this.resultado = -this.resultado;
    }
}

module.exports = Calculadora;
