(function () {

  angular.module('iledebeaute.directives.test', [ ])

    .directive('testCmp', function (config, $q, api, tools) {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: '/html/components/components.test.html',
        scope: {
          model: '=',
          onFinish: '='
        },
        link: function (scope) {

          scope.step = 0;
          scope.tags = [];
          scope.vars = [];
          scope.customAnswer = null;
          scope.showCustomAnswer = false;
          scope.sending = false;

          scope.$watch('model', function(){
            scope.step = 0;
          });

          scope.submit = function () {
            scope.exist = true;
            return $q(function (resolve) {
              var tags = angular.copy(scope.tags);
              tags.push(scope.model.tag);
              api.user.tags.add(tags).then(function () {
                api.user.vars.add(scope.vars).then(function () {
                  resolve();
                });
              })
            })
          };

          scope.isValid = function () {
            if (!scope.model || !scope.model.data) return false;
            // TODO: доделать логику, если не объект, а массив
            var active = tools.findByProperty(scope.model.data[scope.step].a, 'val', true);
            return !scope.sending && active && (!active.yourAnswer || active.yourAnswer && scope.customAnswer && scope.customAnswer.length) ? true : false;
          };

          scope.next = function () {
            if (!scope.isValid()) return;
            var tags = [];
            var tagsObj = tools.findByProperty(scope.model.data[scope.step].a, 'val', true);
            if (tagsObj) {
              if (angular.isArray(tagsObj)) {
                tagsObj.map(function (el) {
                  return el.tag
                })
              } else {
                tags = [tagsObj.tag];
              }
            }
            scope.tags = scope.tags.concat(tags);
            if (scope.showCustomAnswer) {
              scope.vars[tagsObj.yourAnswer] = scope.customAnswer;
            }
            scope.customAnswer = null;
            scope.showCustomAnswer = false;
            if (scope.step == scope.model.data.length - 1) {
              scope.submit().then(function () {
                scope.onFinish && scope.onFinish(scope.model, scope.tags, scope.vars);
              });
            } else {
              scope.step++;
            }
          };

          scope.setAnswer = function (item, array) {
            angular.forEach(array, function (el) {
              el.val = false;
            });
            if (item.yourAnswer) {
              scope.customAnswer = null;
              scope.showCustomAnswer = true;
            } else {
              scope.showCustomAnswer = false;
            }
            item.val = true;
          };

        }
      }

    });

}());