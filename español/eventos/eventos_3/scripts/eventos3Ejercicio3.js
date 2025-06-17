// comenzamos con los ejercicios de eventos parte 3
console.log("Eventos 3  | Ejercicio 3");

let lista = document.getElementById("lista");
let items = lista.querySelectorAll("li");
let itemText = [];

for (let item of items) {
    itemText.push(item.textContent);
}

console.log(itemText);

// comportamiento del boton  ordenar
let ordenar = document.getElementById("ordenar");
ordenar.addEventListener("click", () => {
    itemText.sort();
    lista.innerHTML = ""; // limpiamos la lista

    itemText.map( item => {
        let newLi = document.createElement("li");
        newLi.textContent = item;
        lista.appendChild(newLi);
    })
});

