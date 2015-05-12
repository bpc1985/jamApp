module.exports = angular.module('jamApp.profile', [])
  .factory('Profile',            require('./profile_factory'))
  .controller('ProfileCtrl',     require('./profile_controller'))
  .config(['$routeProvider', function($routeProvider) {
    'use strict';

    var resolveProfileData = function($route, Profile) {
      return Profile.getProfileByTicketRef($route.current.params.ticketref).then(function(response){
        return response.profile;
      });
    };
    resolveProfileData.$inject = ['$route', 'Profile'];

    $routeProvider
      .when('/profile', {
        templateUrl: 'template/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'ctrl',
        resolve: {
          profileData: resolveProfileData
        }
      });

  }]);