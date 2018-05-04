(function () {

  window.addEventListener('DOMContentLoaded', function () {

    angular.bootstrap(document.getElementById('tribune'), ['tribune']);

  });


  angular.module('tribune', [])

    .service('sp', function ($window) {

      return $window.SAILPLAY;

    })

    .run(function (sp) {

      sp.send('init', {partner_id: 1556, domain: '//sailplay.ru', lang: 'en'});

    })

    .directive('lead', function (sp, $q, $timeout, $http) {

      return {

        restrict: 'A',
        scope: true,
        link: function (scope, elm, attrs) {

          var new_form = {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            account_number: '',
            market: '',
            send_sms: false,
            send_email: false,
            EZPay: false,
            send_email_type: 'Activation Email'
          };

          var conflict_texts = {
            '-5103': 'The email you have provided already exists in the database.',
            '-5102': 'The phone you have provided already exists in the database.',
            '-200031': 'Both phone and email you have provided already exist in the database.'
          };


          scope.submited = false;
          scope.attention = false;
          scope.force_button = false;
          scope.show_errors = false;

          scope.reset = function () {
            $timeout(function () {
              scope.submited = false;
              $('.sp_common-selectize.market')[0].selectize.setValue('');
              scope.form = angular.copy(new_form);
              scope.show_errors = false;
              scope.force_button = false;
            }, 0);
          };

          scope.reset();

          scope.isFilled = function () {
            if (
              scope.form
              && (scope.form.email || scope.form.phone)
              && scope.form.first_name
              && scope.form.last_name
              && scope.form.market
              && scope.form.account_number
            ) {
              return true;
            } else {
              return false;
            }
          };

          var timeout_errors;

          scope.submit = function (force) {

            timeout_errors && $timeout.cancel(timeout_errors);

            if (scope.isFilled()) {

              scope.show_errors = false;

              send_data(get_date(), force);

            } else {

              scope.show_errors = true;

              timeout_errors = $timeout(function () {

                scope.show_errors = false;

              }, 5000);

            }

          };

          function send_data(data, force) {

            if (force) {
              data.force_update = true;
            }

            sp.jsonp.get('//sailplay.net/js-api/' + sp.config().partner.id + '/custom/tribune-reg/', data, function (res) {
                if (res.status == 'ok') {
                  if (data.EZPay)
                      sp.jsonp.get('//sailplay.net/js-api/' + sp.config().partner.id + '/tags/add/', EZ_tag_data(data), function (res) {
                          res.status == 'ok' ? complete_submit(true) : complete_submit(false)
                      });
                  else
                    complete_submit(true)
                } else
                    complete_submit(false)
            });
          }

          function complete_submit(status) {
            scope.$apply(function () {

              if (status) {
                scope.submited = true;
                $timeout(function () {
                  scope.submited = false;
                }, 5000);
              } else {
                scope.attention = conflict_texts[res.status_code] || null;
                scope.force_button = true;
              }
            })
          }

          function EZ_tag_data(data) {
              return {
                  email: data.email,
                  tags: "EZPay_".concat(data.market)
              }
          }

          function get_date() {

            var _data = angular.copy(scope.form);

            if (!_data.send_email) {
              delete _data.send_email_type;
            }

            return _data;

          }

          scope.markets = [
            {
              label: 'San Diego Union',
              value: 'SanDiegoUnion'
            },
            {
              label: 'latimes',
              value: 'latimes'
            },
            {
              label: 'chicagotribune',
              value: 'chicagotribune'
            },
            {
              label: 'sunsentinel',
              value: 'sunsentinel'
            },
            {
              label: 'orlandosentinel',
              value: 'orlandosentinel'
            },
            {
              label: 'dailypress',
              value: 'dailypress'
            },
            {
              label: 'courant',
              value: 'courant'
            },
            {
              label: 'baltimoresun',
              value: 'baltimoresun'
            },
            {
              label: 'mcall',
              value: 'mcall'
            },
            {
              label: 'capgaznews',
              value: 'capgaznews'
            },
            {
              label: 'carrollcountytimes',
              value: 'carrollcountytimes'
            },
            {
              label: 'Naperville Sun',
              value: 'NapervilleSun'
            },
            {
              label: 'Daily Southtown',
              value: 'DailySouthtown'
            },
            {
              label: 'Beacon News',
              value: 'BeaconNews'
            },
            {
              label: 'Post Tribune',
              value: 'PostTribune'
            },
            {
              label: 'Courier News',
              value: 'CourierNews'
            },
            {
              label: 'Lake County News',
              value: 'LakeCountyNews'
            },
            {
              label: 'New York Daily News',
              value: 'NewYorkDailyNews'
            }
          ];

        }

      };

    })

    .directive('select', function ($timeout) {

      return {

        restrict: 'A',
        link: function (scope, elm) {

          $timeout(function () {
            $(elm).selectize({
              onChange: function (res) {
              }
            });
          }, 0);


        }

      };

    });

}());
