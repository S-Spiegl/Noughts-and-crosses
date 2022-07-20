## How to play:

1. Clone this repo
2. Run npm install to install dependencies
3. Open node and paste in the following:

```const Game = require('./game')```<br>
```const Player = require('./player');```<br>
```const Board = require('./board');```<br>
```const BoardUpdater = require('./boardUpdater')```<br>
```const player = new Player;```<br>
```const board = new Board;```<br>
```const boardUpdater = new BoardUpdater(board);```<br>
```const game = new Game(board, player, boardUpdater);```<br>

4. To take a turn, enter the following (replacing x with the target row, and  y with the target column):
```game.enterMove(x,y)```

5. The game alternates between players automatically. The first time you enter a move, it will be for ```playerOne```, the second time for ```playerTwo```.

6. The game will log the board after each go, allowing you to plan yor next move.

7. The game will declare a winner/draw and reset the board to allow you to play another game. 

## Next steps:
I would either like to: 

Build an engine for obtaining user input via the CLI

OR

build a graphical representation of the board, and allow the user to click on their choice. This would obviously be preferable. Each square would be linked to a row, column combination as entered until now via node. 

Initially, given the existing logic, the game would have to be played from one machine, with players taking turns on the same keyboard. However, sharing a keyboard is not very convenient, so it would be a case of finding a way to have players play each other via different machines. This would probably involve logging in two players and assigning each of them a player number, either 1 or 2, that lasts for that session, or pushing their id into an array and determining whose turn it is based on their index in the array. Player 1/the player with index 0 in said array would only be allowed to take a turn when the turnCounter() was even, player 2/the player with index 1 when the turnCounter() was odd. The controller logic would prevent them from clicking when it was not their go, and display a message to tell them to wait. Perhaps when a player started a game they could send a message challenging another signed-up player to a game, and there could be prompts to take one's turn etc (though this is more suited to longer-lasting games than noughts and crosses...)

## Original plan:

Represent a square made up of 9 sections, like so:

| _ | _ | _ |<br>
| _ | _ | _ |<br>
| _ | _ | _ |<br>

Replace each underscore with a player's X or O
That position is then taken and cannot be chosen

CLASSES 

Game Engine? - decides legality of moves, edits the board
Player 1? - plays turns with an X
Player 2? - plays turns with an O
Board? - represents the board, holds the state of play

Use if/else logic to decide when a player can go, decide whether a player can take a position, and declare a winner or a draw


class Board {
		register_move(row, column) - adds an X or an O to the board
}

class Game {
		.new - generates a new board 
		.check_move(row, column) - 
				checks if it is a player's turn, 
				if the space is taken
		.call_game
				checks board after each go
				declares a winner if there are three symbols in a row
				declares a draw if all spaces are taken and there is no winner
				says whose go it is 
		
}

class PlayerOne {
		play_turn(row, column) - the game checks this and passes the move to the board if legal
}

class PlayerTwo {
		play_turn(row, column) - the game checks this and passes the move to the board if legal
}

SEQUENCE OF PLAY

example 1:

player_one..play_turn(row, column)
engine.check_move(row, column) 
	- checks the legality of the move. 
	- move is valid? Yes.
	- passes move to board.
board.register_move(row, column)
adds an X to the board in the specified position
returns visualisation of board

example 2

player_one..play_turn(row, column)
engine.check_move(row, column) 
	- checks the legality of the move. 
	- move is valid? No.
	- throws error

example 3 
player_two..play_turn(row, column)
engine.check_move(row, column) 
	- checks the legality of the move. 
	- move is valid? Yes
board.register_move(row, column)
adds an O to the board in the position
returns visualisation of board

![planning-board](public/images/diagram.png)

## Other notes:

I still have a couple of failing tests, due to issues mocking the turnChecker and also due to issues mocking two methods from within the same mocked class... see the three skipped tests in game.test

