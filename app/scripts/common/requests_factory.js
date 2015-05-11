/**
 * Convenience service for making HTTP requests from services in a less
 * verbose manner.
 */
module.exports = ['$http', '$q', function($http, $q) {
  'use strict';

  var setJsonContentType = function(req) {
    if (!_.isObject(req.headers)) {
      req.headers = {};
    }
    req.headers['Content-Type'] = 'application/json';
  };

  var makeRequest = function(request, successHandler) {
    var d = $q.defer();
    $http(request).then(function(result) {
      d.resolve(successHandler(result));
    }, function(result){
      d.reject(result);
    });
    return d.promise;
  };

  var getData = function(response) {
    if (response) {
      return response.data;
    }
  };

  var getLocation = function(response) {
    return response.headers('Location');
  };

  return {
    get: function(req) {
      req.method = 'GET';
      return makeRequest(req, getData);
    },
    post: function(req) {
      req.method = 'POST';
      return makeRequest(req, getData);
    },
    postJSON: function(req) {
      req.method = 'POST';
      setJsonContentType(req);
      return makeRequest(req, getData);
    },
    postJSONAndExtractLocation: function(req) {
      req.method = 'POST';
      setJsonContentType(req);
      return makeRequest(req, getLocation);
    },
    putJSON: function(req) {
      req.method = 'PUT';
      setJsonContentType(req);
      return makeRequest(req, getData);
    },
    delete: function(req) {
      req.method = 'DELETE';
      return makeRequest(req, getData);
    }
  };

}];
