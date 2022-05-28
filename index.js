// alert('test')

const gridContainer = document.getElementById('gridContainer');
const btnShuffle = document.getElementById('btnShuffle');
const btnSort = document.getElementById('btnSort');

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const colors = ['#72C3DC','#2B8EAD','#6F98A8', '#BFBFBF', '#2F454E'];

createBoard(items);


btnShuffle.addEventListener('click', function() {
    gridContainer.innerHTML = '';
    createBoard(shuffle(items));
});

btnSort.addEventListener('click', () => {
    gridContainer.innerHTML = '';
    createBoard(items.sort());
});

function createBoard(items) {
    items.forEach(item => {

        const element = document.createElement('div');
        element.className = "grid-item";
        element.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];;

        const textnode = document.createTextNode(item);
        element.appendChild(textnode);

        gridContainer.appendChild(element);
    });
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}