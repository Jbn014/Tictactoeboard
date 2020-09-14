let cells = document.querySelectorAll(".row > div");
let player = "X";
let winnerPrompt = document.getElementsByClassName("winner");

console.log(cells);

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellClicked);
}

function cellClicked(event) {
  if (event.target.textContent === "") {
    event.target.textContent = player;
    checkWhen()
    console.log(player)
    if (player === "X") {
      player = "O";
    } else {
      player = "X";
    }
  
  }
}
function checkWhen(){
  if (cells[0].innerHTML === player && cells[1].innerHTML === player && cells[2].innerHTML ===player) {
    winnerPrompt.textContent = "X wins!";
    console.log("test")}
}

// HINTS ! cells [2].text content reveals what is inside cell
//if else statements are your friend!
// ===
