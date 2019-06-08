// variables
var mainDispText;
var mainDisp;
var testRedJmp;
var testBlkJmp;
var testWin;

// DOM 
mainDisp = document.getElementById('maindisp');
mainDispText = document.getElementById('maindisptext');
testRedJmp = document.getElementById('testredjump');
testBlkJmp = document.getElementById('testblackjump');
testWin = document.getElementById('testwin');


// event listeners

mainDisp.addEventListener('click', startGame);
testRedJmp.addEventListener('click', redJump);
testBlkJmp.addEventListener('click', blkJump);
testWin.addEventListener('click', winGame);


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


init();

