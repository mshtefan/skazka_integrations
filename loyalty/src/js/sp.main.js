(function () {

  angular.module('ltp', ['core', 'ui', 'sp', 'templates'])

    .directive('sailplayLtp', function ($rootScope) {

      return {
        restrict: 'E',
        replace: false,
        scope: true,
        templateUrl: '/html/main.html',
        link: function (scope) {

          // preloader
          $('#sp_status').fadeOut();
          $('#sp_preloader').delay(350).fadeOut('slow');
          $('body').delay(350).css({'overflow': 'visible'});

          scope.close_history = function () {
            $('.js-history-popup').bPopup().close();
          };

          scope.open_history = function () {
            $('.js-history-popup').bPopup({
              speed: 450,
              transition: 'fadeIn',
              closeClass: 'js-close-popup',
              positionStyle: 'absolute',
              follow: [true, false],
              modal: true,
              modalClose: true,
              modalColor: '#000',
              opacity: 0.3
            });
          };

        }
      }

    });

  window.addEventListener('DOMContentLoaded', function () {

    var app_container = document.getElementsByTagName('sailplay-ltp')[0];

    app_container && angular.bootstrap(app_container, ['ltp']);

  });

}());
