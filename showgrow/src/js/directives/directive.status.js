(function () {

  angular.module('sg.directives.status', [])

    .directive('statusD', function (api) {
      return {
        restrict: 'E',
        replace: false,
        template: "\n    <section class=\"sp_l-centered sp_status-descr\">\n        <div class=\"sp_status-descr__row\">\n            <div class=\"sp_status-descr__col\">\n                <div class=\"sp_status-descr-cell js-status-tabs-tr\" data-tab=\"1\">\n                    <span class=\"sp_status-descr-cell__bridge\"></span>\n\n                    <div class=\"sp_status-descr-cell__head\">ShowGrow Green Member</div>\n                    <ul class=\"sp_status-descr-cell__list\">\n                        <li ng-bind=\"green_spend\">$1 spent = 1 Showpoint</li>\n                    </ul>\n                    Click to see all benefits…\n                </div>\n            </div>\n            <!-- /col -->\n            <div class=\"sp_status-descr__col\">\n                <div class=\"sp_status-descr-cell js-status-tabs-tr\" data-tab=\"2\">\n                    <span class=\"sp_status-descr-cell__bridge\"></span>\n\n                    <div class=\"sp_status-descr-cell__head\">ShowGrow Gold Member</div>\n                    <ul class=\"sp_status-descr-cell__list\">\n                        <li>All Green Member benefits</li>\n                        <li ng-bind=\"gold_spend\">$1 spent = 2 Points</li>\n                        <li>Birthday treat </li>\n                    </ul>\n                    Click to see all benefits…\n                </div>\n            </div>\n            <!-- /col -->\n            <div class=\"sp_status-descr__col\">\n                <div class=\"sp_status-descr-cell js-status-tabs-tr\" data-tab=\"3\">\n                    <span class=\"sp_status-descr-cell__bridge\"></span>\n                    <div class=\"sp_status-descr-cell__head\">ShowGrow Platinum Member</div>\n                    <ul class=\"sp_status-descr-cell__list\">\n                        <li>All Gold Member benefits</li>\n                        <li ng-bind=\"platinum_spend\">$1 spent = 3 Points</li>\n                        <li>10% off all purchases</li>\n                    </ul>\n                    Click to see all benefits…\n\n                </div>\n            </div>\n            <!-- /col -->\n            <div class=\"sp_status-descr__col\">\n                <div class=\"sp_status-descr-cell js-status-tabs-tr\" data-tab=\"4\">\n                    <span class=\"sp_status-descr-cell__bridge\"></span>\n                    <div class=\"sp_status-descr-cell__head\">ShowGrow Ambassador:</div>\n                    <ul class=\"sp_status-descr-cell__list\">\n                        <li>All Platinum Member benefits</li>\n                        <li ng-if=\"ambassador_spend\" ng-bind=\"ambassador_spend\">$1 spent = 3 Points</li><li>Your personal consultant!</li>\n                    </ul>\n                    Click to learn more…\n                </div>\n            </div>\n            <!-- /col -->\n        </div>\n        <!-- /row -->\n\n        <div class=\"js-tabs-anchor\"></div>\n\n        <div class=\"sp_status-descr-tabs js-status-tabs js-tab-1\" style=\"display: none;\">\n            <div class=\"sp_status-descr-tabs__row\">\n                <div class=\"sp_status-descr-tabs__col\">\n                    Our Green level is anything but basic. Green members earn, redeem and enjoy exclusive benefits at our ShowGrow locations around the world. Start your complimentary membership today.\n                </div>\n                <div class=\"sp_status-descr-tabs__col\">\n                    <ul class=\"sp_status-descr-tabs__list\">\n                        <li>Earn 1 ShowPoint for every U.S. dollar spent</li>\n                        <li>Free gift with purchase at sign up</li>\n                        <li>Complimentary vendor samplings</li>\n                    </ul>\n                </div>\n                \n                <div class=\"sp_status-descr-tabs__col\">\n                    <ul class=\"sp_status-descr-tabs__list\">\n                        <li>Custom offers on items you enjoy, sent directly to your email</li>\n                        <li>Early access to new products</li>\n                        <li>Rewards you can count on — your Points never expire as long as you show account activity once a year</li>\n                        <li>Spend any amount, don’t limit yourself to grams, eighths, or any fixed sizes </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <!-- /sp_status-descr-tabs -->\n\n        <div class=\"sp_status-descr-tabs js-status-tabs js-tab-2\" style=\"display: none;\">\n            <div class=\"sp_status-descr-tabs__row\">\n                <div class=\"sp_status-descr-tabs__col\">\n                    Members enjoy all the exclusive benefits of Gold status after collecting over 500 points worth of purchases in a calendar year. You keep your status for the rest of the year plus the next year.\n                </div>\n\n                <div class=\"sp_status-descr-tabs__col\">\n                    <ul class=\"sp_status-descr-tabs__list\">\n                        <li>Double your rewards - earn 2 Points for every U.S. dollar spent </li>\n                        <li>Birthday treat on us</li>\n                        <li>Complimentary vendor samplings with full products instead of just samples for you!*</li>\n                    </ul>\n                    *Only applicable to certain samplings\n                </div>\n                \n                <div class=\"sp_status-descr-tabs__col\">\n                    <ul class=\"sp_status-descr-tabs__list\">\n                        <li>Custom offers on items you enjoy</li>\n                        <li>Early access to new products </li>\n                        <li>Rewards you can count on — your Points never expire as long as you show account activity once a year</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <!-- /sp_status-descr-tabs -->\n\n        <div class=\"sp_status-descr-tabs js-status-tabs js-tab-3\" style=\"display: none;\">\n            <div class=\"sp_status-descr-tabs__row\">\n                <div class=\"sp_status-descr-tabs__col\">\n                    Members enjoy all the exclusive benefits of Platinum status after collecting over 4000 points worth of purchases in a calendar year. You keep your status for the rest of the year plus the next year.\n                </div>\n\n                <div class=\"sp_status-descr-tabs__col\">\n                    <ul class=\"sp_status-descr-tabs__list\">\n                        <li>Triple your rewards - earn 3 Points for every U.S. dollar spent </li>\n                        <li>10% off all of your purchases</li>\n                        <li>Invites to Exclusive ShowGrow Events</li>\n                        <li>Birthday treat on us</li>\n                        <li>Priority Access – your marked with a Platinum star in our system and you’ll get faster service from our bud tenders who know you are a loyal Platinum Member </li>\n                    </ul>\n                </div>\n                \n                <div class=\"sp_status-descr-tabs__col\">\n                    <ul class=\"sp_status-descr-tabs__list\">\n                        <li>Complimentary vendor samplings with full products instead of just samples for you!*</li>\n                        <li>Custom offers on items you enjoy</li>\n                        <li>Early access to new products </li>\n                        <li>Rewards you can count on — your Points never expire as long as you show account activity once a year</li>\n                        <li>Personalized Platinum Card</li>\n                    </ul>\n                    *Only applicable to certain samplings\n                </div>\n            </div>\n        </div>\n        <!-- /sp_status-descr-tabs -->\n\n        <div class=\"sp_status-descr-tabs js-status-tabs js-tab-4\" style=\"display: none;\">\n            <div class=\"sp_status-descr-tabs__row\">\n                <div class=\"sp_status-descr-tabs__col\">\n                    Members enjoy all the exclusive benefits of Ambassador status after collecting over 20,000 points worth of purchases in a calendar year. You keep your status for the rest of the year plus the next year.\n                </div>\n\n                <div class=\"sp_status-descr-tabs__col\">\n                    <ul class=\"sp_status-descr-tabs__list\">\n                        <li>All the benefits of a Platinum member plus…</li>\n                        <li>Your own ShowGrow Ambassador who you can email, text, or call for any of your cannabis needs or questions. ShowGrow Ambassadors have the knowledge, training and resources to help you with whatever you need — anywhere, anytime.</li>\n                        <li>Personalized service, your ambassador knows what you like and will recommend top products and flower you need to try and even sometimes give you free samples</li>\n                    </ul>\n                </div>\n                \n                <div class=\"sp_status-descr-tabs__col\">\n                    <ul class=\"sp_status-descr-tabs__list\">\n                        <li>Your ambassador will hand pick the best of the best flowers you love and save it for when you visit or even call you if you’d like</li>\n                        <li>Have your order all ready for you before you even show up to the shop</li>\n                        <li>Free delivery to certain locations</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <!-- /sp_status-descr-tabs -->\n    </section>\n",
        scope: true,
        link: function (scope, el) {

          // tabs
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