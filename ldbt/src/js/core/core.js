(function(){

  angular.module('core', [
    'core.tools',
    'core.api'
  ])

  .constant('config', (auth_config || {}));

}());
