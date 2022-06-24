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
    this.boardUpdater.updateBoard()
    this.turnChecker.updateTurns()
    }
    else{return 'not your turn'}
    //to make this work, needs to be async?
    //apparently not...
  }

   // playerOneEnterMove(row, column, callback1, callback2) {
  //   this.playerOne.enterMove(row, column)
  //   this.boardUpdater.updateBoard(callback1, callback2)
  //   this.turnChecker.updateTurns(callback1)
  //   //from trying to use callbacks to make this work...
  // }

  playerTwoEnterMove(row, column) {
    if(this.turnChecker.turns[this.turnChecker.turns.length-1] != 'O'){
    this.playerTwo.enterMove(row, column)
    this.boardUpdater.updateBoard()
    this.turnChecker.updateTurns()
    }
    else{return 'not your turn'}
  }

  checkMove() {
    const targetRowIndex = this.playerOne.move[0]
    const targetColumnIndex = this.playerOne.move[1]

    if(this.board.newBoard[targetRowIndex][targetColumnIndex] === '*') {
      return 'move registered'}
    else{return 'space taken'}
  }

  // updateBoard() {
  //   //wrap each of these in its own method and call it from updateBoard? 
  //   if(this.playerOne.move.length != 0){
  //     const targetRowIndex = this.playerOne.move[0]
  //     const targetColumnIndex = this.playerOne.move[1]
    
  //     if(this.board.newBoard[targetRowIndex][targetColumnIndex] === '*') {
  //       const targetRow = this.board.newBoard[targetRowIndex].split('')
  //       targetRow.splice(targetColumnIndex,1,'X')
  //       const updatedRow = targetRow.join('')
  //       this.board.newBoard.splice(targetRowIndex, 1, updatedRow)
  //       this.playerOne.move = []}
  //     else{
  //       this.playerOne.move = []
  //       return 'space taken'}
  //     }
  //   else if(this.playerTwo.move != 0){
  //     const targetRowIndex = this.playerTwo.move[0]
  //     const targetColumnIndex = this.playerTwo.move[1]
  //     if(this.board.newBoard[targetRowIndex][targetColumnIndex] === '*') {
  //       const targetRow = this.board.newBoard[targetRowIndex].split('')
  //       targetRow.splice(targetColumnIndex,1,'O')
  //       const updatedRow = targetRow.join('')
  //       this.board.newBoard.splice(targetRowIndex, 1, updatedRow)
  //       this.playerTwo.move = []}
  //     else{
  //       this.playerTwo.move = []
  //       return 'space taken'}
  //   }
    
  // }
}

module.exports = Game;