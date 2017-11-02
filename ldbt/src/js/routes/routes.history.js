(function () {

  angular.module('routes.history', [])

    .config(function ($routeProvider, config) {

      $routeProvider.when('/history', {

        controller: 'History',
        templateUrl: '/html/routes/routes.history.html',
        resolve: {
          checkout: function (api, $location, routeService) {
            $('.preloader').show();
            if ($location.path()) {
              routeService.setPrev($location.path());
            }
          },
          loadInfo: ['api', function (api) {
            return api.user.info();
          }],
          loadHistory: ['api', function (api) {
            return api.user.history().then(function () {
              $('.preloader').hide();
            });
          }
          ]
        }

      })

    })

    .controller('History', function (sp, api, $scope, userService, plural) {

      $scope.user = api.data('user.info');
      $scope.history = api.data('user.history');
      $scope.history_data = null;
      $scope.history_date_format = userService.historyDateFormat;
      $scope.get_history_name = userService.getHistoryActionName;
      $scope.per_page = 15;
      $scope.plural = plural.get;

      $scope.change_page = function (page) {
        $scope.page = +page || 1;
        $scope.history_data = $scope.history && $scope.history() && $scope.history().slice(($scope.page - 1) * $scope.per_page, ($scope.page - 1) * $scope.per_page + $scope.per_page);
      };

      function update() {
        api.user.info();
        api.user.history();
      }

      $scope.history_item_click = function(action){
        $('.preloader').show();
        if(action.action == 'purchase'){
          if(!action.purchase_data) {
            api.user.purchase_info({id : action.id}).then(function(res){
              if(res && res.cart && res.cart.cart && res.cart.cart.positions) {
                action.purchase_data = res && res.cart.cart.positions;
              }
              $('.preloader').hide();
            })
          } else {
            delete action.purchase_data;
            $('.preloader').hide();
          }
        }
      };

      $scope.change_page();

      sp.on('gift.purchase.force_complete.success', function (res) {
        update();
      });

      sp.on('actions.perform.success', function (data) {
        update();
      });

    });

}());
