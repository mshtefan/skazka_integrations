(function () {

  angular.module('routes.pages', [])

    .config(function ($routeProvider, config) {

      $routeProvider.when('/page/:pageName', {
        controller: 'Pages',
        templateUrl: '/html/routes/routes.pages.html',
        resolve: {
          checkout: function (api, $location, routeService) {
            $('.preloader').show();
            if ($location.path()) {
              routeService.setPrev($location.path());
            }
            $('.preloader').hide();
          }
        }
      });

    })

    .controller('Pages', function ($scope, $location, pageService, $routeParams) {

      var name = $routeParams.pageName;
      if (pageService.getPage(name)) {
        $scope.className = name;
        $scope.model = pageService.getPage(name);
      } else {
        $location.path('/')
      }
    });

}());
