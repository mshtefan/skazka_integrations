(function () {

  angular.module('sp.gifts', [])

    .filter('giftsGroup', function () {
      return function (items, limits) {
        if (!items || !limits) return false;
        return items.filter(function (el) {
          if (
            el.points >= limits.from
            && (!limits.to || limits.to && el.points < limits.to)
          ) {
            return true;
          }
        });
      }
    })

    .directive('sailplayGiftsGroup', function (status_service, $filter) {

      return {

        restrict: 'A',
        replace: false,
        templateUrl: '/html/ui/ui.gifts.group.html',
        scope: {
          gifts: '=',
          limit: '='
        },
        link: function (scope, el) {

          scope.needToShow = function () {
            if (!scope.gifts || !scope.limit) return false;
            var length;
            if (scope.getLimits(scope.limit)) {
              length = $filter('giftsGroup')(scope.gifts, scope.getLimits(scope.limit)).length;
            }
            return length;
          };

          $(el).find('.bns_show_more').click(function () {
            $(this).closest('.bns_choice_gift_main').toggleClass('bns_open');
            var text = $(this).text();
            $(this).text(text == "show less" ? "show more" : "show less");
            return false;
          });

          scope.getLimits = function (lim) {
            var limits = status_service.get_limits();
            var index = limits.indexOf(lim);
            return {from: lim, to: limits[index + 1] || null};
          };

        }

      }

    })

    .directive('sailplayGifts', function (sp, sp_api, $timeout, $rootScope) {

      return {

        restrict: 'A',
        replace: false,
        scope: true,
        link: function (scope, el) {

          scope.gifts = sp_api.data('load.gifts.list');
          scope.user = sp_api.data('load.user.info');

          var gift = null;

          $("body").delegate(".bns_choice_gift_main.act .bgi_right a", "click", function () {
            var item = $(this).closest('.bns_gift_item');
            gift = $(this).data('gift');
            $('.bns_load_block_gift h2').html("You're about to spent " + gift.points +  " bonus points on " + gift.name);
            $('.bns_overlay_get_gift').fadeIn();
            return false;
          });

          sp.on('gift.purchase.error', function (res) {
            if (res && res.status == 'error' && res.status_code && res.status_code == '-6001') {
              $(el).find('.bns_overlay_get_gift').fadeOut();
              $timeout(function () {
                gift = null;
                $rootScope.$broadcast('notifier:notify', {
                  header: 'Error',
                  body: res.message
                });
              }, 500);
            }
          });

          scope.gift_purchase = function () {
            if (!gift) return;
            if (scope.user().user_points.confirmed < gift.points) return;
            sp.send('gifts.purchase', {gift: gift});
            $(el).find('.bns_overlay_get_gift').fadeOut();
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
