const BoardUpdater = require('./boardUpdater')
// const Player = require('./player')
// const PlayerTwo = require('./playerTwo')

describe('.updateBoard', () => {
  it('adds an X to the board when playerOne makes a legal move', () => {
    const mockBoard = {
      newBoard: ([
        "***",
        "***",
        "***"
      ])
    }

    const mockPlayer = {
      move: [1,1]
    }

    const mockTurnChecker = {
      turnCounter: 0
    }
    
    const boardUpdater = new BoardUpdater(mockBoard, mockPlayer, mockTurnChecker);
    boardUpdater.updateBoard();
    expect(boardUpdater.board.newBoard).toEqual(([
      "***",
      "*X*",
      "***",
      ]))

  })

  it('adds an O to the board when playerTwo makes a legal move', () => {
    const mockBoard = {
      newBoard: ([
        "***",
        "X**",
        "***"
      ])
    }

    const mockPlayer = {
      move: [1,1]
    }

    const mockTurnChecker = {
      turnCounter: 1
    }
    
    const boardUpdater = new BoardUpdater(mockBoard, mockPlayer, mockTurnChecker);
    boardUpdater.updateBoard();
    expect(boardUpdater.board.newBoard).toEqual(([
      "***",
      "XO*",
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

    const mockTurnChecker = {
      turnCounter: 1
    }

    const boardUpdater = new BoardUpdater(mockBoard, mockPlayerOne, mockTurnChecker);
    boardUpdater.updateBoard();
    expect(boardUpdater.player.move).toEqual([])
  })

  // it.skip('retains the move information on the board', () => {

  //   const mockBoard = {
  //     newBoard: ([
  //       "***",
  //       "***",
  //       "***"
  //     ])
  //   }
  //   const playerOne = new PlayerOne;
  //   const playerTwo = new PlayerTwo;
  //   const boardUpdater = new BoardUpdater(mockBoard, playerOne, playerTwo);
  //   boardUpdater.playerOne.enterMove(1,1)
  //   boardUpdater.updateBoard();
  //   expect(boardUpdater.board.newBoard).toEqual(([
  //     "***",
  //     "*X*",
  //     "***",
  //     ]))
  //   boardUpdater.playerOne.enterMove(0,2)
  //   boardUpdater.updateBoard();
  //   expect(boardUpdater.board.newBoard).toEqual(([
  //     "**X",
  //     "*X*",
  //     "***",
  //     ]))
  //   boardUpdater.playerOne.enterMove(2,0)
  //   boardUpdater.updateBoard();
  //   expect(boardUpdater.board.newBoard).toEqual(([
  //     "**X",
  //     "*X*",
  //     "X**",
  //     ]))

  //     //haven't worked out how to mock this test...
  //     //the problem is that this test relies on changing the 
  //     //playerOne.move array after the first update to reflect the 
  //     //next move, but by this point the mockPlayerOne's move has already been passed 
  //     //as an argument to the game...
  //     //one solution would be to set up the mockBoard as it would look after one go and 
  //     //then mock the next move via mockPlayerOne. This will test that the game updates a board
  //     //that already has an X on it but not that it's storing info from one move to the next...
  //     // This will however be clearer once you pass a second player as an argument as it will be possible
  //     //to move two inputs 
  // })
})