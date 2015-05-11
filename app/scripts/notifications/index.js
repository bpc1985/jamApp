module.exports = angular.module('jamApp.notifications', [])
  .controller('NotificationsCtrl',     require('./notifications_controller'))
  .config(['$routeProvider', function($routeProvider) {
    'use strict';

    $routeProvider
      .when('/notifications', {
        templateUrl: 'template/notifications.html',
        controller: 'NotificationsCtrl'
      });

  }]);