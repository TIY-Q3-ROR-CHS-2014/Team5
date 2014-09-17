angular.module('appCtrl')

  .controller('mathGameCtrl', function($scope, $location, mathGameSvc) {

    $scope.hello = mathGameSvc.hello;
    $scope.score = 0;
    $scope.index = 0;

    mathGameSvc.loadData().success(function(data) {

      $scope.data = data;
      $scope.questions = $scope.data.question
      $scope.user = $scope.data.user

      $scope.currentQuestion = $scope.questions[$scope.index];

      $scope.nextQuestion = function(answer) {

        if (answer === $scope.currentQuestion.answer) {

          $scope.score += 1;
          $scope.index += 1;

          if ($scope.index === ($scope.questions.length - 1)) {

            $location.path('/');

          }

          $scope.currentQuestion = $scope.questions[$scope.index];
          $scope.answer = {};

        } else if (answer !== $scope.currentQuestion.answer) {

          console.log("WRONG ANSWER");

          if ($scope.index === ($scope.questions.length - 1)) {

            $location.path('/');

          }

          $scope.index += 1;
          $scope.currentQuestion = $scope.questions[$scope.index];
          $scope.answer = {};

        }

      };

    });

  })
