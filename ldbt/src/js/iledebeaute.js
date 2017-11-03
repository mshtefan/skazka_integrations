(function () {

  angular.module('iledebeaute', [
    'auth',
    'core',
    'ui',
    'routes',
    'iledebeaute.services.actions',
    'iledebeaute.services.users',
    'iledebeaute.services.faq',
    'iledebeaute.services.pages',
    'iledebeaute.services.cookies',
    'iledebeaute.directives.test',
    'iledebeaute.directives.authorization',
    'htmlTemplates'
  ])

    .run(function (sp, config, $location, api, $window, $timeout, routeService, $rootScope, tagS, $http) {

      if (config.auth_hash && config.auth_hash != 'None') {
        sp.config().auth_hash = config.auth_hash;
        var user_data = {tags: [tagS.auth()[0], tagS.auth()[1], tagS.banned]};

        api.user.tags.exist(user_data).then(function (res) {
          var all = res.length - 1;
          var exists = res.filter(function (tag) {
            return tag.exist && tag.name != tagS.banned
          });
          var banned = res.filter(function (tag) {
            return tag.name == tagS.banned
          })[0];
          if (exists && exists.length == all && !banned.exist) {
            sp.send('login', config.auth_hash);
          } else {
            api.user.logout().then(function () {
              $window.location.reload();
            })
          }
        });

      }

      // config.auth_hash && sp.send('login', config.auth_hash);

      var _preloadPictures = function (pictureUrls, callback) {
        var i,
          j,
          loaded = 0;

        for (i = 0, j = pictureUrls.length; i < j; i++) {
          (function (img, src) {
            img.onload = function () {
              if (++loaded == pictureUrls.length && callback) {
                callback();
              }
            };

            // Use the following callback methods to debug
            // in case of an unexpected behavior.
            img.onerror = function () {
            };
            img.onabort = function () {
            };

            img.src = src;
          }(new Image(), pictureUrls[i]));
        }
      };


      // переделать
      window.func = function (res) {

        _preloadPictures([res.background], function () {

          $('body').css({
            'background-image': 'url(' + res.background + ')',
            'background-position': 'center top'
          })

        });

      };

      $http.jsonp("https://sailplay.ru/_integration/iledebeaute/background_config.js?callback=JSON_CALLBACK.load_config");

      sp.on('login.success', function () {
        api.auth = true;
        $timeout(function () {
          $location.path(routeService.getPrev());
        }, 500);
      });

      sp.on('login.error', function (res) {
        $location.path('/');
      });

      sp.on('logout.success', function () {
        $window.location.reload();
      });

      sp.on('load.user.history.error', function () {
        $('.preloader').hide()
      });
      sp.on('load.user.info.error', function () {
        $('.preloader').hide()
      });
      sp.on('tags.exist.error', function (res) {
        $('.preloader').hide()
      });
      sp.on('load.actions.list.error', function (res) {
        $('.preloader').hide()
      });

    })

    .directive('iledebeaute', function (api, $location, $rootScope) {

      return {
        restrict: 'E',
        replace: false,
        template: '' +
          '<div class="newHeader _js_newHeader _hasPromoBar">'+
            '<div class="newHeader__main">'+
                '<div class="newHeader__main__in _js_newHeader__main__in">' +
                    '<span class="newHeader__burgerWrap _js_newHeader__burger">' +
                        '<span class="newHeader__burger"></span>' +
                    '</span>' +
                    '<a class="newHeader__logo" href="/"></a>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<div data-ng-if="ready">' +
        '<auth></auth>' +
        ' <div class="iner_block">' +
        '   <menu data-ng-show="show()"></menu>' +
        '   <div class="content" data-ng-show="show() || show_content()" data-ng-view></div>' +
        ' </div>' +
        '<div class="preloader"></div>' +
        '</div>',
        scope: true,
        link: function (scope) {

          scope.ready = false;

          // TODO: перенести в sp_resolve
          api.load_config().then(function(){
            scope.ready = true;
          });

          scope.show = function () {
            return api.auth;
          };

          scope.show_content = function () {
            return $location.path() == '/sorry';
          };

        }
      }

    });


}());