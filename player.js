class Player {
  constructor() {
    this.move = []
  }

  enterMove(row, column) {
      this.move.push(row, column)
  }

}

module.exports = Player;