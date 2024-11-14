const gameboard = document.querySelector('#gameboard');
const infoDisplay = document.querySelector('#info');
const startCells = ['', '', '', '', '', '', '', '', ''];
let go = 'circle';

infoDisplay.textContent = 'Circle goes first';

function createBoard(){
    startCells.forEach((_cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('square');
        cellElement.id = index;
        cellElement.addEventListener('click', addGo)
        gameboard.append(cellElement);
    })
}
createBoard();

function addGo(e){
    const goDisplay = document.createElement('div');
    goDisplay.classList.add(go);
    e.target.append(goDisplay);
    go = go === 'circle' ? 'cross' : 'circle';
    infoDisplay.textContent = `It is now ${go}'s turn`;
    e.target.removeEventListener('click', addGo);
    checkScore();
}

function checkScore(){
    const allSquares = document.querySelectorAll('.square');
    const winingCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]

    winingCombos.forEach(arr => {
        const circleWins = arr.every(cell => allSquares[cell].firstChild?.classList.contains('circle'));
        if(circleWins){
            infoDisplay.textContent = 'Circle Wins!';
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
        }
    })

    winingCombos.forEach(arr => {
        const crossWins = arr.every(cell => allSquares[cell].firstChild?.classList.contains('cross'));
        if(crossWins){
            infoDisplay.textContent = 'Cross Wins!';
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
        }
    })
}