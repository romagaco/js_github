console.log("Ejercicio Api List");



/* Al envolver el código en el evento DOMContentLoaded nos aseguramos que el html carga completemente antes de
que el codigo js sea ejecutado */


document.addEventListener("DOMContentLoaded", function() {   
    const miTituloUno = document.getElementById("tituloUno"); // nos debuelve true si existe el elemento
    let subtituloUno = miTituloUno.hasAttribute("onclick");
    console.log(subtituloUno);

            /*  api de list  */
// - .classList = devuelve una lista de elementos 
    const parrafos = document.getElementsByTagName("p"); 
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].classList.add("miClase"); };
/* seleccionamos todos los parrafos y luego recorremos cada uno con el fin de agregar la clase Miclase a todos los parrafos */

console.log(parrafos[0].classList); // devuelve una lista de clases del primer parrafo
const parrafoUno = document.getElementById("primerParrafo");
let parraUno = primerParrafo.classList; 
console.log(parraUno); 


// - .classList.length = devuelve el numero de clases del elemento 
// - .classList.item(n) = devuelve la clase n del elemento, null si no existe
// - .classList.contains(clase) = verifica si el elemento posee una clase
// - .classList.add(clase) = añade una clase sin reescribir todo el elemento
// - .classList.remove(clase) = elimina una clase 
// - .classList.toggle = si tiene atributo lo quita, si no lo tiene lo agrega
// - .classList.replace = reemplaza las clases 












});






