angular.module("mathGame", ['ngRoute', 'templates', 'appSvc', 'appCtrl'])

  .config(function($routeProvider) {

    $routeProvider

      .when("/", {

        templateUrl:'leaderboard.html',
        controller:'leaderboardCtrl'

      })

      .when("/game", {

        templateUrl:'mathGame.html',
        controller:'mathGameCtrl'

      })

  });

angular.module("appSvc", []);
angular.module("appCtrl", []);
