module.exports = angular.module('jamApp.meetings', [

])
  .factory('Meetings',          require('./meetings_factory'))
  .controller('MeetingsCtrl',      require('./meetings_controller'))
  .controller('MeetingCreateCtrl', require('./meeting_create_controller'))
  .config(['$routeProvider', function($routeProvider) {
    'use strict';

    var resolveMeetingsData = function($route, Meetings) {
      return Meetings.getMeetingsByTicketRef($route.current.params.ticketref).then(function(response){
        return response.meetings;
      });
    };
    resolveMeetingsData.$inject = ['$route', 'Meetings'];

    $routeProvider
      .when('/meetings', {
        templateUrl: 'template/meetings.html',
        controller: 'MeetingsCtrl',
        controllerAs: 'ctrl',
        resolve: {
          meetingsData: resolveMeetingsData
        }
      })
      .when('/meeting_create', {
        templateUrl: 'template/meeting_create.html',
        controller: 'MeetingCreateCtrl'
      });

  }]);