/* EJERCICIO 1 
-- Crea un array donde cada elemento del array original se duplique */ 

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

let doubleNumbers = numbers.map(n => n*2); // duplicar cada elemento del array original
console.log(doubleNumbers);


/* EJERCICIO 2 
-- calcula la suma de todos los elementos en el array en el ejercicio 1 e imprimelo */ 

let sumNumbers = doubleNumbers.reduce((suma, n) => {
    return suma + n; // suma cada elemento del array
}, 0);
console.log(sumNumbers);


/* EJERCICIO 3 
-- Crea un nuevo array que contenga solo los números pares del array original */

let evenNumbers = numbers.filter(n => n%2===0);
console.log(evenNumbers);

let oddNumbers = numbers.filter(n => n%2===1);
console.log(oddNumbers);


/* EJERCICIO 4 
-- Pide al usuario que ingrese un numero y verifica si esat presente en el array */

/* let userNumber = parseInt(prompt("introduce un numero"));
if (numbers.includes(userNumber)) {
    console.log("El numero esta en el array")
} else {
    console.log("El numero no esta en el array")
};  */


/* EJERCICIO 5 
-- ordena el array de numero en orden descendente e imprimelo */ 

console.log(numbers);

console.log(numbers.sort()); // ordenado

console.log(numbers.reverse()); // ordenado de forma descendente


/* EJERCICIO 6
-- Dado dos arrays de nuymero, array1 y array2, crea una funcion que devuelva un nuevo array que 
contenga los elementos que son multipls de 3 y no sean multiplos de 5. ademas, asegurate de ue el 
nuevo array no contenga duplicados. */ 

const array1 = [2, 3, 5, 9, 12, 15];

const array2 = [4, 6, 9, 12, 18, 20];

const newArray = array1.concat(array2);

const noMultiplos = newArray.filter(n => n%3===0 && n%5!==0); // filtra los elementos que son multiplos de 3 y no son multiplos de 5

console.log(noMultiplos);




/* EJERCICIO 7 
-- Filtrar y transformar datos en un array
1. dado un array de objetos que representan libors, cada onjeto tiene propiedades
    coo titulo, auto y año de publicacion.
2. filtra los libros que fueron publicados despues de 2000 y crea un nuevo
    array con los titulos de esos libros en mayusculas. */

const libros = [
    {titulo: 'El señor de los anillos', autor: 'J.R.R. Tolkien', year: 1954 },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', year: 1997 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', year: 1967 },
    { titulo: 'El código Da Vinci', autor: 'Dan Brown', year: 2003 },
    { titulo: '1984', autor: 'George Orwell', year: 1949 },
    { titulo: 'El hobbit', autor: 'J.R.R. Tolkien', year: 1937 },
    { titulo: 'Los juegos del hambre', autor: 'Suzanne Collins', year: 2008 },];


const librosPost2000 = libros.filter(libro => libro.year > 2000);
 // filtra los libros que fueron publicados despues de 2000 y crea un nuevo array con los titulos de esos libros en mayusculas.
/* crear array con esos titulos en mayuscula */

const titleUp = librosPost2000.map(libro => libro.titulo.toUpperCase());
console.log(titleUp);


/* EJERCICIO 8 */ 

const estudiantes = [
        { nombre: 'Ana', edad: 20, calificaciones: [10, 90, 87] },
        { nombre: 'Carlos', edad: 22, calificaciones: [78, 92, 87] },
        { nombre: 'Elena', edad: 19, calificaciones: [75, 88, 91] },
        { nombre: 'Daniel', edad: 18, calificaciones: [82, 79, 90] },
        { nombre: 'Luisa', edad: 21, calificaciones: [88, 85, 89] },
        { nombre: 'Miguel', edad: 17, calificaciones: [76, 84, 80] },
        { nombre: 'Sara', edad: 23, calificaciones: [91, 9, 94] },
 ];


// Filtra los estudiantes que tienen una edad mayor o igual a 18 años y guárdalos en un nuevo array llamado estudiantesMayoresDeEdad.

const estudiantesMayoresDeEdad = estudiantes.filter(estudiante => 
    estudiante.edad >= 18 );
console.log(estudiantesMayoresDeEdad);

// Calcula el promedio de calificaciones para cada estudiante en el array estudiantesMayoresDeEdad y almacena los resultados en un nuevo array llamado promediosCalificaciones.

/* let promediosCalificaciones = estudiantesMayoresDeEdad.map(estudiante => {
    let suma = estudiante.calificaciones.reduce((media, nota) => {
        return media + nota;
    }, 0);
});
console.log(promediosCalificaciones);  */ 

let promediosCalificaciones = estudiantesMayoresDeEdad.map(estudiante => {
    let suma = estudiantesMayoresDeEdad.reduce((media, nota) => {
        return media + nota;
    }, 0);
    return {
        ...estudiante,
        media: suma / estudiante.calificaciones.length
    }
});


// Encuentra al estudiante con la calificación más alta en el array promediosCalificaciones y muestra su nombre y calificación máxima en la consola.

let mayorMedia = promediosCalificaciones.reduce((mayorNota, estudiante) => {
    if (estudiante.media > mayorNota.media) {
        return estudiante;
    }
    return mayorNota;
},promediosCalificaciones[0]);
console.log(mayorMedia);
