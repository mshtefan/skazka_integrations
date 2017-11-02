(function () {

  angular.module('ui.menu', [])

    .service('menuService', function () {

      var self = this;

      self.menu = [
        {
          label: 'О программе',
          key: 'page/about',
          // DEFAULT ACTIVE ELEMENT
          active: true
        },
        {
          label: 'Условия участия',
          key: 'page/rules',
          items: [
            {
              label: 'Правила начисления бонусов',
              key: 'page/rules'
            },
            {
              label: 'Правила списания бонусов',
              key: 'page/cut_bonus_rules'
            },
            {
              label: 'Полезная информация',
              key: 'page/helpful_info'
            }
          ]
        },
        {
          label: 'История покупок',
          key: 'history',
          items: [
            {
              label:'Профиль',
              key: 'profile/edit'
            },
            {
              label: 'История покупок',
              key: 'history'
            },
            {
              label: 'Получите больше бонусов',
              key: 'actions'
            }
          ]
        },
        {
          label: 'Сокровищница привилегий',
          key: 'gifts',
          items: [
            {
              label: 'Сокровищница привилегий',
              key: 'gifts'
            },
            {
              label: 'Архив привилегий',
              key: 'gift_archive'
            }
          ]
        },
        {
          label: 'Вопрос-ответ',
          key: 'faq',
          items: [
            {
              label: 'Часто задаваемые вопросы',
              key: 'faq'
            },
            {
              label: 'Форма обратной связи',
              key: 'feedback'
            }
          ]
        }
      ];

      return this;
    })

    .directive('menu', function (menuService, $location, config, $rootScope, api, $window) {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: '/html/ui/ui.menu.html',
        scope: true,
        link: function (scope) {

          scope.model = menuService.menu;

          scope.generateUrl = function (key) {
            return key ? '#/' + key : '#/';
          };

          $rootScope.$on("$routeChangeSuccess", function (event, next, current) {
            update();
          });

          function update() {
            var url = $location.path().replace('/', '');
            for (var i = 0, len = scope.model.length; i < len; i++) {
              var item = scope.model[i];
              if (item.key == url) {
                item.active = true;
              } else {
                item.active = false;
              }
              if (item.items && item.items.length) {
                for (var y = 0, leny = item.items.length; y < leny; y++) {
                  var subItem = item.items[y];
                  if (subItem.key == url) {
                    subItem.active = true;
                    item.active = true;
                  } else {
                    subItem.active = false;
                  }
                }
              }
            }
          }

          scope.getSubmenu = function () {
            if (!scope.model) return;
            for (var i = 0, len = scope.model.length; i < len; i++) {
              var item = scope.model[i];
              if (item.active && item.items && item.items.length) {
                return item.items;
                break;
              }
            }
          };

          scope.exit = function () {
            $('.preloader').show();
            api.user.logout().then(function(res){
              $window.location.reload();
            })
          };

        }
      }

    });

}());
