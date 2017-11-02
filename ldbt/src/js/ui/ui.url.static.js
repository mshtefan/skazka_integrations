(function () {

  angular.module('ui.url.static', [])

    .filter('static', function (config) {
      return function (url) {

        return config.static_url + url;

      };
    });

}());
