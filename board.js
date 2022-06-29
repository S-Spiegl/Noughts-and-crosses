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

  getBoard() {
    return this.newBoard
  }

  resetBoard() {
    this.newBoard = [
      "***",
      "***",
      "***"
    ]
  }

  boardFull() {
    if(this.newBoard.join('').includes('*'))
    {return false}
    else{return true}
  }
  
} 

module.exports = Board; 