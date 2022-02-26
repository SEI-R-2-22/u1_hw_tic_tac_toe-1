// Global Variables Here
let board = document.querySelector('.game-board')
const squares = document.querySelectorAll('.square')
let playerTurn = 1
let winState = 0
////////////////////////////////
// Functions For Game Logic Here
const youWin = () => {
  document.querySelector('h1').style.opacity = '1'
  winState++
}

const checkForWin = () => {
  if (
    squares[0].innerHTML === squares[1].innerHTML &&
    squares[1].innerHTML === squares[2].innerHTML &&
    squares[1].innerHTML !== '' //top left to top right
  ) {
    youWin()
  } else if (
    squares[0].innerHTML === squares[4].innerHTML &&
    squares[4].innerHTML === squares[8].innerHTML &&
    squares[4].innerHTML !== '' //top left to bottom right
  ) {
    youWin()
  } else if (
    squares[0].innerHTML === squares[3].innerHTML &&
    squares[3].innerHTML === squares[6].innerHTML &&
    squares[3].innerHTML !== '' //top left to bottom left
  ) {
    youWin()
  } else if (
    squares[3].innerHTML === squares[4].innerHTML &&
    squares[4].innerHTML === squares[5].innerHTML &&
    squares[4].innerHTML !== '' //middle left to middle right
  ) {
    youWin()
  } else if (
    squares[6].innerHTML === squares[7].innerHTML &&
    squares[7].innerHTML === squares[8].innerHTML &&
    squares[7].innerHTML !== '' // bottom right to bottom left
  ) {
    youWin()
  } else if (
    squares[6].innerHTML === squares[4].innerHTML &&
    squares[4].innerHTML === squares[2].innerHTML &&
    squares[4].innerHTML !== '' // bottom right to top left
  ) {
    youWin()
  } else if (
    squares[1].innerHTML === squares[4].innerHTML &&
    squares[4].innerHTML === squares[7].innerHTML &&
    squares[4].innerHTML !== '' // top middle to bottom middle
  ) {
    youWin()
  } else if (
    squares[2].innerHTML === squares[5].innerHTML &&
    squares[5].innerHTML === squares[8].innerHTML &&
    squares[5].innerHTML !== '' // top right to bottom right
  ) {
    youWin()
  }
}
////////////////////////////////
// Event Listeners Here

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', () => {
    if (playerTurn === 1 && squares[i].innerHTML === '') {
      squares[i].innerHTML = 'X'
      playerTurn--
    } else if (playerTurn === 0 && squares[i].innerHTML === '') {
      squares[i].innerHTML = '0'
      playerTurn++
    }
    checkForWin()
    if (winState === 1) {
      squares[i].removeEventListener('click')
    }
  })
}
////////////////////////////////
