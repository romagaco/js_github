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
let firstBox = null;
let lockBoard = false;

function handleBoxClick(event) {
    const box = event.target;
    // Ignore clicks on already open boxes, matched boxes, or when board is locked
    if (box.dataset.open === "1" || box.dataset.matched === "1" || lockBoard) return;

    // Reveal color
    box.style.backgroundColor = box.dataset.color;
    box.dataset.open = "1";

    if (!firstBox) {
        // First box clicked
        firstBox = box;
    } else {
        // Second box clicked
        lockBoard = true; // Prevent further clicks
        const secondBox = box;

        if (firstBox.dataset.color === secondBox.dataset.color) {
            // Match found
            firstBox.dataset.matched = "1";
            secondBox.dataset.matched = "1";
            firstBox.removeEventListener("click", handleBoxClick);
            secondBox.removeEventListener("click", handleBoxClick);
            resetTurn();
            checkGameCompletion();
        } else {
            // No match
            setTimeout(() => {
                firstBox.style.backgroundColor = "black";
                secondBox.style.backgroundColor = "black";
                firstBox.dataset.open = "0";
                secondBox.dataset.open = "0";
                resetTurn();
            }, 500);
        }
    }
}

function resetTurn() {
    firstBox = null;
    lockBoard = false;
}

function checkGameCompletion() {
    const matchedBoxes = document.querySelectorAll("[data-matched='1']");
    if (matchedBoxes.length === cols * rows) {
        alert("¡Felicidades! Has encontrado todas las parejas.");
    }
}

for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        let box = document.createElement("div");
        box.classList.add("box");
        box.dataset.col = col;
        box.dataset.row = row;
        box.dataset.open = "0";
        box.dataset.matched = "0"; // Track matched boxes
        box.dataset.color = randomColors[colorIndex]; // Assign color
        colorIndex++;
        box.addEventListener("click", handleBoxClick);
        game.appendChild(box);
    }
}