'use strict';

angular.module('Checkers.board.tile.service', [
    'Checkers.player.service'
  ])

  .service('BoardTileService', function (PlayerService, GameService) {

    this.onTilePieceDragStart = function (tile) {
      this.fromTile = tile;
    };

    this.onTileDragEnter = function (toTile) {
      this.toTile = toTile;

      this.validTile = PlayerService.isMoveValid(this.fromTile, this.toTile)

      if (this.validTile) {
        this.toTile.dragOver = 'valid';
      } else {
        this.toTile.dragOver = 'invalid';
      }
    };

    this.onTileDrop = function (toTile) {
      if (this.validTile) {
        this.updatePieceMove();
        this.updatePlayerTurn();
      }

      this.toTile.dragOver = false;
    };

    this.updatePieceMove = function () {
      this.toTile.piece = this.fromTile.piece;
      this.fromTile.piece = {};
    };

    this.updatePlayerTurn = function () {
      PlayerService.toggleTurn();
      GameService.whatisPlayerTurn();
    };

    this.updateTilePieceSelect = function (newTile, currentTile) {
      if (currentTile !== null) {
        currentTile.piece.isSelected = false;
      }
      newTile.piece.isSelected = true;
    };

    this.updateTilePieceMove = function (newTile, currentTile) {
      newTile.piece = currentTile.piece;
      currentTile.piece = {};
      newTile.piece.isSelected = false;
    };

  });