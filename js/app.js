// Global Variables Here
let board = document.querySelector('.game-board')
const squares = document.querySelectorAll('.square')
let turnDisplay = document.getElementById('turn')
let playerTurn = 1
let computerPick
let winState = 0
let replayBtn = document.createElement('button')
xWins = 0
oWins = 0
replayBtn.innerHTML = 'Play Again?'

////////////////////////////////
// Functions For Game Logic Here
const scoreBoardDisplayer = () => {
  if (playerTurn === 1) {
    turnDisplay.innerHTML = 'X'
  } else if (playerTurn === 0) {
    turnDisplay.innerHTML = '0'
  }
}

const youWin = () => {
  document.querySelector('h1').innerHTML = 'Game!'
  document.getElementById('turn-board').style.opacity = '0'
  winState = 1
  if (playerTurn === 1) {
    document.getElementById('winner').innerHTML = 'X Wins!'
    tallyIncrementor()
  } else if (playerTurn === 0) {
    document.getElementById('winner').innerHTML = 'O Wins!'
    playerTurn = 0
    tallyIncrementor()
  }
  document.body.appendChild(replayBtn)
}

const tallyIncrementor = () => {
  if (playerTurn === 1 && winState === 1) {
    xWins++
    document.getElementById('x-win-count').innerHTML = xWins
  } else if (playerTurn === 0 && winState === 1) {
    oWins++
    document.getElementById('o-win-count').innerHTML = oWins
  }
}

const youTie = () => {
  document.getElementById('turn-board').style.opacity = '0'
  document.querySelector('h1').innerHTML = 'Draw!'
  document.body.appendChild(replayBtn)
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
  } else if (
    squares[0].innerHTML !== '' &&
    squares[1].innerHTML !== '' &&
    squares[2].innerHTML !== '' &&
    squares[3].innerHTML !== '' &&
    squares[4].innerHTML !== '' &&
    squares[5].innerHTML !== '' &&
    squares[6].innerHTML !== '' &&
    squares[7].innerHTML !== '' &&
    squares[8].innerHTML !== ''
  ) {
    youTie()
  }
}
const computerTurn = () => {
  computerPick = Math.floor(Math.random() * 8)
  if (squares[computerPick].innerHTML === '' && winState === 0) {
    playerTurn--
    squares[computerPick].innerHTML = '0'
    checkForWin()
    playerTurn++
    console.log(`computer chose square ${computerPick}`)
  } else if (squares[computerPick].innerHTML != '' && winState === 0) {
    computerTurn()
  }
}

////////////////////////////////
// Event Listeners Here

// for (let i = 0; i < squares.length; i++) {
//   squares[i].addEventListener('click', () => {
//     if (playerTurn === 1 && squares[i].innerHTML === '' && winState === 0) {
//       squares[i].innerHTML = 'X'
//       playerTurn--
//     } else if (
//       playerTurn === 0 &&
//       squares[i].innerHTML === '' &&
//       winState === 0
//     ) {
//       squares[i].innerHTML = 'O'
//       playerTurn++
//     }
//     if (winState === 0) {
//       checkForWin()
//     }
//     scoreBoardDisplayer()
//     console.log(`win state is ${winState}`)
//     console.log(`player turn is ${playerTurn}`)
//     console.log(`X won ${xWins} times`)
//     console.log(`0 won ${oWins} times`)
//   })
// }

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', () => {
    if (playerTurn === 1 && squares[i].innerHTML === '' && winState === 0) {
      squares[i].innerHTML = 'X'
      checkForWin()

      computerTurn()
    }
    if (winState === 0) {
      checkForWin()
    }
    scoreBoardDisplayer()
    console.log(`win state is ${winState}`)
    console.log(`player turn is ${playerTurn}`)
    console.log(`X won ${xWins} times`)
    console.log(`0 won ${oWins} times`)
  })
}

replayBtn.addEventListener('click', () => {
  squares[0].innerHTML = ''
  squares[1].innerHTML = ''
  squares[2].innerHTML = ''
  squares[3].innerHTML = ''
  squares[4].innerHTML = ''
  squares[5].innerHTML = ''
  squares[6].innerHTML = ''
  squares[7].innerHTML = ''
  squares[8].innerHTML = ''
  document.querySelector('h1').innerHTML = ''
  document.getElementById('turn-board').style.opacity = '1'
  document.getElementById('winner').innerHTML = ''
  playerTurn = 1
  winState = 0
  replayBtn.remove()
})
////////////////////////////////
