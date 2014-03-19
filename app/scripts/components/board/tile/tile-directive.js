'use strict';

angular.module('Checkers.board.tile.directive', [
    'Checkers.board.tile.service'
  ])

  .directive('boardTile', function (BoardTileService) {

    return function (scope, element) {
      element.bind('dragover', function (ev) {
        ev.preventDefault();
      });

      element.bind('dragenter', function (ev) {
        ev.preventDefault();
        BoardTileService.onTileDragEnter(scope.tile);
        scope.$digest();
      });

      element.bind('dragleave', function (ev) {
        ev.preventDefault();
        scope.tile.dragOver = false;
        scope.$digest();
      });

      element.bind('dragend', function (ev) {
        ev.preventDefault();
      });

      element.bind('drop', function (ev) {
        ev.preventDefault();
        scope.$apply(function () {
          BoardTileService.onTileDrop(scope.tile);
        });
      });
    }

  });