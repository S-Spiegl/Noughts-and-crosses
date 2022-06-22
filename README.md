///////////////////////////////////////////////////////////////////////////////////////////

Plan:

Represent a square made up of 9 sections, like so:

|_|_|_|
|_|_|_|
|_|_|_|

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

///////////////////////////////////////////////////////////////////////////////////////////

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