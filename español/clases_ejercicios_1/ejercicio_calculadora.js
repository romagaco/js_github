console.log("ejercicio calculadora");

class Calculadora {
    #resultado;

    constructor () {
        this.#resultado = 0;
    }

    obtenerResultado() {
        return this.#resultado;
    }
        
    reiniciar() {
        this.#resultado = 0;
    }
    
    // operaciones 

// try and catch: es una bloque de codigo que se ejecuta y si
// hay un error este bloquea el flujo del programa


    // sumar 
    sumar(numero) {
        try {
            if(isNaN(numero)){
                throw Error("debe de introducir solo numeros")
            } else {
                this.#resultado = this.#resultado + numero;
            }
        } catch(error) {
            console.error(error.message);
        };

    }

    // restar
    restar(numero) {
        try {
            if(isNaN(numero)){
                throw Error("debe de introducir solo numeros")
            } else {
                this.#resultado = this.#resultado - numero;
            }
        } catch(error) {
            console.error(error.message);
        };
    }

    // multiplicar
    multiplicar(numero) {
        try {
            if(isNaN(numero)){
                throw Error("debe de introducir solo numeros")
            } else {
                this.#resultado = this.#resultado * numero;
            }
        } catch(error) {
            console.error(error.message);
        };
    }

    //dividir
    dividir(numero) {
        try {
            if(numero == 0 || isNaN(numero)){
                throw Error("se a introducido un 0 o un caracter no valido")
            } else {
                this.#resultado = this.#resultado / numero;
            }
        } catch(error) {
            console.error(error.message);
        };
    }

}

/*   test del try and catch
let calc = new Calculadora();
console.log(calc.obtenerResultado()); 

calc.sumar("hola");
console.log(calc.obtenerResultado()); 

calc.restar("hola");
console.log(calc.obtenerResultado()); 

calc.multiplicar("hola");
console.log(calc.obtenerResultado());

calc.dividir(0);
console.log(calc.obtenerResultado());

calc.dividir("hola");
console.log(calc.obtenerResultado());
*/ 


/* test de la calculadora normal

let calc = new Calculadora();
console.log(calc.obtenerResultado()); 

calc.sumar(5);
console.log(calc.obtenerResultado()); 

calc.restar(2);
console.log(calc.obtenerResultado()); 

calc.multiplicar(2);
console.log(calc.obtenerResultado()); 

calc.dividir(3);
console.log(calc.obtenerResultado()); 

*/ 



