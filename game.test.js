const Game = require('./game')
const Board = require('./board')
const Player = require('./player')
const BoardUpdater = require('./boardUpdater')
jest.mock('./board')
jest.mock('./player')
jest.mock('./boardUpdater')

describe('Game', () => {
  describe('.checkMove', () => {
    it('checks if a space is occupied, permitting a move if it is free', () => {
      const mockPlayer = new Player;
      const mockBoard = new Board;
      const mockBoardUpdater = new BoardUpdater(mockBoard);
      const game = new Game(mockBoard, mockPlayer, mockBoardUpdater);
      mockPlayer.enterMove.mockImplementation(() => {return [0, 1]})
      //the above coordinates, as entered in the mockPlayer, are what are resulting in 
      //TypeError: Cannot read properties of undefined (reading '0')
      //I've given the board as an argument to mockUpdater, so it has its dependency, and the game has
      //all the correct dependencies. A bit stumped...
      
      // mockBoardUpdater.addCrossToBoard.mockImplementation(() => {return 'board updated'})
      mockBoard.getBoard.mockImplementation(() => {return [
        "***",
        "*X*",
        "**O",
      ]})
      game.enterMove(0,1)
      // game.checkMove();
      expect(game.movePermitted).toEqual(true)
    })    
  })

  describe('.checkMove', () => {
    it('checks if a space is occupied, refusing a move if it is not free', () => {
      const mockPlayer = new Player;
      const mockBoard = new Board;
      const game = new Game(mockBoard, mockPlayer);
      mockPlayer.enterMove.mockImplementation(() => {return [1, 1]})
      mockBoard.getBoard.mockImplementation(() => {return [
        "***",
        "*X*",
        "**O",
      ]})
      game.enterMove(1,0)
      // game.checkMove();
        expect(game.movePermitted).toEqual(false)
    })    
  })

  describe('.enterMove', () => {
    
    it('resets the player move array to [] if a space is taken to allow them to enter new coordinates', () => {
      // const mockBoard = {
      //   getBoard: () => ([
      //     "***",
      //     "*X*",
      //     "**O",
      //   ])
      // }

      const mockPlayer = new Player;
      const mockBoard = new Board;
      const mockBoardUpdater = new BoardUpdater(mockBoard);
      const game = new Game(mockBoard, mockPlayer, mockBoardUpdater);
      mockPlayer.enterMove.mockImplementation(() => {return [0,1]} )
      mockBoard.getBoard.mockImplementation(() => {return [
        "***",
        "*X*",
        "**O",
      ]})

      // const game = new Game(mockBoard, mockPlayer);
      game.enterMove(0,1)
      expect(game.playerMove).toEqual([])

      //not working. Do you need to call return somewhere?
    })
  })

  describe('.callGame', () => {
    it('calls the game for playerOne if there are three horizontal Xs', () => {
      const mockBoard = {
        getBoard: () => ([
          "XXX",
          "*O*",
          "**O",
        ])
      }

      // mockBoard.getBoard.mockImplementation(() => {return [
      //   "XXX",
      //   "*O*",
      //   "**O",
      // ] })
      
      // const mockBoard = new Board
      // const mockPlayer = new Player
      const game = new Game(mockBoard);
      
      game.callGame()
      expect(game.result).toEqual('Player One wins!')
    })

    it('calls the game for playerTwo if there are three horizontal Os', () => {
      const mockBoard = {
        getBoard: () => ([
          "XX*",
          "OOO",
          "X**",
        ])
      }

      const game = new Game(mockBoard);
      game.callGame()
      expect(game.result).toEqual('Player Two wins!')
    })

    it('calls the game for playerOne if there are three vertical Xs', () => {
      const mockBoard = {
        getBoard: () => ([
          "XO*",
          "XO*",
          "X**",
        ])
      }

      const game = new Game(mockBoard);
      game.callGame()
      expect(game.result).toEqual('Player One wins!')
    })

    it('calls the game for playerOne if there are three Xs in a diagonal', () => {
      const mockBoard = {
        getBoard: () => ([
          "XO*",
          "*XO",
          "**X",
        ])
      }

      const game = new Game(mockBoard);
      game.callGame()
      expect(game.result).toEqual('Player One wins!')
    })

    it('calls the game for playerTwo if there are three vertical Os', () => {
      const mockBoard = {
        getBoard: () => ([
          "XOX",
          "XO*",
          "*O*",
        ])
      }

      const game = new Game(mockBoard);
      game.callGame()
      expect(game.result).toEqual('Player Two wins!')
    })

    it('calls the game for playerTwo if there are three Os in a diagonal', () => {
      const mockBoard = {
        getBoard: () => ([
          "XXO",
          "*O*",
          "O*X",
        ])
      }

      const game = new Game(mockBoard);
      game.callGame()
      expect(game.result).toEqual('Player Two wins!')
    })

    it('calls a draw if all the board is filled and there is no winner', () => {
      
      const mockBoard = {
        getBoard: () => ([
          "XOX",
          "XOO",
          "OXX",
        ]),

        boardFull: () => {
          return true}
      }

      const game = new Game(mockBoard);
      game.callGame()
      expect(game.result).toEqual('Draw!')
    })
  })

  describe('.reset', () => {
    it('changes the status of gameOver back to false', () => {
      const mockBoard = {
        board: ([
          "XOX",
          "XOO",
          "OXX",
        ]),

        resetBoard: () => {
        }
      }

      const mockPlayer = {
        move: []
      }

      const mockBoardUpdater = {
        
      }

      // const mockTurnChecker = {
      //   turnCounter: 8
      // }

  // let MockTurnChecker = jest.fn();
  //   MockTurnChecker.mockImplementation(() => ({
  //   turnCounter: 0,
  // }));

      //turnChecker is coming back as undefined and breaking this test... why?
      //don't really understand how this test works/breaks
      //commenting out sections of the board or resetBoard() doesn't seem to break it, whereas I cannot get
      //the test to recognise the turnChecker at all...

      // const mockTurnChecker = new MockTurnChecker
      const game = new Game(mockBoard, mockPlayer, mockBoardUpdater);
      game.resetBoard()
      expect(game.gameOver).toEqual(false)
      expect(game.turnCounter).toEqual(0)
      // expect(game.board.newBoard).toEqual([
      //   "***",
      //   "***",
      //   "***"
      // ])
    })
  })
})