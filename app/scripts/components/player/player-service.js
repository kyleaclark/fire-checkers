'use strict';

angular.module('Checkers.player.service', [
    'Checkers.player.turn.service',
    'Checkers.player.move.service'
  ])

  .service('PlayerService', function (PlayerTurnService, PlayerMoveService) {

    this.init = function (player) {
      this.player = player;
    };

    this.initPlayerTurn = function () {
      PlayerTurnService.init(this.player);
      this.setPlayerTurn();
    };

    this.getPlayer = function () {
      return this.player;
    };

    this.getPlayerTurn = function () {
      return this.player.turn;
    };

    this.setPlayerTurn = function () {
      this.player.turn = PlayerTurnService.getPlayerTurn();
    };

    this.toggleTurn = function () {
      PlayerTurnService.toggle();
      this.setPlayerTurn();
    };

    this.isMoveValid = function (fromTile, toTile) {
      return PlayerMoveService.isValid(fromTile, toTile);
    };

  });