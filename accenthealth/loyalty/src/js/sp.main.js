(function () {

  angular.module('ah', ['core', 'ui', 'sp', 'templates'])

    .directive('sailplayAh', function ($rootScope, $locale, sp_api, sp) {

      return {
        restrict: 'E',
        replace: false,
        scope: true,
        templateUrl: '/html/main.html',
        link: function (scope, el) {

          $locale.NUMBER_FORMATS.GROUP_SEP = ' ';

          $(el).find('.bns_view_hist').click(function () {

            var top = $(this).position().top - 20;

            $(el).find('.bns_overlay_hist').fadeIn();
            $(el).find('.bns_overlay_hist .bns_overlay_iner').css('top', top);

            return false;

          });

          $('body').on('click', '.bns_overlay_iner', function (event) {
            event.stopPropagation()
          }).on('click', '.bns_overlay, .bns_close_event', function (event) {
            var $el;
            if ($(this).hasClass('bns_overlay')) {
              $el = $(this);
            } else {
              $el = $(this).parents('.bns_overlay');
            }
            if ($el && $el.length) {
              $el.fadeOut();
            }
            return false;
          });

        }
      }

    });

  window.addEventListener('DOMContentLoaded', function () {

    var app_container = document.getElementsByTagName('sailplay-ah')[0];

    app_container && angular.bootstrap(app_container, ['ah']);

  });

}());
