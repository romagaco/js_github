// funciones de utilidad

// shuffle utility function
// toma un array por parametro y lo desordena aleatoriamente
function shuffleArray(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }
}

export { shuffleArray };