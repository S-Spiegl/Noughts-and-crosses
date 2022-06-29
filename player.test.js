const Player = require('./player')

describe('PlayerOne', () => {
  
  let player;

  beforeEach(() => {
    player = new Player
  })

  describe('.enterMove', () => {
    it("registers playerOne's move", () => {
      expect(player.enterMove(1,2)).toEqual([1,2])
    })
  })
    
})

