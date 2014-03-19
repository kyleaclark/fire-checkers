'use strict';

angular.module('Checkers.player.move.service', [
    'Checkers.player.move.validation.service'
  ])

  .service('PlayerMoveService', function (PlayerMoveValidationService) {

    this.isValid = function (fromTile, toTile) {
      if (PlayerMoveValidationService.validate(fromTile, toTile)) {
        return true;
      }
    };

  });