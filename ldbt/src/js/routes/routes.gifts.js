(function () {

  angular.module('routes.gifts', [])

    .config(function ($routeProvider, config) {

      $routeProvider.when('/gifts', {

        controller: 'Gifts',
        templateUrl: '/html/routes/routes.gifts.html',
        resolve: {
          checkout: function (api, $location, routeService) {
            $('.preloader').show();
            if ($location.path()) {
              routeService.setPrev($location.path());
            }
          },
          loadInfo: function (api) {
            return api.user.info();
          },
          loadGifts: ['api', function (api) {
            return api.gifts.list({verbose: 1}).then(function () {
              $('.preloader').hide();
            })
          }
          ]
        }

      });

    })

    .controller('Gifts', function (sp, api, $scope, $timeout, plural) {

      var _default = {
        avaliable: [],
        not_avaliable: []
      };

      $scope.get_gift = null;
      $scope.gift_detail = null;

      //TODO: переделать фильтр
      $scope.plural = plural.get;
      $scope.user = api.data('user.info');
      $scope.list = api.data('gifts.list');

      $scope.gifts = angular.copy(_default);

      $scope.filterBy = function (type) {
        $scope.type = type;
        $scope.data = $scope.gifts[type];
      };

      $scope.openGift = function (gift) {
        $scope.gift_detail = angular.copy(gift);
      };

      $scope.gift_purchase = function (gift) {
        $scope.get_gift = angular.copy(gift);
        $scope.gift_detail = null;
        $scope.gift_ok = null;
        if ($scope.user().user_points.confirmed < gift.points) {
          return;
        }
        sp.send('gifts.purchase', {gift: gift, options: {no_user_sms: 1}});
      };

      function orderArrays() {
        $scope.gifts = angular.copy(_default);
        if (!$scope.user || !$scope.user() || !$scope.list || !$scope.list()) return;
        var _list = $scope.list().filter(function(gift){
          return !gift.is_over_quantity_per_user;
        });
        angular.forEach(_list, function (val, key) {
          if (val.points <= $scope.user().user_points.confirmed) {
            $scope.gifts.avaliable.push(val);
          } else {
            $scope.gifts.not_avaliable.push(val);
          }
        });
        $scope.filterBy('avaliable');
      }

      function update() {
        api.user.info().then(function () {
          api.gifts.list({verbose: 1}).then(function () {
            orderArrays();
          })
        });
      }

      orderArrays();

      sp.on('gifts.purchase.success', function (res) {

        $scope.$apply(function() {

          if ($scope.get_gift) {
            $scope.get_gift.show = true;
          }

          $timeout(function () {
            update();
          }, 1000);

        });
      });
      sp.on('gift.purchase.error', function (res) {

        $scope.$apply(function(){

          $scope.get_gift = null;
          $scope.gift_limit = null;
          if (res && res.status == 'error' && res.status_code && res.status_code == '-6001') {
            $scope.gift_limit = true;
          }

        });

      });


    });

}());
