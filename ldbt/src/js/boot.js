(function (w) {

  function bootstrap() {

    var $injector = angular.injector(["ng", "core"]);

    var sp_resolve = $injector.get('sp_resolve');

    sp_resolve().then(function(){
      angular.bootstrap(document.body, ['iledebeaute']);
    });


  }

  w.addEventListener('DOMContentLoaded', bootstrap);

}(window));