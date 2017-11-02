(function () {

  angular.module('routes.feedback', [])

    .config(function ($routeProvider, config) {

      $routeProvider.when('/feedback', {

        controller: 'Feedback',
        templateUrl: '/html/routes/routes.feedback.html',
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

    .controller('Feedback', function ($scope, api, faqService) {
      $('.preloader').hide();
      $scope.msg = '';
      $scope.sendFeedBack = function () {
        if (!$scope.msg) return;
        $('.preloader').show();
        api.user.vars.add({feedbackMessage: $scope.msg}).then(function () {
          api.user.tags.add([faqService.feedback_tag]).then(function () {
            $scope.msg = '';
            $('.preloader').hide();
          })
        })
      };
    });

}());
