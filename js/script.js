// variables
var mainDispText;
var mainDisp;
var testRedJmp;
var testBlkJmp;
var testWin;
var board;

// DOM 
mainDisp = document.getElementById('maindisp');
mainDispText = document.getElementById('maindisptext');
testRedJmp = document.getElementById('testredjump');
testBlkJmp = document.getElementById('testblackjump');
testWin = document.getElementById('testwin');
board = document.getElementById("board");



// event listeners

mainDisp.addEventListener('click', startGame);
testRedJmp.addEventListener('click', redJump);
testBlkJmp.addEventListener('click', blkJump);
testWin.addEventListener('click', winGame);
board.addEventListener('click', function(e){
    // console.log(e.target.classList);
    highlightSquare(e.target.classList);
});



// functions

function init(){
    mainDispText.textContent = "Start Game!";
}

function startGame(){
    mainDisp.classList.remove('showstartgame');
    mainDisp.classList.add("hidestartgame");
}

function redJump(){
    console.log("red jump");
}

function blkJump(){
    console.log("blk jump");
}

function winGame(){
    console.log("win game");
}

function highlightSquare(classList){
    console.log(classList);
    
}

// *********

init();

