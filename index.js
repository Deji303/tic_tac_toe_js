const winningCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

]

state = {
    player1Turn: false 
}

const originalMatrix = Array.from(Array(9).keys())

const player1 = 'x'
const player2 = 'o'

const squares = document.querySelectorAll('td')
squares.forEach((sq) => {
    sq.addEventListener("click", clickSquare) 
})

function clickSquare(event) {
    state.player1Turn = !state.player1Turn
    let player = state.player1Turn ? player1 : player2
    document.getElementById(event.target.id).innerText = player
    originalMatrix[event.target.id] = player 
}