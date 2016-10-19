(function (angular, sp) {

  angular.module('stalos', ['stalos.directives.profile', 'stalos.directives.gifts', 'stalos.directives.actions', 'stalos.tools.notify'])

    .directive('app', function () {

      return {
        restrict: 'E',
        replace: true,
        template: '\n<div class="wrapper">\n    \n    <section class="l-section-wrap top-banner-wrap">\n        <div class="l-centered top-banner">\n            <div class="top-banner__head">Бонусная программа</div>\n            <div class="top-banner__title">Совершайте покупки, выполняйте задания, копите баллы и меняйте их на подарки</div>\n            <div class="top-banner__over"><img src="image/top-banner-over.png" alt=""></div>\n        </div>\n    </section>\n\n    <profile-cmp></profile-cmp>\n    \n    <gifts-cmp></gifts-cmp>\n\n    <actions-cmp></actions-cmp>\n\n    <tools-notify></tools-notify>\n    \n  </div>',
        scope: true,
        link: function (scope) {
        }
      }

    });


  function startApp() {
    if (!window.config) window.config = {};
    var _auth = false;
    sp.send('init',
      {
        partner_id: window.config.sailplay.partner_id || 1528,
        lang: window.config.sailplay.lang || 'ru',
        domain: window.config.sailplay.domain || '//sailplay.ru'
      });

    sp.on('init.success', function () {

      sp.on('login.success', function () {
        bootstrap();
        _auth = true;
      });

      sp.on('logout.success', function(){
        if(_auth){
          window.location.reload();
        } else {
          document.getElementById('sailplay_auth').style.display = 'block';
        }
      });


      sp.send('login.remote', {
        node: document.getElementById('sailplay_auth'),
        lang: window.config.sailplay.lang || 'ru',
        domain: window.config.sailplay.domain || '//sailplay.ru',
        disabled_options: ['socials', 'agreement']
      });

    });

  }

  document.getElementById('sailplay_auth').style.display = 'none';

  function bootstrap() {
    document.createElement('app');
    var elems = document.querySelectorAll('app');
    for (var i = 0; i < elems.length; i += 1) {
      angular.bootstrap(elems[i], ['stalos']);
    }
    document.getElementById('sailplay_auth').remove();
  }

  startApp();

  //});


}(window.angular, window.SAILPLAY));