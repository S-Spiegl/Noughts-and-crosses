class Game {
  constructor(board, player, boardUpdater, turnChecker) {
    this.board = board
    this.player = player
    this.boardUpdater = boardUpdater
    this.turnChecker = turnChecker
    this.movePermitted = false
    this.gameOver = false
  }

  enterMove(row, column) {
    this.player.enterMove(row, column)
    this.checkMove()
    if(this.movePermitted === false){
      return 'space taken'
      }
      else{
        this.boardUpdater.updateBoard()
        this.turnChecker.incrementTurnCounter()
        this.callGame()
        this.movePermitted = false
        console.log(this.board.newBoard.join('\r\n'))
      }
    if(this.gameOver === true)
      {return this.callGame()}
  }
    
  checkMove() {
    const targetRowIndex = this.player.move[0]
    const targetColumnIndex = this.player.move[1]

    if(this.board.newBoard[targetRowIndex][targetColumnIndex] === '*') {
      this.movePermitted = true}
    else{
      this.player.move = []
      this.movePermitted = false
    }
  }

  callGame() {
    if(this.playerOneWins()){
      this.gameOver = true
      return 'Player One wins!'
    }
    else if(this.playerTwoWins()
            ){
      this.gameOver = true
      return 'Player Two wins!'
    }
    else if(this.playerOneWins() === false && this.playerTwoWins() === false && this.board.boardFull() === true){
      this.gameOver = true
      return 'Draw!'}
  }

  playerOneWins() {
      if(this.board.newBoard[0] === "XXX" || 
        this.board.newBoard[1] === "XXX" || 
        this.board.newBoard[2] === "XXX" ||
        this.board.newBoard[0][0] === "X" && this.board.newBoard[1][0] === "X" && this.board.newBoard[2][0] === "X" ||
        this.board.newBoard[0][1] === "X" && this.board.newBoard[1][1] === "X" && this.board.newBoard[2][1] === "X" ||
        this.board.newBoard[0][2] === "X" && this.board.newBoard[1][2] === "X" && this.board.newBoard[2][2] === "X" ||
        this.board.newBoard[0][0] === "X" && this.board.newBoard[1][1] === "X" && this.board.newBoard[2][2] === "X" ||
        this.board.newBoard[0][2] === "X" && this.board.newBoard[1][1] === "X" && this.board.newBoard[2][0] === "X")
        {return true}
      else{return false}
  }

  playerTwoWins() {
    if(this.board.newBoard[0] === "OOO" || 
    this.board.newBoard[1] === "OOO" || 
    this.board.newBoard[2] === "OOO" ||
    this.board.newBoard[0][0] === "O" && this.board.newBoard[1][0] === "O" && this.board.newBoard[2][0] === "O" ||
    this.board.newBoard[0][1] === "O" && this.board.newBoard[1][1] === "O" && this.board.newBoard[2][1] === "O" ||
    this.board.newBoard[0][2] === "O" && this.board.newBoard[1][2] === "O" && this.board.newBoard[2][2] === "O" ||
    this.board.newBoard[0][0] === "O" && this.board.newBoard[1][1] === "O" && this.board.newBoard[2][2] === "O" ||
    this.board.newBoard[0][2] === "O" && this.board.newBoard[1][1] === "O" && this.board.newBoard[2][0] === "O")
      {return true}
    else{return false}
  }
}

module.exports = Game;