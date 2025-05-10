console.log("ejercicio Billetera");

class Movimiento {
    descripcion;
    cantidad;
    fecha;
    categoria;

    constructor(desc, cantidad, fecha, categoria) {
        this.descripcion = desc;
        this.cantidad = cantidad;
        this.fecha = fecha;
        this.categoria = categoria;
    }
}



class Billetera {
    #monto; 
    #operaciones;

    constructor(montoInicial = 0) {
        this.#monto = montoInicial;
        this.#operaciones = [];
    }

    // creamos un getter para los movimientos
    agregarMovimiento(movi) {
        this.#operaciones.push(movi);
        if (movi.categoria == "Gasto") {
            this.#monto = this.#monto - movi.cantidad;
        } else {
            this.#monto = this.#monto + movi.cantidad;
        }
    }

    // movimientos por mes
    obtenerMoviminetosPorMes(mes){
        return this.#operaciones.filter(operacion => operacion.fecha.getMonth() === mes);
    }


    // ganancias por mes
    obtenerGananciaPorMes(mes){
        return this.#operaciones.filter(operacion => operacion.fecha.getMonth() === mes &&
            operacion.categoria == "Ganancia");
    }

    // gastos por mes
     obtenerGastoPorMes(mes){
        return this.#operaciones.filter(operacion => operacion.fecha.getMonth() === mes &&
            operacion.categoria == "Gasto");
    }

}

// probando las funciones de la billetera
let cartera = new Billetera();

let m0 = new Movimiento(
    "ingreso de nomina",
    3000,
    new Date(2025, 1, 1, 0, 0, 0, 0),
    "Ganancia"
);

cartera.agregarMovimiento(m0);


let m1 = new Movimiento(
    "gastos de supermercado",
    150,
    new Date(2025, 2, 2, 0, 0, 0, 0),
    "Gasto"
);

cartera.agregarMovimiento(m1);


console.log(cartera.obtenergastosPorMes(1)); // muestra los movimientos del mes de febrero 
console.log(cartera.obtenergastosPorMes(2)); // muestra los movimientos del mes de marzo