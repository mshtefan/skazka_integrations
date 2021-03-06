(function (w) {

  if (!w.angular) return;

  angular.module('mno.data', [])

    .constant('data', {
      cities: [{
        name: 'Архангельск',
        clinics: ['Первая городская клиническая больница скорой медицинской помощи им Е.Е. Волосевич']
      },
      {
        name: 'Архангельская область, г. Няндома',
        clinics: ['ГБУЗ АО "Няндомская ЦРБ"']
      },
      {
        name: 'Архангельская область, г. Северодвинск',
        clinics: ['Поликлиника №3']
      }, {
        name: 'Волгоград',
        clinics: ['Областной кардиологический центр']
      }, {
        name: 'Воронеж',
        clinics: ['Воронежская областная клиническая больница №1', 'Поликлиника "Дубрава"']
      }, {
        name: 'Екатеринбург',
        clinics: ['Клиника Уральская']
      }, {
        name: 'Казань',
        clinics: ['Медико-санитарная часть ФГАОУ ВО КФУ (Университетская клиника "Казань")']
      }, {
        name: 'Калуга',
        clinics: ['Калужская Областная Больница']
      }, {
        name: 'Кемерово',
        clinics: ['МБУЗ "Кемеровский кардиологический диспансер", поликлиника, 3 эт. холл поликлиники']
      }, {
        name: 'Краснодар',
        clinics: ['ГБУЗ Краевая клиническая больница №2; поликлиника центра СКАЛ, процедурный кабинет, холл 1 этажа']
      }, {
        name: 'Москва',
        clinics: ['Первый МГМУ им. И.М. Сеченова, Университетская клиническая больница № 1']
      }, {
        name: 'Нижегородская область, г. Кстово',
        clinics: ['Медицинский центр "НИКА СПРИНГ"']
      }, {
        name: 'Нижний Новгород',
        clinics: ['Медицинский центр "НИКА СПРИНГ", ул. Культуры д.2, кабинет кардиолога',
          'Медицинский центр "НИКА СПРИНГ", ул. Горького д.226, кабинет кардиолога',
          'Медицинский центр "НИКА СПРИНГ", Казанское шоссе д.10/6, пункт забора крови']
      }, {
        name: 'Новосибирск',
        clinics: ['Новосибирский областной клинический кардиологический диспансер, 1 этаж поликлиники, кабинет № 5']
      }, {
        name: 'Пермь',
        clinics: ['ГБУЗ ПК "Клинический кардиологический диспансер", поликлиника, 2 эт. каб. 12']
      }, {
        name: 'Самара',
        clinics: ['Самарский диагностический центр']
      }, {
        name: 'Санкт-Петербург',
        clinics: ['ФГБУ «ФМИЦ им. В. А. Алмазова», ул. Аккуратова д. 2',
          'Спб ГБУЗ "Городская Мариинская больница"',
          'Спб ГБУЗ ГКДЦ №1']
      }, {
        name: 'Тюмень',
        clinics: ['Тюменский кардиологический центр, 2 эт., зимний сад.']
      }, {
        name: 'Челябинск',
        clinics: ['Областная клиническая больница №3, поликлиника, 2 эт. 235 каб.']
      }]

    });

}(window));
