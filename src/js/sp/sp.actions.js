(function () {

  angular.module('sp.actions', [])

    .constant('actions_data', {
      "system": {
        "inviteFriend": {
          name: 'Invite a Friend',
          pic: 'dist/image/task-icon-09.png'
        }
      },
      "social": {
        "fb": {
          "partner_page": {
            "name": "Tell about LocalTradePros",
            "pic": "dist/image/task-icon-02.png"
          },
          "purchase": {
            "name": "Tell about your purchase on Facebook",
            "pic": "dist/image/task-icon-07.png"
          },
          "like": {
            "name": "Like us on Facebook",
            "pic": "dist/image/task-icon-01.png"
          }
        },
        "gp": {
          "partner_page": {
            "name": "Tell about LocalTradePros",
            "pic": "dist/image/task-icon-04.png"
          },
          "like": {
            "name": "Like us on Google Plus",
            "pic": "dist/image/task-icon-04.png"
          }
        }
      }
    })

    .constant('custom_actions_data', [
      {
        name: 'Get registered as Pro',
        text: 'Good at something? Become a Pro and start selling your skills! Once you get registered as a Pro you will receive additional 10 bonus points to your account!',
        pic: 'dist/image/task-icon-10.png',
        points: 10,
        tag: 'Registered as Pro'
      },
      {
        name: 'Get added to favorites as Pro',
        text: 'You will be rewarded with 20 bonus points every time your client added you to favorites! The more loyal clients you have, the more point you will earn.\n',
        pic: 'dist/image/task-icon-08.png',
        points: 20,
        tag: 'TP tagged as fav'
      },
      {
        name: 'Extend your subscription',
        text: 'Every time you extend you LocalTradePros subscription by paying monthly fee we reward you with 30 points for staying with us!',
        pic: 'dist/image/task-icon-11.png',
        points: 30,
        tag: 'TP Monthly payment made'
      }
    ])

    .directive('sailplayActions', function (sp_api, sp, actions_data, custom_actions_data, $timeout, user_service) {

      return {

        restrict: 'A',
        replace: false,
        scope: true,
        link: function (scope) {

          scope.actions = sp_api.data('load.actions.list');

          var tags = user_service.getTags();

          scope.custom_actions_data = angular.copy(custom_actions_data);

          sp.on('login.success', function () {

            var _tags = scope.custom_actions_data.map(function (item) {
              return item.tag;
            });

            _tags.push(tags.fill_profile);

            sp.send('tags.exist', {tags: _tags});

            sp.on('tags.exist.success', function (res) {

              angular.forEach(res.tags, function (item, index) {

                if (scope.custom_actions_data[index]) {

                  scope.custom_actions_data[index].exist = item.exist;

                } else {

                  scope.exist_profile = item.exist;

                }

              });

            });

          });

          scope.form = null;

          var _empty = {
            firstName: null,
            lastName: null,
            addPhone: null,
            addEmail: null,
            birthDate: [null, null, null],
            sex: 1
          };

          scope.form = angular.copy(_empty);

          scope.form.firstName = scope.user && scope.user() && scope.user().user.first_name;
          scope.form.lastName = scope.user && scope.user() && scope.user().user.last_name;
          scope.form.sex = scope.user && scope.user() && scope.user().user.sex;
          scope.form.addEmail = scope.user && scope.user() && scope.user().user.email;
          scope.form.addPhone = scope.user && scope.user() && scope.user().user.phone && scope.user().user.phone.slice(1);
          var bd = scope.user && scope.user() && scope.user().user.birth_date && scope.user().user.birth_date.split('-');
          scope.form.birthDate = bd ? [parseInt(bd[2]), parseInt(bd[1]), parseInt(bd[0])] : [null, null, null];

          scope.isValid = function () {
            if (
              scope.form.firstName
              && scope.form.lastName
              && (scope.form.birthDate && scope.form.birthDate[0] && scope.form.birthDate[1] && scope.form.birthDate[2])
              && (scope.form.sex == 1 || scope.form.sex == 2)
              && scope.form.addPhone
              && user_service.validateEmail(scope.form.addEmail)
            ) {
              return true;
            }
            return false;
          };

          scope.save_profile = function () {

            var form = angular.copy(scope.form);

            form.addPhone = '7' + form.addPhone;

            if (scope.isValid()) {

              sp.send('users.update', form);

              sp.on('users.update.success', function () {

                sp.send('tags.add', {tags: [tags.fill_profile]});

                sp.on('tags.add.success', function () {

                  scope.exist_profile = true;

                  scope.close_profile();

                });

              });

            }

          };

          scope.open_profile = function () {

            scope.form = angular.copy(_empty);

            $('.js-profile-popup').bPopup({
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

          scope.close_profile = function () {

            $('.js-profile-popup').bPopup().close();

            $timeout(function () {

              scope.form = angular.copy(_empty);

            }, 500);

          };

          scope.open_action = function (action) {

            scope.custom_action = action;

            $('.js-action-popup').bPopup({
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

          scope.close_action = function () {

            $('.js-action-popup').bPopup().close();

            $timeout(function () {

              scope.custom_action = null;

            }, 500);

          };

          scope.perform_action = function (action) {

            sp.send('actions.perform', action);

          };

          sp.on('actions.perform.success', function (res) {

            scope.$apply(function () {

              scope.on_perform && scope.on_perform(res);

            });


          });

          scope.action_data = function (action) {

            var data = {};

            if (!action) return data;

            data = action;

            if (action.socialType) data = actions_data.social[action.socialType] && actions_data.social[action.socialType][action.action];

            if (actions_data.system[action.type]) data = actions_data.system[action.type];

            return data;

          };

        }

      };

    })

    .directive('sailplayAction', function (sp, $rootScope) {

      return {

        restrict: 'A',
        replace: false,
        scope: {
          action: '='
        },
        link: function (scope, elm) {

          elm.attr('data-styles', $rootScope.config.social_styles || 'https://d3sailplay.cdnvideo.ru/media/assets/assetfile/b542637bb441daafcf62dd95e00cf506.css');

          sp.actions && sp.actions.parse(elm[0], scope.action);

        }

      };

    });

}());
