class BoardUpdater {
  constructor(board) {
  this.board = board
  
  }

  addCrossToBoard(targetRowIndex, targetColumnIndex) {
    if(this.board.board[targetRowIndex][targetColumnIndex] === '*') {
      const targetRow = this.board.board[targetRowIndex].split('')
      targetRow.splice(targetColumnIndex,1,'X')
      const updatedRow = targetRow.join('')
      this.board.board.splice(targetRowIndex, 1, updatedRow)
      return 'board updated'
      }
    else{
      return 'space taken'}
  } 
  
  addNoughtToBoard(targetRowIndex, targetColumnIndex) {
    if(this.board.board[targetRowIndex][targetColumnIndex] === '*') {
      const targetRow = this.board.board[targetRowIndex].split('')
      targetRow.splice(targetColumnIndex,1,'O')
      const updatedRow = targetRow.join('')
      this.board.board.splice(targetRowIndex,1, updatedRow)
}
    else{
      return 'space taken'}
  }
}

module.exports = BoardUpdater;