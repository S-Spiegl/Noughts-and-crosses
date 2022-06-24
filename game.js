class Game {
  constructor(board, playerOne, playerTwo) {
    this.board = board
    this.playerOne = playerOne
    this.playerTwo = playerTwo
  }

  playerOneEnterMove(row, column) {
    this.playerOne.enterMove(row, column)
    this.updateBoard()
  }

  playerTwoEnterMove(row, column) {
    this.playerTwo.enterMove(row, column)
    this.updateBoard()
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

  updateBoard() {
    //wrap each of these in its own method and call it from updateBoard? 
    if(this.playerOne.move.length != 0){
      const targetRowIndex = this.playerOne.move[0]
      const targetColumnIndex = this.playerOne.move[1]
    
      if(this.board.newBoard[targetRowIndex][targetColumnIndex] === '*') {
        const targetRow = this.board.newBoard[targetRowIndex].split('')
        targetRow.splice(targetColumnIndex,1,'X')
        const updatedRow = targetRow.join('')
        this.board.newBoard.splice(targetRowIndex, 1, updatedRow)
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
        this.playerTwo.move = []}
      else{
        this.playerTwo.move = []
        return 'space taken'}
    }
    
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