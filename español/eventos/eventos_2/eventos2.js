console.log("Empieza el ejercicio 2");

// funcion que genera un color aleatorio

function colorAleatorio() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`; 
}

// Añadir un evento a todos los elementos del body

let elementos = document.body.getElementsByTagName("*");

for (let elemento of elementos) {
    elemento.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = colorAleatorio();
    });

    elemento.addEventListener("mouseout", (event) => {
        event.target.style.backgroundColor = "white";
    });
}
