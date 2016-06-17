(function () {

  angular.module('ui', [
    'angularUtils.directives.dirPagination'
  ])


    .constant('ProfileTag', 'Заполнил профиль')

    .directive('fillProfile', function(SailPlay, $rootScope, $q, ProfileTag){

      return {

        restrict: 'A',
        scope: true,
        link: function(scope){

          scope.profile_form = {

            user: {

              firstName: '',
              lastName: '',
              middleName: '',
              phone: '',
              email: ''

            },
            custom_vars: {

              'Адрес': ''

            },
            tags: [
              'В1 Как узнали', [ '' ],
              'В2 Как давно', [ '' ],
              'В3 Вид спорта', [ ],
              'В4 Уровень', [ '' ],
              'В5 Цели', [ ],
              'В6 Выбор', [ ],
              'В7 Информация', [ ],
              'В8 Канал', [ ],
              'В9 Дети', [ '' ]
            ]

          };

          scope.toggle_tag = function(arr, tag){

            if(!tag) return;

            var index = arr.indexOf(tag);

            if(index > -1){

              arr.splice(index, 1);

            }
            else {

              arr.push(tag);

            }

          };

          scope.values = [
            null,
            [
              {
                key: 'через google/yandex',
                value: 'В1 Поисковики'
              },
              {
                key: 'через другие сайты',
                value: 'В1 Другие сайты'
              },
              {
                key: 'знакомые посоветовали',
                value: 'В1 Знакомые'
              },
              {
                key: 'через соц. сети',
                value: 'В1 Соцсети'
              },
              {
                key: 'через фитнес клуб',
                value: 'В1 Фитнесклуб'
              },
              {
                key: 'случайно',
                value: 'В1 Случайно'
              },
              {
                key: 'другое',
                value: 'В1 Другое'
              }
            ],
            null,
            [
              {
                key: 'меньше месяца',
                value: 'В2 < мес'
              },
              {
                key: 'около полугода',
                value: 'В2 полгода'
              },
              {
                key: '1–2 года',
                value: 'В2 1-2 года'
              },
              {
                key: 'более двух лет',
                value: 'В2 > 2 года'
              },
              {
                key: 'не помню, давно покупаю у вас',
                value: 'В2 давно'
              }
            ],
            null,
            [
              {
                key: 'Альпинизм',
                value: 'В3 Альпинизм'
              },
              {
                key: 'АРМ спорт',
                value: 'В3 АРМ спорт'
              },
              {
                key: 'Баскетбол',
                value: 'В3 Баскетбол'
              },
              {
                key: 'Бейсбол',
                value: 'В3 Бейсбол'
              },
              {
                key: 'Бодибилдинг',
                value: 'В3 Бодибилдинг'
              },
              {
                key: 'Бокс',
                value: 'В3 Бокс'
              },
              {
                key: 'Борьба',
                value: 'В3 Борьба'
              },
              {
                key: 'Гимнастика спортивная',
                value: 'В3 Гимнастика спортивная'
              },
              {
                key: 'Гиревой спорт',
                value: 'В3 Гиревой спорт'
              },
              {
                key: 'Горнолыжный спорт',
                value: 'В3 Горнолыжный спорт'
              },
              {
                key: 'Боевые искусства',
                value: 'В3 Боевые искусства'
              },
              {
                key: 'Пауэрлифтинг',
                value: 'В3 Пауэрлифтинг'
              },
              {
                key: 'Плавание',
                value: 'В3 Плавание'
              },
              {
                key: 'Регби',
                value: 'В3 Регби'
              },
              {
                key: 'Сноуборд',
                value: 'В3 Сноуборд'
              },
              {
                key: 'Теннис',
                value: 'В3 Теннис'
              },
              {
                key: 'Тяжелая атлетика',
                value: 'В3 Тяжелая атлетика'
              },
              {
                key: 'Фитнес',
                value: 'В3 Фитнес'
              },
              {
                key: 'Футбол',
                value: 'В3 Футбол'
              },
              {
                key: 'Хоккей',
                value: 'В3 Хоккей'
              },
              {
                key: 'Другое',
                value: 'В3 Другое'
              }
            ],
            null,
            [
              {
                key: 'Начинающий',
                value: 'В4 Начинающий'
              },
              {
                key: 'Продвинутый',
                value: 'В4 Продвинутый'
              },
              {
                key: 'Профи',
                value: 'В4 Профи'
              }
            ],
            null,
            [
              {
                key: 'похудение',
                value: 'В5 Похудение'
              },
              {
                key: 'сжигание жира',
                value: 'В5 Сжигание'
              },
              {
                key: 'набор массы',
                value: 'В5 Масса'
              },
              {
                key: 'очищение организма',
                value: 'В5 Очищение'
              },
              {
                key: 'поддержание формы',
                value: 'В5 Быть в форме'
              }
            ],
            null,
            [
              {
                key: 'раскученность бренда',
                value: 'В6 Бренд'
              },
              {
                key: 'дизайн упаковки',
                value: 'В6 Дизайн'
              },
              {
                key: 'мнение экспертов',
                value: 'В6 Эксперты'
              },
              {
                key: 'рекомендации знакомых',
                value: 'В6 Знакомые'
              },
              {
                key: 'отзывы покупателей',
                value: 'В6 Отзывы'
              },
              {
                key: 'соотношение цены и качества',
                value: 'В6 Цена-Качество'
              },
              {
                key: 'важна только цена',
                value: 'В6 Цена'
              },
              {
                key: 'высокая степень информированности о продукте в СМИ',
                value: 'В6 СМИ'
              }
            ],
            null,
            [
              {
                key: 'новости компании',
                value: 'В7 Новости'
              },
              {
                key: 'новые поступления',
                value: 'В7 Поступления'
              },
              {
                key: 'скидки, сезонные распродажи',
                value: 'В7 Скидки'
              },
              {
                key: 'акции, конкурсы',
                value: 'В7 Конкурсы'
              },
              {
                key: 'не хочу получать информацию',
                value: 'В7 Ничего'
              }
            ],
            null,
            [
              {
                key: 'sms',
                value: 'В8 SMS'
              },
              {
                key: 'e-mail',
                value: 'B8 Email'
              }
            ],
            null,
            [
              {
                key: 'Есть',
                value: 'В9 есть'
              },
              {
                key: 'Нет',
                value: 'В9 нет'
              }
            ]
          ];

          scope.submit_profile = function(callback){

            console.dir(scope.profile_form);

            scope.profile_form.user.auth_hash = SailPlay.config().auth_hash;

            SailPlay.send('users.update', scope.profile_form.user, function(user_res){

              if(user_res.status === 'ok'){

                var req_tags = [ ProfileTag ];

                var form_tags = scope.profile_form.tags;

                for(var i = 0; i < form_tags.length; i+=2){

                  var tag = form_tags[i];

                  var tag_values = form_tags[i+1];

                  if(tag_values.length > 0 && tag_values[0] !== ''){

                    req_tags.push(tag);

                    angular.forEach(tag_values, function(t){

                      req_tags.push(t);

                    });

                  }

                }

                function chunk(array, chunkSize) {
                  return [].concat.apply([],
                    array.map(function(elem,i) {
                      return i%chunkSize ? [] : [array.slice(i,i+chunkSize)];
                    })
                  );
                }

                var chunked_tags = chunk(req_tags, 10);

                var tag_promises = [];

                angular.forEach(chunked_tags, function(chunk){

                  var promise = $q(function(resolve, reject){

                    SailPlay.send('tags.add', { tags: chunk }, function(tags_res){
                      if(tags_res.status === 'ok') {

                        resolve(tags_res);

                        //sp.send('leads.submit.success', { lead: self, response: user_res, tags: res });
                      }
                      else {
                        reject(tags_res);
                        //sp.send('leads.submit.error', { lead: self, response: user_res, tags: res });
                      }
                    });

                  });

                  tag_promises.push(promise);

                });

                $q.all(tag_promises).then(function(tags_res){

                  SailPlay.send('vars.add', { custom_vars: scope.profile_form.custom_vars }, function(vars_res){

                    var response = {
                      user: user_res,
                      tags: tags_res,
                      vars: vars_res
                    };

                    if(vars_res.status === 'ok') {



                      callback && callback(response);
                      scope.$apply();
                      console.dir(response);


                    }
                    else {

                      console.dir(response);
                      $rootScope.$broadcast('notifier:notify', {

                        header: 'Ошибка',
                        body: user_res.message || 'К сожалению произошла ошибка'

                      });
                      scope.$apply();

                    }

                  });

                });



              }

              else {
                $rootScope.$broadcast('notifier:notify', {

                  header: 'Ошибка',
                  body: user_res.message || 'К сожалению произошла ошибка'

                });
                $rootScope.$apply();
              }

            });

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
