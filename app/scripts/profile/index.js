module.exports = angular.module('jamApp.profile', [])
  .factory('Profile',            require('./profile_factory'))
  .controller('ProfileCtrl',     require('./profile_controller'))
  .config(['$routeProvider', function($routeProvider) {
    'use strict';

    $routeProvider
      .when('/profile', {
        templateUrl: 'template/profile.html',
        controller: 'ProfileCtrl'
      });

  }]);