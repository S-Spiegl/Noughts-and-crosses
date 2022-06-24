class PlayerTwo {
  constructor() {
    this.move = []
  }

  enterMove(row, column) {
      this.move.push(row, column)
  }

}

module.exports = PlayerTwo;