(function () {

  angular.module('sailplay.widgets', ['core', 'ui', 'sailplay', 'templates'])

    .config(function (SailPlayProvider, SailPlayActionsDataProvider, SailPlayBadgesProvider, FillProfileProvider) {

      //possible values:
      //url,cookie,remote
      SailPlayProvider.set_auth_type('remote');
      SailPlayProvider.set_remote_config({});

      SailPlayProvider.set_cookie_name('auth_hash');

      _CONFIG && SailPlayProvider.set_config({
        partner_id: _CONFIG.SAILPLAY.partner_id,
        domain: _CONFIG.SAILPLAY.domain,
        lang: _CONFIG.SAILPLAY.lang
      });

      _LOCALE && SailPlayActionsDataProvider.set_actions_data(_LOCALE.actions);

      SailPlayBadgesProvider.set_limits([0, 5000]);

      FillProfileProvider.set_cookie_name(_CONFIG.SAILPLAY.partner_id + '_sailplay_profile_form');

      FillProfileProvider.set_tag('Completed Profile');

    })

    .run(function ($rootScope, SailPlay) {

      $rootScope.locale = _LOCALE || {};

      //$rootScope.$on('sailplay-init-success', function(){
      //  console.log('auth!');
      //  //SailPlay.authorize();
      //
      //});

    })

    .controller('RemoteLoginConfig', function ($scope) {

      $scope.remote_login_options = {
        background: 'transparent',
        disabled_options: ['socials', 'agreement']
      };

    })

    .controller('CompaniesList', function ($scope, $http) {

      $scope.companies = [];

      $http.get('config/companies.json').then(function (res) {

        $scope.companies = res.data;

      });

    })

    .filter('disclaimer', function () {

      return function (descr) {

        return (descr && descr.split('Disclaimer: ')[1]) || '';

      }

    })

    .filter('descr', function () {

      return function (descr) {

        return (descr && descr.split('Disclaimer: ')[0]) || '';

      }

    })

    .directive('sailplayWidgets', function (SailPlay, ipCookie, SailPlayApi, $document, $rootScope, $filter) {

      return {
        restrict: 'E',
        replace: true,
        scope: true,
        templateUrl: '/html/app.html',
        link: function (scope) {

          scope.show_history = false;

          scope.offset = 0;

          scope.show_statuses_list = false;

          scope.show_profile_info = false;

          scope.show_profile_action = true;

          scope.show_login = false;

          scope.show_companies = false;

          scope.show_download = false;

          scope.$on('sailplay-login-cancel', function () {
            scope.show_login = false;
          });

          scope.$on('sailplay-login-success', function () {
            scope.show_login = false;
          });

          scope.$on('sailplay-logout-success', function () {

            SailPlayApi.reset();

          });

          scope.fill_profile = function () {

            scope.show_profile_info = true;

          };

          $rootScope.$on('body_lock', function (e, bool) {

            scope.body_lock(bool);

          });

          scope.body_lock = function (state) {

            console.log('body_lock', state);

            if (state && typeof state == 'boolean') {
              $document[0].body.classList.add('body_lock');
            }
            else {
              $document[0].body.classList.remove('body_lock');
            }

          };

          scope.close_more_info = function () {

            scope.offset = 0;

            scope.body_lock(false);

          };

          scope.open_gift = function () {

            console.log('open_gift 1');

            var overlays = $('.page-block__gifts .bns_overlay');

            setTimeout(function(){
              console.log('open_gift 2');
              scope.offset = $('.page-block__gifts').length && $('.page-block__gifts').offset().top - $(window).scrollTop();

              overlays.css({
                'padding-top': scope.offset || 0
              });
            },100)

          };

          scope.open_download = function () {

            var overlays = $('.bns_overlay.card_popup');

            setTimeout(function () {

              scope.offset = $('.bns_downl').length && $('.bns_downl').offset().top - $('.bns_overlay.card_popup .bns_over_iner').height() / 2 - $(window).scrollTop();

              overlays.css({
                'padding-top': scope.offset || 0
              });

            }, 10);

          };

          scope.open_actions = function () {

            var overlays = $('.page-block__actions .bns_overlay');

            scope.offset = $('.page-block__actions').length && $('.page-block__actions').offset().top - $(window).scrollTop();

            overlays.css({
              'padding-top': scope.offset || 0
            });

          };

          scope.close_profile = function () {

            scope.show_profile_info = false;

            scope.offset = 0;

            scope.body_lock(false);

          };

          scope.on_submit_profile = function () {
            scope.show_profile_action = false;
            scope.close_more_info();
            scope.close_profile();
          };

          scope.open_history = function () {

            scope.show_history = true

            scope.body_lock(true);

            var popup = $('.bns_over_hist .bns_over_iner');

            setTimeout(function () {

              scope.offset = $('.bns_hist').length && $('.bns_hist').offset().top - $(window).scrollTop() || 0;

              popup.css({
                'margin-top': scope.offset - popup.height() / 2 || 0
              });

            }, 10);

          };

          scope.open_profile = function () {

            scope.show_profile_info = true;

            var popup = $('.bns_compl_prof.edit_profile .bns_over_iner');

            setTimeout(function () {

              scope.offset = $('.bns_edit_prof').length && $('.bns_edit_prof').offset().top - $(window).scrollTop() || 0;

              popup.css({
                'margin-top': scope.offset - popup.height() / 2 || 0
              });

            }, 10);

            scope.body_lock(true);
          };



          SailPlay.on('tags.exist.success', function (res) {

            if (res.status === 'ok' && res.tags[0].exist) {

              scope.show_profile_action = false;
              scope.$apply();

            }

          });

          scope.save_pdf = function () {

            var doc = new jsPDF();

            var image = new Image();
            image.src = 'dist/img/card_pdf.jpg';
            image.onload = function () {

              var canvas = document.createElement('canvas');
              canvas.width = this.naturalWidth; // or 'width' if you want a special/scaled size
              canvas.height = this.naturalHeight; // or 'height' if you want a special/scaled size

              canvas.getContext('2d').drawImage(this, 0, 0);

              var rendered = canvas.toDataURL('image/jpeg');

              doc.addImage(rendered, 'JPEG', 60, 40, 90, 52);
              doc.setFontSize(9);
              doc.setTextColor(255, 255, 255);
              doc.text(70, 80, (SailPlayApi.data('load.user.info')().user.first_name || '') + ' ' + (SailPlayApi.data('load.user.info')().user.last_name || ''));
              doc.setFontSize(9);
              doc.setTextColor(255, 255, 255);

              var formatted_date = $filter('date')(SailPlayApi.data('load.user.info')().user.register_date, 'MMMM yyyy');
              doc.text(70, 84, 'Member since ' + formatted_date);

              doc.save('Tahoe.pdf');

            };

          };

          scope.on_email_sent = function () {

            $rootScope.$broadcast('notifier:notify', {
              header: 'Thank you!',
              body: 'Your KeyClub Card was sent to ' + SailPlayApi.data('load.user.info')().user.email,
              offset: $('.bns_sent').offset().top - $(window).scrollTop()
            });

          };

          scope.gift_points_notify = function () {
            $rootScope.$broadcast('notifier:notify', {
              header: '',
              body: 'You do not currently have enough points to redeem this gift. Earn additional points by staying with us or taking the actions below!',
              offset: $('.page-block__gifts').offset().top + $('.page-block__gifts').height()/2 - $(window).scrollTop()
            });
          };

          scope.has_avatar = function () {

            var has_avatar = false;

            if (SailPlayApi.data('load.user.info')() && SailPlayApi.data('load.user.info')().user.pic.indexOf('no_avatar') < 0) {

              has_avatar = true;

            }

            return has_avatar;

          };

          SailPlay.on('actions.social.connect.error', function (e) {
            console.dir(e);
          });

          SailPlay.on('actions.social.connect.success', function (e) {
            console.dir(e);
          });

        }
      }

    });

  window.addEventListener('DOMContentLoaded', function () {

    var app_container = document.getElementsByTagName('sailplay-widgets')[0];

    app_container && angular.bootstrap(app_container, ['sailplay.widgets']);

  });

}());
