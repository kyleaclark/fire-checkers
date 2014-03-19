'use strict';

angular.module('Checkers.game.controller', [
    'Checkers.game.service',
    'Checkers.player.service'
  ])

  .controller('GameController', function ($scope, GameService) {

    $scope.init = function () {
      this.playNewSoloGameBtn = true;
      this.joinMultiPlayerGameBtn = true;
    };

    $scope.playNewSoloGame = function () {
      this.initGame();
      this.addSoloFirebaseGame();
      this.hideGameBtns();
    };

    $scope.joinMultiPlayerGame = function () {
      this.joinFirebaseGame();
      this.initGame();
      this.hideGameBtns();
    };

    $scope.initGame = function () {
      GameService.init(this.game);
    };

    /**
    * Hide game buttons after a new game is started until app set up to handle consecutive new games
    */
    $scope.hideGameBtns = function () {
      this.playNewSoloGameBtn = false;
      this.joinMultiPlayerGameBtn = false;
    };

    $scope.$watch(
      "game.board",
      function (newValue, oldValue) {
        console.log('board : ', newValue);
      }
    );

    $scope.$watch(
      "game.player",
      function (newValue, oldValue) {
        console.log('player : ', newValue);
      }
    );

    $scope.init();
  });