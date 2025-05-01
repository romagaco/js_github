// primer ejemplo, constructores

function Usuario(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
// la funcion se almacena en el objeto lo cual provoca un gas de memoria
    /* this.saludar = function() {
        console.log(`hola, que tal, soy ${this.nombre} ${this.apellido}`);
    } */
}

Usuario.prototype.saludar = function() {        // la funcion se almacena en el prototipo no en el objeto en si
    console.log(`hola, que tal, soy ${this.nombre} ${this.apellido}`); } // esto nos permite ahorar memoria

let u1 = new Usuario("beto", "corona");
let u2 = new Usuario("max", "corona");

u1.saludar();

/* Funcion constructor, es la funcion que se ejecuta siempre que se crea un nuevo objeto*/

class Usuario2 {
    constructor(edad, profesion) {
        console.log("ejecutando constructor");
        this.edad = edad;
        this.profesion = profesion;
    }
    saludo() {  // para evitar que la funcion se almacene en el objeto, debemos de crear la funcion por fuera de nuestra funcion consteructora
        console.log(`hola, que tal, tengo ${this.edad} años y soy ${this.profesion}`);
    }
}

let u3 =  new Usuario2(25, "desarrollador");

// Metodos y atributos privados 






