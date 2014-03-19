'use strict';

angular.module('Checkers.board.piece.directive', [
    'Checkers.board.tile.service'
  ])

  .directive('boardPiece', function (BoardTileService) {

    return function (scope, element) {
      element.bind('dragstart', function (ev) {
        ev.originalEvent.dataTransfer.effectAllowed = 'move';
        ev.originalEvent.dataTransfer.setData('text/html', this.innerHTML);
        BoardTileService.onTilePieceDragStart(scope.tile);
      });
    }

  });