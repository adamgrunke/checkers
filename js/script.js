// variables
var mainDispText;
var mainDisp;
var testJmpRed;
var testJmpBlk;
var offerDraw;
var board;
var redCount = 12;
var blkCount = 12;
var prevSquare = null;
var prevMove1 = 0;
var prevMove2 = 0;

// DOM 
mainDisp = document.getElementById('maindisp');
mainDispText = document.getElementById('maindisptext');
testJmpRed = document.getElementById('testjumpred');
testJmpBlk = document.getElementById('testjumpblk');
offerDraw = document.getElementById('offerdraw');
board = document.getElementById("board");

// event listeners

mainDisp.addEventListener('click', startGame);
testJmpRed.addEventListener('click', jumpRed);
testJmpBlk.addEventListener('click', jumpBlk);
offerDraw.addEventListener('click', drawGame);
board.addEventListener('click', function(e){
    highlightSelectedSquare(e.target.classList);
    moveOptions(e.target.classList);
});

// functions

function init(){
    mainDispText.textContent = "Start Game!";
    redCount = 12;
    blkCount = 12;
    offerDraw.textContent = "Offer Draw"
    prevSquare = 0;
    prevMove1 = 0;
    prevMove2 = 0;

}

function startGame(){
    mainDisp.classList.remove('showstartgame');
    mainDisp.classList.add("hidestartgame");
}


function jumpRed(){
    redCount--;
    console.log("red jump! red count = " + redCount );
    winCheck();
}

function jumpBlk(){
    blkCount--;
    console.log("blk jump! blk count = " + blkCount);
    winCheck();
}


function highlightSelectedSquare(square){
    // parameter e.target.classList

    if (!(square.contains("dark"))) {
        if (prevSquare.value){
            toggleColor(prevSquare, "bright", "light");
            toggleColor(square, "light", "bright");
            prevSquare = square;
        } else {
            toggleColor(square, "light", "bright");
            prevSquare = square;
        }
    }
}

function moveOptions(square) {
    // square is e.target.classList
    if (prevMove1 !== 0){
        prevMove1.remove('legal')
        prevMove2.remove('legal')
        prevMove1.add('light')
        prevMove2.add('light')
    }
    let row = square[1].split('').pop();
    let col = square[0].split('').pop();
    let colNum = parseInt(col);
    let rowNum = parseInt(row);
    
    let rowMoveOption = (parseInt(row))+1;
    let colMoveOption1 = square[0];
    rowMoveOption = "row" + rowMoveOption;
    
    let a = document.querySelector("." + rowMoveOption + "." + colMoveOption1).classList;
    prevMove1 = a;
    a.remove('light');
    a.add('legal');
    
        if (
            colNum === 2 || 
            colNum === 3 ||
            (colNum === 1 && row % 2 !== 0) ||
            (colNum === 4 && row % 2 === 0)
            
            ) {

            let colMoveOption2 = (parseInt(col)); // temporary. only works for some squares.
        if (row % 2 === 0) {
            colMoveOption2 = colMoveOption2 - 1;
        } else {
            colMoveOption2 = colMoveOption2 + 1;
        }
        colMoveOption2 = "col" + colMoveOption2;
        let b = document.querySelector("." + rowMoveOption + "." + colMoveOption2).classList;
        prevMove2 = b;
        
        b.remove('light');
        b.add('legal');
        }
        
        
    
    
}

function toggleColor(square, prevColor, newColor){
    square.remove(prevColor);
    square.add(newColor);
}

function winCheck(){
    if (blkCount === 0) {
        endGame("red");
    }
    else if (redCount === 0) {
        endGame("blk");
    }
}

function endGame(winner) {
    if (winner === "blk"){
        console.log("Black wins!");
    }
    else if (winner === "red"){
        console.log("Red wins!");
    }
    else if (winner === "draw") {
        console.log("Draw Confirmed - Game Over")
        console.log("press reset to play again");
    }
}

function drawGame(){
    if (offerDraw.textContent === "Offer Draw") {
        console.log("draw offered");
        offerDraw.textContent = "Confirm Draw";
    }
    else if (offerDraw.textContent === "Confirm Draw") {
        endGame('draw');
    }
}


// *********

init();

