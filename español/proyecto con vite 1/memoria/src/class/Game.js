import {shuffleArray} from "../utils/utils"
import Box from "./Box";

class Game {
    #rows;
    #cols;
    #idElement;
    #boxes;
    element;

// constructor de tablero
    constructor(rows, cols, idElement="game"){
        this.#rows = rows;
        this.#cols = cols;
        this.#idElement = idElement;
        this.element = document.getElementById(idElement);
        this.#boxes = [];
        this.createBoxes();
        this.paintBoxes();


        this.element.addEventListener("click", () => {
            this.checkOpenBoxes();
        });

    }

    get cols() {
        return this.#cols
    }

     get rows() {
        return this.#rows
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
        this.setCSSBoxTemplates();
        this.#boxes.map((box) => {
            let newBoxDiv = document.createElement("div");
            newBoxDiv.classList.add("box");
            newBoxDiv.dataset.col = box.col;
            newBoxDiv.dataset.row = box.row;

            box.element = newBoxDiv;
            box.addEventClick();
            this.element.appendChild(newBoxDiv);
            
        
        });
    }


    setCSSBoxTemplates() {
        this.element.style.gridTemplateColumns = `repeat(${this.cols}, 1fr)`;
        this.element.style.gridTemplateRows = `repeat(${this.rows}, 1fr)`;

    }


    checkOpenBoxes () {
        let nOpenBoxes = this.#boxes.filter((box) => box.open && box.free);
        if (nOpenBoxes.length == 2) {
            if (nOpenBoxes[0].color === nOpenBoxes[1].color ) {
                nOpenBoxes.map((box) => {
                    box.free = false;
                });
            } else {
                setTimeout(() => {
                    nOpenBoxes.map((box) => {
                        box.resetColor();
                    });
                }, 500);
            }
 }    }

     static resetGame () {
        localStorage.removeItem("cols");
        localStorage.removeItem("rows");
    }


    static getRowsCols() {
        if (localStorage.getItem("rows") !== null && localStorage.getItem("cols") !== null){
            rows = parseInt(localStorage.getItem("rows"));
            cols = parseInt(localStorage.getItem("cols"));
        } else {
                rows = parseInt(prompt("introduzca el numero de filas"));
                cols = parseInt(prompt("introduzca el numero de columnas"));
            while (rows * cols % 2 !== 0) {
                alert("el numero de cartas debe de ser par");
                    rows = parseInt(prompt("introduzca el numero de filas"));
                    cols = parseInt(prompt("introduzca el numero de columnas"));
} 

        localStorage.setItem("rows", rows);
        localStorage.setItem("cols", cols); 
    }
            

return {
    rows: rows,
    cols: cols,
};
}

   



}




export default Game;