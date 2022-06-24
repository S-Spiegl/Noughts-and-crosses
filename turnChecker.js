class TurnChecker {
  constructor(boardUpdater) {
    this.turns = []
    this.boardUpdater = boardUpdater
  }

  updateTurns() {
    if(this.boardUpdater.playerOnePlayed === true){
      this.registerPlayerOneMove()
    }
    else if(this.boardUpdater.playerTwoPlayed === true){
      this.registerPlayerTwoMove()
    }
  }

  registerPlayerOneMove() {
    if(this.turns[this.turns.length-1] != 'X'){
      this.turns.push('X')
    }
  }

  registerPlayerTwoMove() {
    if(this.turns[this.turns.length-1] != 'O'){
      this.turns.push('O')
    }
  }
}

module.exports = TurnChecker;