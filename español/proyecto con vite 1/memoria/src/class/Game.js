import {shuffleArray} from "../utils/utils"
import Box from "./Box";
import Timer from "../utils/utils"

class Game {
    #rows;
    #cols;
    #idElement;
    #boxes;
    element;
    timer;

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

        this.initTimer();
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
        this.#boxes = [];
        // Si hay datos en LocalStorage, las boxes se crean desde alli, de lo contrario desde 0
        if (localStorage.getItem("boxes") !== null){
            let boxesFromLocalStorage = JSON.parse(localStorage.getItem("boxes"));
            boxesFromLocalStorage.map(box =>{
                let newBox = new Box(box.col, box.row, box.color, box.free, box.open);
                this.#boxes.push(newBox);
            });
        }else {
            let randomColors = this.createRandomColors();
        for (let row = 0; row < this.#rows; row++){
            for (let col =0; col < this.#cols; col++){
                let color = randomColors.shift();
                let newBox = new Box(col, row, color);
                this.#boxes.push(newBox);
            }
        }
        this.arrayBoxesToLocalStorage();
        }
        
    }


    arrayBoxesToLocalStorage() {
        let arrayBoxesToLocalStorage = this.#boxes.map(box => {
            return {
                row: box.row,
                col: box.col,
                color: box.color,
                free: box.free,
                open: box.open,
            }
        });
        localStorage.setItem("boxes", JSON.stringify(arrayBoxesToLocalStorage));
    }




    paintBoxes(){
        let header = document.createElement(`header`);
        header.setAttribute("id", "boxHeader");

        this.element.appendChild(header);

        let boxContainer = document.createElement(`div`);
        boxContainer.setAttribute("id", "boxContainer");
        this.element.appendChild(boxContainer);

        this.setCSSBoxTemplates();
        this.#boxes.map((box) => {
            let newBoxDiv = document.createElement("div");
            newBoxDiv.classList.add("box");
            if (!box.free || box.open) {
                newBoxDiv.style.backgroundColor = box.color;
            }
            // newBoxDiv.dataset.col = box.col;
            // newBoxDiv.dataset.row = box.row;

            box.element = newBoxDiv;
            box.addEventClick();
            boxContainer.appendChild(newBoxDiv);
            
        
        });
    }


    initTimer() {
        let timerContainer = document.createElement("h2");
        timerContainer.setAttribute("id", "timerContainer");
        timerContainer.innerHTML = `<span> id="timer">00:00:00</span>`;
        
        let header = document.getElementById("boxHeader");
        header.appendChild(timerContainer);
        this.timer = new Timer(timerContainer);
    }




    setCSSBoxTemplates() {
        let boxContainer = document.getElementById("boxContainer");
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
                this.arrayBoxesToLocalStorage();
            } else {
                setTimeout(() => {
                    nOpenBoxes.map((box) => {
                        box.resetColor();
                    });
                }, 500);
            }
    }else {
        this.arrayBoxesToLocalStorage();
    }
}

     static resetGame () {
        localStorage.removeItem("cols");
        localStorage.removeItem("rows");
        localStorage.removeItem("boxes");
        location.reload();
    }


    static getRowsCols() {
        let rows, cols;

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


// localStorage.setItem("boxes", JSON.stringify(this.#boxes));