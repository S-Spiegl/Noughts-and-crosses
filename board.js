class Board {
  constructor() {
    this.newBoard = this.new()
  }

  new() {
    return [
      "***",
      "***",
      "***"
    ]
  }

  boardFull() {
    if(this.newBoard.join('').includes('*'))
    {return false}
  }
} 

module.exports = Board; 