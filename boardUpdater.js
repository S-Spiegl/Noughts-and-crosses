class BoardUpdater {
  constructor(board, player, turnChecker) {
  this.board = board
  this.player = player
  this.turnChecker = turnChecker
  // this.playerOnePlayed = false
  // this.playerTwoPlayed = false
  }

  updateBoard() {
    if(this.player.move.length != 0){
      if(this.turnChecker.turnCounter % 2 == 0){
        this.addNoughtToBoard()}
      else{this.addCrossToBoard()} 
    }
  }


  addCrossToBoard() {
    const targetRowIndex = this.player.move[0]
    const targetColumnIndex = this.player.move[1]

    if(this.board.newBoard[targetRowIndex][targetColumnIndex] === '*') {
      const targetRow = this.board.newBoard[targetRowIndex].split('')
      targetRow.splice(targetColumnIndex,1,'X')
      const updatedRow = targetRow.join('')
      this.board.newBoard.splice(targetRowIndex, 1, updatedRow)
      // this.playerOnePlayed = true
      this.player.move = []}
    else{
      this.player.move = []
      return 'space taken'}
  } 
  
  addNoughtToBoard() {
    const targetRowIndex = this.player.move[0]
    const targetColumnIndex = this.player.move[1]

    if(this.board.newBoard[targetRowIndex][targetColumnIndex] === '*') {
      const targetRow = this.board.newBoard[targetRowIndex].split('')
      targetRow.splice(targetColumnIndex,1,'O')
      const updatedRow = targetRow.join('')
      this.board.newBoard.splice(targetRowIndex, 1, updatedRow)
      // this.playerTwoPlayed = true
      this.player.move = []}
    else{
      this.player.move = []
      return 'space taken'}
  }


  // updateBoard() {
  //   //wrap each of these in its own method and call it from updateBoard? 
  //   this.playerOnePlayed = false
  //   this.playerTwoPlayed = false
    
  //   if(this.playerOne.move.length != 0){
  //     const targetRowIndex = this.playerOne.move[0]
  //     const targetColumnIndex = this.playerOne.move[1]
    
  //     if(this.board.newBoard[targetRowIndex][targetColumnIndex] === '*') {
  //       const targetRow = this.board.newBoard[targetRowIndex].split('')
  //       targetRow.splice(targetColumnIndex,1,'X')
  //       const updatedRow = targetRow.join('')
  //       this.board.newBoard.splice(targetRowIndex, 1, updatedRow)
  //       this.playerOnePlayed = true
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
  //       this.playerTwoPlayed = true
  //       this.playerTwo.move = []}
  //     else{
  //       this.playerTwo.move = []
  //       return 'space taken'}
  //   }
    
  // }
}

module.exports = BoardUpdater;