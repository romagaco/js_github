const Miconstante = 5;

// let pruebaVariable1 = "hola esto es una prueba de variable no exportada";
// esta variable no ha sido exportada por lo tanto no es accesible desde el modulo main.js

let pruebaVariable2 = "hola esto es una prueba de variable exportada";

// exportamos una arrow function
let pruebaFuncion = () => {
    console.log("esto es una prueba con funciones")
}


export {
    Miconstante,
    pruebaVariable2,
    pruebaFuncion
}
// exportamos un objeto con las variables, contantes y funciones que deseamos
const Miconstante2 = 10;
let pruebaVariable3 = "hola esto es una prueba de variable exportada por objeto";

let paraExportar = {
    Miconstante2: Miconstante2,
    pruebaVariable3: pruebaVariable3,
}

export default paraExportar;