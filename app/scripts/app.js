angular.module('jamApp', [
    'ngRoute',
    'ngFabForm',
    'ngMessages',
    'ngAnimate',
    require('./common').name,
    require('./notifications').name,
    require('./meetings').name,
    require('./matches').name,
    require('./profile').name,
    require('./contact').name
  ])
  .config(['$routeProvider', 'ngFabFormProvider', function($routeProvider, ngFabFormProvider){
    'use strict';

    $routeProvider.otherwise({
      redirectTo: '/notifications'
    });

    ngFabFormProvider.extendConfig({
      setAsteriskForRequiredLabel: false,
      validationsTemplate : '/app/templates/error_messages.html'
    });
  }])
  .run(require('./templates'));
