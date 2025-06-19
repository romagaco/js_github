console.log("Eventos 3 | Ejercicio 8");

let cols = 6;
let rows = 5;

// Create colors in pairs and shuffle them
let randomColors = [];
for (let index = 0; index < (cols * rows) / 2; index++) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = `rgb(${red}, ${green}, ${blue})`;
    randomColors.push(color);
}
randomColors = [...randomColors, ...randomColors]; // Duplicate for pairs

// Shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
shuffle(randomColors);

// Create game boxes
let game = document.getElementById("game");
let colorIndex = 0;
for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        let box = document.createElement("div");
        box.classList.add("box");
        box.dataset.col = col;
        box.dataset.row = row;
        box.dataset.open = 0;
        box.dataset.color = randomColors[colorIndex]; // Assign color
        colorIndex++;
        game.appendChild(box);

        let comprobarColor = (event) => {
            event.target.style.backgroundColor = event.target.dataset.color;
            event.target.dataset.open = 1;

            let boxsOpen = document.querySelectorAll("[data-open='1']");
            if(boxsOpen.length == 2) {
                if(boxsOpen[0].dataset.color === boxsOpen[1].dataset.color){
                boxsOpen[0].removeEventListener("click", comprobarColor); 
                boxsOpen[1].removeEventListener("click", comprobarColor);
                boxsOpen[0].dataset.open = 0;
                boxsOpen[1].dataset.open = 0;  
                }else {
                    setTimeout(() => {
                        boxsOpen[0].style.backgroundColor = "black";
                        boxsOpen[1].style.backgroundColor = "black";
                        boxsOpen[0].dataset.open = 0;
                        boxsOpen[1].dataset.open = 0;  
                    }, 500)
                }
            }
        }

        box.addEventListener("click",  (event) => {
            event.target.style.backgroundColor = event.target.dataset.color;
            event.target.dataset.open = 1;
 
        });
    }
}
