'use strict';

describe('Checkers.board.factory', function () {

  var 
    BoardFactory,
    board;

  beforeEach(function () {
    module('Checkers.board.factory');

    // Initialize the factory
    inject(function (_BoardFactory_) {
      BoardFactory = _BoardFactory_;
      board = new BoardFactory();
    });
  });

  describe('Board.prototype.generateTiles', function () {

    beforeEach(function () {
      // Act
      board.generateTiles();
    });

    it('should contain 64 board tiles on the board instance', function () {
      // Assert
      expect(board.tiles.length).toBe(64);
    });

    it('should start at row 0 col 0', function () {
      // Arrange
      var tile = board.tiles[0];

      // Assert
      expect(tile.row).toBe(0);
      expect(tile.col).toBe(0);
    });

    it('should end at row 7 col 7', function () {
      // Arrange
      var tile = board.tiles[63];

      // Assert
      expect(tile.row).toBe(7);
      expect(tile.col).toBe(7);
    });

    it('should be black at the first tile', function () {
      // Arrange
      var tile = board.tiles[0];

      // Assert
      expect(tile.isBlack).toBe(true);
    });

    it('should be black at the last tile', function () {
      // Arrange
      var tile = board.tiles[63];

      // Assert
      expect(tile.isBlack).toBe(true);
    });

  });

  describe('Board.prototype.generateTilePieces', function () {

    beforeEach(function () {
      // Act
      board.generateTiles();
      board.generateTilePieces();
    });

    it('should create black player pieces on the first 16 tiles', function () {
      // Arrange
      var tile;

      for (var i = 0; i < 16; i++) {
        tile = board.tiles[i];
        // Assert
        expect(tile.piece.player).toBe('black');
      }
    });

    it('should create red player pieces on the last 16 tiles', function () {
      // Arrange
      var tile;

      for (var i = 63; i > 47; i--) {
        tile = board.tiles[i];
        // Assert
        expect(tile.piece.player).toBe('red');
      }
    });

  })

});