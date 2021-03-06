(function () {

  angular.module('sg.directives.gifts', [])

    .directive('giftsD', function (api, giftS, $timeout, sp) {
      return {
        restrict: 'E',
        replace: false,
        template: '<section class="sp_l-section sp_gifts-sec" data-ng-class="{v2: program_v == \'V2\'}">\n            <div class="sp_common-sec-head">Redeem Your Points For These Gifts</div>\n            <span data-ng-if="!gifts || !gifts() || !gifts().length">List is empty</span>\n\n            <div class="sp_gifts-slider js-gifts-slider" data-ng-class="{ type_hidden : hidden }">\n                <div data-ng-repeat="gift in gifts()">\n                    <div class="sp_gifts-slider__slide-wrap">\n                        <div class="sp_gifts-slider__slide" data-ng-class="{ \'not_enough_points\' : (user().user_points.confirmed < gift.points)}">\n                            <div class="sp_gifts-slider__slide-img"\n                                 style="background-image: url(\'{{ gift.thumbs.url_250x250 }}\');"></div>\n                            <div class="sp_gifts-slider__slide-name" data-ng-bind="gift.name"></div>\n                            <div class="sp_gifts-slider__slide-bonus">{{ gift.points }} Points</div>\n                            <a href="#" class="sp_gifts-slider__slide-btn sp_common-btn"\n                               data-ng-class="{ \'this-disabled\' : (user().user_points.confirmed < gift.points)\n                                ,not_enough :(user().user_points.confirmed < gift.points) }"\n                               data-ng-bind="user().user_points.confirmed < gift.points ? texts.get_button_not_enough : texts.get_button "\n                               data-ng-click="openGift(gift);$event.preventDefault();"></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </section>\n\n\n        <!-- popups -->\n        <div class="sp_widget sp_history-popup js-gift-popup" style="display: none;position: fixed;">\n            <div class="sp_history-popup__close js-close-popup"></div>\n            <div class="sp_common-popup-head-wr" data-ng-show="order_gift && order_page == \'1\'">\n                <div class="sp_common-popup-head" data-ng-bind="texts.popup.p1.header">Your gift is waiting for you!</div>\n            </div>\n\n            <div class="sp_common-popup-body" data-ng-show="order_gift && order_page == \'1\'">\n                <div class="sp_history-popup__title" data-ng-bind-html="texts.popup.p1.title_html">\n                    Please make sure that your gift is in stock and ready for picking up by giving a call to one of our\n                    locations<br> (<a href="http://www.showgrow.com/stores"\n                                      class="sp_widget sp_info-counter__hist" target="_blank">check full locations list here</a>).\n\n                </div>\n                <div class="sp_gifts-slider__slide-img"\n                     style="background-image: url(\'{{ order_gift.thumbs.url_250x250 }}\');"></div>\n                <div class="sp_gifts-slider__slide-name" data-ng-bind="order_gift.name"></div>\n                <div class="sp_gifts-slider__slide-desc" data-ng-bind="order_gift.descr"></div>\n                <div class="sp_gifts-slider__slide-bonus">{{ order_gift.points }} Points</div>\n                <div data-ng-click="getGift(order_gift);" class="sp_common-btn" data-ng-bind="texts.popup.p1.button">Purchase Gift</div>\n            </div>\n\n            <div class="sp_common-popup-head-wr" data-ng-show="order_gift && order_page == \'2\'">\n                <div class="sp_common-popup-head" data-ng-bind="texts.popup.p2.header">Your gift is waiting for you!</div>\n            </div>\n\n            <div class="sp_common-popup-body" data-ng-show="order_gift && order_page == \'2\'">\n                <div class="sp_history-popup__title" data-ng-bind-html="texts.popup.p2.title_html">\n                    Please make sure that your gift is in stock and ready for picking up by giving a call to one of our\n                    locations<br> (<a href="http://www.showgrow.com/stores"\n                                      class="sp_widget sp_info-counter__hist" target="_blank">check full locations list here</a>).\n\n                </div>\n                <div class="sp_gifts-slider__slide-img"\n                     style="background-image: url(\'{{ order_gift.thumbs.url_250x250 }}\');"></div>\n                <div class="sp_gifts-slider__slide-name" data-ng-bind="order_gift.name"></div>\n                <div class="sp_gifts-slider__slide-desc" data-ng-bind="order_gift.descr"></div>\n                <div class="sp_gifts-slider__slide-desc">Your coupon number is <span class=" sp_bold" ng-bind="coupon_number"></span></div>\n                <div class="sp_gifts-slider__slide-bonus">{{ order_gift.points }} Points</div>\n                <div class="sp_common-btn js-close-popup" data-ng-bind="texts.popup.p2.button">OK</div>\n            </div>\n\n        </div>',
        scope: true,
        link: function (scope, el) {
          scope.gifts = api.data('gifts.list');
          scope.user = api.data('user.info');
          scope.hidden = true;

          scope.program_v = api.user.program
          scope.texts = api.config.$MAGIC.data.gifts[scope.program_v].texts

          scope.program_v = api.user.program

          function initGifts(time) {
            $timeout(function () {
              // gifts slider
              if ($('.js-gifts-slider').length) {
                $('.js-gifts-slider').slick({
                  adaptiveHeight: true,
                  slidesToShow: api.user.program == 'V2' ? 4 : 3,
                  slidesToScroll: api.user.program == 'V2' ? 4 : 3,
                  arrows: false,
                  speed: 150,
                  infinite: false,
                  swipeToSlide: false,
                  dots: true,
                  edgeFriction: 0.5,
                  responsive: [
                    {
                      breakpoint: 960,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                      }
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                      }
                    }
                  ]
                });
              }
              scope.hidden = false;
            }, time || 1000);
          }

          function update() {
            api.user.info().then(function () {
              api.gifts.list().then(function () {
                scope.hidden = true;
                if ($('.js-gifts-slider').length) {
                  $('.js-gifts-slider').slick('unslick');
                }
                initGifts();
              })
            });
          }

          initGifts(2000);

          scope.openGift = function (gift) {
            if (scope.user().user_points.confirmed < gift.points) {
              return;
            }
            scope.order_page = 1
            var g = angular.copy(gift);
            scope.order_gift = g;
            $('.js-gift-popup').bPopup({
                speed: 450,
                transition: 'fadeIn',
                closeClass: 'js-close-popup',
                positionStyle: 'absolute',
                follow: [true, false],
                modal: true,
                modalClose: true,
                modalColor: '#000000',
                opacity: 0.5
              });
          }

          scope.getGift = function (gift) {

            if (scope.user().user_points.confirmed < gift.points) {
              return;
            }
            
            scope.coupon_number = ''
            api.user.tags.add(['Trig Received a gift']).then(function(){
              scope.order_page = 2
            });
            
            sp.send('gifts.purchase', {gift: gift});
          };

          sp.on('gifts.purchase.success', function (res) {
            scope.coupon_number = res.coupon_number;
            update();
          });
          sp.on('actions.perform.success', function (data) {
            update();
          });

        }
      }

    });

}());