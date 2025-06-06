console.log("ejercicio de selectores");


document.addEventListener("DOMContentLoaded", function() { 
// 1. selleciona el primer "p" de la pagina y modifica el texto a "Hola Mundo"
let primerParrafo = document.getElementsByTagName("p")[0];
primerParrafo.textContent = "Hola Mundo";


// 2. selecciona el segundo enlace de primer p de la pagina y cambia su hrs por google.com
let segundoParrafo = document.getElementsByTagName("p")[1];
enlaces = segundoParrafo = document.getElementsByTagName("a");
enlaces[2].setAttribute("href", "http://www.google.com");

//3. selleciiona el penultimo hijo de una etiqueta con el ID "mi lista"
let milista = document.getElementById("milista");
let hijos = milista.children;
let penultimo = hijos(hijois.length - 2);

//4. 




});
















