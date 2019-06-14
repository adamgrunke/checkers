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
let rowMoveOption;
let colMoveOption1;
let colMoveOption2;
let move1 = 0;
let move2 = 0;
let opponent = "blk";

board = document.getElementById("board");

var gameBoard = {
    row0: {
        col0: {
            gridLocation: board.children[0],
            player: 'blk',
            squareColor: 'light',
            occupied: true
        },
        col1: {
            gridLocation: board.children[1],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col2: {
            gridLocation: board.children[2],
            player: 'blk',
            squareColor: 'light',
            occupied: true
        },
        col3: {
            gridLocation: board.children[3],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col4: {
            gridLocation: board.children[4],
            player: 'blk',
            squareColor: 'light',
            occupied: true
        },
        col5: {
            gridLocation: board.children[5],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col6: {
            gridLocation: board.children[6],
            player: 'blk',
            squareColor: 'light',
            occupied: true
        },
        col7: {
            gridLocation: board.children[7],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        },
    row1: {
        col0: {
            gridLocation: board.children[8],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col1: {
            gridLocation: board.children[9],
            player: 'blk',
            squareColor: 'light',
            occupied: true
        },
        col2: {
            gridLocation: board.children[10],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col3: {
            gridLocation: board.children[11],
            player: 'blk',
            squareColor: 'light',
            occupied: true
        },
        col4: {
            gridLocation: board.children[12],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col5: {
            gridLocation: board.children[13],
            player: 'blk',
            squareColor: 'light',
            occupied: true
        },
        col6: {
            gridLocation: board.children[14],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col7: {
            gridLocation: board.children[15],
            player: 'blk',
            squareColor: 'light',
            occupied: true
        }
        },    
    row2: {
        col0: {
            gridLocation: board.children[16],
            player: 'blk',
            squareColor: 'light',
            occupied: true
        },
        col1: {
            gridLocation: board.children[17],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col2: {
            gridLocation: board.children[18],
            player: 'blk',
            squareColor: 'light',
            occupied: true
        },
        col3: {
            gridLocation: board.children[19],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col4: {
            gridLocation: board.children[20],
            player: 'blk',
            squareColor: 'light',
            occupied: true
        },
        col5: {
            gridLocation: board.children[21],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col6: {
            gridLocation: board.children[22],
            player: 'blk',
            squareColor: 'light',
            occupied: true
        },
        col7: {
            gridLocation: board.children[23],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        },
    row3: {
        col0: {
            gridLocation: board.children[24],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col1: {
            gridLocation: board.children[25],
            player: 'none',
            squareColor: 'light',
            occupied: false
        },
        col2: {
            gridLocation: board.children[26],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col3: {
            gridLocation: board.children[27],
            player: 'none',
            squareColor: 'light',
            occupied: false
        },
        col4: {
            gridLocation: board.children[28],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col5: {
            gridLocation: board.children[29],
            player: 'none',
            squareColor: 'light',
            occupied: false
        },
        col6: {
            gridLocation: board.children[30],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col7: {
            gridLocation: board.children[31],
            player: 'none',
            squareColor: 'light',
            occupied: false
        }
        },    
    row4: {
        col0: {
            gridLocation: board.children[32],
            player: 'none',
            squareColor: 'light',
            occupied: false
        },
        col1: {
            gridLocation: board.children[33],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col2: {
            gridLocation: board.children[34],
            player: 'none',
            squareColor: 'light',
            occupied: false
        },
        col3: {
            gridLocation: board.children[35],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col4: {
            gridLocation: board.children[36],
            player: 'none',
            squareColor: 'light',
            occupied: false
        },
        col5: {
            gridLocation: board.children[37],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col6: {
            gridLocation: board.children[38],
            player: 'none',
            squareColor: 'light',
            occupied: false
        },
        col7: {
            gridLocation: board.children[39],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        },
    row5: {
        col0: {
            gridLocation: board.children[40],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col1: {
            gridLocation: board.children[41],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col2: {
            gridLocation: board.children[42],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col3: {
            gridLocation: board.children[43],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col4: {
            gridLocation: board.children[44],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col5: {
            gridLocation: board.children[45],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col6: {
            gridLocation: board.children[46],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col7: {
            gridLocation: board.children[47],
            player: 'red',
            squareColor: 'light',
            occupied: true
        }
        },    
    row6: {
        col0: {
            gridLocation: board.children[48],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col1: {
            gridLocation: board.children[49],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col2: {
            gridLocation: board.children[50],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col3: {
            gridLocation: board.children[51],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col4: {
            gridLocation: board.children[52],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col5: {
            gridLocation: board.children[53],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col6: {
            gridLocation: board.children[54],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col7: {
            gridLocation: board.children[55],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        },
    row7: {
        col0: {
            gridLocation: board.children[56],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col1: {
            gridLocation: board.children[57],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col2: {
            gridLocation: board.children[58],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col3: {
            gridLocation: board.children[59],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col4: {
            gridLocation: board.children[60],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col5: {
            gridLocation: board.children[61],
            player: 'red',
            squareColor: 'light',
            occupied: true
        },
        col6: {
            gridLocation: board.children[62],
            player: 'none',
            squareColor: 'dark',
            occupied: false
        },
        col7: {
            gridLocation: board.children[63],
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
    init();

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
    opponent = 'blk';
    jumpPossible = "false";
    currentLocation.length = 0;
    previousLocation.length = 0;
    move1 = 0;
    move2 = 0;
    gameBoard = {
        row0: {
            col0: {
                gridLocation: board.children[0],
                player: 'blk',
                squareColor: 'light',
                occupied: true
            },
            col1: {
                gridLocation: board.children[1],
                player: 'none',
                squareColor: 'dark',
                occupied: false
            },
            col2: {
                gridLocation: board.children[2],
                player: 'blk',
                squareColor: 'light',
                occupied: true
            },
            col3: {
                gridLocation: board.children[3],
                player: 'none',
                squareColor: 'dark',
                occupied: false
            },
            col4: {
                gridLocation: board.children[4],
                player: 'blk',
                squareColor: 'light',
                occupied: true
            },
            col5: {
                gridLocation: board.children[5],
                player: 'none',
                squareColor: 'dark',
                occupied: false
            },
            col6: {
                gridLocation: board.children[6],
                player: 'blk',
                squareColor: 'light',
                occupied: true
            },
            col7: {
                gridLocation: board.children[7],
                player: 'none',
                squareColor: 'dark',
                occupied: false
            },
            },
        row1: {
            col0: {
                gridLocation: board.children[8],
                player: 'none',
                squareColor: 'dark',
                occupied: false
            },
            col1: {
                gridLocation: board.children[9],
                player: 'blk',
                squareColor: 'light',
                occupied: true
            },
            col2: {
                gridLocation: board.children[10],
                player: 'none',
                squareColor: 'dark',
                occupied: false
            },
            col3: {
                gridLocation: board.children[11],
                player: 'blk',
                squareColor: 'light',
                occupied: true
            },
            col4: {
                gridLocation: board.children[12],
                player: 'none',
                squareColor: 'dark',
                occupied: false
            },
            col5: {
                gridLocation: board.children[13],
                player: 'blk',
                squareColor: 'light',
                occupied: true
            },
            col6: {
                gridLocation: board.children[14],
                player: 'none',
                squareColor: 'dark',
                occupied: false
            },
            col7: {
                gridLocation: board.children[15],
                player: 'blk',
                squareColor: 'light',
                occupied: true
            }
            },    
        row2: {
            col0: {
                gridLocation: board.children[16],
                player: 'blk',
                squareColor: 'light',
                occupied: true
            },
            col1: {
                gridLocation: board.children[17],
                player: 'none',
                squareColor: 'dark',
                occupied: false
            },
            col2: {
                gridLocation: board.children[18],
                player: 'blk',
                squareColor: 'light',
                occupied: true
            },
            col3: {
                gridLocation: board.children[19],
                player: 'none',
                squareColor: 'dark',
                occupied: false
            },
            col4: {
                gridLocation: board.children[20],
                player: 'blk',
                squareColor: 'light',
                occupied: true
            },
            col5: {
                gridLocation: board.children[21],
                player: 'none',
                squareColor: 'dark',
                occupied: false
            },
            col6: {
                gridLocation: board.children[22],
                player: 'blk',
                squareColor: 'light',
                occupied: true
            },
            col7: {
                gridLocation: board.children[23],
                player: 'none',
                squareColor: 'dark',
                occupied: false
            },
            },
        row3: {
            col0: {
                gridLocation: board.children[24],
                player: 'none',
                squareColor: 'dark',
                occupied: false
            },
            col1: {
                gridLocation: board.children[25],
                player: 'none',
                squareColor: 'light',
                occupied: false
            },
            col2: {
                gridLocation: board.children[26],
                player: 'none',
                squareColor: 'dark',
                occupied: false
            },
            col3: {
                gridLocation: board.children[27],
                player: 'none',
                squareColor: 'light',
                occupied: false
            },
            col4: {
                gridLocation: board.children[28],
                player: 'none',
                squareColor: 'dark',
                occupied: false
            },
            col5: {
                gridLocation: board.children[29],
                player: 'none',
                squareColor: 'light',
                occupied: false
            },
            col6: {
                gridLocation: board.children[30],
                player: 'none',
                squareColor: 'dark',
                occupied: false
            },
            col7: {
                gridLocation: board.children[31],
                player: 'none',
                squareColor: 'light',
                occupied: false
            }
            },    
        row4: {
            col0: {
                gridLocation: board.children[32],
                player: 'none',
                squareColor: 'light',
                occupied: false
            },
            col1: {
                gridLocation: board.children[33],
                player: 'none',
                squareColor: 'dark',
                occupied: false
            },
            col2: {
                gridLocation: board.children[34],
                player: 'none',
                squareColor: 'light',
                occupied: false
            },
            col3: {
                gridLocation: board.children[35],
                player: 'none',
                squareColor: 'dark',
                occupied: false
            },
            col4: {
                gridLocation: board.children[36],
                player: 'none',
                squareColor: 'light',
                occupied: false
            },
            col5: {
                gridLocation: board.children[37],
                player: 'none',
                squareColor: 'dark',
                occupied: false
            },
            col6: {
                gridLocation: board.children[38],
                player: 'none',
                squareColor: 'light',
                occupied: false
            },
            col7: {
                gridLocation: board.children[39],
                player: 'none',
                squareColor: 'dark',
                occupied: false
            },
            },
        row5: {
            col0: {
                gridLocation: board.children[40],
                player: 'none',
                squareColor: 'dark',
                occupied: false
            },
            col1: {
                gridLocation: board.children[41],
                player: 'red',
                squareColor: 'light',
                occupied: true
            },
            col2: {
                gridLocation: board.children[42],
                player: 'none',
                squareColor: 'dark',
                occupied: false
            },
            col3: {
                gridLocation: board.children[43],
                player: 'red',
                squareColor: 'light',
                occupied: true
            },
            col4: {
                gridLocation: board.children[44],
                player: 'none',
                squareColor: 'dark',
                occupied: false
            },
            col5: {
                gridLocation: board.children[45],
                player: 'red',
                squareColor: 'light',
                occupied: true
            },
            col6: {
                gridLocation: board.children[46],
                player: 'none',
                squareColor: 'dark',
                occupied: false
            },
            col7: {
                gridLocation: board.children[47],
                player: 'red',
                squareColor: 'light',
                occupied: true
            }
            },    
        row6: {
            col0: {
                gridLocation: board.children[48],
                player: 'red',
                squareColor: 'light',
                occupied: true
            },
            col1: {
                gridLocation: board.children[49],
                player: 'none',
                squareColor: 'dark',
                occupied: false
            },
            col2: {
                gridLocation: board.children[50],
                player: 'red',
                squareColor: 'light',
                occupied: true
            },
            col3: {
                gridLocation: board.children[51],
                player: 'none',
                squareColor: 'dark',
                occupied: false
            },
            col4: {
                gridLocation: board.children[52],
                player: 'red',
                squareColor: 'light',
                occupied: true
            },
            col5: {
                gridLocation: board.children[53],
                player: 'none',
                squareColor: 'dark',
                occupied: false
            },
            col6: {
                gridLocation: board.children[54],
                player: 'red',
                squareColor: 'light',
                occupied: true
            },
            col7: {
                gridLocation: board.children[55],
                player: 'none',
                squareColor: 'dark',
                occupied: false
            },
            },
        row7: {
            col0: {
                gridLocation: board.children[56],
                player: 'none',
                squareColor: 'dark',
                occupied: false
            },
            col1: {
                gridLocation: board.children[57],
                player: 'red',
                squareColor: 'light',
                occupied: true
            },
            col2: {
                gridLocation: board.children[58],
                player: 'none',
                squareColor: 'dark',
                occupied: false
            },
            col3: {
                gridLocation: board.children[59],
                player: 'red',
                squareColor: 'light',
                occupied: true
            },
            col4: {
                gridLocation: board.children[60],
                player: 'none',
                squareColor: 'dark',
                occupied: false
            },
            col5: {
                gridLocation: board.children[61],
                player: 'red',
                squareColor: 'light',
                occupied: true
            },
            col6: {
                gridLocation: board.children[62],
                player: 'none',
                squareColor: 'dark',
                occupied: false
            },
            col7: {
                gridLocation: board.children[63],
                player: 'red',
                squareColor: 'light',
                occupied: true
            }
            }    
        }
}

function createBoard() {
    
    for (let row in gameBoard){
        for (let col in gameBoard[row]){
            let square = gameBoard[row][col]
            square.gridLocation.classList.add(square.squareColor)
            if (square.player === 'blk' && square.occupied === true){
                let checkerElement = document.createElement("img");
                checkerElement.src = "img/blk_checker.png";
                square.gridLocation.appendChild(checkerElement)
            } else if (square.player === 'red' && square.occupied === true){
                let checkerElement = document.createElement("img");
                checkerElement.src = "img/red_checker.png";
                square.gridLocation.appendChild(checkerElement)
            }
        }
    }
}

function refreshBoard(){
    for (let row in gameBoard){
        for (let col in gameBoard[row]){
            let square = gameBoard[row][col]
            if (square.gridLocation.classList.contains('bright')) {
                square.gridLocation.classList.remove('bright');
                square.gridLocation.classList.add("light");
            } else if (square.gridLocation.classList.contains('legal')) {
                square.gridLocation.classList.remove('legal');
                square.gridLocation.classList.add("light");
            } else if (square.gridLocation.classList.contains('glow')) {
                square.gridLocation.classList.remove('glow');
                square.gridLocation.classList.add("light");
            }  else if (square.gridLocation.classList.contains('neon')) {
                square.gridLocation.classList.remove('neon');
                square.gridLocation.classList.add("light");
            }  
    }
}
}

function startGame(){
    mainDisp.classList.remove('showstartgame');
    mainDisp.classList.add("hidestartgame");
    glowCurrentPlayer();
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
    // square -> e.target
    if (gameBoard[currentLocation[0]][currentLocation[1]].player === currentPlayer) {

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
        if (gameBoard[currentLocation[0]][currentLocation[1]].player === 'blk'){
            rowMoveOption = (parseInt(rowNum))+1;
            colMoveOption1 = (parseInt(colNum))-1;
            colMoveOption2 = (parseInt(colNum))+1;
    
        }
        // red player
        if (gameBoard[currentLocation[0]][currentLocation[1]].player === 'red'){
            rowMoveOption = (parseInt(rowNum))-1;
            colMoveOption1 = (parseInt(colNum))-1;
            colMoveOption2 = (parseInt(colNum))+1;
        }
        
        let indexMoveOption1 = board.children[(rowMoveOption * 8) + colMoveOption1].classList;
        let indexMoveOption2 = board.children[(rowMoveOption * 8) + colMoveOption2].classList;

        // (rowMoveOption >= 0) && (rowMoveOption <= 7) &&
        if ( (colMoveOption1 >= 0) && 
            !((gameBoard["row" + rowMoveOption]['col' + colMoveOption1].occupied))) {
                move1 = (rowMoveOption * 8) + colMoveOption1
                toggleColor(indexMoveOption1, 'light', 'legal');
                prevMove1 = indexMoveOption1
        }

        // (rowMoveOption >= 0) && (rowMoveOption <= 7) &&
        if ( (colMoveOption2 <= 7) && 
        !((gameBoard["row" + rowMoveOption]['col' + colMoveOption2].occupied))) {
            // console.log(gameBoard["row" + rowMoveOption]['col' + colMoveOption2].player)
            move2 = (rowMoveOption * 8) + colMoveOption2
            toggleColor(indexMoveOption2, 'light', 'legal');
            prevMove2 = indexMoveOption2
        }      
    }
}

function moveGamePiece() {
   
    // if previous square selected contained a currentPlayer piece AND
    // there are move options AND the current selected square is one of the move options THEN
    // remove the image from the previous square and add the image to the current square.
    // update occupied to false and player to none in the previous square.
    // update occupied to true and player to the currentPlayer value in the current square.
    // this could be a function - updateSquare(newPosition, oldPosition, player)
    
    if (previousLocation.length !== 0 && 
        ((move1 === currentLocation[2]) || (move2 === currentLocation[2])) &&
        (gameBoard[previousLocation[0]][previousLocation[1]].player === currentPlayer)){
        
        gameBoard[previousLocation[0]][previousLocation[1]].occupied = false;
        gameBoard[previousLocation[0]][previousLocation[1]].player = 'none';

        let temp = gameBoard[previousLocation[0]][previousLocation[1]].gridLocation;
        let checkerImg = temp.removeChild(temp.firstChild);
        
        gameBoard[currentLocation[0]][currentLocation[1]].occupied = true;
        gameBoard[currentLocation[0]][currentLocation[1]].player = currentPlayer;
        gameBoard[currentLocation[0]][currentLocation[1]].gridLocation.appendChild(checkerImg)
        togglePlayer();
    }
}

function togglePlayer(){
    // console.log('pre check for jump call')    
    checkForJump();
    if (currentPlayer === 'red') {
            currentPlayer = 'blk';
            opponent = 'red';
        } else {
            currentPlayer = 'red';
            opponent = 'blk'
        };
        refreshBoard();
        refreshBoard(); // requires two calls to catch last move for some reason. 
        glowCurrentPlayer();
}

function checkForJump(){
    
    for (let row in gameBoard){
        for (let col in gameBoard[row]){
            let square = gameBoard[row][col];
            let pos =Array.from(board.children).indexOf(square.gridLocation);
            // current player is red
            // if current player is (red || (red && crowned) && 
            // (player index position - 9 is occupied by opponent) &&
            // (player index position - 18 is vacant)
            //  then highlight vacant position and player position 
            // the only move possible is from the player location to the vacant position.
            // remove current player image from player location and append to vacant position
            // remove image of opponent from opponent position. 
            // update positions appropriately with occupied true/false, player red/none
            // UL = up & left UR = up & right DL = down & left DR = down & right

            if ((square.player === 'red')){
                rowJumper =  'row' + (Math.floor(pos / 8));
                rowOpponentUp = 'row' + (Math.floor((pos - 8) / 8));
                rowJumpToUp = 'row' + (Math.floor((pos - 16) / 8));
                
                colJumperUL = 'col' + (pos % 8);
                colOpponentUL = 'col' + ((pos - 9) % 8);
                colJumpToUL = 'col' + ((pos - 18) % 8);
                colJumperUR = 'col' + (pos % 8);
                colOpponentUR = 'col' + ((pos - 7) % 8);
                colJumpToUR = 'col' + ((pos - 14) % 8);

                if ((gameBoard[rowOpponentUp][colOpponentUL].player === 'blk') &&
                    (gameBoard[rowJumpToUp][colJumpToUL].occupied === false)){

                        toggleColor(board.children[pos - 18].classList, 'light', 'neon');
                        let jumpedOpponent = gameBoard[rowOpponentUp][colOpponentUL];
                        let jumper = gameBoard[rowJumper][colJumperUL];
                        let jumpTo = gameBoard[rowJumpToUp][colJumpToUL];
                        jumpedOpponent.occupied = false;
                        jumper.occupied = false;
                        jumpTo.occupied = true;
                        jumpedOpponent.player = 'none';
                        jumper.player = 'none';
                        jumpTo.player = 'red';
                        setTimeout(function(){
                            let jumpedPiece = jumpedOpponent.gridLocation.removeChild(jumpedOpponent.gridLocation.firstChild);
                            let jumperPiece = jumper.gridLocation.removeChild(jumper.gridLocation.firstChild);
                            jumpTo.gridLocation.appendChild(jumperPiece);
                        refreshBoard();
                        },1000)
                        console.log("Jump!!!");
                        jumpBlk();
                    } else if ((gameBoard[rowOpponentUp][colOpponentUR].player === 'blk') &&
                    (gameBoard[rowJumpToUp][colJumpToUR].occupied === false)){

                        toggleColor(board.children[pos - 14].classList, 'light', 'neon');
                        let jumpedOpponent = gameBoard[rowOpponentUp][colOpponentUR];
                        let jumper = gameBoard[rowJumper][colJumperUR];
                        let jumpTo = gameBoard[rowJumpToUp][colJumpToUR];
                        jumpedOpponent.occupied = false;
                        jumper.occupied = false;
                        jumpTo.occupied = true;
                        jumpedOpponent.player = 'none';
                        jumper.player = 'none';
                        jumpTo.player = 'red';
                        setTimeout(function(){
                            let jumpedPiece = jumpedOpponent.gridLocation.removeChild(jumpedOpponent.gridLocation.firstChild);
                            let jumperPiece = jumper.gridLocation.removeChild(jumper.gridLocation.firstChild);
                            jumpTo.gridLocation.appendChild(jumperPiece);
                        refreshBoard();
                        },1000)
                        console.log("Jump!!!");
                        jumpBlk();
                    } return;
            }  
            
            
            // if ((square.player === 'blk')){
            //     rowJumper =  'row' + (Math.floor(pos / 8));
            //     rowOpponentDn = 'row' + (Math.floor((pos + 8) / 8));
            //     rowJumpToDn = 'row' + (Math.floor((pos + 16) / 8));
                
            //     colJumperDR = 'col' + (pos % 8);
            //     colOpponentDR = 'col' + ((pos + 9) % 8);
            //     colJumpToDR = 'col' + ((pos + 18) % 8);
            //     colJumperDL = 'col' + (pos % 8);
            //     colOpponentDL = 'col' + ((pos + 7) % 8);
            //     colJumpToDL = 'col' + ((pos + 14) % 8);

            //     if ((gameBoard[rowOpponentDn][colOpponentDR].player === 'red') &&
            //         (gameBoard[rowJumpToDn][colJumpToDR].occupied === false)){

            //             toggleColor(board.children[pos + 18].classList, 'light', 'neon');
            //             let jumpedOpponent = gameBoard[rowOpponentDn][colOpponentDR];
            //             let jumper = gameBoard[rowJumper][colJumperDR];
            //             let jumpTo = gameBoard[rowJumpToDn][colJumpToDR];
            //             jumpedOpponent.occupied = false;
            //             jumper.occupied = false;
            //             jumpTo.occupied = true;
            //             jumpedOpponent.player = 'none';
            //             jumper.player = 'none';
            //             jumpTo.player = 'red';
            //             setTimeout(function(){
            //                 let jumpedPiece = jumpedOpponent.gridLocation.removeChild(jumpedOpponent.gridLocation.firstChild);
            //                 let jumperPiece = jumper.gridLocation.removeChild(jumper.gridLocation.firstChild);
            //                 jumpTo.gridLocation.appendChild(jumperPiece);
            //             refreshBoard();
            //             },1000)
            //             console.log("Jump!!!");
            //             jumpRed();
            //         } else if ((gameBoard[rowOpponentDn][colOpponentDL].player === 'red') &&
            //         (gameBoard[rowJumpToDn][colJumpToDL].occupied === false)){

            //             toggleColor(board.children[pos + 14].classList, 'light', 'neon');
            //             let jumpedOpponent = gameBoard[rowOpponentDn][colOpponentDL];
            //             let jumper = gameBoard[rowJumper][colJumperDL];
            //             let jumpTo = gameBoard[rowJumpToDn][colJumpToDL];
            //             jumpedOpponent.occupied = false;
            //             jumper.occupied = false;
            //             jumpTo.occupied = true;
            //             jumpedOpponent.player = 'none';
            //             jumper.player = 'none';
            //             jumpTo.player = 'red';
            //             setTimeout(function(){
            //                 let jumpedPiece = jumpedOpponent.gridLocation.removeChild(jumpedOpponent.gridLocation.firstChild);
            //                 let jumperPiece = jumper.gridLocation.removeChild(jumper.gridLocation.firstChild);
            //                 jumpTo.gridLocation.appendChild(jumperPiece);
            //             refreshBoard();
            //             },1000)
            //             console.log("Jump!!!");
            //             jumpRed();
            //         }return;
            // }




        }
    } return;
}

function glowCurrentPlayer() {
    for (let row in gameBoard){
        for (let col in gameBoard[row]){
            let square = gameBoard[row][col]
            if (square.player === currentPlayer && square.occupied === true) {
                square.gridLocation.classList.remove('light');
                square.gridLocation.classList.add("glow");
            } 
        }
    }
}

function toggleColor(square, prevColor, newColor){
    square.remove(prevColor);
    square.add(newColor);
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
        offerDraw.textContent = "Reset"
        endGame('draw');
    }
    else if (offerDraw.textContent === "Reset") {
        reset();
    }
}

function reset(){
    console.log("reset called")
    
    for (let row in gameBoard){
        for (let col in gameBoard[row]){
            if (gameBoard[row][col].occupied === true){

                let square = gameBoard[row][col]
                let checkerElement = square.gridLocation.removeChild(square.gridLocation.firstChild)
            }
    
        }
    }
    init();
    createBoard();
    refreshBoard();
    refreshBoard();
    mainDisp.classList.remove('hidestartgame');
    mainDisp.classList.add("showstartgame");
}


// *********


