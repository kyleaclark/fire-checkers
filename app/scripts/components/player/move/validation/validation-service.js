'use strict';

angular.module('Checkers.player.move.validation.service', [
    'Checkers.player.turn.service'
  ])

  .service('PlayerMoveValidationService', function (PlayerTurnService) {

    this.validate = function (fromTile, toTile) {
      this.fromTile = fromTile;
      this.toTile = toTile;

      if (!this.verifyMove()) {
        return false;
      }

      return true;
    };

    this.verifyMove = function () {
      var 
        playerTurn = PlayerTurnService.getPlayerTurn(),
        playerDirection = 1;

      if (playerTurn === 'red') {
        playerDirection = -1;
      }

      return this.isMoveValid(playerDirection);
    };

    this.isMoveValid = function (dir) {
      var
        fromRow = this.fromTile.row,
        fromCol = this.fromTile.col,
        toRow = this.toTile.row,
        toCol = this.toTile.col;

      if (this.toTile.piece.player !== '') {
        return false;
      }

      // Todo: Update this very basic move verification
      if (toRow === fromRow + dir && (toCol === fromCol + 1 || toCol === fromCol - 1)) {
        return true
      }

      return false;
    };

  });