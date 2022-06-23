const Game = require('./game')

describe('Game', () => {

  describe('.playerOne', () => {
   it('', () => {
    const mockBoard = {
      new: () => {
      return "|_|_|_|",
      "|_|_|_|",
      "|_|_|_|"
      }
    };
    // const mockPlayerOne = {
    //   move: () => {
    //     return [1,2]

    const mockPlayerOne = {
      move: [1,2]
    }
    const game = new Game(mockBoard, mockPlayerOne);
    // expect(game.checkMove()).toEqual('move registered')
    // expect(game.board).toEqual([
    //   "|_|X|_|",
    //   "|_|_|_|",
    //   "|_|_|_|",
    // ])
    expect(game.playerOne.move).toEqual([1,2])
   })
  })  

  describe('.board', () => {
    it('shows a clean board at the beginning of the game', () => {
      // const mockBoard = {
        
      //   // constructor: () => {
      //   //   mockBoard.newBoard = mockBoard.new()
      //   // },
        
      //   new: () => {
      //   return "|_|_|_|",
      //   "|_|_|_|",
      //   "|_|_|_|"
      //   },

      //   newBoard: mockBoard.new()
      // }

        
      const mockBoard = {
        newBoard: ([
          "|_|_|_|",
          "|_|_|_|",
          "|_|_|_|",
        ])
      }

      const mockPlayerOne = {
        move: [1,2]
      }

      const game = new Game(mockBoard, mockPlayerOne);
      expect(game.board.newBoard).toEqual(([
          "|_|_|_|",
          "|_|_|_|",
          "|_|_|_|",
        ]))
    })
  })
})


// const Game = require('./game')
// const PlayerOne = require('./playerOne')
// const Board = require('./board')
// jest.mock('./playerOne')
// jest.mock('./board')

// describe('Game', () => {

//   let game;
//   let mockBoard;
//   let mockPlayerOne;

//   beforeEach(() => {
//     mockBoard = new Board;
//     mockPlayerOne = new PlayerOne;
//     game = new Game(mockBoard, mockPlayerOne);
//   });

//   describe('', () => {
//    it('', () => {
//     mockPlayerOne.enterMove(1,2)
//     expect(game.checkMove()).toEqual('move registered')
//     expect(game.board).toEqual([
//       "|_|X|_|",
//       "|_|_|_|",
//       "|_|_|_|",
//     ])
//    })
//   })  
// })


