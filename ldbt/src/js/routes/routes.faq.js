(function () {

  angular.module('routes.faq', ['ngSanitize'])

    .config(function ($routeProvider, config) {

      $routeProvider.when('/faq', {

        controller: 'Faq',
        templateUrl: '/html/routes/routes.faq.html',
        resolve: {
          checkout: function (api, $location, routeService) {
            $('.preloader').show();
            if ($location.path()) {
              routeService.setPrev($location.path());
            }
            $('.preloader').hide();
          },
        }

      });

    })

    .controller('Faq', function ($scope, faqService) {
      $('.preloader').hide();
      $scope.data = faqService.data();
    });

}());
