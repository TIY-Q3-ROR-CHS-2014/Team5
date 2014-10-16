angular.module('appCtrl')
  .controller('leaderboardCtrl', ['$scope', 'leaderboardSvc',function($scope, leaderboardSvc) {

    $scope.hello = "HELLO"

    leaderboardSvc.getUsers().success(function(data) {

      $scope.users = data.users;
      console.log($scope.users);
      $scope.currentUser = data.currentuser;
      console.log($scope.currentUser);

    });

    $scope.predicate = "-total_score";

  }]);
