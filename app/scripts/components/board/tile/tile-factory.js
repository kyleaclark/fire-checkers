'use strict';

angular.module('Checkers.board.tile.factory', [])

  .factory('BoardTileFactory', function () {

    function Tile(row, col, tileIndex, isBlack, piece) {
      this.row = row;
      this.col = col;
      this.tileIndex = tileIndex;
      this.isBlack = isBlack;
      this.piece = piece;
    }

    return Tile;
  });