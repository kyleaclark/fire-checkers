'use strict';

describe('Checkers.board.controller', function () {

  var 
    BoardController,
    scope,
    mockBoardService,
    mockBoardTileService,
    mockPlayerTurnService;

  beforeEach(function () {
    mockBoardService = {
      onBoardTileClick: function () { return true; }
    };

    mockBoardTileService = {
      updateTilePieceSelect: function () { return true; }
    };

    mockPlayerTurnService = {
      getPlayerTurn: function () { return true; },
      toggle: function () { return true; }
    };

    module('Checkers.board.controller', function ($provide) {
      $provide.value('BoardService', mockBoardService);
      $provide.value('BoardTileService', mockBoardTileService);
      $provide.value('PlayerTurnService', mockPlayerTurnService);
    });

    // Initialize the controller and a mock scope
    inject(function ($controller, $rootScope, BoardService, BoardTileService, PlayerTurnService) {
      scope = $rootScope.$new();
      BoardController = $controller('BoardController', {
        $scope: scope,
      });
    });
  });

  describe('$scope.onBoardTileClick function', function () {

    it('should set scope.game.board.tile to tile param value', function () {
      // Arrange
      var tile = {};

      scope.game = {
        board: {}
      };

      // Act
      scope.onBoardTileClick(tile);

      // Assert
      expect(scope.game.board.newTile === tile).toBe(true);
    });

  });

});