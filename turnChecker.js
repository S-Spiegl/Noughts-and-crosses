class TurnChecker {
  constructor() {
    this.turnCounter = 0
  }

  incrementTurnCounter() {
    this.turnCounter += 1
  }
}

module.exports = TurnChecker;