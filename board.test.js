const Board = require('./board');

describe('Board', () => {

  let board;

  beforeEach(() => {
    board = new Board();
  });

  describe('.new', () => {
    it('initializes an empty board', () => {
      expect(board.new()).toEqual([
        "|_|_|_|",
        "|_|_|_|",
        "|_|_|_|"
      ])
    })
  })

  describe('.newBoard', () => {
    it('initializes with an empty board when class is instantiated', () => {
      expect(board.newBoard).toEqual([
        "|_|_|_|",
        "|_|_|_|",
        "|_|_|_|"
      ])
    })
  })
  
})