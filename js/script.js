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
    // console.log(e.target.classList);
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
    if (!(square.contains("blk"))) {
        if (prevSquare.value){
            toggleColor(prevSquare, "bright", "red");
            toggleColor(square, "red", "bright");
            prevSquare = square;
        } else {
            toggleColor(square, "red", "bright");
            prevSquare = square;
        }
    }
}

function moveOptions(square) {
    let col = square[0].split('').pop();
    let row = square[1].split('').pop();
    console.log("row: " + row + ", col: " + col);    


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

