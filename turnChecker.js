class TurnChecker {
  constructor() {
    this.turnCounter = 0
    // this.turns = []
  }

  incrementTurnCounter() {
    this.turnCounter += 1
  }
}

module.exports = TurnChecker;