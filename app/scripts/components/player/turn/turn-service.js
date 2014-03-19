'use strict';

angular.module('Checkers.player.turn.service', [])

  .service('PlayerTurnService', function () {

    /**
    * Initialize instance
    */
    this.init = function () {
      this.initVars();
      this.setPlayerTurn(this.FIRST_TURN);
    };

    /**
    * Initialize instance variables
    */
    this.initVars = function () {
      this.BLACK = 'black';
      this.RED = 'red';
      this.FIRST_TURN = this.BLACK;
    };

    /**
    * Get player turn value
    */
    this.getPlayerTurn = function () {
      return this.playerTurn;
    };

    /**
    * Set player turn value
    */
    this.setPlayerTurn = function (val) {
      this.playerTurn = val;
    };

    /**
    * Toggle player turn
    */
    this.toggle = function () {
      var turn = this.getPlayerTurn();

      if (turn === this.BLACK) {
        this.setPlayerTurn(this.RED);
      } else {
        this.setPlayerTurn(this.BLACK);
      }
    };

  });