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
    // console.log(this.newBoard.join('\r\n'))
    if(this.newBoard.join('').includes('*'))
    {return false}
    else{return true}
  }
  
} 

//needs to end the game when a winner has been declared. reset the board?



module.exports = Board; 