console.log("ejercicio Auto");


class Auto {
    #encendido;
    #velocidad;
    #marca;
    #modelo;
    #patente;

    constructor(marca, modelo, patente) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#patente = patente;
        this.#velocidad = 0;
        this.#encendido = false;
    }

    arrancar() {
        this.#encendido = true;
    }

    apagar() {
        if (this.#velocidad === 0) {
            this.#encendido = false;
        } else {
            console.info("El auto no se puede apagar mientras está en movimiento.");
        }
    }

    acelerar() {
        if (this.#encendido ){
            this.#velocidad = this.#velocidad + 10;
        } else{
            console.info("El auto no está encendido, no se puede acelerar.");
        }
  
    }

    frenar() {
        if (this.#encendido ){
            if (this.#velocidad > 0) {
                this.#velocidad = this.#velocidad - 10;
                if(this.#velocidad < 0) {
                    this.#velocidad = 0;
                }
            } else {
                console.info("El auto ya está detenido.");
            }
        } else{
            console.info("El auto no está encendido, no se puede frenar.");
        }
    }

    toString() {
        return `Marca: ${this.#marca}, Modelo: ${this.#modelo}, Patente: ${this.#patente}`;
        }
}


/* porbamos las funcionalidades 
let coche = new Auto("audi", "a4", "abc123");
console.log(coche.toString());

coche.acelerar();  error porque el auto no está encendido
coche.frenar();    error porque el auto no está encendido

coche.arrancar();
coche.acelerar();
coche.acelerar();
console.log(coche);  comprobamos que efectivamente el auto acelero 

coche.apagar(); error porque el auto esta en movimiento
coche.frenar();
coche.frenar();
coche.frenar(); error porque el auto ya está detenido

console.log(coche);  comprobamos que efectivamente el auto frenó 
coche.apagar();      comprobamos que efectivamente el auto se apaga
console.log(coche);  */