const gameInfo = document.querySelectorAll('.gameInfo');
const gameBox = document.querySelectorAll('.box');
const gameBtn = document.querySelectorAll('.gameBtn');

let currentPlayer;
let gameGrid;

let winningPositions = [
    // horizontal
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    // vertical
    [0, 3, 6],
    [1, 4, 7], 
    [2, 5, 8], 
    // diagonal
    [0, 4, 8],
    [2, 4, 6]
]

function initG(){
    currentPlayer = "X";
    gameGrid = ["","","","","","","","","",];

    // UI mein changes
    gameBox.forEach((box,index)=>{
        box.innerText = "X";
    });

    gameInfo.innerHtml = `Current Player -${currentPlayer}`;
};

initG();