(function (angular, sp) {

  angular.module('iledebeaute.services.users', [])

    .service('userService', function (api) {

      var self = this;

      self.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      };

      self.toDateObj = function (date) {
        return new Date(date);
      };

      self.dateToArray = function (date) {
        var def = [null, null, null];
        if (!date) return def;
        var result = date.split('-').reverse();
        for (var i = 0, len = result.length; i < len; i++) {
          result[i] = parseInt(result[i], 10);
        }
        return result || def;
      };

      self.store_list = function(){
        return api.config.store_list || []
      };

      self.city_prefix = 'Город: ';

      self.city_list = function(){
        return api.config.city_list || []
      };

      //self.store_list.forEach(function(item){
      //  if(self.city_list.indexOf(item.city.trim()) == -1) self.city_list.push(item.city.trim());
      //});

      self.get_stores = function (city) {
        return self.store_list().filter(function (item) {
          return item.city == city
        })
      };

      var stores = [
        {
          name: 'ИЛЬ ДЕ БОТЭ, ТЦ "СпешиLove"',
          tag: 'ИЛЬ ДЕ БОТЭ. ТЦ \'СпешиLove\''
        },
        {
          name: 'ИЛЬ ДЕ БОТЭ, ул. Ленина',
          tag: 'ИЛЬ ДЕ БОТЭ. ул. Ленина'
        },
        {
          name: 'ИЛЬ ДЕ БОТЭ, ТРК "Колизей-Atrium"',
          tag: 'ИЛЬ ДЕ БОТЭ. ТРК \'Колизей-Atriu\''
        },
        {
          name: 'ИЛЬ ДЕ БОТЭ, ТРК "СемьЯ"',
          tag: 'ИЛЬ ДЕ БОТЭ. ТРК \'СемьЯ\''
        }
      ];

      self.getStores = function () {
        return stores || [];
      };

      self.historyDateFormat = function (date) {

        var monthNames = [
          "января", "февраля", "марта",
          "апреля", "мая", "июня", "июля",
          "августа", "сентября", "октября",
          "ноября", "декабря"
        ];

        var date = self.toDateObj(date);
        var day = date.getUTCDate();
        var monthIndex = date.getUTCMonth();
        var year = date.getUTCFullYear();
        var hours = date.getUTCHours() < 10 ? '0' + date.getUTCHours() : date.getUTCHours();
        var minutes = date.getUTCMinutes() < 10 ? '0' + date.getUTCMinutes() : date.getUTCMinutes();

        // TODO: проверить правильно ли выводится месяц
        //return day + ' ' + monthNames[monthIndex] + ' ' + year + ' ' + hours + ':' + minutes;
        return day + ' ' + monthNames[monthIndex] + ' ' + year;
      };

      self.getHistoryActionName = function (action) {
        if (!action) return 'Нет описания';
        var history_items = {
          "purchase": "Покупка",
          "gift_purchase": "Привилегия",
          "badge": "Бейджик",
          "registration": "Регистрация",
          "referral": "Регистрация друга",
          "referred": "Регистрация по приглашению",
          "referred_purchase": "Покупка приглашенного пользователя",
          "promocode": "За ввод промокода",
          "enter_group": "Вступление в группу ",
          "share_purchase": "Рассказ о покупке в ",
          "social_share": "Рассказ в ",
          "share_badge": "Рассказ о бейджике в ",
          "earn_badge": 'Получен бейджик '
        };
        switch (action.action) {
          case 'event':
            return action.name || 'Нет описания';
          case 'extra':
            return action.name || 'Нет описания';
          case 'sharing':
            switch (action.social_action) {
              case 'like':
                return history_items.enter_group + action.social_type;
              case 'purchase':
                return history_items.share_purchase + action.social_type;
              case 'partner_page':
                return history_items.social_share + action.social_type;
              case 'badge':
                return history_items.share_badge + action.social_type;
            }
        }
        return history_items[action.action] || 'Нет описания';
      };

      return self;


    });

}(window.angular, window.SAILPLAY));