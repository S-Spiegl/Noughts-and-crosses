class BoardUpdater {
  constructor(board, playerOne, playerTwo) {
  this.board = board
  this.playerOne = playerOne
  this.playerTwo = playerTwo
  this.playerOnePlayed = false
  this.playerTwoPlayed = false

  }

  updateBoard() {
    //wrap each of these in its own method and call it from updateBoard? 
    this.playerOnePlayed = false
    this.playerTwoPlayed = false
    
    if(this.playerOne.move.length != 0){
      const targetRowIndex = this.playerOne.move[0]
      const targetColumnIndex = this.playerOne.move[1]
    
      if(this.board.newBoard[targetRowIndex][targetColumnIndex] === '*') {
        const targetRow = this.board.newBoard[targetRowIndex].split('')
        targetRow.splice(targetColumnIndex,1,'X')
        const updatedRow = targetRow.join('')
        this.board.newBoard.splice(targetRowIndex, 1, updatedRow)
        this.playerOnePlayed = true
        this.playerOne.move = []}
      else{
        this.playerOne.move = []
        return 'space taken'}
      }
    else if(this.playerTwo.move != 0){
      const targetRowIndex = this.playerTwo.move[0]
      const targetColumnIndex = this.playerTwo.move[1]
      if(this.board.newBoard[targetRowIndex][targetColumnIndex] === '*') {
        const targetRow = this.board.newBoard[targetRowIndex].split('')
        targetRow.splice(targetColumnIndex,1,'O')
        const updatedRow = targetRow.join('')
        this.board.newBoard.splice(targetRowIndex, 1, updatedRow)
        this.playerTwoPlayed = true
        this.playerTwo.move = []}
      else{
        this.playerTwo.move = []
        return 'space taken'}
    }
    
  }
}

module.exports = BoardUpdater;