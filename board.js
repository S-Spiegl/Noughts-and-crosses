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