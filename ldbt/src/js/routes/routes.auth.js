(function(){

  angular.module('routes.auth', [])

  .config(function($routeProvider, config){

    $routeProvider.when('/', {

      controller: 'Auth',
      resolve: {
        checkout: function (api, $location, routeService) {
          $('.preloader').show();
          $location.path('/menu');
        }
      }

    });

  })

  .controller('Auth', function(){
    $('.preloader').hide();
  });

}());
