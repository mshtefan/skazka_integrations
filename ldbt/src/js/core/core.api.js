(function () {

  angular.module('core.api', [])

    .factory('sp_resolve', function ($q, sp, config) {

      return function () {

        return $q(function (resolve, reject) {

          if (!sp) reject(false);

          if (sp || sp.config() === {}) {

            var sp_config = {
              partner_id: config.partner_id,
              domain: config.domain,
              lang: config.lang
            };

            sp.send('init', sp_config);

            sp.on('init.success', function (res) {
              resolve(res);
            });

            sp.on('init.error', function (res) {
              reject(res);
            });

          }

          else {
            resolve(sp.config());
          }

        });

      }

    })

    .service('routeService', function () {

      var self = this;

      var _default = '/';

      var prev = _default;

      self.getPrev = function () {
        return prev;
      };

      self.setPrev = function (page) {
        prev = page || _default;
      };

      return self;

    })

    .service('tagS', function () {

      var self = this;
      var auth = ['Type_1', 'Пользователь авторизован', 'Пользователь подтвердил E-mail', 'Пользователь подтвердил телефон'];
      var form = ['Подписался на рассылку', 'Согласен с правилами'];

      self.auth = function () {
        return angular.copy(auth);
      };

      self.form = function () {
        return angular.copy(form);
      };

      self.banned = 'Banned';

      return self;

    })

    .service('sp', function ($window, $log) {

      if (!$window.SAILPLAY) {
        $log.error('SAILPLAY HUB not found');
        return false;
      }

      return $window.SAILPLAY;

    })

    .service('api', function (sp, $q, $http, config, $location) {

      var self = this;

      self.auth = false;

      self.config = {
        quiz: [],
        store_list: [],
        city_list: [],
        faq: [],
        pages: {}
      };

      self.domain = function () {
        return sp.config() && sp.config().DOMAIN;
      };

      self.gifts = {};

      self.gifts.list = function (params) {
        return $q(function (resolve, reject) {
          sp.on('load.gifts.list.success', function (data) {
            self.data('gifts.list', data);
            resolve(data);
          });
          sp.send('load.gifts.list', params);
        });
      };

      // Custom method
      self.gifts.archive = function (params) {
        return $q(function (resolve, reject) {
          sp.on('load.gifts.archive.success', function (data) {
            self.data('gifts.archive', data);
            resolve(data);
          });
          sp.send('load.gifts.archive', params);
        });
      };

      self.actions = {};

      self.actions.list = function () {
        return $q(function (resolve, reject) {
          sp.on('load.actions.list.success', function (data) {
            var actions = data.actions.filter(function (item) {
              return item.socialType;
            });
            self.data('actions.list', actions);
            resolve(data);
          });
          sp.send('load.actions.list');
        });

      };

      self.load_config = function (){
        return $q(function (resolve) {
          sp.jsonp.get(sp.config().DOMAIN + sp.config().urls.loyalty_page_config_by_name, { name: 'default' }, function (res) {
            if(res && res.config) {
              self.config = res.config.config;
            }
            resolve(res);
          });
        });
      };

      self.user = {
        tags: {},
        vars: {}
      };

      function getTimeZone() {
        var offset = new Date().getTimezoneOffset(), o = Math.abs(offset);
        return (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
      }

      self.user.history = function () {
        return $q(function (resolve, reject) {
          sp.on('load.user.history.success', function (data) {
            self.data('user.history', data);
            resolve(data);
          });
          sp.send('load.user.history', {tz: getTimeZone()});
        });
      };

      self.user.purchase_info = function (params) {
        if (sp.config() == {}) return;
        params = params || {};
        if (sp.config().auth_hash) {
          params.auth_hash = sp.config().auth_hash;
        }
        return $q(function (resolve) {
          sp.jsonp.get(sp.config().DOMAIN + '/js-api/' + sp.config().partner.id + '/purchases/get/', params, function (res) {
            resolve(res);
          });
        });
      };

      self.user.send_password = function (data) {
        if (sp.config() == {}) return;
        return $q(function (resolve) {
          sp.jsonp.get(sp.config().DOMAIN + '/js-api/' + sp.config().partner.id + '/users/verification/password/send/', data, function (res) {
            resolve(res);
          });
        });
      };

      self.user.login = function (data) {
        if (sp.config() == {}) return;
        return $q(function (resolve) {
          $http({
            method: 'POST',
            url: sp.config().DOMAIN+'/users/ajax/login/',
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
          }).then(function successCallback(res) {
            resolve(res);
          });
        });
      };

      self.user.logout = function (data) {
        if (sp.config() == {}) return;
        var url = '//' + window.location.host;
        return $q(function (resolve) {
          $http({
            method: 'GET',
            url: '/users/logout/?redirect_url=' + url,
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
          }).then(function successCallback(res) {
            resolve(res);
          });
        });
      };

      self.user.info = function (params) {
        params = params || {};
        params.purchases = 1;
        params.all = 1;
        return $q(function (resolve, reject) {
          sp.on('load.user.info.success', function (data) {
            self.data('user.info', data);
            resolve(data);
          });
          sp.send('load.user.info', params);
        });

      };

      self.user.check_verification_code = function (data) {
        if (!data)return;
        return $q(function (resolve) {
          sp.jsonp.get(sp.config().urls.users.verification.code.check, data, function (res) {
            resolve(res);
          });
        });
      };

      self.user.send_verification_code = function (data) {
        if (!data)return;
        return $q(function (resolve) {
          sp.jsonp.get(sp.config().urls.users.verification.code.send, data, function (res) {
            resolve(res);
          });
        });
      };

      self.user.update = function (data) {
        if (!data)return;
        return $q(function (resolve) {
          sp.on('user.update.success', function (data) {
            resolve(data);
          });
          sp.send('user.update', data)
        });
      };

      self.user.tags.add = function (tags, user) {
        return $q(function (resolve) {
          if (!tags || !tags.length) return resolve();

          tags = tags.map(function(tag){
            return tag.replace(/,/g , '.');
          });

          var limit = Math.ceil(tags.length / 10);
          var state = 0;

          var data = {};
          if (user) {
            data.user = user;
          }

          function partialSending() {
            if (!tags.length) return;
            var add = function () {
              if (tags.length > 9) {
                data.tags = tags.splice(0, 9);
                sp.send('tags.add', data);
              } else if (tags.length) {
                data.tags = tags;
                sp.send('tags.add', data);
                tags = [];
              }
            };
            if (tags.length) {
              add();
            }
          }

          function checkState() {
            if (state == limit) {
              resolve();
            } else {
              partialSending();
            }
          }

          sp.on('tags.add.success', function () {
            state++;
            checkState();
          });

          partialSending();

        });
      };

      self.user.tags.delete = function (tags, user) {
        return $q(function (resolve) {
          if (!tags) return resolve();

          tags = tags.map(function(tag){
            return tag.replace(/,/g , '.');
          });

          var limit = Math.ceil(tags.length / 10);
          var state = 0;

          var data = {};
          if (user) {
            data.user = user;
          }

          function partialSending() {
            if (!tags.length) return;
            var del = function () {
              if (tags.length > 9) {
                data.tags = tags.splice(0, 9);
                sp.send('tags.delete', data);
              } else if (tags.length) {
                data.tags = tags;
                sp.send('tags.delete', data);
                tags = [];
              }
            };
            if (tags.length) {
              del();
            }
          }

          function checkState() {
            if (state == limit) {
              resolve();
            } else {
              partialSending();
            }
          }

          sp.on('tags.delete.success', function () {
            state++;
            checkState();
          });

          partialSending();

        });
      };

      self.user.checkName = function (data) {
        if (!data) return;
        data.partner_id = config.partner_id;
        return $q(function (resolve, reject) {
          sp.jsonp.get(sp.config().urls.users.verification.name, data, function (res) {
            if (res.status == 'ok') {
              resolve(true)
            } else {
              resolve(false)
            }
          });
        });
      };

      self.user.tags.exist = function (params) {
        return $q(function (resolve) {

          var response = [];
          if (!params || !params.tags || !params.tags.length) return resolve();
          var limit = Math.ceil(params.tags.length / 10);
          var state = 0;
          var data = {};

          if(params.user) {
            data.user = params.user;
          }

          function partialSending() {

            if (!params.tags.length) return;

            var exist = function () {
              if (params.tags.length > 9) {
                data.tags = params.tags.splice(0, 9);
                sp.send('tags.exist', data);
              } else if (params.tags.length) {
                data.tags = params.tags;
                sp.send('tags.exist', data);
                params.tags = [];
              }
            };
            if (params.tags.length) {
              exist();
            }
          }

          function checkState() {
            if (state == limit) {
              resolve(response);
            } else {
              partialSending();
            }
          }

          sp.on('tags.exist.success', function (res) {
            response = response.concat(res.tags);
            state++;
            checkState();
          });

          partialSending();

        });
      };

      self.user.vars.add = function (vars, user) {
        return $q(function (resolve, reject) {
          if (!vars || !Object.keys(vars).length) return resolve();

          var data = {};
          data.custom_vars = angular.copy(vars);

          if (user) {
            data.user = user;
          }

          sp.on('vars.add.success', function (res) {
            resolve(res);
          });
          sp.send('vars.add', data);
        })
      };

      var data = {};

      self.data = function (key, value) {
        if (value) {
          data[key] = angular.copy(value);
        }
        return function () {
          return data[key];
        };
      };

    })

    .service('plural', function () {
      var self = this;
      self.get = function (n, forms) {
        return forms[n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
      };
      return self;
    });

}());
