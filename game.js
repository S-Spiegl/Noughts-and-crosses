class Game {
  constructor(board, playerOne) {
    this.board = board
    this.playerOne = playerOne
  }

  checkMove() {
    return 'move registered'
    //this should return 'move registered' after comparing
    //the coordinates with this.board.newBoard
  }
}

module.exports = Game;