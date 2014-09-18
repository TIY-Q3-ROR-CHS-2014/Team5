angular.module('appSvc')

  .factory('mathGameSvc', function($http) {

    var loadData = function() {

      return $http.get('./questions.json');

    };

    var updateScore = function(user) {

      $http.put('./users/' + user.id, user);

    };

    return {

      loadData:loadData,
      updateScore:updateScore

    }

  });
