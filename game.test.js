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

      // const mockPlayerOne = {
      //   move: [1,2]
      // }

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

      const mockPlayerOne = {
        move: [1,0]
      }

      const game = new Game(mockBoard, mockPlayerOne);
      game.checkPlayerOneMove();
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
      game.checkPlayerOneMove();
        expect(game.movePermitted).toEqual(false)
    })    
  })

  describe('.playerOneEnterMove', () => {
    it.skip('tells playerOne if they try to play two consecutive turns', () => {
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
        expect(game.playerOneEnterMove(1,2)).toEqual('not your turn')
    })  
    
    it.skip('resets the player move array to [] if a space is taken to allow them to enter new coordinates', () => {
      const mockBoard = {
        newBoard: ([
          "***",
          "*X*",
          "**O",
        ])
      }

      const mockTurnChecker = {
        turns: ['X', 'O']
      }

      const mockPlayerOne = {
        move: [1,1]
      }

      const game = new Game(mockBoard, mockPlayerOne, mockTurnChecker);
      // expect(game.playerOneEnterMove()).toEqual('space taken')
      game.playerOneEnterMove(1,1);
      expect(game.playerOne.move).toEqual([])

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
      expect(game.callGame()).toEqual('Player One wins!')
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
      expect(game.callGame()).toEqual('Player Two wins!')
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
      expect(game.callGame()).toEqual('Player One wins!')
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
      expect(game.callGame()).toEqual('Player One wins!')
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
      expect(game.callGame()).toEqual('Player Two wins!')
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
      expect(game.callGame()).toEqual('Player Two wins!')
    })

    it('calls a draw if all the board is filled and there is no winner', () => {
      const mockBoard = {
        newBoard: ([
          "XOX",
          "XOO",
          "OXX",
        ])

        
        boardFull: () => {
          return true}
      }

      const game = new Game(mockBoard);
      expect(game.callGame()).toEqual('Draw!')
    })
  })
})