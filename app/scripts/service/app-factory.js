'use strict';

angular.module('Checkers.factory', [
    'Checkers.game.factory'
  ])

  .factory('CheckersFactory', function (GameFactory) {

    function Board() {}

    Board.prototype.init = function () {
      this.generateTiles();
      this.generatePieces();
    };

    Board.prototype.generateTiles = function () {
      this.tiles = [];
      var isBlack = true;
      
      for (var i = 0; i < 64; i ++) {
        isBlack = !isBlack;
        var col = Math.floor(i/8);
        var row = i % 8;

        if (i % 8 === 0) {
          isBlack = !isBlack;
        }

        var tile = new GameFactory(col, row, isBlack);
        this.tiles.push(tile);
      }
    };

    Board.prototype.generatePieces = function () {
      this.pieces = [];
      var state = 0;
      
      for (var i = 0; i < 32; i ++) {
        state = 1;
        var col = Math.floor(i/8);
        var row = i % 8;

        if (i % 8 === 0) {
          state = 2;
        }

        var piece = new BoardPieceFactory(col, row, state);
        this.pieces.push(piece);
      }
    };

    return Board;
  });