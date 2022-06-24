const TurnChecker = require('./turnChecker')

describe('TurnChecker', () => {
  describe('.checkTurn', () => {
    it('adds an X to its array after playerOne takes their go', () => {
      const mockPlayerOne = {
        move: [1,1]
      }

      const mockGame = {
        new: () => {
          return 'move registered'
        }
      }

      const turnChecker = new TurnChecker(mockGame, mockPlayerOne)
      expect(turnChecker.turns).toEqual(['X'])
    })
  })
  
})