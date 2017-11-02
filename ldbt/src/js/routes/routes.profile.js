(function () {

  angular.module('routes.profile', [])

    .config(function ($routeProvider) {

      $routeProvider.when('/profile/edit', {
        controller: 'ProfileEdit',
        templateUrl: '/html/routes/routes.profile.edit.html',
        resolve: {
          checkout: function (api, $location, routeService) {
            $('.preloader').show();
            if ($location.path()) {
              routeService.setPrev($location.path());
            }
            $('.preloader').hide();
          },
          loadInfo: function (api) {
            return api.user.info();
          }
        }
      });

    })

    .controller('ProfileEdit', function ($scope, api, userService) {

      $('.preloader').show();

      $scope.user = api.data('user.info');

      var city_prefix = userService.city_prefix;

      $scope.city_list = angular.copy(userService.city_list());

      $scope.get_stores = userService.get_stores;

      var _origin_store = null;

      var _origin_city = null;

      var tags = userService.city_list().map(function (item) {
        return city_prefix + item;
      });

      $scope.form = {
        first_name: $scope.user().user.first_name || null,
        last_name: $scope.user().user.last_name || null,
        sex: $scope.user().user.sex || 2,
        birth_date: userService.dateToArray($scope.user().user.birth_date),
        email: $scope.user().user.email || null,
        phone: $scope.user().user.phone && $scope.user().user.phone.slice(1) || null,
        password: null,
        store: null,
        city: null
      };

      api.user.tags.exist({tags: tags.slice(0, 10)}).then(function (res) {

        if (res) {
          res.forEach(function (item) {
            if (item.exist && userService.city_list().indexOf(item.name.replace(city_prefix, '')) != -1) {
              $scope.form.city = item.name.replace(city_prefix, '');
              _origin_city = item.name.replace(city_prefix, '');
              document.getElementById('city_label').style.display = 'none'
            }
          });

          if (_origin_city) {

            api.user.tags.exist({tags: userService.get_stores(_origin_city).map(function(item){ return item.tag})}).then(function (res2) {

              res2.forEach(function (item) {
                if (item.exist) {
                  $scope.form.store = item.name;
                  _origin_store = item.name;
                  document.getElementById('shop_label').style.display = 'none'
                }
              });

            })

          }

        }
        $('.preloader').hide();
      });

      function success_popup() {
        $scope.result_popup = 'Данные успешно сохранены';
      }

      $scope.changed = function () {

        var _form = angular.copy($scope.form);

        var data = {};

        if (_form.sex && _form.sex != $scope.user().user.sex) {
          data.sex = _form.sex;
        }

        if (_form.first_name && _form.first_name != $scope.user().user.first_name) {
          data.firstName = _form.first_name;
        }

        if (_form.last_name && _form.last_name != $scope.user().user.last_name) {
          data.lastName = _form.last_name;
        }

        if (_form.phone && ('7' + _form.phone) != $scope.user().user.phone) {
          data.addPhone = '7' + _form.phone;
        }

        if (_form.email && _form.email != $scope.user().user.email) {
          data.addEmail = _form.email;
        }

        if (_form.password && _form.password.length >= 8) {
          data.addPass = _form.password;
        }

        if (_form.birth_date
          && _form.birth_date[0] && _form.birth_date[1] && _form.birth_date[2]
          && !angular.equals(_form.birth_date, userService.dateToArray($scope.user().user.birth_date))
        ) {
          data.birthDate = _form.birth_date.join('-');
        }

        if (!_origin_store && _form.store || _origin_store && _origin_store != _form.store) {
          data.store = _form.store;
        }

        if (!_origin_city && _form.city || _origin_city && _origin_city != _form.city) {
          data.city = _form.city;
        }

        if (data && Object.keys(data).length) {
          return true;
        } else {
          return false;
        }

      };

      $scope.edit = function () {

        $('.preloader').show();

        var _form = angular.copy($scope.form);

        var data = {};

        if (_form.sex && _form.sex != $scope.user().user.sex) {
          data.sex = _form.sex;
        }

        if (_form.first_name && _form.first_name != $scope.user().user.first_name) {
          data.firstName = _form.first_name;
        }

        if (_form.last_name && _form.last_name != $scope.user().user.last_name) {
          data.lastName = _form.last_name;
        }

        if (_form.phone && ('7' + _form.phone) != $scope.user().user.phone) {
          data.addPhone = '7' + _form.phone;
        }

        if (_form.email && _form.email != $scope.user().user.email) {
          data.addEmail = _form.email;
        }

        if (_form.password && _form.password.length >= 8) {
          data.addPass = _form.password;
        }

        if (_form.birth_date
          && _form.birth_date[0] && _form.birth_date[1] && _form.birth_date[2]
          && !angular.equals(_form.birth_date, userService.dateToArray($scope.user().user.birth_date))
        ) {
          data.birthDate = _form.birth_date.join('-');
        }


        function tagUpdate() {

          var tags = {add: [], delete: []};

          if (!_origin_city && _form.city || _origin_city && _origin_city != _form.city) {
            tags.add.push(userService.city_prefix + _form.city);
          }

          if (!_origin_store && _form.store || _origin_store && _origin_store != _form.store) {
            tags.add.push(_form.store);
          }

          if(_origin_city && _origin_city != _form.city) {
            tags.delete.push(userService.city_prefix + _origin_city);
          }

          if(_origin_store && _origin_store != _form.store) {
            tags.delete.push(_origin_store);
          }

          var address = userService.store_list().filter(function (item) {
            return item.tag == _form.store
          });

          var variables = address && address.length ? {store_address: address[0].address} : null;

          api.user.tags.delete(tags.delete && tags.delete.length ? tags.delete : null).then(function () {

            api.user.tags.add(tags.add && tags.add.length ? tags.add : null).then(function () {

              if (tags.add.length) {

                _origin_city = _form.city;

                _origin_store = _form.store;

              }

              api.user.vars.add(variables).then(function () {

                api.user.info().then(function () {

                  $('.preloader').hide();

                  success_popup();

                });

              });



            });

          });

        }

        if (data && Object.keys(data).length) {

          api.user.update(data).then(function (res) {

            if (
              (!_origin_store && _form.store || _origin_store && _origin_store != _form.store) ||
              (!_origin_city && _form.city || _origin_city && _origin_city != _form.city)
            ) {

              tagUpdate();

            } else {

              api.user.info().then(function () {

                $('.preloader').hide();

                success_popup();

              });

            }

          });

        } else {
          if (
            (!_origin_store && _form.store || _origin_store && _origin_store != _form.store) ||
            (!_origin_city && _form.city || _origin_city && _origin_city != _form.city)
          ) {

            tagUpdate();

          } else {

            $('.preloader').hide();

          }

        }

      };


    });

}());
