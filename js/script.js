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
var rowCur;
var colCur;
var squareIndex;
var currentPlayer = "red";
var jumpPossible = "false";
var currentLocation = [];
var previousLocation = [];

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
    calculateLocationIndex(e.target);
    // if (gameBoard[rowCur][colCur].occupied){
        highlightSelectedSquare(e.target);
        generateMoveOptions(e.target);
        moveGamePiece();
    // }

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
    currentPlayer = 'red';
    jumpPossible = "false";
    currentLocation = 0;
    previousLocation = 0;

}

function createBoard() {
    
    for (let row in gameBoard){
        for (let col in gameBoard[row]){
            let square = gameBoard[row][col]
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

function moveGamePiece() {
    // if previous square selected contained a currentPlayer piece AND
    // there are move options AND the current selected square is one of the move options THEN
    // remove the image from the previous square and add the image to the current square.
    // update occupied to false and player to none in the previous square.
    // update occupied to true and player to the currentPlayer value in the current square.
    // this could be a function - updateSquare(newPosition, oldPosition, player)
    
        if (previousLocation) {

        gameBoard[previousLocation[0]][previousLocation[1]].occupied = false;
        gameBoard[previousLocation[0]][previousLocation[1]].player = 'none';
        let temp = gameBoard[previousLocation[0]][previousLocation[1]].grid_location;
        // let temp = board.children[previousLocation[2]]
        console.log(previousLocation)
        let checkerImg = temp.removeChild(temp.firstChild)
        // let checkerImg = board.children[previousLocation[2]].removeChild(board.children[previousLocation[2]])
        
        // let oldSpot = gameBoard[previousLocation[0]][previousLocation[1]].grid_location
        // let newSpot = gameBoard[currentLocation[0]][currentLocation[1]].grid_location
        



        gameBoard[currentLocation[0]][currentLocation[1]].occupied = true;
        gameBoard[currentLocation[0]][currentLocation[1]].player = currentPlayer;
        
        gameBoard[currentLocation[0]][currentLocation[1]].grid_location.appendChild(checkerImg)
        
      

    }
    


}

function togglePlayer(){
    
    if (!jumpPossible) {
        if (currentPlayer === 'red') {
            currentPlayer = 'blk';
        } else {
            currentPlayer = 'red';
        };

    }
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

function calculateLocationIndex(location){
    // location -> e.target
    // global variables: squareIndex, board, rowCur, colCur
    if (location.nodeName === 'DIV'){
        squareIndex = Array.from(board.children).indexOf(location);
    } else {
        squareIndex = Array.from(board.children).indexOf(location.parentNode);
    }

    rowCur = 'row' + Math.floor(squareIndex / 8); 
    colCur = 'col' + squareIndex % 8;
    
    previousLocation = currentLocation;
    currentLocation = [rowCur,colCur, squareIndex];
}

function highlightSelectedSquare(location){
    // location -> e.target
    //  console.log(Array.from(square.parentNode.children).indexOf(square));
    let color = gameBoard[rowCur][colCur].squareColor;
    let occupied = gameBoard[rowCur][colCur].occupied
    let square = board.children[squareIndex].classList
    // let brightColor;
    // let player = gameBoard[rowCur][colCur].player;
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
    let rowMoveOption;
    let colMoveOption1;
    let colMoveOption2;

    if (prevMove1 !== 0){
        toggleColor(prevMove1, 'legal', 'light');
    }
    if (prevMove2 !== 0){
        toggleColor(prevMove2, 'legal', 'light');
    }
    let rowTemp = rowCur.split('').pop();
    let colTemp = colCur.split('').pop();
    let colNum = parseInt(colTemp);
    let rowNum = parseInt(rowTemp);
    
    // black player
    // rowMoveOption = (parseInt(rowNum))+1;
    // colMoveOption1 = (parseInt(colNum))-1;
    // colMoveOption2 = (parseInt(colNum))+1;
    
    // red player
    rowMoveOption = (parseInt(rowNum))-1;
    colMoveOption1 = (parseInt(colNum))-1;
    colMoveOption2 = (parseInt(colNum))+1;
    let indexMoveOption1 = board.children[(rowMoveOption * 8) + colMoveOption1].classList;
    let indexMoveOption2 = board.children[(rowMoveOption * 8) + colMoveOption2].classList;
        
    if ( (colMoveOption1 >= 0) &&
        !((gameBoard["row" + rowMoveOption]['col' + colMoveOption1].occupied))) {
            toggleColor(indexMoveOption1, 'light', 'legal');
            prevMove1 = indexMoveOption1
    }
    if ( (colMoveOption2 <= 7) && 
    !((gameBoard["row" + rowMoveOption]['col' + colMoveOption2].occupied))) {
        // console.log(gameBoard["row" + rowMoveOption]['col' + colMoveOption2].player)
        toggleColor(indexMoveOption2, 'light', 'legal');
        prevMove2 = indexMoveOption2
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

