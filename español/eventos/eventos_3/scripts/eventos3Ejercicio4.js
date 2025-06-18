// comenzamos con los ejercicios de eventos parte 3
console.log("Eventos 3  | Ejercicio 4");


let dinamicP = document.getElementById("dinamico");

let deleteButton = document.createElement("button");
deleteButton.textContent = "Eliminar notas";
dinamicP.appendChild(deleteButton);

deleteButton.addEventListener("click", () => {
    if(dinamicP.childNodes.length === 1) return false;

    dinamicP.childNodes[0].remove();
});

document.body.addEventListener("keydown", (event)=> {
    if(dinamicP.childNodes.length  === 1){
        let newTextNode = document.createTextNode(event.key);
        dinamicP.prepend(newTextNode);
    }else{
        dinamicP.childNodes[0].textContent = dinamicP.childNodes[0].textContent + event.key;
    }
});

