const TurnChecker = require('./turnChecker')

describe('TurnChecker', () => {

  describe('', () => {
    it('increments turnCounter', () => {
    
      const turnChecker = new TurnChecker()
      turnChecker.incrementTurnCounter()
      expect(turnChecker.turnCounter).toEqual(1)
    })
  })
  
})