angular.module('appSvc')

  .factory('mathGameSvc', ['$http', function($http) {

    var loadData = function() {

      return $http.get('./questions.json');

    };

    var updateScore = function(user) {

      $http.put('./users/' + user.id, user);

    };

    var finalScore = 0;

    var getFinalScore = function(score) {
      finalScore = score;
      console.log(finalScore)
    };

    return {

      loadData:loadData,
      updateScore:updateScore,
      getFinalScore:getFinalScore,
      finalScore:finalScore

    }

  }]);
