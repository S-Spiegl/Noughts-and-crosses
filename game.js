class Game {
  constructor(board, playerOne, playerTwo, boardUpdater, turnChecker) {
    this.board = board
    this.playerOne = playerOne
    this.playerTwo = playerTwo
    this.boardUpdater = boardUpdater
    this.turnChecker = turnChecker
  }

  playerOneEnterMove(row, column) {
    console.log(this.turnChecker.turns)
    //below works in node... doesn't pass the test though, comes back as undefined
    if(this.turnChecker.turns[this.turnChecker.turns.length-1] != 'X'){
    this.playerOne.enterMove(row, column)
    this.checkPlayerOneMove()
      if(this.checkPlayerOneMove() == 'space taken'){
        this.playerOne.move = []
        // return this.checkPlayerOneMove()
      } 
    this.boardUpdater.updateBoard()
    this.turnChecker.updateTurns()
    }
    else{return 'not your turn'}
  }

  playerTwoEnterMove(row, column) {
    if(this.turnChecker.turns[this.turnChecker.turns.length-1] != 'O'){
    this.playerTwo.enterMove(row, column)
    this.checkPlayerTwoMove()
    if(this.checkPlayerTwoMove() == 'space taken'){
      this.playerTwo.move = []
      // return this.checkPlayerTwoMove()
      //for some reason I have to choose between resetting the player.move array
      //and returning a message. Have tried doing each of these in this method 
      //and in the check method with similarly disappointing results
      } 
    this.boardUpdater.updateBoard()
    this.turnChecker.updateTurns()
    }
    else{return 'not your turn'}
  }

  checkPlayerOneMove() {
    const targetRowIndex = this.playerOne.move[0]
    const targetColumnIndex = this.playerOne.move[1]

    if(this.board.newBoard[targetRowIndex][targetColumnIndex] === '*') {
      return 'move registered'}
    else{
      // this.playerOne.move = []
      return 'space taken'}
  }

  checkPlayerTwoMove() {
    const targetRowIndex = this.playerTwo.move[0]
    const targetColumnIndex = this.playerTwo.move[1]

    if(this.board.newBoard[targetRowIndex][targetColumnIndex] === '*') {
      return 'move registered'}
    else{
      // this.playerTwo.move = []
      return 'space taken'}
  }
}

module.exports = Game;