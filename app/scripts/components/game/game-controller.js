'use strict';

angular.module('Checkers.game.controller', [
    'Checkers.game.service',
    'Checkers.player.service'
  ])

  .controller('GameController', function ($scope, GameService, PlayerService) {

    var self = $scope;

    $scope.init = function () {
      self.game = {};
      self.playNewSoloGameBtn = true;
      self.joinMultiPlayerGameBtn = true;
    };

    $scope.playNewSoloGame = function () {
      self.initGame();
      self.addSoloFirebaseGame();
      self.hideGameBtns();
    };

    $scope.joinMultiPlayerGame = function () {
      self.joinFirebaseGame();
      self.initGame();
      self.hideGameBtns();
    };

    $scope.initGame = function () {
      self.game = GameService.init(self.game);
    };

    /**
    * Hide game buttons after a new game is started until app set up to handle consecutive new games
    */
    $scope.hideGameBtns = function () {
      self.playNewSoloGameBtn = false;
      self.joinMultiPlayerGameBtn = false;
    };

    $scope.$on('digestIt', function (ev) {
      self.game.player = GameService.getPlayer();
      //$scope.$apply();
    });

    $scope.init();
  });