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
  
})