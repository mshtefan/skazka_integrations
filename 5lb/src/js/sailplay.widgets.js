(function () {

  angular.module('sailplay.widgets', [ 'core', 'ui', 'sailplay', 'templates' ])

    .config(function(SailPlayProvider, SailPlayActionsDataProvider, SailPlayBadgesProvider){

      //possible values:
      //url,cookie,remote
      SailPlayProvider.set_auth_type('url');

      SailPlayProvider.set_config({
        partner_id: _CONFIG.SAILPLAY.partner_id,
        domain: _CONFIG.SAILPLAY.domain,
        lang: 'ru'
      });

      SailPlayActionsDataProvider.set_actions_data(_LOCALE.actions);

      SailPlayBadgesProvider.set_limits([ 0, 200, 400, 800 ]);

    })

    .run(function($rootScope, SailPlay){

      $rootScope.locale = _LOCALE || {};

      $rootScope.$on('sailplay-init-success', function(){

        SailPlay.authorize();

      });

    })

    .directive('sailplayWidgets', function(){

      return {
        restrict: 'E',
        replace: true,
        scope: true,
        templateUrl: '/html/app.html',
        link: function(scope){

          scope.show_history = false;

          scope.show_profile_info = false;

          scope.fill_profile = function(){

            scope.show_profile_info = true;

          };

        }
      }

    });

  window.addEventListener('DOMContentLoaded', function(){

    var app_container = document.getElementsByTagName('sailplay-widgets')[0];

    app_container && angular.bootstrap(app_container, [ 'sailplay.widgets' ]);

  });

}());
