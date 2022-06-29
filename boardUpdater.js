class BoardUpdater {
  constructor(board, player, turnChecker) {
  this.board = board
  this.player = player
  this.turnChecker = turnChecker
  // this.playerOnePlayed = false
  // this.playerTwoPlayed = false
  }

  // updateBoard() {
  //   if(this.player.move.length != 0){
  //     if(this.turnChecker.turnCounter % 2 == 0){
  //       this.addCrossToBoard()}
  //     else{this.addNoughtToBoard()} 
  //   }
  // }

  addCrossToBoard(targetRowIndex, targetColumnIndex) {
    if(this.board.board[targetRowIndex][targetColumnIndex] === '*') {
      const targetRow = this.board.board[targetRowIndex].split('')
      targetRow.splice(targetColumnIndex,1,'X')
      const updatedRow = targetRow.join('')
      this.board.board.splice(targetRowIndex, 1, updatedRow)
      }
    else{
      return 'space taken'}
  } 
  
  addNoughtToBoard(targetRowIndex, targetColumnIndex) {
    // const targetRowIndex = this.player.move[0]
    // const targetColumnIndex = this.player.move[1]

    if(this.board.board[targetRowIndex][targetColumnIndex] === '*') {
      const targetRow = this.board.board[targetRowIndex].split('')
      targetRow.splice(targetColumnIndex,1,'O')
      const updatedRow = targetRow.join('')
      this.board.board.splice(targetRowIndex, 1, updatedRow)
      // this.playerTwoPlayed = true
      this.player.move = []}
    else{
      this.player.move = []
      return 'space taken'}
  }
}

module.exports = BoardUpdater;