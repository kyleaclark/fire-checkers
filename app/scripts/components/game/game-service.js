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
    }

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

    this.whatisPlayerTurn = function () {
      console.log('player turn : ', this.game);
    };

  });