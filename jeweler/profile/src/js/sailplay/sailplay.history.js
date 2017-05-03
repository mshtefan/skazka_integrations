import angular from 'angular';

let SailPlayHistory = angular.module('sailplay.history', [])

/**
 * @ngdoc directive
 * @name sailplay.history.directive:sailplayHistory
 * @scope
 * @restrict A
 *
 * @description
 * Simple directive for rendering and operating with SailPlay user's history.
 *
 */
  .directive('sailplayHistory', function (SailPlayApi, SailPlay) {

    return {

      restrict: 'A',
      replace: false,
      scope: true,
      link: function (scope) {

        scope.history = SailPlayApi.data('load.user.history');

        scope.history_current_page = 0;

        // Get all positions for purchase
        scope.history_item_click = function (item) {
          if (item && item.action == 'purchase') {
            if (!item.purchase_data) {

              SailPlay.jsonp.get(
                SailPlay.config().DOMAIN + '/js-api/' + SailPlay.config().partner.id + '/purchases/get/',
                {id: item.id, auth_hash: SailPlay.config().auth_hash},
                function (res) {
                  if (res && res.cart && res.cart.cart && res.cart.cart.positions) {
                    item.purchase_data = res && res.cart.cart.positions;
                    scope.$digest();
                  }
                }
              );

            } else {
              delete item.purchase_data;
            }
          }
        };

        scope.set_current_page = function (page) {
          scope.history_current_page = page;
        };

      }

    };

  })

  .service('history_texts', function ($rootScope) {

    return $rootScope.locale.history_items;

  })

  .filter('history_item', function (history_texts) {

    return function (historyItem) {
      switch (historyItem.action) {
        case 'gift_purchase':
          return history_texts.gift_purchase + ': ' + historyItem.name;
        case 'badge':
          return history_texts.badge + historyItem.name;
        case 'purchase':
          return history_texts.purchase + ' (' + historyItem.order_num + ')';
        case 'event':
          return historyItem.name || history_texts.custom_action;
        case 'extra':
          return historyItem.name || history_texts.custom_action;
        case 'custom_action':
          return historyItem.name;
        case 'sharing':
          switch (historyItem.social_action) {
            case 'like':
              return history_texts.enter_group + historyItem.social_type;
            case 'purchase':
              return history_texts.share_purchase + historyItem.social_type;
            case 'partner_page':
              return history_texts.social_share + historyItem.social_type;
            case 'badge':
              return history_texts.share_badge + historyItem.social_type;
          }
      }
      return history_texts[historyItem.action];
    }
  });

export default SailPlayHistory.name;