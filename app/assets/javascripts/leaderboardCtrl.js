angular.module('appCtrl')
  .controller('leaderboardCtrl', function($scope, leaderboardSvc) {

    $scope.hello = "HELLO"

    leaderboardSvc.getUsers().success(function(data) {

      $scope.users = data;

    });

  });
