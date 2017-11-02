(function () {

  angular.module('iledebeaute.services.faq', [])

    .service('faqService', function (api) {

      var self = this;

      self.feedback_tag = 'Заполнил  форму обратной связи';

      self.data = function(){
        return api.config.faq || [];
      };

      return self;

    });

})();