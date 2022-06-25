const Player = require('./player')

describe('PlayerOne', () => {
  
  let player;

  beforeEach(() => {
    player = new Player
  })

  describe('.enterMove', () => {
    it("registers playerOne's move", () => {
      player.enterMove(1,2)
      expect(player.move).toEqual([1,2])
    })
  })
    
})

