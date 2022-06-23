const Game = require('./game')

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
    // const mockPlayerOne = {
    //   move: () => {
    //     return [1,2]

    const mockPlayerOne = {
      move: [[1],[2]]
    }
    const game = new Game(mockBoard, mockPlayerOne);
    // expect(game.checkMove()).toEqual('move registered')
    // expect(game.board).toEqual([
    //   "|_|X|_|",
    //   "|_|_|_|",
    //   "|_|_|_|",
    // ])
    expect(game.playerOne.move).toEqual([[1],[2]])
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

        
      //this works but is it testing anything other than that if you have a clean 
      //board in the board's constructor, game is able to access it?
      //the above test that does not work was intended to also test that the board 
      //was instantiating a clean board on start up, but maybe that should be the 
      //responsibility of the board test?
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


