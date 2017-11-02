(function () {

  angular.module('iledebeaute.directives.authorization', [])

    .directive('auth', function (config, api, $location, tagS, authApi, countries, sp, userService, $window) {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: '/html/components/cmp.auth.html',
        scope: {
          model: '='
        },
        link: function (scope) {

          $('.preloader').hide();

          var city_prefix = userService.city_prefix;

          scope.show = config && config.auth_hash === 'None' ? true : false;

          scope.state = 1;

          scope.countries = countries;

          var tags = tagS.auth();
          var tags2 = tagS.form();
          tags = tags.concat(userService.city_list().map(function (item) {
            return city_prefix + item;
          }));

          var login_form = {
            partner_id: config.partner_id,
            store_department_id: config.dep_id,
            phone_code: 7,
            country: countries.default,
            password: '',
            phone: '',
            email: '',
            agreement: 'on',
            code: ''
          };

          scope.city_list = angular.copy(userService.city_list());

          scope.get_stores = userService.get_stores;

          scope.gift_ok = null;

          scope.error_popup = null;

          scope.login_form = angular.copy(login_form);

          scope.confirmed_names_error = false;

          scope.form = {
            first_name: null,
            last_name: null,
            sex: 2,
            birth_date: [null, null, null],
            email: null,
            phone: null,
            city: null,
            store: null,
            subscribe: false,
            agree: false
          };

          var _origin_city = null;
          var _origin_store = null;

          scope.validateEmail = userService.validateEmail;

          scope.confirmedData = {
            email: false,
            phone: false
          };

          scope.confirm_code_error = false;

          var _empty_confirm_data = {
            type: null,
            value: null,
            show: null
          };

          scope.confirm_data = angular.copy(_empty_confirm_data);

          scope.confirmed_names = false;

          scope.card_number = '';

          scope.check_card_number = function () {
            if (scope.card_number) {
              api.user.tags.exist({
                user: {origin_user_id: scope.card_number},
                tags: tags
              }).then(function (res) {
                scope.state = 0;
                if (
                  res[0] && res[0].exist
                  && res[1] && !res[1].exist
                ) {
                  scope.confirmedData.email = res[2] && res[2].exist ? true : false;
                  scope.confirmedData.phone = res[3] && res[3].exist ? true : false;
                  res.forEach(function (item) {
                    if (item.exist && userService.city_list().indexOf(item.name.replace(city_prefix, '')) != -1) {
                      scope.form.city = item.name.replace(city_prefix, '');
                      _origin_city = scope.form.city;

                      if (_origin_city) {

                        api.user.tags.exist({
                          user: {origin_user_id: scope.card_number},
                          tags: userService.get_stores(_origin_city).map(function(item){ return item.tag})
                        }).then(function (res2) {

                          res2.forEach(function (item) {
                            if (item.exist) {
                              scope.form.store = item.name;
                              _origin_store = item.name;
                              if (document.getElementById('shop_label'))
                                document.getElementById('shop_label').style.display = 'none'
                            }
                          });

                        })

                      }

                      setTimeout(function () {
                        if (document.getElementById('city_label'))
                          document.getElementById('city_label').style.display = 'none';
                      }, 100);

                    }
                  });
                  scope.state = 4;
                } else if (
                  res[0] && res[0].exist
                  && res[1] && res[1].exist
                  && res[2] && res[2].exist
                  && res[3] && res[3].exist
                ) {
                  scope.state = 2;
                } else {
                  scope.state = 1;
                  $location.path('/sorry');
                }
              })
            }
            else {
              console.error('Enter card number');
            }
          };

          scope.sendPassword = function () {
            if (!scope.card_number) return;
            return api.user.send_password({origin_user_id: scope.card_number})
          };

          scope.checkNames = function () {
            if (!scope.form.first_name || !scope.form.last_name) {
              return;
            }
            var data = {
              origin_user_id: scope.card_number,
              first_name: scope.form.first_name,
              last_name: scope.form.last_name
            };
            api.user.checkName(data).then(function (res) {
              if (res) {
                scope.confirmed_names_error = false;
                scope.confirmed_names = true;
              } else {
                scope.confirmed_names = false;
                scope.confirmed_names_error = true;
              }
            });
          };

          scope.valid_form = function () {
            if (scope.confirmed_names
              && scope.form.first_name
              && scope.form.last_name
              && (scope.form.birth_date && scope.form.birth_date[0] && scope.form.birth_date[1] && scope.form.birth_date[2])
              && (scope.form.sex == 1 || scope.form.sex == 2)
              && scope.confirmedData.email
              && scope.confirmedData.phone
              && scope.form.store
              && scope.form.city
              && scope.form.subscribe
              && scope.form.agree
            ) {
              return true;
            }
            return false;
          };

          scope.reg = function () {

            $('.preloader').show();

            var _form = angular.copy(scope.form);

            var data = {};
            data.sex = scope.form.sex;
            data.birthDate = scope.form.birth_date.join('-');
            data.origin_user_id = scope.card_number;

            var tags = {add: [], delete: []};

            tags.add = tags.add.concat(tags2);

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

            api.user.update(data).then(function () {

              api.user.tags.delete(tags.delete && tags.delete.length ? tags.delete : null, {origin_user_id: scope.card_number}).then(function () {

                api.user.tags.add(tags.add && tags.add.length ? tags.add : null, {origin_user_id: scope.card_number}).then(function () {

                  api.user.vars.add(variables, {
                    origin_user_id: scope.card_number
                  }).then(function () {

                    scope.sendPassword().then(function () {

                      $('.preloader').hide();
                      scope.state = 5;

                    });

                  })

                });

              });

            });

          };

          scope.confirm = function () {
            if (!scope.confirm_data || !scope.confirm_data.type || !scope.confirm_data.value || !scope.card_number) return;
            var data = {
              origin_user_id: scope.card_number,
              identifier: scope.confirm_data.type,
              value: scope.confirm_data.value
            };
            api.user.check_verification_code(data).then(function (res) {
              if (res.status == 'ok') {
                scope.confirm_code_error = false;
                scope.confirmedData[scope.confirm_data.type] = true;
                scope.confirm_data = angular.copy(_empty_confirm_data);
              } else {
                scope.confirm_code_error = true;
              }
            });
          };

          scope.get_confirm_code = function () {
            if (!scope.confirm_data || !scope.confirm_data.type || !scope.card_number) return;

            var data = {
              origin_user_id: scope.card_number,
              identifier: scope.confirm_data.type,
              value: scope.confirm_data.type === 'phone' ? '7' + scope.form[scope.confirm_data.type] : scope.form[scope.confirm_data.type]
            };
            api.user.send_verification_code(data).then(function (res) {
              if (res && res.status == 'error') {
                scope.confirm_data.show = false;
                if (res.status_code == '-200007') {
                  scope.error_popup = 'Указанный Вами телефон уже зарегистрирован для другого номера Дисконтной карты. Если Вы не регистрировали данный телефон в системе, обратитесь, пожалуйста, к Персональному менеджеру по телефону: 8 (342) 214-42-82';
                } else if (res.status_code == '-200010') {
                  scope.error_popup = 'Указанный Вами e-mail уже зарегистрирован для другого номера Дисконтной карты. Если Вы не регистрировали данный e-mail в системе, обратитесь, пожалуйста, к Персональному менеджеру по телефону: 8 (342) 214-42-82';
                }
              } else {
                scope.confirm_data.show = true;
                scope.error_popup = null;
              }

            });
          };

          scope.show_confirm_popup = function (type) {
            if (!type) return;
            scope.confirm_code_error = false;
            scope.send_password = false;
            scope.confirm_data.type = type;
            scope.get_confirm_code();
          };

          scope.login = function () {
            scope.state = 0;
            api.user.login(scope.login_form).then(function (res) {
              if (res && res.data && res.data.status == 'ok' && res.data.auth_hash) {
                $window.location.reload();
              } else {
                scope.state = 2;
                scope.message = {
                  text: 'Неправильно введен логин или пароль',
                  type: 'error'
                };
              }
            });

          };

          scope.$on('auth:password_reset_success', function () {
            scope.state = 2;
            scope.message = {
              text: 'Пароль успешно сохранен. Вы можете войти под новым паролем.',
              type: 'success'
            };
          });

        }
      }

    });

}());