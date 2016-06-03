(function () {

  angular.module('sp.statuses', [])

    .directive('spStatusList', function ($compile) {

      return {

        restrict: 'A',
        replace: false,
        scope: false,
        link: function (scope) {

          if (scope.$last) {
            setTimeout(function(){

              var nowPoint = $('.bns_reit_line').attr('data-points');
              var lineWidth = $('.bns_reit_line_main').width();

              $('.bns_reit_point').filter(function () {
                if (parseInt($(this).attr('data-points-act')) <= nowPoint) {
                  $(this).addClass('act');
                }
              });

              $('.bns_choice_gift_main').filter(function () {
                if (parseInt($(this).attr('data-point-from')) <= nowPoint) {
                  $(this).addClass('act');
                }
              });

              var lastAct = $('.bns_reit_point.act').last();
              var nextItem = lastAct.next() && lastAct.next().length ? lastAct.next() : lastAct;
              var lastActPoint = parseInt(lastAct.attr('data-points-act'));
              var nextItemPoint = parseInt(nextItem.attr('data-points-act'));
              var difference = nextItemPoint - lastActPoint;
              var differenceOneProc = parseInt(difference / 100);
              var linePathFromLastPoint = nowPoint - lastActPoint;
              var linePathFromLastPointProcent = linePathFromLastPoint / (differenceOneProc || 100);
              var positionLastAct = parseInt(nextItem && lastAct.position() && lastAct.position().left);
              var positionNextItem = parseInt(nextItem && nextItem.position() && nextItem.position().left);
              var positionDifferenceOneProc = (positionNextItem - positionLastAct) / 100;
              // тут получаем точку между последним активным и неактивным чекпоинтом
              var postionLinePath = parseInt(positionLastAct + positionDifferenceOneProc * linePathFromLastPointProcent);
              var lineWidthOneProcent = lineWidth / 100;
              var postionLineWidthProcent = postionLinePath / lineWidthOneProcent;

              $('.bns_reit_line').css('width', postionLineWidthProcent + '%');

            }, 500);
          }

        }
      }

    })

    .directive('sailplayStatuses', function (sp_api, status_service) {

      return {

        restrict: 'A',
        replace: false,
        scope: true,
        link: function (scope, elem) {

          scope.statuses = sp_api.data('load.badges.list');
          scope.limits = status_service.get_limits();
          scope.user = sp_api.data('load.user.info');

        }

      };

    });

}());
