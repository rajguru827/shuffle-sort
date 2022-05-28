// alert('test')

const gridContainer = document.getElementById('gridContainer');
const btnShuffle = document.getElementById('btnShuffle');
const btnSort = document.getElementById('btnSort');

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const colors = ['#72C3DC', '#2B8EAD', '#6F98A8', '#BFBFBF', '#2F454E'];

let alreadyDone = [];

createBoard(items);


btnShuffle.addEventListener('click', function () {
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
        element.style.backgroundColor = randomValueFromArray(colors)

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

function searchRandom(count, arr) {
    let answer = [], counter = 0;

    while (counter < count) {
        let rand = arr[Math.floor(Math.random() * arr.length)];
        if (!answer.some(an => an === rand)) {
            answer.push(rand);
            counter++;
        }
    }

    return answer;
}

// Function picking random values from array
function randomValueFromArray (myArray) {
  // If alreadyDone is empty then fill it will indexes equal
  // to the size of myArray
  if (alreadyDone.length === 0) {
    for (var i = 0; i < myArray.length; i++) alreadyDone.push(i);
  }

  // Generate random number within the range of 
  // length of alreadyDone array
  var randomValueIndex = Math.floor(Math.random() * alreadyDone.length);
  
  // Getting unaccessed index of myArray using above 
  // random number
  var indexOfItemInMyArray = alreadyDone[randomValueIndex];

  // remove this index from alreadyDone array because
  // we are accessing it now.
  alreadyDone.splice(randomValueIndex, 1);

  // Get the value
  return myArray[indexOfItemInMyArray];
};
