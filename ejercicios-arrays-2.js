/* EJERCICIO 1 
-- Crea un array donde cada elemento del array original se duplique */ 

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

let doubleNumbers = numbers.map(n => n*2); // duplicar cada elemento del array original
console.log(doubleNumbers);

/* EJERCICIO 2 
-- calcula la suma de todos los elementos en el array en el ejercicio 2 e imprimelo */ 





/* EJERCICIO 3 
-- Crea un nuevo array que contenga solo los números pares del array original */




/* EJERCICIO 4 
-- Pide al usuario que ingrese un numero y verifica si esat presente en el array */




/* EJERCICIO 5 
-- ordena el array de numero en orden descendente e imprimelo */ 



/* EJERCICIO 6
-- Dado dos arrays de nuymero, array1 y array2, crea una funcion que devuelva un nuevo array que 
contenga los elementos que son multipls de 3 y no sean multiplos de 5. ademas, asegurate de ue el 
nuevo array no contenga duplicados. */

const array1 = [2, 3, 5, 9, 12, 15];

const array2 = [4, 6, 9, 12, 18, 20];





/* EJERCICIO 7 
-- Filtrar y transformar datos en un array
1. dado un array de objetos que representan libors, cada onjeto tiene propiedades
    coo titulo, auto y año de publicacion.
2. filtra los libros que fueron publicados despues de 2000 y crea un nuevo
    array con los titulos de esos libros en mayusculas. */

const libros = [
    {titulo: 'El señor de los anillos', autor: 'J.R.R. Tolkien', año: 1954 },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', año: 1997 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', año: 1967 },
    { titulo: 'El código Da Vinci', autor: 'Dan Brown', año: 2003 },
    { titulo: '1984', autor: 'George Orwell', año: 1949 },
    { titulo: 'El hobbit', autor: 'J.R.R. Tolkien', año: 1937 },
    { titulo: 'Los juegos del hambre', autor: 'Suzanne Collins', año: 2008 },];



/* crear array con esos titulos en mayuscula */





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



// Calcula el promedio de calificaciones para cada estudiante en el array estudiantesMayoresDeEdad y almacena los resultados en un nuevo array llamado promediosCalificaciones.



// Encuentra al estudiante con la calificación más alta en el array promediosCalificaciones y muestra su nombre y calificación máxima en la consola.


/* EJERCICIO 9 */ 
 const ventas = [
        { producto: 'Camiseta', cantidad: 10, precioUnitario: 15 },
        { producto: 'Zapatos', cantidad: 5, precioUnitario: 50 },
        { producto: 'Sombrero', cantidad: 8, precioUnitario: 20 },
        { producto: 'Pantalones', cantidad: 12, precioUnitario: 30 },
        { producto: 'Bufanda', cantidad: 15, precioUnitario: 10 },
    ];
//Filtra las ventas que tienen una cantidad mayor a 8 unidades y guárdalas en un nuevo array llamado ventasElevadas.



// Calcula el total de ingresos para cada venta multiplicando la cantidad por el precio unitario y almacena los resultados en un nuevo array llamado ingresosTotales.



//Encuentra la venta con el ingreso total más alto en el array ingresosTotales y muestra el producto y el ingreso total en la consola.



//Ordena el array original ventas de manera ascendente según la cantidad de productos vendidos.
