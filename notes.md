Make board 
    8x8 alternating red/black
    give red squares a class for moves.

create game start, reset, and game over states in html, css, and js. 



navigation plan:

non-king state - without jumps
    increment column by one or decrement by one if columns 2 or 3.
    If column 4 then only decrentent to column 3. 
    If column 1 then only increment to column 2. 
    For red players, increment row by 1.

    Navigation check: 
        select square.
        hightlight square selected.
        hightlight legal move option squares. 


Board layout: 
    chess board layout - A through H left to right. 
                        1 - 8 starting with 8 on top row.
    
Row 1 is at the bottom of the board. Row 8 is at the top of the board.

Column 1 is on the left and column 4 is on the right. 



TODO: 
Disable  buttons until game is started. 
Nav check - determine legal move options. 
DONE - Highlight squares - 
DONE! do not highlight black square when selected.
Highlight only selected and legal moves
Toggle players.
Modify legal move checks for opposite direction player.
Tally of players remaining.
Score board for games played.

checker pieces.
Animation of squres for legal moves.
Animate movement of checker pieces.
Click and drag? 



Add hightlighted mouse over squares with pieces on them and then legal move options.



row 13 442 468 469 470 531 532 555 570

col 14 442 531 532 556 571