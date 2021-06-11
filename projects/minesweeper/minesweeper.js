document.addEventListener("DOMContentLoaded", startGame);

// Define your `board` object here!
var board = {
  cells: [],
};
var resetButton;

let totalCells = 4;

function createTable() {
  for (let i = 0; i < totalCells; i++) {
    for (let m = 0; m < totalCells; m++) {
      board.cells.push({
        row: i,
        col: m,
        isMine: Math.random() < 0.25 ? true : false,
        isMarked: false,
        hidden: true,
        surroundingMines: 2,
      });
    }
  }
}

createTable();

function startGame() {
  const loop = board.cells;
  for (let i = 0; i < loop.length; i++) {
    loop[i].surroundingMines = countSurroundingMines(loop[i]);
    document.addEventListener("click", checkForWin);
    document.addEventListener("contextmenu", checkForWin);
  }
  // Don't remove this function call: it makes the game work!
  lib.initBoard();
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
  for (let i = 0; i < board.cells.length; i++) {
    const cell = board.cells[i];
    if ((cell.isMine && !cell.isMarked) || (!cell.isMine && cell.hidden)) {
      return;
    }
  }
  lib.displayMessage("You win!");
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {
  const surrounding = lib.getSurroundingCells(cell.row, cell.col);
  let count = 0;
  for (let i = 0; i < getSurroundingCells.length; i++) {
    if (surrounding[i].isMine) {
      count++;
    }
  }
  return count;
}
