module.exports = angular.module('jamApp.matches', [])
  .factory('Matches',         require('./matches_factory'))
  .controller('MatchesCtrl',  require('./matches_controller'))
  .config(['$routeProvider', function($routeProvider) {
    'use strict';

    var resolveMatchesData = function($route, Matches) {
      return Matches.getMatchesByTicketRef($route.current.params.ticketref).then(function(response){
        console.log('response: ', response);
      });
    };
    resolveMatchesData.$inject = ['$route', 'Matches'];

    $routeProvider
      .when('/matches', {
        templateUrl: 'template/matches.html',
        controller: 'MatchesCtrl',
        controllerAs: 'ctrl',
        resolve: {
          matchesData: resolveMatchesData
        }
      });

  }]);