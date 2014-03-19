'use strict';

angular.module('Checkers.board.piece.factory', [])

  .factory('BoardPieceFactory', function () {

    function Piece(player, index, tileCoordinate) {
      this.player = player;
    }

    return Piece;
  });