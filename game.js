//for node:
// const Game = require('./game')
// const PlayerOne = require('./playerOne');
// const Board = require('./board');
// const playerOne = new PlayerOne;
// const board = new Board;

class Game {
  constructor(board, playerOne) {
    this.board = board
    this.playerOne = playerOne
  }

  checkMove() {
    const targetRowIndex = this.playerOne.move[0]
    const targetColumnIndex = this.playerOne.move[1]

    if(this.board.newBoard[targetRowIndex][targetColumnIndex] === '*') {
      return 'move registered'}
    else{return 'space taken'}
    // map the board and run an if else statement 
    //this should return 'move registered' after comparing
    //the coordinates with this.board.newBoard
  }

  registerMove() {
    return 'move registered'
  }

  refuseMove() {
    return 'space taken'
  }

  updateBoard() {
    const targetRowIndex = this.playerOne.move[0]
    const targetColumnIndex = this.playerOne.move[1]

    if(this.board.newBoard[targetRowIndex][targetColumnIndex] === '*') {
      const targetRow = this.board.newBoard[1].split('')
      console.log('targetRow', targetRow)
      const splicedTargetRow = targetRow.splice(1,1,'X')
      console.log('spliced target row', splicedTargetRow)
      console.log('targetRow', targetRow)
      const replacementRow = targetRow.join('')
      console.log('replacementRow', replacementRow)
      this.board.newBoard.splice(targetRowIndex, 1, replacementRow)}
    else{return 'space taken'}
    
  }
}

module.exports = Game;

//need a class to check whose turn it is
//could just be an array into which an X or an O is 
//pushed every time playerOne or playerTwo takes their turn,
//respectively. Then each turn, the class could check if the
//symbol that occupies the last index of the array matches the 
//symbol of the player now taking their turn. If so, it refuses the 
//turn and prompts the other player to take their turn