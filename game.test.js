const Game = require('./game')
// const TurnChecker = require('./turnChecker')
//even requiring the actual turnChecker rather than the mock doesn't seem to help

describe('Game', () => {
  describe('.board', () => {
    it('shows a clean board at the beginning of the game', () => {
      const mockBoard = {
        newBoard: ([
          "***",
          "***",
          "***"
        ])
      }

      const game = new Game(mockBoard);
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

      const mockPlayer = {
        move: [1,0]
      }

      const game = new Game(mockBoard, mockPlayer);
      game.checkMove();
      expect(game.movePermitted).toEqual(true)
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
      game.checkMove();
        expect(game.movePermitted).toEqual(false)
    })    
  })

  describe('.playerOneEnterMove', () => {
    
    it.skip('resets the player move array to [] if a space is taken to allow them to enter new coordinates', () => {
      const mockBoard = {
        newBoard: ([
          "***",
          "*X*",
          "**O",
        ])
      }

      // const mockTurnChecker = {
      //   turns: ['X', 'O']
      // }

      const mockPlayer = {
        move: [1,1]
      }

      const game = new Game(mockBoard, mockPlayer);
      // expect(game.playerOneEnterMove()).toEqual('space taken')
      game.EnterMove(1,1);
      expect(game.player.move).toEqual([])

      //not working. Do you need to call return somewhere?
    })
  })

  describe('.callGame', () => {
    it('calls the game for playerOne if there are three horizontal Xs', () => {
      const mockBoard = {
        newBoard: ([
          "XXX",
          "*O*",
          "**O",
        ])
      }

      const game = new Game(mockBoard);
      game.callGame()
      expect(game.result).toEqual('Player One wins!')
    })

    it('calls the game for playerTwo if there are three horizontal Os', () => {
      const mockBoard = {
        newBoard: ([
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
        newBoard: ([
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
        newBoard: ([
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
        newBoard: ([
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
        newBoard: ([
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
        newBoard: ([
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
        newBoard: ([
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

      const mockTurnChecker = {
        turnCounter: 8
      }

  // let MockTurnChecker = jest.fn();
  //   MockTurnChecker.mockImplementation(() => ({
  //   turnCounter: 0,
  // }));

      //turnChecker is coming back as undefined and breaking this test... why?
      //don't really understand how this test works/breaks
      //commenting out sections of the board or resetBoard() doesn't seem to break it, whereas I cannot get
      //the test to recognise the turnChecker at all...

      // const mockTurnChecker = new MockTurnChecker
      const game = new Game(mockBoard, mockPlayer, mockBoardUpdater, mockTurnChecker);
      game.resetBoard()
      expect(game.gameOver).toEqual(false)
      expect(game.turnChecker.turnCounter).toEqual(0)
      // expect(game.board.newBoard).toEqual([
      //   "***",
      //   "***",
      //   "***"
      // ])
    })
  })
})