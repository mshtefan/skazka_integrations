(function () {

  angular.module('ui', [
    'angularUtils.directives.dirPagination'
  ])

    .directive('badgesTable', function(sp_api, $timeout, sp){

      return {

        restrict: 'A',
        replace: false,
        scope: true,
        link: function(scope){

          var badges = sp_api.data('load.badges.list');
          var user = sp_api.data('load.user.info');

          scope.badge_tags = [ 10293166, 10293167, 10293170 ];

          scope.procents = 0;
          scope.user_points = 0;

          scope.get_next = function () {
            var statuses = badges && badges() && badges().multilevel_badges && badges().multilevel_badges[0];
            if (!statuses) return;
            var received = statuses.filter(function (status) {
              return status.is_received;
            });
            if (received.length == statuses.length) return null;
            var result = statuses.filter(function (status) {
              return !status.is_received;
            });
            return result[0] || statuses[0];
          };

          scope.get_offset = function () {
            var arr = badges;
            var limit = user && user && user() ? user().user_points.confirmed + user().user_points.spent + user().user_points.spent_extra : 0;
            var result = [];
            for (var i = 0, len = arr.length; i < len; i++) {
              var current_limit = arr[i];
              if (limit < current_limit) {
                result.push(current_limit);
              }
            }
            return Math.round(result[0] ? result[0] - limit : 0);
          };

          scope.$watch(function(){

            return angular.toJson([user() && user().user_points, badges()]);

          }, function(){

            var procents = 0;

            var statuses = badges && badges() && badges().multilevel_badges && badges().multilevel_badges[0];

            if(!statuses) procents = 0;

            else {

              var current_badge_index;

              //var last_badge_id = user() && user().last_badge && user().last_badge.id;
              var last_status_name = user() && user().user_status && user().user_status.name;

              if(!last_status_name){

                procents = 0;

              }
              else {
                angular.forEach(statuses, function(status, index){

                  //if(last_badge_id === status.id){

                  if(last_status_name === status.name){

                    current_badge_index = index;
                    procents = 100/statuses.length * (index);

                  }

                });
              }

            }

            var points = user() && user().user_points && user().user_points.confirmed;

            scope.procents = 0;
            scope.user_points = 0;

            function count_procents(){

              scope.procents = procents;

            }

            $timeout(count_procents, 40);

            function count_points(){

              if(scope.user_points < points){

                scope.user_points++;
                $timeout(count_points, 40);

              }

            }
            count_points();

          });

          scope.arc_style = function(){

            var deg_rotate = 0;

            if(user()){

              deg_rotate = -180+parseInt(scope.procents*2.6);

            }

            if(deg_rotate > 0) {
              deg_rotate = 0;
            }

            //console.log(deg_rotate);

            var style_object = {
              'transform': 'rotate('+deg_rotate+'deg)',
              '-moz-transform': 'rotate('+deg_rotate+'deg)',
              '-webkit-transform': 'rotate('+deg_rotate+'deg)',
              '-o-transform': 'rotate('+deg_rotate+'deg)',
              '-ms-transform': 'rotate('+deg_rotate+'deg)'
            };

            var style_string = '';

            for(var i in style_object){

              style_string+=(i + ':' + style_object[i] + ';');

            }

            return style_string;


          };

        }

      };

    })

    .directive('overlayClick', function(){

      return {
        restrict: 'A',
        replace: false,
        scope: false,
        link: function(scope, elm, attrs){

          elm.on('click', function(e){
            if(e.target === elm[0]){
              scope.$apply(function () {
                scope.$eval(attrs.overlayClick);
              });
            }
          });

        }
      };

    })

    .directive('slickCarouselSlide', function ($compile, $timeout) {
      return {

        link: function (scope, element, attrs) {
          scope.hidden = true;
          if (scope.$last) { // all are rendered
            $(element).parent().slick({
              infinite: false,
              nextArrow: '<img class="slider_arrow right" src="dist/img/right_arrow.png"/>',
              prevArrow: '<img class="slider_arrow left" src="dist/img/left_arrow.png"/>',
              slidesToShow: 4,
              slidesToScroll: 4,
              responsive: [
                {
                  breakpoint: 1190,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                  }
                },
                {
                  breakpoint: 880,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
            });
            $timeout(function(){
              scope.hidden = false;
            }, 1000)
          }
        }

      };
    })

    .directive('notifier', function(){

       return {

         restrict: 'E',
         replace: true,
         scope: true,
         templateUrl: '/html/ui/ui.notifier.html',
         link: function(scope){

           var new_data = {

             header: '',
             body: ''

           };

           scope.$on('notifier:notify', function(e, data){

            scope.data = data;
            scope.show_notifier = true;
            console.log('notifier: ' + data.body);

           });

           scope.reset_notifier = function(){
             scope.data = angular.copy(new_data);
             scope.show_notifier = false;
           };

           scope.reset_notifier();

         }

       }

    });

}());
