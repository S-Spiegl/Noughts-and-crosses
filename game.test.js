const Game = require('./game')
const PlayerOne = require('./playerOne')
const Board = require('./board')
jest.mock('./playerOne')
jest.mock('./board')

describe('Game', () => {

  let game;
  let mockBoard;
  let mockPlayerOne;

  beforeEach(() => {
    mockBoard = new Board;
    mockPlayerOne = new PlayerOne;
    game = new Game(mockBoard, mockPlayerOne);
  });

  describe('', () => {
   it('', () => {
    mockPlayerOne.enterMove(1,2)
    expect(game.checkMove()).toEqual('move registered')
    expect(game.board).toEqual([
      "|_|X|_|",
      "|_|_|_|",
      "|_|_|_|",
    ])
   })
  })  
})

