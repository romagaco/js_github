// comenzamos con los ejercicios de eventos parte 3
console.log("Eventos 3  | Ejercicio 5");

// Seleccionamos el elemento con id "box"
let box = document.getElementById("box");


// Añadimos un evento de mouseover al elemento "box"
box.addEventListener("mouseover", ()=> {
    let maxWidth = window.outerWidth - 100;
    let maxHeight = window.outerHeight - 100;

    // Generamos una posición aleatoria dentro de los límites de la ventana
    let randLeft = Math.floor(Math.random() * maxWidth);
    let randTop = Math.floor(Math.random() * maxHeight);

    box.style.top = `${randTop}px`;
    box.style.left = `${randLeft}px`;
});