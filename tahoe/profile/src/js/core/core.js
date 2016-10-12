(function () {

  angular.module('core', [
      'ipCookie'
    ])

    .run(function (SailPlay, ipCookie, SailPlayApi, $rootScope, $window, FillProfile, RegCompleteTag, $timeout) {

      $rootScope.config = $window._CONFIG || {};

      var auth = false;

      // TODO: перенести действия в отдельный массив из вьюхи
      var tags = [FillProfile.tag, 'TLUXP Review', 'Yelp Review', 'Google Review', RegCompleteTag];

      $rootScope.$on('sailplay-login-success', function () {

        auth = true;

      });

      $rootScope.$on('sailplay-logout-success', function () {

        if (!auth) {
          SailPlayApi.call('load.gifts.list');
        }

        auth = false;

      });

      SailPlay.on('login.error', function () {

        console.log('login error');
        $rootScope.loaded = true;
        $rootScope.$apply();

      });

      SailPlay.on('login.success', function () {

        $rootScope.loaded = true;

        //load data for widgets
        SailPlayApi.call('load.user.info', {all: 1});
        SailPlayApi.call('load.badges.list');
        SailPlayApi.call('load.actions.list');
        SailPlayApi.call('load.user.history');
        SailPlayApi.call('load.gifts.list');
        SailPlayApi.call('tags.exist', {tags: tags});


        $rootScope.$apply();

      });

      SailPlay.on('tags.add.success', function () {

        $timeout(function(){
          SailPlayApi.call('tags.exist', {tags: tags});
        }, 2000)

      });

      SailPlay.on('actions.perform.success', function () {
        SailPlayApi.call('load.actions.list');
      });

      SailPlay.on('actions.perform.error', function () {
        SailPlayApi.call('load.actions.list');
      });

      SailPlay.on('actions.perform.complete', function () {
        SailPlayApi.call('load.actions.list');
      });

      SailPlay.on('gifts.purchase.success', function (res) {

        $rootScope.$broadcast('notifier:notify', {

          header: $rootScope.locale.congratulations,
          body: res.gift_help_text || $rootScope.locale.gift_received

        });

        SailPlayApi.call('load.user.info', {all: 1});
        SailPlayApi.call('load.user.history');

        $rootScope.$apply();

      });

      SailPlay.on('gift.purchase.error', function (res) {

        $rootScope.$broadcast('notifier:notify', {

          header: $rootScope.locale.gift_error,
          body: $rootScope.locale.errors[res.status_code] || $rootScope.locale.error

        });

        $rootScope.$apply();

      });

      //SailPlay.on('actions.social.connect.complete', function(){
      //  SailPlayApi.call('load.actions.list');
      //});

    });

}());
