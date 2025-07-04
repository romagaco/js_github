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
    console.log("Clicked box:", box.dataset.row, box.dataset.col, "Color:", box.dataset.color);

    // Ignore clicks on open boxes, matched boxes, or when board is locked
    if (box.dataset.open === "1" || box.dataset.matched === "1" || lockBoard) {
        console.log("Click ignored: open, matched, or board locked");
        return;
    }

    // Reveal color and mark as open
    box.style.backgroundColor = box.dataset.color;
    box.dataset.open = "1";
    box.classList.add("revealed");
    console.log("Box revealed:", box.dataset.color);

    if (!firstBox) {
        // First box clicked
        firstBox = box;
        console.log("First box set:", firstBox.dataset.color);
    } else {
        // Second box clicked
        const secondBox = box;
        lockBoard = true; // Lock the board
        console.log("Second box clicked:", secondBox.dataset.color);

        if (firstBox.dataset.color === secondBox.dataset.color) {
            // Match found
            console.log("Match found!");
            firstBox.dataset.matched = "1";
            secondBox.dataset.matched = "1";
            firstBox.classList.add("matched");
            secondBox.classList.add("matched");
            firstBox.classList.remove("revealed");
            secondBox.classList.remove("revealed");
            resetTurn();
            checkGameCompletion();
        } else {
            // No match, revert after 500ms
            console.log("No match, reverting in 500ms");
            setTimeout(() => {
                console.log("Reverting boxes to black");
                firstBox.style.backgroundColor = "black";
                secondBox.style.backgroundColor = "black";
                firstBox.dataset.open = "0";
                secondBox.dataset.open = "0";
                firstBox.classList.remove("revealed");
                secondBox.classList.remove("revealed");
                resetTurn();
            }, 500);
        }
    }
}

function resetTurn() {
    firstBox = null;
    lockBoard = false;
    console.log("Turn reset");
}

function checkGameCompletion() {
    const matchedBoxes = document.querySelectorAll("[data-matched='1']");
    if (matchedBoxes.length === cols * rows) {
        console.log("Game completed!");
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
        box.dataset.matched = "0";
        box.dataset.color = randomColors[colorIndex];
        colorIndex++;
        box.addEventListener("click", handleBoxClick);
        game.appendChild(box);
    }
}