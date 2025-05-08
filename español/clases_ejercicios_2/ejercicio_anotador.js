console.log("ejercicio anotador");

class anotador {
    #titulo;
    #notas;

    constructor(titulo) {
        this.#notas = [];
        this.#titulo = titulo;
    }

    agregarNota(nota) {   // funcion para agregar una nota
        this.#notas.push(nota);
    }

    actualizarNota(id, nota) {   // funcion para actualizar las notas
        this.#notas[id] = nota;
    }

    obtenerNota(id) {  // funcion para vizualizar una nota
        return this.#notas[id];
    }

    eliminarNota(id) {  // funcion para eliminar una parte de la nota
        this.#notas.splice(id, 1);
    }

    eliminarNotas() { // funcion para eliminar todas las notas
        this.#notas = [];
    }

    listarNotas() {  // funcion para listar las notas
       return this.#notas.reduce(
        (salida, nota, index) => {
            return `${salida} \n ${index+1}.  ${nota}`}  // idex + 1 para que empiece desde 1 y no desde 0
            , `${this.#titulo} \n ------------------\n`);  // nos imprime el titulo y la linea de separacion
    } 
}


let lista = new anotador("Lista de compras");
lista.agregarNota("Leche");
lista.agregarNota("Nachos");
lista.agregarNota("Cereal");
lista.agregarNota("coquitas");
lista.agregarNota("lentejas");
lista.agregarNota("tortilla vegana");
console.log(lista.listarNotas());


lista.actualizarNota(0, "Leche de almendra"); // actualiza la leche por leche de almendra
console.log(lista.listarNotas());

console.log(lista.obtenerNota(1)); // imprime la nota con id 1

lista.eliminarNota(5); // elimina la nota con id 5
console.log(lista.listarNotas());


lista.eliminarNotas(); // iliminamos todas las notas 
console.log(lista.listarNotas());
