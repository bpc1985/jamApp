module.exports = angular.module('jamApp.matches', [])
  .factory('Matches',         require('./matches_factory'))
  .controller('MatchesCtrl',  require('./matches_controller'))
  .config(['$routeProvider', function($routeProvider) {
    'use strict';

    $routeProvider
      .when('/matches', {
        templateUrl: 'template/matches.html',
        controller: 'MatchesCtrl'
      });

  }]);