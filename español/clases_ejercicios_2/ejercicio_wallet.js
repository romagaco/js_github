console.log("ejercicio Billetera");

class Movimiento {
    descripcion;
    cantidad;
    fecha;
    categoria;
    tipo;

    constructor(desc, cantidad, fecha, tipo, categoria) {
        this.descripcion = desc;
        this.cantidad = cantidad;
        this.fecha = fecha;
        this.categoria = categoria;
        this.tipo = tipo;
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
        if (movi.tipo == "Gasto") {
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
            operacion.tipo == "Ganancia");
    }

    // gastos por mes
    obtenerGastoPorMes(mes){
        return this.#operaciones.filter(operacion => operacion.fecha.getMonth() === mes &&
            operacion.tipo == "Gasto");
    }



    obtenerGastosPorCategoria(cat) {
        return this.#operaciones.filter(movimiento => movimiento.tipo === "Gasto" && 
            movimiento.categoria === cat);
    }

    obtenerGananciasPorCategoria(cat) {
        return this.#operaciones.filter(movimiento => movimiento.tipo === "Ganancia" && 
            movimiento.categoria === cat);
    }


    totalPormes(mes) {
        return this.#operaciones
        .filter(movimiento => movimiento.fecha.getMonth() === mes)
        .reduce(
            (total, movimiento)  => {
                if(movimiento.tipo === "Gasto") {
                    total = total - movimiento.cantidad
                } else {
                    total = total + movimiento.cantidad
                }
                return total;
            }, 0
        );
    }


    obtenerMonto(){
        return this.#monto;
    }
}

// probando las funciones de la billetera
let cartera = new Billetera();

let m0 = new Movimiento(
    "ingreso de nomina",
    3000,
    new Date(2025, 1, 1, 0, 0, 0, 0),
    "Ganancia",
    "Nomina"
);
cartera.agregarMovimiento(m0);


let m1 = new Movimiento(
    "gastos de supermercado",
    150,
    new Date(2025, 2, 2, 0, 0, 0, 0),
    "Gasto",
    "Pan"
);
cartera.agregarMovimiento(m1);


let m2 = new Movimiento(
    "gastos de supermercado",
    450,
    new Date(2025, 2, 7, 0, 0, 0, 0),
    "Gasto",
    "Leche"
);
cartera.agregarMovimiento(m2);

console.log(cartera.obtenerMoviminetosPorMes(1)); // muestra los movimientos del mes de febrero 
console.log(cartera.obtenerMoviminetosPorMes(2)); // muestra los movimientos del mes de marzo

console.log(cartera.obtenerGastosPorCategoria("Pan"));
console.log(cartera.obtenerGananciasPorCategoria("Nomina"));

console.log(cartera.totalPormes(2)); // muestra el total de los movimientos del mes de marzo
// como solo tenemos gastos el total es negativo

console.log(cartera.obtenerMonto()); // muestra el monto total de la billetera

