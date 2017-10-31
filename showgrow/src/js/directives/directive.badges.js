(function () {

  angular.module('sg.directives.badges', [])

    .directive('badgesD', function (api, badgeS, sp, $timeout) {
      return {
        restrict: 'E',
        replace: false,
        template: '<section data-ng-class="{v2: program_v == \'V2\'}" class=\"sp_l-centered sp_badges-sec\" data-ng-show=\"badges && badges.length\">\n            <div class=\"sp_common-sec-head\">Badges</div>\n            <div class=\"sp_badges-sec__row\" data-ng-show="program_v != \'V0\'">\n                \n\n                <div class="sp_gifts-slider js-badges-slider">\n\n                  <div data-ng-repeat=\"item in badges\">\n                      <div class=\"sp_badges-cell\" data-ng-class=\"{inactive: !badge.is_received}\">\n                          <div class=\"sp_badges-cell__img\"><img data-ng-src=\"{{ item.thumbs.url_250x250 }}\" alt=\"\"></div>\n                          <div class=\"sp_badges-cell__name\" data-ng-bind=\"item.name\"></div>\n                      </div>\n\n                  </div>\n                </div>\n              \n            </div>\n            <div class=\"sp_badges-sec__row\" data-ng-show="program_v == \'V0\'">\n                \n                <div class=\"sp_badges-sec__col\" data-ng-repeat=\"item in badges\">\n                    <div class=\"sp_badges-cell\">\n                        <div class=\"sp_badges-cell__img\"><img data-ng-src=\"{{ item.thumbs.url_250x250 }}\" alt=\"\"></div>\n                        <div class=\"sp_badges-cell__name\" data-ng-bind=\"item.name\"></div>\n                    </div>\n                </div>\n              \n            </div>\n        </section>',
        scope: true,
        link: function (scope, el) {
          scope.badges = api.data('badges.list')() && api.data('badges.list')().one_level_badges.filter(function (item) {
              return item//.is_received
            }) || [];
          function update(){
            self.badges.list();
          }
          sp.on('actions.perform.success', function (data) {
            update();
          });
          scope.program_v = api.user.program
          function initBadges(time) {
            $timeout(function () {
              // badges slider
              if ($('.js-badges-slider').length) {
                $('.js-badges-slider').slick({
                  adaptiveHeight: true,
                  slidesToShow: 4,
                  slidesToScroll: 4,
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
          initBadges(2100)
        }
      }

    });

}());