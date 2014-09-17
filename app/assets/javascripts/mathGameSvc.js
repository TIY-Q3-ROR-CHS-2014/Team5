angular.module('appSvc')

  .factory('mathGameSvc', function($http) {

    var loadData = function() {

      return $http.get('./questions.json');

    };

    return {

      loadData:loadData

    }

  });
