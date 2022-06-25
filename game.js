class Game {
  constructor(board, playerOne, playerTwo, boardUpdater, turnChecker) {
    this.board = board
    this.playerOne = playerOne
    this.playerTwo = playerTwo
    this.boardUpdater = boardUpdater
    this.turnChecker = turnChecker
    this.movePermitted = false
    this.gameOver = false
  }

  //instead of having individual player classes have one player class and alternate symbols based on
  //the turnChecker or odds and evens using a modulo. Ultimately would be using an engine and user input 

  playerOneEnterMove(row, column) {
    console.log(this.turnChecker.turns)
    //below works in node... doesn't pass the test though, comes back as undefined
    if(this.turnChecker.turns[this.turnChecker.turns.length-1] != 'X'){
    this.playerOne.enterMove(row, column)
    this.checkPlayerOneMove()
      if(this.movePermitted === false){
        console.log(this.playerOne.move)
        return 'space taken'
        }
      else{
        this.boardUpdater.updateBoard()
        this.turnChecker.updateTurns()
        this.callGame()
        this.movePermitted = false
        if(this.gameOver === true)
        {return this.callGame()}
        }
      }
    else{return 'not your turn'}
  }

  playerTwoEnterMove(row, column) {
    if(this.turnChecker.turns[this.turnChecker.turns.length-1] != 'O'){
    this.playerTwo.enterMove(row, column)
    this.checkPlayerTwoMove()
      if(this.movePermitted === false){
        console.log(this.playerOne.move)
        return 'space taken'
      }
      else{
    this.boardUpdater.updateBoard()
    this.turnChecker.updateTurns()
    this.callGame()
    this.movePermitted = false
      if(this.gameOver === true)
        {return this.callGame()}
      }
    }
    else{return 'not your turn'}
  }

  checkPlayerOneMove() {
    const targetRowIndex = this.playerOne.move[0]
    const targetColumnIndex = this.playerOne.move[1]

    if(this.board.newBoard[targetRowIndex][targetColumnIndex] === '*') {
      this.movePermitted = true}
    else{
      this.playerOne.move = []
      this.movePermitted = false
  }
  }

  checkPlayerTwoMove() {
    const targetRowIndex = this.playerTwo.move[0]
    const targetColumnIndex = this.playerTwo.move[1]

    if(this.board.newBoard[targetRowIndex][targetColumnIndex] === '*') {
      this.movePermitted = true}
    else{
      this.playerTwo.move = []
      this.movePermitted = false
}
  }

  callGame() {
    if(this.board.newBoard[0] === "XXX" || 
        this.board.newBoard[1] === "XXX" || 
        this.board.newBoard[2] === "XXX" ||
        this.board.newBoard[0][0] === "X" && this.board.newBoard[1][0] === "X" && this.board.newBoard[2][0] === "X" ||
        this.board.newBoard[0][1] === "X" && this.board.newBoard[1][1] === "X" && this.board.newBoard[2][1] === "X" ||
        this.board.newBoard[0][2] === "X" && this.board.newBoard[1][2] === "X" && this.board.newBoard[2][2] === "X" ||
        this.board.newBoard[0][0] === "X" && this.board.newBoard[1][1] === "X" && this.board.newBoard[2][2] === "X" ||
        this.board.newBoard[0][2] === "X" && this.board.newBoard[1][1] === "X" && this.board.newBoard[2][0] === "X"
        ){
      this.gameOver = true
      return 'Player One wins!'
    }
    else if(this.board.newBoard[0] === "OOO" || 
            this.board.newBoard[1] === "OOO" || 
            this.board.newBoard[2] === "OOO" ||
            this.board.newBoard[0][0] === "O" && this.board.newBoard[1][0] === "O" && this.board.newBoard[2][0] === "O" ||
            this.board.newBoard[0][1] === "O" && this.board.newBoard[1][1] === "O" && this.board.newBoard[2][1] === "O" ||
            this.board.newBoard[0][2] === "O" && this.board.newBoard[1][2] === "O" && this.board.newBoard[2][2] === "O" ||
            this.board.newBoard[0][0] === "O" && this.board.newBoard[1][1] === "O" && this.board.newBoard[2][2] === "O" ||
            this.board.newBoard[0][2] === "O" && this.board.newBoard[1][1] === "O" && this.board.newBoard[2][0] === "O"
            ){
      this.gameOver = true
      return 'Player Two wins!'
    }
  }
}

module.exports = Game;