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

var board = {
    row1: {
        col1: {
            grid_location: board.child[56],
            player: 'blk',
            squareColor: 'dark',
            occupied: false
        },
        col2: {
            grid_location: board.child[57],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col3: {
            grid_location: board.child[58],
            player: 'blk',
            squareColor: 'dark',
            occupied: false
        },
        col4: {
            grid_location: board.child[59],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col5: {
            grid_location: board.child[60],
            player: 'blk',
            squareColor: 'dark',
            occupied: false
        },
        col6: {
            grid_location: board.child[61],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col7: {
            grid_location: board.child[62],
            player: 'blk',
            squareColor: 'dark',
            occupied: false
        },
        col8: {
            grid_location: board.child[63],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        },
    row2: {
        col1: {
            grid_location: board.child[48],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col2: {
            grid_location: board.child[49],
            player: 'blk',
            squareColor: 'dark',
            occupied: false
        },
        col3: {
            grid_location: board.child[50],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col4: {
            grid_location: board.child[51],
            player: 'blk',
            squareColor: 'dark',
            occupied: false
        },
        col5: {
            grid_location: board.child[52],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col6: {
            grid_location: board.child[53],
            player: 'blk',
            squareColor: 'dark',
            occupied: false
        },
        col7: {
            grid_location: board.child[54],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col8: {
            grid_location: board.child[55],
            player: 'blk',
            squareColor: 'dark',
            occupied: false
        }
        },    
    row3: {
        col1: {
            grid_location: board.child[40],
            player: 'blk',
            squareColor: 'dark',
            occupied: false
        },
        col2: {
            grid_location: board.child[41],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col3: {
            grid_location: board.child[42],
            player: 'blk',
            squareColor: 'dark',
            occupied: false
        },
        col4: {
            grid_location: board.child[43],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col5: {
            grid_location: board.child[44],
            player: 'blk',
            squareColor: 'dark',
            occupied: false
        },
        col6: {
            grid_location: board.child[45],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col7: {
            grid_location: board.child[46],
            player: 'blk',
            squareColor: 'dark',
            occupied: false
        },
        col8: {
            grid_location: board.child[47],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        },
    row4: {
        col1: {
            grid_location: board.child[32],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col2: {
            grid_location: board.child[33],
            player: 'blk',
            squareColor: 'dark',
            occupied: false
        },
        col3: {
            grid_location: board.child[34],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col4: {
            grid_location: board.child[35],
            player: 'blk',
            squareColor: 'dark',
            occupied: false
        },
        col5: {
            grid_location: board.child[36],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col6: {
            grid_location: board.child[37],
            player: 'blk',
            squareColor: 'dark',
            occupied: false
        },
        col7: {
            grid_location: board.child[38],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col8: {
            grid_location: board.child[39],
            player: 'blk',
            squareColor: 'dark',
            occupied: false
        }
        },    
    row5: {
        col1: {
            grid_location: board.child[24],
            player: 'blk',
            squareColor: 'dark',
            occupied: false
        },
        col2: {
            grid_location: board.child[25],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col3: {
            grid_location: board.child[26],
            player: 'blk',
            squareColor: 'dark',
            occupied: false
        },
        col4: {
            grid_location: board.child[27],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col5: {
            grid_location: board.child[28],
            player: 'blk',
            squareColor: 'dark',
            occupied: false
        },
        col6: {
            grid_location: board.child[29],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col7: {
            grid_location: board.child[30],
            player: 'blk',
            squareColor: 'dark',
            occupied: false
        },
        col8: {
            grid_location: board.child[31],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        },
    row6: {
        col1: {
            grid_location: board.child[16],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col2: {
            grid_location: board.child[17],
            player: 'blk',
            squareColor: 'dark',
            occupied: false
        },
        col3: {
            grid_location: board.child[18],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col4: {
            grid_location: board.child[19],
            player: 'blk',
            squareColor: 'dark',
            occupied: false
        },
        col5: {
            grid_location: board.child[20],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col6: {
            grid_location: board.child[21],
            player: 'blk',
            squareColor: 'dark',
            occupied: false
        },
        col7: {
            grid_location: board.child[22],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col8: {
            grid_location: board.child[23],
            player: 'blk',
            squareColor: 'dark',
            occupied: false
        }
        },    
    row7: {
        col1: {
            grid_location: board.child[8],
            player: 'blk',
            squareColor: 'dark',
            occupied: false
        },
        col2: {
            grid_location: board.child[9],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col3: {
            grid_location: board.child[10],
            player: 'blk',
            squareColor: 'dark',
            occupied: false
        },
        col4: {
            grid_location: board.child[11],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col5: {
            grid_location: board.child[12],
            player: 'blk',
            squareColor: 'dark',
            occupied: false
        },
        col6: {
            grid_location: board.child[13],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col7: {
            grid_location: board.child[14],
            player: 'blk',
            squareColor: 'dark',
            occupied: false
        },
        col8: {
            grid_location: board.child[15],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        },
    row8: {
        col1: {
            grid_location: board.child[0],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col2: {
            grid_location: board.child[1],
            player: 'blk',
            squareColor: 'dark',
            occupied: false
        },
        col3: {
            grid_location: board.child[2],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col4: {
            grid_location: board.child[3],
            player: 'blk',
            squareColor: 'dark',
            occupied: false
        },
        col5: {
            grid_location: board.child[4],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col6: {
            grid_location: board.child[5],
            player: 'blk',
            squareColor: 'dark',
            occupied: false
        },
        col7: {
            grid_location: board.child[6],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col8: {
            grid_location: board.child[7],
            player: 'blk',
            squareColor: 'dark',
            occupied: false
        }
        }    
    }
    


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
    generateMoveOptions(e.target.classList);
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

    populateBoard();

}

function populateBoard() {
    let redPopulate = [];
    redPopulate = document.querySelectorAll("row1, light");
    
    console.log(redPopulate.length)
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

function generateMoveOptions(square) {
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

    console.log(square[0], square[1])
    
    let rowMoveOption = (parseInt(row))+1;
    let colMoveOption1 = square[0];
    rowMoveOption = "row" + rowMoveOption;
    
    let a = document.querySelector("." + rowMoveOption + "." + colMoveOption1).classList;
    prevMove1 = a;
    if (!(a.contains('occupied'))){
        a.remove('light');
        a.add('legal');
    }
    
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
        
        if (!(b.contains('occupied'))){
            b.remove('light');
            b.add('legal');
           
        }
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

