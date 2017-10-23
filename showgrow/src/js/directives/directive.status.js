(function () {

  angular.module('sg.directives.status', [])

    .directive('statusD', function (api, $timeout) {
      return {
        restrict: 'E',
        replace: false,
        template: "<section class=\"sp_l-centered sp_status-descr\" data-ng-class=\"{v2: program_v == 'V2'}\">\n        <div class=\"sp_status-descr__row\">\n            <div class=\"sp_status-descr__col\" data-ng-repeat=\"item in config\">\n                <div class=\"sp_status-descr-cell js-status-tabs-tr\" data-tab=\"{{$index}}\">\n                    <span class=\"sp_status-descr-cell__bridge\"></span>\n\n                    <div class=\"sp_status-descr-cell__head\" data-ng-bind=\"item.name\"></div>\n                    <span data-ng-bind-html=\"item.description\"></span>\n                    Click to see all benefits…\n                </div>\n            </div>\n        </div>\n        <!-- /row -->\n\n        <div class=\"js-tabs-anchor\"></div>\n\n        <div class=\"sp_status-descr-tabs js-status-tabs\" data-ng-class=\"'js-tab-'+$index\" style=\"display: none;\" data-ng-repeat=\"item in config\">\n            <div class=\"sp_status-descr-tabs__row\">\n                <div class=\"sp_status-descr-tabs__col\" data-ng-repeat=\"col in item.more_description\" data-ng-bind-html=\"col\"></div>\n            </div>\n        </div>\n        <!-- /sp_status-descr-tabs -->\n\n    </section>\n",
        scope: true,
        link: function (scope, el) {

          scope.program_v = api.user.program
          scope.config = api.config.$MAGIC.data.statuses[api.user.program]

          // tabs
          $timeout(function(){
            var tabsTr = $('.js-status-tabs-tr');
            var tabs = $('.js-status-tabs');
            var tabsAnchor = $('.js-tabs-anchor');
            tabsTr.click(function () {
              var $this = $(this);
              if (!$this.hasClass('this-active')) {
                tabsTr.removeClass('this-active');
                $this.addClass('this-active');
                tabs.slideUp(300).filter('.js-tab-' + $this.data('tab')).slideDown(300);
                if (Modernizr.mq('(max-width: 768px)')) {
                  $.scrollTo(tabsAnchor, 1000);
                }
              }
            });
            $('body').click(function (e) {
              e = e || window.event;
              var target = e.target || e.srcElement;
              if (!$(target).parents('.js-status-tabs-tr').length && !$(target).filter('.js-status-tabs-tr').length && !$(target).parents('.js-status-tabs').length && !$(target).filter('.js-status-tabs').length) {
                tabsTr.removeClass('this-active');
                tabs.slideUp(300);
              }
            });

          }, 1000)


          scope.green_spend = '$1 spent = 1 Showpoint';
          scope.gold_spend = '$1 spent = 2 Points';
          scope.platinum_spend = '$1 spent = 3 Points';
          if (api.user.program == 'V2') {
            scope.green_spend = '$1 spent = 1 point';
            scope.gold_spend = '$1 spent = 1.5 points, 1 free gram a month';
            scope.platinum_spend = '$1 spent = 2 free grams a month';
            scope.ambassador_spend = '$1 spent = 2.5 points, Free 8th every month.';            
          }

          scope.change_page = function (page) {
            scope.page = +page || 1;
            scope.history_data = scope.history().slice((scope.page - 1) * scope.per_page, (scope.page - 1) * scope.per_page + scope.per_page);
          };
          function update() {
            api.user.info().then(function () {
              api.user.history();
            });
          }


        }
      }

    });

}());