class Board {
  constructor() {
    this.board = this.new()
  }

  new() {
    return [
      "***",
      "***",
      "***"
    ]
  }

  getBoard() {
    return this.board
  }
  //can now call this method using auto-mocks rather than an instance variable 

  resetBoard() {
    this.board = [
      "***",
      "***",
      "***"
    ]
  }

  boardFull() {
    if(this.board.join('').includes('*'))
    {return false}
    else{return true}
  }
  
} 

module.exports = Board; 