(function () {

  angular.module('ui.datepicker', [])

    .service('dateService', function () {

      var self = this;

      self.days = {
        1: 31,
        2: 29,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
      };

      var current_year = new Date().getFullYear();
      var arr = [];
      for (var i = 90; i > 0; i--) {
        arr.push(current_year - i);
      }



      self.years = arr.reverse();

      self.months = {
        1: "январь",
        2: "февраль",
        3: "март",
        4: "апрель",
        5: "май",
        6: "июнь",
        7: "июль",
        8: "август",
        9: "сентябрь",
        10: "октябрь",
        11: "ноябрь",
        12: "декабрь"
      };

      return this;

    })

    .directive('datePicker', function (config, dateService) {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: '/html/ui/ui.datepicker.html',
        scope: {
          model: '=',
          disabled: '=?'
        },
        link: function (scope) {

          scope.days = dateService.days;
          scope.months = dateService.months;
          scope.years = dateService.years;

          scope.range = function (start, end) {
            var result = [];
            for (var i = start; i <= end; i++) {
              result.push(i);
            }
            return result;
          };

        }
      }

    });


}());