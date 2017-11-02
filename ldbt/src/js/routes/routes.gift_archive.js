(function () {

  angular.module('routes.gift_archive', [])

    .config(function ($routeProvider) {

      $routeProvider.when('/gift_archive', {

        controller: 'GiftArchive',
        templateUrl: '/html/routes/routes.gift_archive.html',
        resolve: {
          checkout: function (api, $location, routeService) {
            $('.preloader').show();
            if ($location.path()) {
              routeService.setPrev($location.path());
            }
          },
          loadGift: function (api) {
            return api.gifts.list({
              verbose: 1,
              show_disabled: 1
            });
          },
          loadArchive: function (api) {
            if (!api.auth) {
              $('.preloader').hide();
            }
            return api.gifts.archive({per_page: 8})

          }
        }

      });

    })

    .controller('GiftArchive', function (tools, api, $scope, plural, $q) {

      $scope.plural = plural.get;

      $scope.archive = api.data('gifts.archive');

      $scope.gifts = api.data('gifts.list');

      // Default type of list
      $scope.type = 'used';

      // Array of all data and current( default archive gifts )
      $scope.data = $scope.current_data = $scope.archive().purchase_gifts;

      var now = new Date();

      // Array of inactive gifts
      $scope.inactive = $scope.gifts().filter(function (item) {
        return item.enabled == false && (item.quantity == 0 || item.end_date && new Date(item.end_date) < now);
      });

      $scope.page = 1;

      $scope.per_page = 8;

      $scope.total_pages = $scope.archive().num_pages;

      $scope.filterBy = function (type) {

        if (type == $scope.type) return;
        $scope.type = type;
        $scope.page = 1;
        $scope.data = $scope[type];
        $scope.change_page();
      };

      $scope.change_page = function (page) {

        $('.preloader').show();

        $scope.page = +page || 1;

        if ($scope.type == 'used') {

          api.gifts.archive({page: $scope.page, per_page: $scope.per_page}).then(function (res) {

            $scope.current_data = res.purchase_gifts;

            $scope.total_pages = res.num_pages;

            $('.preloader').hide();

          });

        } else if ($scope.type == 'inactive') {

          $scope.current_data = $scope.data.slice(($scope.page - 1) * $scope.per_page, ($scope.page - 1) * $scope.per_page + $scope.per_page);

          $scope.total_pages = Math.ceil($scope.data / $scope.per_page);

          $('.preloader').hide();

        }

      };

      $('.preloader').hide();

    });

}());
