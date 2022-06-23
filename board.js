class Board {
  constructor() {
    this.newBoard = this.new()
  }

  new() {
    return [
      "|_|_|_|",
      "|_|_|_|",
      "|_|_|_|"
    ]
  }
} 

module.exports = Board; 