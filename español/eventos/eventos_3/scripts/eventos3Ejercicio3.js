// comenzamos con los ejercicios de eventos parte 3
console.log("Eventos 3  | Ejercicio 3");

let lista = document.getElementById("lista");
let items = lista.querySelectorAll("li");
let itemsText = [];

for (let item of items) {
    itemsText.push(item.childNodes[0].textContent)
}

// añadimos boton para eliminar elementos
for (let item of items) {
    let newButton = document.createElement("button");
    newButton.textContent = "X";
    item.appendChild(newButton);


    // añadimos evento para eliminar elementos
    newButton.addEventListener("click", (event) => {
        event.target.parentNode.remove();
    });
}


// comportamiento del boton  ordenar
let ordenar = document.getElementById("ordenar");
ordenar.addEventListener("click", () => {
    itemsText = [];
    items = lista.querySelectorAll("li");
    for (let item of items) {
        itemsText.push(item.childNodes[0].textContent)
    }
    itemsText.sort();


    lista.innerHTML = ""; // limpiamos la lista

    itemsText.map( item => {
        let newLi = document.createElement("li");
        newLi.textContent = item;

        // añadimos boton de eliminar
        let newButton = document.createElement("button");
        newButton.textContent = "X";
        newButton.addEventListener("click", (event) => {
            event.target.parentNode.remove();
        });
        newLi.appendChild(newButton);

        // añadimos  a la lista
        lista.appendChild(newLi);
    })
});

// añadir elemento
let newElement = document.getElementById("newElement");
newElement.addEventListener("click", ()=>{
    let texto = prompt("Introduce el nuevo elemnto: ");
    let newLi = document.createElement("li");
    newLi.textContent = texto;
    // añadimos boton de eliminar
    let newButton = document.createElement("button");
    newButton.textContent = "X";
    newButton.addEventListener("click", (event) => {
        event.target.parentNode.remove();
    });
    newLi.appendChild(newButton);
    // añadimos a la lista
    lista.appendChild(newLi);
    // ordenar la lista automáticamente
    ordenar.click();
});
