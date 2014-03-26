'use strict';

angular.module('Checkers.board.service', [
    'Checkers.board.tile.factory',
    'Checkers.board.piece.factory'
  ])

  .service('BoardService', function (BoardTileFactory, BoardPieceFactory) {

    this.init = function (board) {
      this.board = board;
    };

    this.initBoard = function () {
      this.generateTiles();
      this.generateTilePieces();
    };

    this.getBoard = function () {
      return this.board;
    };

    this.generateTiles = function () {
      var 
        isBlack = true,
        row = 0,
        col = 0,
        tile = {},
        piece = {
          player: ''
        },
        tileIndex = 0;

      this.board.tiles = [];
      
      for ( ; tileIndex < 64; tileIndex++) {
        isBlack = !isBlack;
        row = Math.floor(tileIndex/8);
        col = tileIndex % 8;

        if (tileIndex % 8 === 0) {
          isBlack = !isBlack;
        }

        tile = new BoardTileFactory(row, col, tileIndex, isBlack, piece);
        this.board.tiles.push(tile);
      }
    };

    this.generateTilePieces = function () {
      this.generateBlackPieces();
      this.generateRedPieces();
    };

    this.generateBlackPieces = function () {
      var
        BLACK_PIECE = 'black',
        piece = {},
        pieceIndex = 0,
        tileIndex = 0;
      
      // Loop forward through tiles to add black pieces
      while (pieceIndex < 12) {

        // If black tile, set tile.piece of tileIndex to new BoardPiece
        if (this.board.tiles[tileIndex].isBlack === true) {
          piece = new BoardPieceFactory(BLACK_PIECE);
          this.board.tiles[tileIndex].piece = piece;

          // Increment index of pieces
          pieceIndex++;
        }

        // Increment index of tiles
        tileIndex++;
      }
    };

    this.generateRedPieces = function () {
      var
        RED_PIECE = 'red',
        piece = {},
        pieceIndex = 0,
        tileIndex = 63;

      // Loop backwards through tiles to add red pieces
      while (pieceIndex < 12) {

        // If black tile, set tile.piece of tileIndex to new BoardPiece
        if (this.board.tiles[tileIndex].isBlack === true) {
          piece = new BoardPieceFactory(RED_PIECE);
          this.board.tiles[tileIndex].piece = piece;

          // Increment index of pieces
          pieceIndex++;
        }

        // Decrement index of tiles
        tileIndex--;
      }
    };

    this.updateBoardTilePiece = function (index, piece) {
      this.board.tiles[index].piece = piece;
    };

  });