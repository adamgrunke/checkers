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

board = document.getElementById("board");

var gameBoard = {
    row0: {
        col0: {
            grid_location: board.children[0],
            player: 'blk',
            squareColor: 'light',
            occupied: true
        },
        col1: {
            grid_location: board.children[1],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col2: {
            grid_location: board.children[2],
            player: 'blk',
            squareColor: 'light',
            occupied: true
        },
        col3: {
            grid_location: board.children[3],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col4: {
            grid_location: board.children[4],
            player: 'blk',
            squareColor: 'light',
            occupied: true
        },
        col5: {
            grid_location: board.children[5],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col6: {
            grid_location: board.children[6],
            player: 'blk',
            squareColor: 'light',
            occupied: true
        },
        col7: {
            grid_location: board.children[7],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        },
    row1: {
        col0: {
            grid_location: board.children[8],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col1: {
            grid_location: board.children[9],
            player: 'blk',
            squareColor: 'light',
            occupied: true
        },
        col2: {
            grid_location: board.children[10],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col3: {
            grid_location: board.children[11],
            player: 'blk',
            squareColor: 'light',
            occupied: true
        },
        col4: {
            grid_location: board.children[12],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col5: {
            grid_location: board.children[13],
            player: 'blk',
            squareColor: 'light',
            occupied: true
        },
        col6: {
            grid_location: board.children[14],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col7: {
            grid_location: board.children[15],
            player: 'blk',
            squareColor: 'light',
            occupied: true
        }
        },    
    row2: {
        col0: {
            grid_location: board.children[16],
            player: 'blk',
            squareColor: 'light',
            occupied: true
        },
        col1: {
            grid_location: board.children[17],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col2: {
            grid_location: board.children[18],
            player: 'blk',
            squareColor: 'light',
            occupied: true
        },
        col3: {
            grid_location: board.children[19],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col4: {
            grid_location: board.children[20],
            player: 'blk',
            squareColor: 'light',
            occupied: true
        },
        col5: {
            grid_location: board.children[21],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col6: {
            grid_location: board.children[22],
            player: 'blk',
            squareColor: 'light',
            occupied: true
        },
        col7: {
            grid_location: board.children[23],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        },
    row3: {
        col0: {
            grid_location: board.children[24],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col1: {
            grid_location: board.children[25],
            player: 'none',
            squareColor: 'light',
            occupied: false
        },
        col2: {
            grid_location: board.children[26],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col3: {
            grid_location: board.children[27],
            player: 'none',
            squareColor: 'light',
            occupied: false
        },
        col4: {
            grid_location: board.children[28],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col5: {
            grid_location: board.children[29],
            player: 'none',
            squareColor: 'light',
            occupied: false
        },
        col6: {
            grid_location: board.children[30],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col7: {
            grid_location: board.children[31],
            player: 'none',
            squareColor: 'light',
            occupied: false
        }
        },    
    row4: {
        col0: {
            grid_location: board.children[32],
            player: 'none',
            squareColor: 'light',
            occupied: false
        },
        col1: {
            grid_location: board.children[33],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col2: {
            grid_location: board.children[34],
            player: 'none',
            squareColor: 'light',
            occupied: false
        },
        col3: {
            grid_location: board.children[35],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col4: {
            grid_location: board.children[36],
            player: 'none',
            squareColor: 'light',
            occupied: false
        },
        col5: {
            grid_location: board.children[37],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col6: {
            grid_location: board.children[38],
            player: 'none',
            squareColor: 'light',
            occupied: false
        },
        col7: {
            grid_location: board.children[39],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        },
    row5: {
        col0: {
            grid_location: board.children[40],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col1: {
            grid_location: board.children[41],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col2: {
            grid_location: board.children[42],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col3: {
            grid_location: board.children[43],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col4: {
            grid_location: board.children[44],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col5: {
            grid_location: board.children[45],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col6: {
            grid_location: board.children[46],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col7: {
            grid_location: board.children[47],
            player: 'red',
            squareColor: 'light',
            occupied: true
        }
        },    
    row6: {
        col0: {
            grid_location: board.children[48],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col1: {
            grid_location: board.children[49],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col2: {
            grid_location: board.children[50],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col3: {
            grid_location: board.children[51],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col4: {
            grid_location: board.children[52],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col5: {
            grid_location: board.children[53],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col6: {
            grid_location: board.children[54],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col7: {
            grid_location: board.children[55],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        },
    row7: {
        col0: {
            grid_location: board.children[56],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col1: {
            grid_location: board.children[57],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col2: {
            grid_location: board.children[58],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col3: {
            grid_location: board.children[59],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col4: {
            grid_location: board.children[60],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col5: {
            grid_location: board.children[61],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col6: {
            grid_location: board.children[62],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col7: {
            grid_location: board.children[63],
            player: 'red',
            squareColor: 'light',
            occupied: true
        }
        }    
    }
    


// DOM 
mainDisp = document.getElementById('maindisp');
mainDispText = document.getElementById('maindisptext');
testJmpRed = document.getElementById('testjumpred');
testJmpBlk = document.getElementById('testjumpblk');
offerDraw = document.getElementById('offerdraw');

// event listeners

mainDisp.addEventListener('click', startGame);
testJmpRed.addEventListener('click', jumpRed);
testJmpBlk.addEventListener('click', jumpBlk);
offerDraw.addEventListener('click', drawGame);
board.addEventListener('click', function(e){
    // highlightSelectedSquare(e.target.classList);
    highlightSelectedSquare(e.target);
    // generateMoveOptions(e.target.classList);
});

document.addEventListener('DOMContentLoaded', function(){
    createBoard();
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

function createBoard() {
    for (let row in gameBoard){
        for (let col in gameBoard[row]){
            let square = gameBoard[row][col]
            // console.log(square)
            square.grid_location.classList.add(square.squareColor)
            if (square.player === 'blk' && square.occupied === true){
                let checkerElement = document.createElement("img");
                checkerElement.src = "img/blk_checker.png";
                square.grid_location.appendChild(checkerElement)
            } else if (square.player === 'red' && square.occupied === true){
                let checkerElement = document.createElement("img");
                checkerElement.src = "img/red_checker.png";
                square.grid_location.appendChild(checkerElement)
            }
        
        }
    }
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

function highlightSelectedSquare(location){
    // location -> e.target
    //  console.log(Array.from(square.parentNode.children).indexOf(square));
    let squareIndex;
    if (location.nodeName === 'DIV'){
        squareIndex = Array.from(board.children).indexOf(location);
    } else {
        squareIndex = Array.from(board.children).indexOf(location.parentNode);
    }

    let row = 'row' + Math.floor(squareIndex / 8);
    let col = 'col' + squareIndex % 8;
    let color = gameBoard[row][col].squareColor;
    let occupied = gameBoard[row][col].occupied
    let square = board.children[squareIndex].classList
    if (!(color === 'dark') && occupied) {
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

