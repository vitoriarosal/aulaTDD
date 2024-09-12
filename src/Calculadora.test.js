const Calculadora = require("./Calculadora");

describe("Funções de calculadora", () => {

    it("Criar nova calculadora", () => {
        const calculadora = new Calculadora();
        expect(calculadora).toBeDefined();
        expect(calculadora.resultado).toBeDefined();
        expect(typeof calculadora.resultado).toBe("number");
        expect(calculadora.resultado).toBe(0);
    });

    it("obtém resultado", () => {
        const calculadora = new Calculadora();
        expect(calculadora.resultado).toBeDefined();
        expect(typeof calculadora.resultado).toBe("number");
    });

    it('Soma um novo valor à calculadora', () => {
        const calculadora = new Calculadora();
        
        calculadora.soma(5);
        expect(calculadora.resultado).toBe(5);

        calculadora.soma("10");
        expect(calculadora.resultado).toBe(15);

        expect(() => calculadora.soma("Texto")).toThrow(TypeError);
        expect(() => calculadora.soma("Texto")).toThrow("O argumento deve ser um número válido");

        calculadora.soma(5);
        expect(calculadora.resultado).toBe(20);
    });

    it('Subtrai um novo valor da calculadora', () => {
        const calculadora = new Calculadora();

        calculadora.subtrai(5);
        expect(calculadora.resultado).toBe(-5);

        calculadora.subtrai("10");
        expect(calculadora.resultado).toBe(-15);

        expect(() => calculadora.subtrai("Texto")).toThrow(TypeError);
        expect(() => calculadora.subtrai("Texto")).toThrow("O argumento deve ser um número válido");

        calculadora.subtrai(5);
        expect(calculadora.resultado).toBe(-20);
    });

    it('Multiplica o resultado por um novo valor', () => {
        const calculadora = new Calculadora();

        calculadora.resultado = 2; 
        calculadora.multiplica(5);
        expect(calculadora.resultado).toBe(10);

        calculadora.multiplica("3");
        expect(calculadora.resultado).toBe(30);

        expect(() => calculadora.multiplica("Texto")).toThrow(TypeError);
        expect(() => calculadora.multiplica("Texto")).toThrow("O argumento deve ser um número válido");

        calculadora.multiplica(2);
        expect(calculadora.resultado).toBe(60);
    });

    it('Divide o resultado por um novo valor', () => {
        const calculadora = new Calculadora();

        calculadora.resultado = 10; 
        calculadora.divide(2);
        expect(calculadora.resultado).toBe(5);

        calculadora.divide("5");
        expect(calculadora.resultado).toBe(1);

        expect(() => calculadora.divide("Texto")).toThrow(TypeError);
        expect(() => calculadora.divide("Texto")).toThrow("O argumento deve ser um número válido");

        expect(() => calculadora.divide(0)).toThrow(Error);
        expect(() => calculadora.divide(0)).toThrow("divisão ilegal por zero");
    });

    it('Inverte o sinal do resultado', () => {
        const calculadora = new Calculadora();

        calculadora.resultado = 10;
        calculadora.inverte();
        expect(calculadora.resultado).toBe(-10);

        calculadora.resultado = -5;
        calculadora.inverte();
        expect(calculadora.resultado).toBe(5);

        calculadora.resultado = 0;
        calculadora.inverte();
        expect(calculadora.resultado).toBeCloseTo(0);
    });
});
