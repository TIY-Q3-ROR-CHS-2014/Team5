angular.module('appCtrl')
  .controller('leaderboardCtrl', ['$scope', 'leaderboardSvc',function($scope, leaderboardSvc) {

    $scope.hello = "HELLO"

    leaderboardSvc.getUsers().success(function(data) {

      $scope.users = data.users;
     
      $scope.currentUser = data.currentuser;
    

    });

    $scope.predicate = "-total_score";

  }]);
