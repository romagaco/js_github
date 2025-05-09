console.log("ejercicio Billetera");

class Movimiento {
    #descripcion;
    #cantidad;
    #fecha;
    #categoria;

    constructor(desc, cantidad, fecha, categoria) {
        this.#descripcion = desc;
        this.#cantidad = cantidad;
        this.#fecha = fecha;
        this.#categoria = categoria;
    }
}



class Billetera {
    #monto; 
    #operaciones;

    constructor(montoInicial = 0) {
        this.#monto = montoInicial;
        this.#operaciones = [];
    }

}