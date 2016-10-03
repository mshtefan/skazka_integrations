(function () {

  angular.module('sp.actions', [])

    .constant('actions_data', {
      "system": {
        "inviteFriend": {
          name: 'Refer an Office',
          text: 'Know an office that would like AccentHealth? Tell us and earn 10 points. Once they join AccentHealth get 200 additional points!',
          pic: 'dist/img/lb_bl.png',
          points: 10,
          plus: 200
        }
      },
      "social": {
        "fb": {
          "partner_page": {
            "name": "Tell about Accent Health",
            "pic": "dist/img/lb_fb.png",
            points: 10
          },
          "purchase": {
            "name": "Tell about your purchase on Facebook",
            "pic": "dist/img/lb_fb.png",
            points: 10
          },
          "like": {
            "name": "Like us on Facebook",
            "pic": "dist/img/lb_fb.png",
            points: 10
          }
        }
      }
    })

    .constant('custom_actions_data', [
      {
        type: 10,
        name: 'Submit a Testimonial',
        text: 'We want to hear from you - tell us what you think!',
        pic: 'dist/img/lb_ms.png',
        points: 10,
        tag: 'Submit a Testimonial'
      },
      {
        type: 25,
        name: 'Customize Your Programming',
        text: 'Use the MyProgram Customizer to tailor your AccentHealth programming for your patients.',
        pic: 'dist/img/lb_set.png',
        points: 25,
        tag: 'Customize Your Programming'
      },
      {
        type: 25,
        name: 'Create a Practice Message',
        text: 'Communicate with your patients by leveraging our library of 90+ custom messages.',
        pic: 'dist/img/lb_mon.png',
        points: 25,
        tag: 'Create a Practice Message'
      },
      {
        type: 25,
        name: 'Attend a Webinar',
        text: 'Join us for monthly webinars where we provide tips and advice on ways to increase patient satisfaction.',
        pic: 'dist/img/lb_web.png',
        points: 25,
        tag: 'Attend a Webinar'
      },
      {
        type: 'more',
        name: 'Update your Information',
        text: 'We always want to communicate with the right point of contact. Help us keep our files up to date.',
        pic: 'dist/img/lb_note.png',
        link: 'http://myaccenthealth.com/communication/myaccenthealth-account/?a=edit',
        points: 100,
        tag: 'Update your Information'
      },
      {
        type: 'more',
        name: 'Renovating or Relocating?',
        text: 'We’ll provide custom solutions to ensure your patients continue to be provided the best in educational health and wellness tv.',
        pic: 'dist/img/lb_gr.png',
        points: 250,
        tag: 'Renovating or Relocating?'
      },
      {
        type: 'more',
        name: 'Loyalty Bonus',
        text: 'To celebrate our partnership, we’re giving you <strong>100 points</strong> on our anniversary each year!',
        pic: 'dist/img/lb_kyb.png',
        hide_button: true,
        tag: 'Loyalty Bonus'
      }
    ])

    .directive('customAction', function () {

      return {

        restrict: 'A',
        replace: false,
        templateUrl: '/html/ui/ui.actions.custom.html',
        scope: {
          data: '='
        },
        link: function (scope) {

        }

      }

    })

    .directive('sailplayActions', function (sp_api, sp, actions_data, custom_actions_data) {

      return {

        restrict: 'A',
        replace: false,
        scope: true,
        link: function (scope, el) {

          scope.actions = sp_api.data('load.actions.list');
          scope.user = sp_api.data('load.user.info');

          scope.custom_actions_data = angular.copy(custom_actions_data);

          sp.on('login.success', function () {

            var _tags = scope.custom_actions_data.map(function (item) {
              return item.tag;
            });

            sp.send('tags.exist', {tags: _tags});

            sp.on('tags.exist.success', function (res) {

              angular.forEach(res.tags, function (item, index) {

                if (scope.custom_actions_data[index]) {

                  scope.custom_actions_data[index].exist = item.exist;

                }

              });

            });

          });

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

          $(el).on('click', '.bns_custom_action', function () {
            var item = $(this).closest('.bns_ern_point_item');
            var data = $(this).data('action');
            $(el).find('.bns_load_block_up img').attr('src', data.pic);
            $(el).find('.bns_load_block_up h2').html(data.name);
            $(el).find('.bns_load_block_up span').html(data.text);
            $(el).find('.bns_load_block_up strong').html(item.find('strong').html());
            if (data.link) {
              $(el).find('.bns_load_block_up a').removeClass('bns_close_event');
              $(el).find('.bns_load_block_up a').attr('href', data.link);
            } else {
              $(el).find('.bns_load_block_up a').addClass('bns_close_event');
            }
            $(el).find('.bns_overlay_compl').fadeIn();
            return false;
          })

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

          elm.attr('data-styles', $rootScope.config.social_styles || 'https://d3sailplay.cdnvideo.ru/media/assets/assetfile/d6e3e0982319ff48594d5f1befc37ef8.css');

          sp.actions && sp.actions.parse(elm[0], scope.action);

        }

      };

    });

}());
