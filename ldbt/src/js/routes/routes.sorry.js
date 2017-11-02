(function () {

  angular.module('routes.sorry', [])

    .config(function ($routeProvider, config) {

      $routeProvider.when('/sorry', {
        controller: 'Sorry',
        templateUrl: '/html/routes/routes.sorry.html',
        resolve: {}
      });

    })

    .controller('Sorry', function ($scope) {
      $('.preloader').hide();
    });

}());
