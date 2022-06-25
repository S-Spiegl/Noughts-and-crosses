const TurnChecker = require('./turnChecker')

describe('TurnChecker', () => {

  describe('', () => {
    it('increments turnCounter', () => {
    
      const turnChecker = new TurnChecker()
      turnChecker.incrementTurnCounter()
      expect(turnChecker.turnCounter).toEqual(1)
    })
  })

  describe('.checkTurn', () => {
    it('adds an X to its array after playerOne takes their go', () => {
      const mockBoardUpdater = {
        playerOnePlayed: true
      }

      const turnChecker = new TurnChecker(mockBoardUpdater)
      turnChecker.updateTurns()
      expect(turnChecker.turns).toEqual(['X'])
    })

    it('adds an O to its array after playerOne takes their go', () => {
      const mockBoardUpdater = {
        playerTwoPlayed: true
      }

      const turnChecker = new TurnChecker(mockBoardUpdater)
      turnChecker.updateTurns()
      expect(turnChecker.turns).toEqual(['O'])
    })

    it('does not add an X to its array if the last turn was an X', () => {
      const mockBoardUpdater = {
        playerOnePlayed: true
      }

      const turnChecker = new TurnChecker(mockBoardUpdater)
      turnChecker.turns = ['X']
      turnChecker.updateTurns()
      expect(turnChecker.turns).toEqual(['X'])
    })

    it('does not add an O to its array if the last turn was an O', () => {
      const mockBoardUpdater = {
        playerTwoPlayed: true
      }

      const turnChecker = new TurnChecker(mockBoardUpdater)
      turnChecker.turns = ['X', 'O']
      turnChecker.updateTurns()
      expect(turnChecker.turns).toEqual(['X', 'O'])
    }) 
  })
  
})

//take the updateGame() function and make it its own class
//then you can make the turnChecker dependant on updateGame() and make the game dependant on both of them
//you need to know if the board was updated to know whose go it was last. Currently you would
//have a situation whereby the turnChecker and game were dependant on each other, meaning it would be 
//impossible to instantiate them both 