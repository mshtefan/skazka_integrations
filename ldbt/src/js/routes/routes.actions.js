(function () {

  angular.module('routes.actions', [])

    .config(function ($routeProvider, config) {

      $routeProvider.when('/actions', {

        controller: 'Actions',
        templateUrl: '/html/routes/routes.actions.html',
        resolve: {
          checkout: function (api, $location, routeService) {
            $('.preloader').show();
            if ($location.path()) {
              routeService.setPrev($location.path());
            }
          },
          loadInfo: ['api', function (api) {
            return api.user.info();
          }],
          loadActions: ['api', function (api) {
            return api.actions.list().then(function(){
              $('.preloader').hide();
            })
          }]
        }

      });

    })

    .controller('Actions', function (sp, api, $scope, tools, actionService, $timeout, plural) {
      $scope.hidden = true;
      $scope.currentTest = null;
      $scope.css_link = actionService.getActionsCssLink();
      $scope.user = api.data('user.info');
      $scope.testsData = angular.copy(api.config.quiz);
      $scope.actions = api.data('actions.list');
      $scope.plural = plural.get;

      $scope.onFinish = function () {
        $scope.hidden = true;
        $scope.finish_test = true;
        //$scope.testsData = angular.copy(actionService.tests);
        $scope.currentTest.exist = true;
        //console.dir($scope.testsData);
        $timeout(function () {
          update();
        }, 1000);
      };

      $scope.isEmpty = function () {
        var tests = $scope.testsData.filter(function (item) {
          return !item.exist;
        });
        if (($scope.actions && $scope.actions() && !$scope.actions().length) && !tests.length) {
          return true
        } else {
          return false;
        }
      };

      $scope.openTest = function (item) {
        $scope.currentTest = item;
      };

      function getExist() {
        var tags = $scope.testsData.map(function (el) {
          return el.tag;
        });
        api.user.tags.exist({tags: tags}).then(function (res) {
          var el = {};
          angular.forEach(res, function (tag) {
            el = tools.findByProperty($scope.testsData, 'tag', tag.name);
            el.exist = tag.exist;
          });
        });
      }

      function parseActions() {
        api.actions.list().then(function (actions) {
          if ($scope.actions && $scope.actions().length) {
            $timeout(function () {
              sp.send('actions.parse', $scope.actions());
              $scope.hidden = false;
            }, 100);
          } else {
            $scope.hidden = false;
          }
        });
      }

      function update() {
        $scope.hidden = true;
        for (var i = 0, len = $scope.testsData.length; i < len; i++) {
          if ($scope.currentTest && $scope.currentTest.tag === $scope.testsData[i].tag) {
            $scope.testsData[i].exist = true;
          }
        }
        $scope.currentTest = null;
        parseActions();
      }

      getExist();

      parseActions();

      sp.on('actions.perform.success', function (data) {
        update();
        $scope.$digest();
      });

      $scope.transformTitle = actionService.getTitle;
      $scope.getIcon = actionService.getIcon;

    });

}());
