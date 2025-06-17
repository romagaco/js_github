// comenzamos con los ejercicios de eventos parte 3
console.log("Eventos 3  | ejercicio 1");

let imgUrls = [
    "https://picsum.photos/200/300?random=1",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=3",
    "https://picsum.photos/200/300?random=4",
    "https://picsum.photos/200/300?random=5", 
    "https://picsum.photos/200/300?random=6",  
    "https://picsum.photos/200/300?random=7",
    "https://picsum.photos/200/300?random=8",
    "https://picsum.photos/200/300?random=9",
    "https://picsum.photos/200/300?random=10",
]

let imgCambiante = document.getElementById("imgCambiante");

document.body.addEventListener("keydown", (event)=>{
   let key = parseInt(event.key);
    if (key >= 0 && key <= 9){
        imgCambiante.setAttribute("src", imgUrls[key]);
    }else {
        console.log("Tecla no válida. Presiona un número del 0 al 9.");
    }
});