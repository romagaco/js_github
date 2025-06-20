import {shuffleArray} from "../utils/utils"
import Box from "./Box";

class Game {
    #rows;
    #cols;
    #idElement;
    #boxes;

// constructor de tablero
    constructor(rows, cols, idElement="game"){
        this.rows = rows;
        this.#cols = cols;
        this.#idElement = idElement;
        this.#boxes = [];
        this.createBoxes();
        this.paintBoxes();

    }
    // creador de colores aleatorios para las cajas
    createRandomColors() {
        let randomColors = [];
        for (let index = 0; index < (this.#cols * this.#rows) / 2; index++) {
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            let color = `rgb(${red}, ${green}, ${blue})`;
            randomColors.push(color);
        }
        randomColors = [...randomColors, ...randomColors];
        shuffleArray(randomColors);
        return randomColors;
    }


    createBoxes() {
        let randomColors = this.createRandomColors();
        for (let row = 0; row < this.#rows; row++){
            for (let col =0; col < this.#cols; col++){
                let color = randomColors.shift();
                let newBox = new Box(col, row, color)
                this.#boxes.push(newBox);
            }
        }
    }


    paintBoxes(){
        let tablero = document.getElementById(this.#idElement);
        this.#boxes.map((box) => {
            let newBoxDiv = document.createElement("div");
            newBoxDiv.classList.add("box");
            newBoxDiv.dataset.col = box.col;
            newBoxDiv.dataset.row = box.row;
            tablero.appendChild(newBoxDiv);
        });
    }
    }



export default Game;