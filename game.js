class Game {
  constructor(board, player, boardUpdater, turnChecker) {
    this.board = board
    this.player = player
    this.boardUpdater = boardUpdater
    this.turnChecker = turnChecker
    this.movePermitted = false
    this.gameOver = false
    this.result = ""
  }

  enterMove(row, column) {
    this.result = ""
    this.playerMove = this.player.enterMove(row, column)
    this.checkMove()
    if(this.movePermitted === false){
      return 'space taken'
      }
      else{
        this.updateBoard()
        this.turnChecker.incrementTurnCounter()
        this.callGame()
        this.movePermitted = false
        console.log(this.board.board.join('\r\n'))
      }
    if(this.gameOver === true){
      this.resetBoard()
      return this.result}
  }

  updateBoard() {
    const targetRowIndex = this.playerMove[0]
    const targetColumnIndex = this.playerMove[1]

    if(this.playerMove.length != 0){
      if(this.turnChecker.turnCounter % 2 == 0){
        this.boardUpdater.addCrossToBoard(targetRowIndex, targetColumnIndex)
        this.playerMove = []}
      else{this.boardUpdater.addNoughtToBoard(targetRowIndex, targetColumnIndex)
        this.playerMove = []} 
    }
  }

    
  checkMove() {
    const targetRowIndex = this.playerMove[0]
    const targetColumnIndex = this.playerMove[1]

    if(this.board.getBoard()[targetRowIndex][targetColumnIndex] === '*') {
      this.movePermitted = true}
    else{
      this.playerMove = []
      this.movePermitted = false
    }
  }

  callGame() {
    if(this.playerOneWins()){
      this.gameOver = true
      this.result = 'Player One wins!'
    }
    else if(this.playerTwoWins()
            ){
      this.gameOver = true
      this.result = 'Player Two wins!'
    }
    else if(this.playerOneWins() === false && this.playerTwoWins() === false && this.board.boardFull() === true){
      this.gameOver = true
      this.result = 'Draw!'}
  }

  // returnResult() {
  //   if(this.playerOneWins()){
  //     return 'Player One wins!'
  //   }
  //   else if(this.playerTwoWins()
  //           ){
  //     return 'Player Two wins!'
  //   }
  //   else if(this.playerOneWins() === false && this.playerTwoWins() === false && this.board.boardFull() === true){
  //     return 'Draw!'}
  // }

  playerOneWins() {
      if(this.board.board[0] === "XXX" || 
        this.board.board[1] === "XXX" || 
        this.board.board[2] === "XXX" ||
        this.board.board[0][0] === "X" && this.board.board[1][0] === "X" && this.board.board[2][0] === "X" ||
        this.board.board[0][1] === "X" && this.board.board[1][1] === "X" && this.board.board[2][1] === "X" ||
        this.board.board[0][2] === "X" && this.board.board[1][2] === "X" && this.board.board[2][2] === "X" ||
        this.board.board[0][0] === "X" && this.board.board[1][1] === "X" && this.board.board[2][2] === "X" ||
        this.board.board[0][2] === "X" && this.board.board[1][1] === "X" && this.board.board[2][0] === "X")
        {return true}
      else{return false}
  }

  playerTwoWins() {
    if(this.board.board[0] === "OOO" || 
    this.board.board[1] === "OOO" || 
    this.board.board[2] === "OOO" ||
    this.board.board[0][0] === "O" && this.board.board[1][0] === "O" && this.board.board[2][0] === "O" ||
    this.board.board[0][1] === "O" && this.board.board[1][1] === "O" && this.board.board[2][1] === "O" ||
    this.board.board[0][2] === "O" && this.board.board[1][2] === "O" && this.board.board[2][2] === "O" ||
    this.board.board[0][0] === "O" && this.board.board[1][1] === "O" && this.board.board[2][2] === "O" ||
    this.board.board[0][2] === "O" && this.board.board[1][1] === "O" && this.board.board[2][0] === "O")
      {return true}
    else{return false}
  }

  resetBoard() {
      this.board.resetBoard()
      this.gameOver = false
      this.turnChecker.turnCounter = 0
  }
}

module.exports = Game;