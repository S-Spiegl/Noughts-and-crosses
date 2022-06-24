const Board = require('./board');

describe('Board', () => {

  let board;

  beforeEach(() => {
    board = new Board();
  });

  describe('.new', () => {
    it('initializes an empty board', () => {
      expect(board.new()).toEqual([
        "***",
        "***",
        "***"
      ])
    })
  })

  describe('.newBoard', () => {
    it('initializes with an empty board when class is instantiated', () => {
      expect(board.newBoard).toEqual([
        "***",
        "***",
        "***"
      ])
    })

    it.skip('retains the move information on the board', () => {
      

      



      expect(board.newBoard).toEqual(([
        "***",
        "*X*",
        "***",
        ]))

    })
  })
  
})