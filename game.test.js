const Game = require('./game')
const PlayerOne = require('./playerOne')
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

  describe('.updateBoard', () => {
    it('adds an X to the board when playerOne makes a legal move', () => {
      const mockBoard = {
        newBoard: ([
          "***",
          "***",
          "***"
        ])
      }

      const mockPlayerOne = {
        move: [1,1]
      }
      
      const game = new Game(mockBoard, mockPlayerOne);
      game.updateBoard();
      expect(game.board.newBoard).toEqual(([
        "***",
        "*X*",
        "***",
        ]))

    })

    it('adds an O to the board when playerTwo makes a legal move', () => {
      const mockBoard = {
        newBoard: ([
          "***",
          "***",
          "***"
        ])
      }

      const mockPlayerOne = {
        move: []
      }

      const mockPlayerTwo = {
        move: [1,1]
      }
      
      const game = new Game(mockBoard, mockPlayerOne, mockPlayerTwo);
      game.updateBoard();
      expect(game.board.newBoard).toEqual(([
        "***",
        "*O*",
        "***",
        ]))

    })

    it("clears playerOne's move from the move array after updating the board", () => {
      const mockBoard = {
        newBoard: ([
          "***",
          "***",
          "***"
        ])
      }

      const mockPlayerOne = {
        move: [1,1]
 
      }

      const game = new Game(mockBoard, mockPlayerOne);
      game.updateBoard();
      expect(game.playerOne.move).toEqual([])
    })

    it('retains the move information on the board', () => {

      const mockBoard = {
        newBoard: ([
          "***",
          "***",
          "***"
        ])
      }
      const playerOne = new PlayerOne;
      const game = new Game(mockBoard, playerOne);
      game.playerOne.enterMove(1,1)
      game.updateBoard();
      expect(game.board.newBoard).toEqual(([
        "***",
        "*X*",
        "***",
        ]))
      game.playerOne.enterMove(0,2)
      game.updateBoard();
      expect(game.board.newBoard).toEqual(([
        "**X",
        "*X*",
        "***",
        ]))
      game.playerOne.enterMove(2,0)
      game.updateBoard();
      expect(game.board.newBoard).toEqual(([
        "**X",
        "*X*",
        "X**",
        ]))

        //haven't worked out how to mock this test...
        //the problem is that this test relies on changing the 
        //playerOne.move array after the first update to reflect the 
        //next move, but by this point the mockPlayerOne's move has already been passed 
        //as an argument to the game...
        //one solution would be to set up the mockBoard as it would look after one go and 
        //then mock the next move via mockPlayerOne. This will test that the game updates a board
        //that already has an X on it but not that it's storing info from one move to the next...
        // This will however be clearer once you pass a second player as an argument as it will be possible
        //to move two inputs 
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


