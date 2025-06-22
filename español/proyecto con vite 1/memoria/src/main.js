import '../sass/main.scss'

import Game from "./class/Game";
import Box from "./class/Box"

let data = Game.getRowsCols();

let game = new Game(data.rows, data.cols, "game");
let box = new Box();

let resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
    Game.resetGame();
});