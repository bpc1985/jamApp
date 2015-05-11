module.exports = angular.module('jamApp.common', [])

  .constant('API_URL', 'http://www.jamnow.eu/match/')

  .factory('requests', require('./requests_factory'));