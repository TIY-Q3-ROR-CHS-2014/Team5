angular.module('appSvc')

  .factory('mathGameSvc', function($http) {

    var loadData = function() {

      return $http.get('./questions.json');

    };

    var updateScore = function(user) {

      $http.put('./users/' + user.id, user);

    };
<<<<<<< HEAD

    var finalScore = 0;

    var getFinalScore = function(score) {
      finalScore = score;
      console.log(finalScore)
    };


=======
>>>>>>> beef6356ecb6337cfd0879b3bb8223eeb71e8e1e

    return {

      loadData:loadData,
      updateScore:updateScore,
      getFinalScore:getFinalScore,
      finalScore:finalScore

    }

  });
