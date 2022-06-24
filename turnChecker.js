class TurnChecker {
  constructor(game, playerOne, playerTwo) {
    this.turns = []
    this.game = game
    this.playerOne = playerOne
    this.playerTwo = playerTwo
  }

  registerPlayerOneMove() {
    this.turns.push('X')
  }

  registerPlayerTwoMove() {
    this.turns.push('O')
  }
}

module.exports = TurnChecker;