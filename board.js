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
    if(this.newBoard[0].includes('*') === false 
    && this.newBoard[1].includes('*') === false
    && this.newBoard[2].includes('*') === false)
    {return true}
  }
} 

module.exports = Board; 