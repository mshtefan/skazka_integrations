(function () {

  angular.module('iledebeaute.services.pages', [])

    .service('pageService', function (api) {

      var self = this;

      self.getPage = function(pageId){
        return api.config.pages[pageId] || {}
      };

      return self;

    });

}());