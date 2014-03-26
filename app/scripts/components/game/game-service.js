'use strict';

angular.module('Checkers.game.service', [
    'Checkers.board.service',
    'Checkers.player.service'
  ])

  .service('GameService', function (BoardService, PlayerService) {

    this.init = function (game) {
      this.game = game;
      this.initGameBoard();
      this.initGamePlayer();
      return this.game;
    };

    this.initGameBoard = function () {
      if (typeof this.game.board === "undefined") {
        this.game.board = {};
        BoardService.init(this.game.board);
        BoardService.initBoard();
      } else {
        BoardService.init(this.game.board);
      }

      this.game.showBoard = true;
    };

    this.initGamePlayer = function () {
      if (typeof this.game.player === "undefined") {
        this.game.player = {};
      }

      PlayerService.init(this.game.player);
      PlayerService.initPlayerTurn();
    };

    this.updatePlayerTurn = function () {
      PlayerService.toggleTurn();
      this.game.player = PlayerService.getPlayer();
    };

    this.getGame = function () {
      return this.game;
    };

    this.getPlayer = function () {
      return this.game.player;
    };

    this.setGameBoard = function () {
      this.game.board = BoardService.getBoard();
    };

  });