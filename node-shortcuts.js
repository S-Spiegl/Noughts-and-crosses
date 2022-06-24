const Game = require('./game')
const PlayerOne = require('./playerOne');
const PlayerTwo = require('./playerTwo');
const Board = require('./board');
const playerOne = new PlayerOne;
const playerTwo = new PlayerTwo;
const board = new Board;
const game = new Game(board, playerOne, playerTwo);