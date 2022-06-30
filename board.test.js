const Board = require('./board');

describe('Board', () => {

  // let board;

  // beforeEach(() => {
  //   board = new Board();
  // });

  describe('.new', () => {
    const board = new Board();
    it('initializes an empty board', () => {
      expect(board.new()).toEqual([
        "***",
        "***",
        "***"
      ])
    })
  })

  describe('.getBoard', () => {
    const board = new Board();
    it('returns the current state of the board', () => {
      expect(board.getBoard()).toEqual([
        "***",
        "***",
        "***"
      ])
    })

    it('records when the board is full', () => {
      let board = new Board();
      board.board = [
        "XOX",
        "XOO",
        "OXX",
      ]
      expect(board.boardFull()).toEqual(true)
    })
  })
  
})