// comenzamos con los ejercicios de eventos parte 3
console.log("Eventos 3  | Ejercicio 6");



let buttons = document.querySelectorAll(".buttons button");
let ParaEliminar = document.getElementById("paraEliminar");

// seleccionamos todos los botones y el parrafo a eliminar
for (let b of buttons){
    b.addEventListener("click", (event) =>{
        let letter = event.target.dataset.letter;
        let actualText = ParaEliminar.textContent;
        actualText = actualText.replaceAll(letter, "");
        ParaEliminar.textContent = actualText;
        event.target.disabled = true; // deshabilitamos el boton cuando ya se ha pulsado
    });
}