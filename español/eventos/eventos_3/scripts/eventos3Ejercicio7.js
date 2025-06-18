// comenzamos con los ejercicios de eventos parte 3
console.log("Eventos 3  | Ejercicio 7");

// seleccionamos las cajas


let presionarTecla = (event)=>{
    let letter = event.key;
    let box = document.querySelector(`[data-letter=${letter}]`);
        if(box){
            let width = box.offsetWidth;
            width +=5;
            box.style.width = `${width}px`;

            // evaluamos que caja a llegado primero a los 500px
            if (width >= 500){
                if(box.classList.contains("green")){
                    document.getElementById("resultado").textContent = "Ha ganado el verde";
                }else{
                    document.getElementById("resultado").textContent = "Ha ganado el rojo";
                }
                document.body.removeEventListener("keydown", presionarTecla);
            }
        }
    };

// desactivamos el evento keydown
document.body.addEventListener("keydown", presionarTecla);






