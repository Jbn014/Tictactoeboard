let cells = document.querySelectorAll(".row > div");
let player = "X";
let winnerPrompt = document.getElementsByClassName("winner");

let Over = false; //Determine if the game is over... Used to prevent the user from continuing the game on a winning board.

console.log(cells);

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}

function cellClicked(event) {
  if (event.target.textContent === "" && !Over) {
    event.target.textContent = player;
    checkWhen();

    if (player === "X") {
      player = "O";
    } else {
      player = "X";
    }
  } else if (Over) {
    ResetBoard();
  }
}

/*CHECK WHEN ALGO

All cases of winning boards:
    3 in a row in the Y direction
    cells[x][y] == cells[x][y+1] == cells[x][y+2]

    3 in a row in the X direction
    cells[x][y] == cells[x+1][y] == cells[x+2][y]

    3 in a row in First diag:
    cells[x][y] == cells[x+1][y+1] == cells[x+2][y+2]

    3 in a row in Second diag:
    cells[x+2][y] == cells[x+1][y+1] == cells[x][y+2]

    for (int i = 0; i < 3; i++){
      if (cells[x][0] == cells[x][1] && cells[x][1] == cells[2]){
        Do something....
      }
    }
*/
function checkWhen() {
  //Check in the X direction...
  for (let y = 0; y < 3; y++) {
    if (
      GetCell(0, y).innerHTML == GetCell(1, y).innerHTML &&
      GetCell(1, y).innerHTML == GetCell(2, y).innerHTML &&
      GetCell(0, y).innerHTML != ""
    ) {
      DisplayWinner();
    }
  }

  //Check in the Y direction...
  for (let x = 0; x < 3; x++) {
    if (
      GetCell(x, 0).innerHTML == GetCell(x, 1).innerHTML &&
      GetCell(x, 1).innerHTML == GetCell(x, 2).innerHTML &&
      GetCell(x, 0).innerHTML != ""
    ) {
      DisplayWinner();
    }
  }

  //Check in the first Diag
  if (
    GetCell(0, 0).innerHTML == GetCell(1, 1).innerHTML &&
    GetCell(1, 1).innerHTML == GetCell(2, 2).innerHTML &&
    GetCell(0, 0).innerHTML != ""
  ) {
    DisplayWinner();
  }

  //Check in the first Diag
  if (
    GetCell(2, 0).innerHTML == GetCell(1, 1).innerHTML &&
    GetCell(1, 1).innerHTML == GetCell(0, 2).innerHTML &&
    GetCell(2, 0).innerHTML != ""
  ) {
    DisplayWinner();
  }
}

function DisplayWinner() {
  //Set the game over variable to true
  Over = true;
  let DisplayMSG = player + " wins!";
  winnerPrompt[0].textContent = DisplayMSG;

  console.log(DisplayMSG);
}

function ResetBoard() {
  //Set the html elements back to Empty
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }

  winnerPrompt[0].textContent = "";
  //initialize state variables
  Over = false;
  player = "X";
}

// Cells are index from 0 to 8 (Length of 9)
// Purpose: Index the Cell array using Coordinates.
// i = y*3 + x
function GetCell(x, y) {
  return cells[y * 3 + x];
}
