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

  describe('.newBoard', () => {
    const board = new Board();
    it('initializes with an empty board when class is instantiated', () => {
      expect(board.newBoard).toEqual([
        "***",
        "***",
        "***"
      ])
    })

    it('records when the board is full', () => {
      let board = new Board();
      board.newBoard = [
        "XOX",
        "XOO",
        "OXX",
      ]
      //needs more investigation - miscommunication occurring somewhere...
      expect(board.boardFull()).toEqual(true)
    })
  })
  
})