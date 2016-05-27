(function () {

  angular.module('core', [
    'ipCookie'
  ])

  .run(function(sp, ipCookie, sp_api, $rootScope, $window){

    $rootScope.config = window._ltp_config || {};

    var _cookie_name = 'auth_hash';

    sp.send('init', {

      partner_id: $rootScope.config.partner_id || 1559,
      domain: $rootScope.config.domain || 'https://sailplay.net',
      lang: 'en'

    });

    sp.on('init.success', function(){

      var auth_hash = ipCookie(_cookie_name);

      //auth_hash = '25d866d7390bbbdbe4608e3afdc4d8c0448b1168';
      if(auth_hash){
        sp.send('login', auth_hash);
      }
      else {
        $rootScope.loaded = true;
      }
      $rootScope.$apply();
    });

    sp.on('login.error', function(){

      console.log('login error');

      $rootScope.loaded = true;
      $rootScope.$apply();

    });

    sp.on('login.success', function(){

      ipCookie(_cookie_name, sp.config().auth_hash);
      $rootScope.loaded = true;

      //load data for widgets
      sp_api.call('load.user.info');
      sp_api.call('load.badges.list');
      sp_api.call('load.actions.list');
      sp_api.call('load.user.history');
      sp_api.call('load.gifts.list');

      $rootScope.$apply();

    });

    sp.on('actions.perform.success', function(){
      sp_api.call('load.actions.list');
    });

    sp.on('actions.perform.error', function(){
      sp_api.call('load.actions.list');
    });

    sp.on('actions.perform.complete', function(){
      sp_api.call('load.actions.list');
    });

    sp.on('gifts.purchase.success', function(res){

      console.dir(res);

      $rootScope.$broadcast('notifier:notify', {

        header: 'Gift received!',
        body: res.coupon_number ? 'Coupon number: ' + res.coupon_number : res.success_message

      });

      $rootScope.$apply();

    });

    sp.on('actions.social.connect.complete', function(){
      sp_api.call('load.actions.list');
    });


  });

}());
