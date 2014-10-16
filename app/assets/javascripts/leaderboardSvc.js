angular.module('appSvc')

  .factory('leaderboardSvc', ['$http', function($http) {

    var getUsers = function(){

      return $http.get('./users.json');

    };

    return {

      getUsers:getUsers

    }

  }]);
