module.exports = angular.module('jamApp.meetings', [

])
  .controller('MeetingsCtrl',      require('./meetings_controller'))
  .controller('MeetingCreateCtrl', require('./meeting_create_controller'))
  .config(['$routeProvider', function($routeProvider) {
    'use strict';

    $routeProvider
      .when('/meetings', {
        templateUrl: 'template/meetings.html',
        controller: 'MeetingsCtrl'
      })
      .when('/meeting_create', {
        templateUrl: 'template/meeting_create.html',
        controller: 'MeetingCreateCtrl'
      });

  }]);