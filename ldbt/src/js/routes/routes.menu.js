(function () {

  angular.module('routes.menu', [])

    .config(function ($routeProvider, config) {

      $routeProvider.when('/menu', {
        controller: 'Menu',
        templateUrl: '/html/routes/routes.menu.html',
        resolve: {
          checkout: function (api, $location, routeService) {
            $('.preloader').show();
            if($location.path()){
              routeService.setPrev($location.path());
            }
          },
          loadInfo: ['api', function (api) {
            return api.user.info();
          }],
          loadGifts: ['api', function (api) {
            return api.gifts.list().then(function(){
              $('.preloader').hide();
            })
          }
          ]
        }
      });

    })

    .controller('Menu', function ($scope, api, plural) {
      $scope.user = api.data('user.info');
      $scope.gifts = api.data('gifts.list');
      $scope.enough = false;

      $scope.plural = plural.get;

      function compare(a, b) {
        if (a.points < b.points)
          return -1;
        else if (a.points > b.points)
          return 1;
        else
          return 0;
      }

      $scope.count = 0;

      $scope.gifts().sort(compare);

      $scope.getMinimalCounts = function(){
        if(!$scope.gifts || !$scope.gifts()) return 0;
        return $scope.gifts().filter(function(item){
          return $scope.gifts()[0].points == item.points;
        }).length;
      };

      if ($scope.gifts && $scope.gifts() && $scope.user && $scope.user()) {
        var points = $scope.user().user_points.confirmed;
        for (var i = 0, len = $scope.gifts().length; i < len; i++) {
          var item = $scope.gifts()[i];
          if (points >= item.points) {
            $scope.enough = true;
            $scope.last = item;
            $scope.count++;
          }
        }
      }

      if (!$scope.enough) {
        $scope.last = $scope.gifts()[0];
      }


    });

}());
