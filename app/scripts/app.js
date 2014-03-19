'use strict';

angular.module('Checkers', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'Checkers.controller',
  'Checkers.components'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/checkers.html',
        controller: 'CheckersController'
      })
      .otherwise({
        redirectTo: '/'
      });

    // Set HTML5 Routing
    $locationProvider.html5Mode(true);
  });
