const Game = require('./game')
//haven't worked out how to mock one of the tests, hence the need for player...

describe('Game', () => {
  describe('.playerOne', () => {
   it('', () => {
    const mockBoard = {
      new: () => {
      return  [
      "***",
      "***",
      "***"
    ]}
    };
  
    const mockPlayerOne = {
      move: [1,2]
    }
    const game = new Game(mockBoard, mockPlayerOne);
    expect(game.playerOne.move).toEqual([1,2])
   })
  })  

  describe('.board', () => {
    it('shows a clean board at the beginning of the game', () => {
      const mockBoard = {
        newBoard: ([
          "***",
          "***",
          "***"
        ])
      }

      const mockPlayerOne = {
        move: [1,2]
      }

      const game = new Game(mockBoard, mockPlayerOne);
      expect(game.board.newBoard).toEqual(([
        "***",
        "***",
        "***",
        ]))
    })
  })

  describe('.checkMove', () => {
    it('checks if a space is occupied, permitting a move if it is free', () => {
      const mockBoard = {
        newBoard: ([
          "***",
          "*X*",
          "**O",
        ])
      }

      const mockPlayerOne = {
        move: [1,0]
      }

      const game = new Game(mockBoard, mockPlayerOne);
        expect(game.checkMove()).toEqual('move registered')
    })    
  })

  describe('.checkMove', () => {
    it('checks if a space is occupied, refusing a move if it is not free', () => {
      const mockBoard = {
        newBoard: ([
          "***",
          "*X*",
          "**O",
        ])
      }

      const mockPlayerOne = {
        move: [1,1]
      }

      const game = new Game(mockBoard, mockPlayerOne);
        expect(game.checkMove()).toEqual('space taken')
    })    
  })

  describe('.playerOneEnterMove', () => {
    it('tells playerOne if they try to play two consecutive turns', () => {
      // const mockBoard = {
      //   newBoard: ([
      //     "***",
      //     "*X*",
      //     "***",
      //   ])
      // }

      //need to mock the updater

      // const mockPlayerOne = {
      //   move: [1,2]
      // }

      const mockTurnChecker = {
        turns: ['X']
      }

      const game = new Game(mockTurnChecker);
        expect(game.playerOneEnterMove()).toEqual('not your turn')
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


