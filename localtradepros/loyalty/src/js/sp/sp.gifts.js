(function () {

  angular.module('sp.gifts', [])

    .directive('sailplayGifts', function (sp, sp_api, $timeout, $rootScope) {

      return {

        restrict: 'A',
        replace: false,
        scope: true,
        link: function (scope) {

          scope.gifts = sp_api.data('load.gifts.list');
          scope.user = sp_api.data('load.user.info');

          scope.close_gift = function () {

            $('.js-gift-popup').bPopup().close();
            $timeout(function () {
              scope.gift = null;
            }, 500)

          };

          sp.on('gift.purchase.error', function (res) {

            if (res && res.status == 'error' && res.status_code && res.status_code == '-6001') {

              scope.close_gift();

              $timeout(function () {

                $rootScope.$broadcast('notifier:notify', {

                  header: 'Error',
                  body: res.message

                });

              }, 500);

            }

          });

          scope.open_gift = function (gift) {

            if (scope.user().user_points.confirmed < gift.points) return;

            var offset_top = $('.sp_gift-slider').offset().top;

            scope.gift = angular.copy(gift);
            $('.js-gift-popup').bPopup({
              speed: 450,
              transition: 'fadeIn',
              closeClass: 'js-close-popup',
              positionStyle: 'absolute',
              follow: [true, false],
              position: ['auto', offset_top],
              modal: true,
              modalClose: true,
              modalColor: '#000',
              opacity: 0.3
            });

          };

          scope.gift_purchase = function (gift) {

            if (scope.user().user_points.confirmed < gift.points) return;
            sp.send('gifts.purchase', {gift: gift});
            scope.close_gift();
          };

          sp.on('gift.purchase.force_complete.success', function (res) {

            scope.$apply(function () {

              sp_api.call('load.gifts.list');
              sp_api.call('load.user.info');
              sp_api.call('load.user.history');

            });

          });

        }

      };

    });

}());
