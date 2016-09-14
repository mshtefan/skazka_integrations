(function () {

  angular.module('core', [
      'ipCookie'
    ])

    .run(function (sp, ipCookie, sp_api, $rootScope, $location) {

      $rootScope.config = window._ltp_config || {};

      //var _cookie_name = 'auth_hash';

      var _redirect_url = 'https://sailplay.net';

      sp.send('init', {

        partner_id: $rootScope.config.partner_id || 1544,
        domain: $rootScope.config.domain || 'https://sailplay.net',
        lang: 'en'

      });

      sp.on('init.success', function () {

        //var auth_hash = ipCookie(_cookie_name);
        var params = sp.url_params();

        if (params && params.auth_hash) {
          sp.send('login', params.auth_hash);
        }
        else {
          //window.location.href = _redirect_url;
          $rootScope.loaded = true;
        }
        $rootScope.$apply();
      });

      sp.on('login.error', function () {

        console.log('login error');

        //window.location.href = _redirect_url;
        $rootScope.loaded = true;
        $rootScope.$apply();

      });

      sp.on('login.success', function () {

        //ipCookie(_cookie_name, sp.config().auth_hash);
        $rootScope.loaded = true;

        //load data for widgets
        sp_api.call('load.user.info', {all: 1});
        sp_api.call('load.badges.list');
        sp_api.call('load.actions.list');
        sp_api.call('load.user.history');
        sp_api.call('load.gifts.list');

        $rootScope.$apply();

      });

      sp.on('actions.perform.success', function () {
        sp_api.call('load.actions.list');
      });

      sp.on('actions.perform.error', function () {
        sp_api.call('load.actions.list');
      });

      sp.on('actions.perform.complete', function () {
        sp_api.call('load.actions.list');
      });

      sp.on('gifts.purchase.success', function (res) {

        console.dir(res);

        $rootScope.$broadcast('notifier:notify', {

          header: 'Gift received!',

        });

        $rootScope.$apply();

      });

      //sp.on('actions.social.connect.complete', function () {
      //  sp_api.call('load.actions.list');
      //});


    });

}());
