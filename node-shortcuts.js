const Game = require('./game')
const PlayerOne = require('./playerOne');
const Board = require('./board');
const playerOne = new PlayerOne;
const board = new Board;

// eslint-disable-next-line no-unused-vars
const game = new Game(board, playerOne)