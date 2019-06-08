// variables
var mainDispText;
var mainDisp;



// DOM 
mainDisp = document.getElementById('maindisp');
mainDispText = document.getElementById('maindisptext');

// event listeners

mainDisp.addEventListener('click', startGame);


// functions

function init(){
    console.log(mainDispText);
    mainDispText.textContent = "Start Game!";
    console.log(mainDispText);
}

function startGame(){
    mainDisp.classList.remove('showstartgame');
    mainDisp.classList.add("hidestartgame");
}





init();

