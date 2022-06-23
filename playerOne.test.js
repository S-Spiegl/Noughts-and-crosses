const PlayerOne = require('./playerOne')

describe('PlayerOne', () => {
  
  let playerOne;

  beforeEach(() => {
    playerOne = new PlayerOne
  })

  describe('.enterMove', () => {
    it("registers playerOne's move", () => {
      playerOne.enterMove(1,2)
      expect(playerOne.move).toEqual([1,2])
    })
  })
    
})

