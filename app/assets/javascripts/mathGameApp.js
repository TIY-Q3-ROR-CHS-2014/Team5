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

      .when("/gameover", {

        templateUrl:'gameover.html',
        controller:'mathGameCtrl'

      })

  })

.config(["$httpProvider", function(provider) {
    provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
}]);


angular.module("appSvc", []);
angular.module("appCtrl", []);
