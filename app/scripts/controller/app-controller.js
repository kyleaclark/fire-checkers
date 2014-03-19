'use strict';

angular.module('Checkers.controller', [
    'firebase'
  ])

  .controller('CheckersController', function ($scope, $firebase) {

  	$scope.init = function () {
  	  this.initFirebase();
      this.game = {};
  	}

  	$scope.initFirebase = function () {
      var fireObj = {};

      this.firebaseCheckersUrl = 'https://radiant-fire-3265.firebaseio.com/checkers';
      fireObj = new Firebase(this.firebaseCheckersUrl);

      this.checkers = $firebase(fireObj);
    };

    $scope.addSoloFirebaseGame = function () {
      this.checkers.$add({game: this.game});
      this.indexGameKeys();
      this.gameKey = this.gameKeys[this.gameKeysLength - 1];
      this.createFirebaseGame();
      this.bindFirebaseGame();
    };

    $scope.joinFirebaseGame = function () {
      this.indexGameKeys();

      if (this.gameKeysLength > 0) {
        this.gameKey = this.gameKeys[0];

        this.createFirebaseGame();

        this.game = this.checkers[this.gameKey].game;

        this.bindFirebaseGame();
      } else {
        this.addSoloFirebaseGame();
      }
    };

    $scope.indexGameKeys = function () {
      this.gameKeys = this.checkers.$getIndex();
      this.gameKeysLength = this.gameKeys.length;
    };

    $scope.createFirebaseGame = function () {
      var
        fireUrl = this.firebaseCheckersUrl + '/' + this.gameKey + '/game',
        fireObj = new Firebase(fireUrl);

      this.firebaseGame = $firebase(fireObj);
    };

    $scope.bindFirebaseGame = function () {
      this.firebaseGame.$bind($scope, 'game');
    };

    $scope.init();
  });