// comenzamos con los ejercicios de eventos parte 3
console.log("Eventos 3  | Ejercicio 2");

let box = document.getElementById("box");
let currentTop;
let currentLeft;
let newtTop;
let newLeft;



document.body.addEventListener("keydown", (event)=>{
    switch (event.key) {
        case "ArrowUp":
            console.log("El usuario a pulsado el cursor para arriba");
            currentTop = box.style.top ? parseInt(box.style.top) : 0;
            newTop = currentTop - 10;
            box.style.top = `${newTop}px`;
            break;

        case "ArrowDown":
            console.log("El usuario a pulsado el cursor para abajo");
            currentTop = box.style.top ? parseInt(box.style.top) : 0;
            newTop = currentTop + 10;
            box.style.top = `${newTop}px`;
            break;

        case "ArrowLeft":
            console.log("El usuario a pulsado el cursor para izquierda");
            currentLeft = box.style.left ? parseInt(box.style.left) : 0;
            newLeft = currentLeft - 10;
            box.style.left = `${newLeft}px`;
            break;
            
        case "ArrowRight":
            console.log("El usuario a pulsado el cursor para derecha");
            currentLeft = box.style.left ? parseInt(box.style.left) : 0;
            newLeft = currentLeft + 10;
            box.style.left = `${newLeft}px`;
            break;

        default:
            console.log("El usuario a pulsado otra tecla");
            break;

    }
})