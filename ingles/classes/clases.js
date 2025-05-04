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

// Metodos y atributos privados en funcion constructora

function Usuario3(nombreU3, apellidoU3, edad) {
    let edadPrivada;  // edad privada no se puede modificar desde fuera, solo por el codigo

    this.nombreU3 = nombreU3;
    this.apellidoU3 = apellidoU3;
    edadPrivada = edad

    this.edad = function (nuevaEdad) {
        return edadPrivada;
    }

    this.cambiarEdad = function (nuevaEdad) { // esta funcion nos permite aceder a edadPrivada 
        edadPrivada = nuevaEdad;
    }
}

const u4 = new Usuario3("oscar", "matinez", 45);

// Metodos y atributos privados en clases

class Usuario4 {
    #edad;
    
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.#edad = edad;
    }

    saludando() {
        console.log(`hola, que tal, soy ${this.nombre} ${this.apellido} y tengo ${this.#edad} años`);
    }

    salir() {
        this.#cerrarSesion(); // llamamos al metodo privado desde el metodo publico
    }

    #cerrarSesion () {  // este metodo privado no se puede ejecutar por fuera de la clase
        console.log("cerrando sesion");
    }
}

const u5 = new Usuario4("jordi", "salvaje", 42);
u5.saludando();

// metodos estaticos 

let a = -5;
console.log(Math.abs(a)); // el metodo Math no ha tenido que instanciarse para poder usarlo

console.log(Math.PI); // Math.pi es una constante, no es necesario instanciar la clase Math para acceder a ella

/* Getter y Setter */ 

class Usuario5 {
    #edad1;

    constructor(nombre1, apellido1) {
        this.nombre1 = nombre1;
        this.apellido1 = apellido1;
    }

    get edad1() {
        return this.#edad1;
    }

    set edad1(newEdad) {  // funcion de validacion, se ejecuta a la hora de llmar el setter. esto ocurre al agregar la edad
        if (newEdad < 0){
            throw Error("la edad no puede ser negativa");
        }
        this.#edad1 = newEdad;
    }
}

const u6 = new Usuario5("jose", "perez");
