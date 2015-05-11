module.exports = angular.module('jamApp.contact', [])
  .controller('ContactCtrl',     require('./contact_controller'))
  .config(['$routeProvider', function($routeProvider) {
    'use strict';

    $routeProvider
      .when('/contact', {
        templateUrl: 'template/contact.html',
        controller: 'ContactCtrl'
      });

  }]);