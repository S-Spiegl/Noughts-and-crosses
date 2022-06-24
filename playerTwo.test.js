const PlayerTwo = require('./playerTwo')

describe('PlayerTwo', () => {
  
  let playerTwo;

  beforeEach(() => {
    playerTwo = new PlayerTwo
  })

  describe('.enterMove', () => {
    it("registers playerOne's move", () => {
      playerTwo.enterMove(1,2)
      expect(playerTwo.move).toEqual([1,2])
    })
  })
    
})

//implement a turnChecker - I think I'll need it if I don't want to implement a separate updateBoard() method 
//for each player
//next task - mock some playerTwo moves in the game tests
//You might need a new updateBoard() method for playerTwo, or some logic in it that looks at the 
//turnChecker to see who's due to be updated... probably the latter

//how a game probably will look
//game.playerOne.enterMove(1,1)
//game.updateBoard()
//game.playerTwo.enterMove(1,2)
//game.updateBoard()
//game.playerOne.enterMove(2,1)
//game.updateBoard()
//a method to view the board whenever a player wants
//an automatic method that calls the game. Maybe this can be in the turnChecker. At the end 
//of each go it will run and update the turns array, and if there are three consecutive symbols or 
//the board is full, it will end the game. To check if the board is full, map it and see if any of the 
//indices are *
//to see if there are three consecutive symbols... trickier
//etc



