const Game = require('./game')
const Player = require('./player');
const Board = require('./board');
const BoardUpdater = require('./boardUpdater')
const player = new Player;
const board = new Board;
const boardUpdater = new BoardUpdater(board);
const game = new Game(board, player, boardUpdater);