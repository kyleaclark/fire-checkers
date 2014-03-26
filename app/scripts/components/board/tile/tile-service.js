'use strict';

angular.module('Checkers.board.tile.service', [
    'Checkers.player.service',
    'Checkers.board.service',
    'Checkers.game.service'
  ])

  .service('BoardTileService', function (PlayerService, BoardService, GameService) {

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
      this.toTile.dragOver = false;

      if (this.validTile) {
        this.updatePieceMove();
        this.updatePlayerTurn();
        return true;
      }

      return false;
    };

    this.updatePieceMove = function () {
      this.toTile.piece = this.fromTile.piece;
      this.fromTile.piece = {};
      this.fromTile.piece.player = '';

      BoardService.updateBoardTilePiece(this.fromTile.tileIndex, this.fromTile.piece);
      BoardService.updateBoardTilePiece(this.toTile.tileIndex, this.toTile.piece);
    };

    this.updatePlayerTurn = function () {
      //PlayerService.toggleTurn();
      GameService.updatePlayerTurn();
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
      currentTile.piece.player = '';
      newTile.piece.isSelected = false;
    };

  });