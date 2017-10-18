/*!
 * angular-ui-mask
 * https://github.com/angular-ui/ui-mask
 * Version: 1.4.5 - 2015-09-04T09:04:37.010Z
 * License: MIT
 */
!function(){"use strict";angular.module("ui.mask",[]).value("uiMaskConfig",{maskDefinitions:{9:/\d/,A:/[a-zA-Z]/,"*":/[a-zA-Z0-9]/},clearOnBlur:!0,eventsToHandle:["input","keyup","click","focus"]}).directive("uiMask",["uiMaskConfig",function(e){function n(e){return e===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(e.type||e.href||~e.tabIndex)}return{priority:100,require:"ngModel",restrict:"A",compile:function(){var t=e;return function(e,r,i,u){function a(e){return angular.isDefined(e)?($(e),C?(f(),h(),!0):c()):c()}function o(e){e&&(_=e,C&&r.val(v(p(r.val()))))}function l(e){return C?(P=p(e||""),q=g(P),u.$setValidity("mask",q),q&&P.length?v(P):void 0):e}function s(e){return C?(P=p(e||""),q=g(P),u.$viewValue=P.length?v(P):"",u.$setValidity("mask",q),""===P&&i.required&&u.$setValidity("required",!u.$error.required),q?N?u.$viewValue:P:void 0):e}function c(){return C=!1,d(),angular.isDefined(I)?r.attr("placeholder",I):r.removeAttr("placeholder"),angular.isDefined(K)?r.attr("maxlength",K):r.removeAttr("maxlength"),r.val(u.$modelValue),u.$viewValue=u.$modelValue,!1}function f(){P=H=p(u.$modelValue||""),T=z=v(P),q=g(P),i.maxlength&&r.attr("maxlength",2*D[D.length-1]),I||r.attr("placeholder",_);for(var e=u.$modelValue,n=u.$formatters.length;n--;)e=u.$formatters[n](e);u.$viewValue=e||"",u.$render()}function h(){F||(r.bind("blur",y),r.bind("mousedown mouseup",k),r.bind(W.eventsToHandle.join(" "),w),r.bind("paste",V),F=!0)}function d(){F&&(r.unbind("blur",y),r.unbind("mousedown",k),r.unbind("mouseup",k),r.unbind("input",w),r.unbind("keyup",w),r.unbind("click",w),r.unbind("focus",w),r.unbind("paste",V),F=!1)}function g(e){return e.length?e.length>=j:!0}function p(e){var n="",t=E.slice();return e=e.toString(),angular.forEach(R,function(n){e=e.replace(n,"")}),angular.forEach(e.split(""),function(e){t.length&&t[0].test(e)&&(n+=e,t.shift())}),n}function v(e){var n="",t=D.slice();return angular.forEach(_.split(""),function(r,i){e.length&&i===t[0]?(n+=e.charAt(0)||"_",e=e.substr(1),t.shift()):n+=r}),n}function m(e){var n=angular.isDefined(i.uiMaskPlaceholder)?i.uiMaskPlaceholder:i.placeholder;return"undefined"!=typeof n&&n[e]?n[e]:"_"}function b(){return _.replace(/[_]+/g,"_").replace(/([^_]+)([a-zA-Z0-9])([^_])/g,"$1$2_$3").split("_")}function $(e){var n=0;if(D=[],E=[],_="","string"==typeof e){j=0;var t=!1,r=0,i=e.split("");angular.forEach(i,function(e,i){W.maskDefinitions[e]?(D.push(n),_+=m(i-r),E.push(W.maskDefinitions[e]),n++,t||j++):"?"===e?(t=!0,r++):(_+=e,n++)})}D.push(D.slice().pop()+1),R=b(),C=D.length>1?!0:!1}function y(){W.clearOnBlur&&(Z=0,B=0,q&&0!==P.length||(T="",r.val(""),e.$apply(function(){u.$setViewValue("")})))}function k(e){"mousedown"===e.type?r.bind("mouseout",x):r.unbind("mouseout",x)}function x(){B=S(this),r.unbind("mouseout",x)}function V(){A(this,r.val().length)}function w(e){e=e||{};var n=e.which,t=e.type;if(16!==n&&91!==n){var i,a=r.val(),o=z,l=p(a),s=H,c=M(this)||0,f=Z||0,h=c-f,d=D[0],g=D[l.length]||D.slice().shift(),m=B||0,b=S(this)>0,$=m>0,y=a.length>o.length||m&&a.length>o.length-m,k=a.length<o.length||m&&a.length===o.length-m,x=n>=37&&40>=n&&e.shiftKey,V=37===n,w=8===n||"keyup"!==t&&k&&-1===h,E=46===n||"keyup"!==t&&k&&0===h&&!$,_=(V||w||"click"===t)&&c>d;if(B=S(this),!x&&(!b||"click"!==t&&"keyup"!==t)){if("input"===t&&k&&!$&&l===s){for(;w&&c>d&&!O(c);)c--;for(;E&&g>c&&-1===D.indexOf(c);)c++;var R=D.indexOf(c);l=l.substring(0,R)+l.substring(R+1)}for(i=v(l),z=i,H=l,r.val(i),u.$setViewValue(l),y&&d>=c&&(c=d+1),_&&c--,c=c>g?g:d>c?d:c;!O(c)&&c>d&&g>c;)c+=_?-1:1;(_&&g>c||y&&!O(f))&&c++,Z=c,A(this,c)}}}function O(e){return D.indexOf(e)>-1}function M(e){if(!e)return 0;if(void 0!==e.selectionStart)return e.selectionStart;if(document.selection&&n(r[0])){e.focus();var t=document.selection.createRange();return t.moveStart("character",e.value?-e.value.length:0),t.text.length}return 0}function A(e,t){if(!e)return 0;if(0!==e.offsetWidth&&0!==e.offsetHeight)if(e.setSelectionRange)n(r[0])&&(e.focus(),e.setSelectionRange(t,t));else if(e.createTextRange){var i=e.createTextRange();i.collapse(!0),i.moveEnd("character",t),i.moveStart("character",t),i.select()}}function S(e){return e?void 0!==e.selectionStart?e.selectionEnd-e.selectionStart:document.selection?document.selection.createRange().text.length:0:0}var D,E,_,R,j,P,T,q,z,H,Z,B,C=!1,F=!1,I=i.placeholder,K=i.maxlength,N=!1;i.$observe("modelViewValue",function(e){"true"===e&&(N=!0)});var W={};i.uiOptions?(W=e.$eval("["+i.uiOptions+"]"),angular.isObject(W[0])&&(W=function(e,n){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(void 0===n[t]?n[t]=angular.copy(e[t]):angular.isObject(n[t])&&angular.extend(n[t],e[t]));return n}(t,W[0]))):W=t,i.$observe("uiMask",a),angular.isDefined(i.uiMaskPlaceholder)?i.$observe("uiMaskPlaceholder",o):i.$observe("placeholder",o),u.$formatters.push(l),u.$parsers.push(s),r.bind("mousedown mouseup",k),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){if(null===this)throw new TypeError;var n=Object(this),t=n.length>>>0;if(0===t)return-1;var r=0;if(arguments.length>1&&(r=Number(arguments[1]),r!==r?r=0:0!==r&&r!==1/0&&r!==-(1/0)&&(r=(r>0||-1)*Math.floor(Math.abs(r)))),r>=t)return-1;for(var i=r>=0?r:Math.max(t-Math.abs(r),0);t>i;i++)if(i in n&&n[i]===e)return i;return-1})}}}}])}();
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

var SAILPLAY = (function(w, d){

  var sp = {};

  if(getMobileOperatingSystem()=='unknown') {
    var input_date = '<div class="__sp__lead_autocomplete __sp__dates __centered" style="width: 24%;" data-ng-init="show_day_selector = false;" data-ng-class="{ state_show_list: show_day_selector }">' +
        '<div class="__sp__lead_dropdown_overlay" data-ng-click="show_day_selector = false;"></div>' +
        '<div data-ng-click="show_day_selector = !show_day_selector">' +
        '<span class="__sp__field_value">{{ birth_date_obj[2] || \'День\' }}</span>' +
        '</div>' +
        '<div class="suggestion_wrapper">' +
        '<ul>' +
        '<li data-ng-repeat="day in dates.days()" data-ng-click="birth_date_obj[2] = day; set_birth_date(); $parent.show_day_selector = false;">{{ day }}</li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '<div class="__sp__lead_autocomplete __sp__dates __centered" style="width: 40%;" data-ng-init="show_month_selector = false;" data-ng-class="{ state_show_list: show_month_selector }">' +
        '<div class="__sp__lead_dropdown_overlay" data-ng-click="show_month_selector = false;"></div>' +
        '<div data-ng-click="show_month_selector = !show_month_selector">' +
        '<span class="__sp__field_value">{{ dates.months()[birth_date_obj[1]] || \'Месяц\' }}</span>' +
        '</div>' +
        '<div class="suggestion_wrapper">' +
        '<ul>' +
        '<li data-ng-repeat="(num,month) in dates.months()" data-ng-click="birth_date_obj[1] = num; set_birth_date(); $parent.show_month_selector = false;">{{ month }}</li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '<div class="__sp__lead_autocomplete __sp__dates __centered" style="width: 32%;" data-ng-init="show_year_selector = false;" data-ng-class="{ state_show_list: show_year_selector }">' +
        '<div class="__sp__lead_dropdown_overlay" data-ng-click="show_year_selector = false;"></div>' +
        '<div data-ng-click="show_year_selector = !show_year_selector">' +
        '<span class="__sp__field_value">{{ birth_date_obj[0] || \'Год\' }}</span>' +
        '</div>' +
        '<div class="suggestion_wrapper">' +
        '<ul>' +
        '<li data-ng-repeat="year in dates.years()" data-ng-click="birth_date_obj[0] = year; set_birth_date(); $parent.show_year_selector = false;">{{ year }}</li>' +
        '</ul>' +
        '</div>' +
        '</div>';
    var mob_class = '';
  } else {
    var input_date = '<input type="date" max="2000-01-01">';
    var mob_class = 'for_mobile';
  }
  angular.module('mno.lead', [ 'mno.data', 'ui.mask' ])

    .constant('config', {
      partner_id: 1438,
      domain: 'http://sailplay.ru',
      additional_tags: d.getElementById('__sp__roche') && d.getElementById('__sp__roche').getAttribute('data-tags') && d.getElementById('__sp__roche').getAttribute('data-tags').split(',')
    })

    .directive('visavisMno', ["data", "sailplay", "dates", "config", function(data, sailplay, dates, config){
      return {
        restrict: 'E',
        replace: true,
        template:
          '<div class="__sp__lead_wrapper" data-ng-cloak data-ng-show="is_show_lead" data-ng-click="hide_lead($event)">' +
            '<link rel="stylesheet" type="text/css" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">' +
            '<form class="__sp__lead_form" data-ng-show="!form_submitted" data-ng-submit="submit_lead()">' +
              '<div class="__sp__lead_cancel ion-close-round" data-ng-click="hide_lead()"></div>' +
              '<div class="__sp__lead_inner">' +
                '<div class="__sp__lead_title">Бесплатная регистрация в социальной Акции "День МНО"</div>' +
                '<div class="__sp_lead_field">' +
                  '<div class="__sp__lead_error" data-ng-show="!is_valid()">Пожалуйста, заполните все поля анкеты</div>' +
                  '<input type="text" data-ng-model="form.lastName" placeholder="Фамилия"/>' +
                '</div>' +
                '<div class="__sp_lead_field">' +
                  '<input type="text" data-ng-model="form.firstName" placeholder="Имя" />' +
                '</div>' +
                '<div class="__sp_lead_field">' +
                  '<input type="text" data-ng-model="form.middleName" placeholder="Отчество" />' +
                '</div>' +
                '<div class="__sp_lead_field">' +
                  '<input type="text" data-ng-model="form.phone" placeholder="+_ (___) ___-____" data-ui-mask="+9 (999) 999-9999"/>' +
                '</div>' +
                '<div class="__sp_lead_field">' +
                  '<span class="__sp_lead_policy_help" style="margin: 2px 0 4px 2px;">День рождения</span></br>' + input_date +
          /* '<input type="date" max="2000-01-01" min="1930-01-01">' +

                  '<div class="__sp__lead_autocomplete __sp__dates __centered" style="width: 24%;" data-ng-init="show_day_selector = false;" data-ng-class="{ state_show_list: show_day_selector }">' +
                    '<div class="__sp__lead_dropdown_overlay" data-ng-click="show_day_selector = false;"></div>' +
                    '<div data-ng-click="show_day_selector = !show_day_selector">' +
                      '<span class="__sp__field_value">{{ birth_date_obj[2] || \'День\' }}</span>' +
                    '</div>' +
                    '<div class="suggestion_wrapper">' +
                      '<ul>' +
                        '<li data-ng-repeat="day in dates.days()" data-ng-click="birth_date_obj[2] = day; set_birth_date(); $parent.show_day_selector = false;">{{ day }}</li>' +
                      '</ul>' +
                    '</div>' +
                  '</div>' +
                  '<div class="__sp__lead_autocomplete __sp__dates __centered" style="width: 40%;" data-ng-init="show_month_selector = false;" data-ng-class="{ state_show_list: show_month_selector }">' +
                    '<div class="__sp__lead_dropdown_overlay" data-ng-click="show_month_selector = false;"></div>' +
                    '<div data-ng-click="show_month_selector = !show_month_selector">' +
                      '<span class="__sp__field_value">{{ dates.months()[birth_date_obj[1]] || \'Месяц\' }}</span>' +
                    '</div>' +
                    '<div class="suggestion_wrapper">' +
                      '<ul>' +
                        '<li data-ng-repeat="(num,month) in dates.months()" data-ng-click="birth_date_obj[1] = num; set_birth_date(); $parent.show_month_selector = false;">{{ month }}</li>' +
                      '</ul>' +
                    '</div>' +
                  '</div>' +
                  '<div class="__sp__lead_autocomplete __sp__dates __centered" style="width: 32%;" data-ng-init="show_year_selector = false;" data-ng-class="{ state_show_list: show_year_selector }">' +
                    '<div class="__sp__lead_dropdown_overlay" data-ng-click="show_year_selector = false;"></div>' +
                    '<div data-ng-click="show_year_selector = !show_year_selector">' +
                      '<span class="__sp__field_value">{{ birth_date_obj[0] || \'Год\' }}</span>' +
                    '</div>' +
                    '<div class="suggestion_wrapper">' +
                      '<ul>' +
                        '<li data-ng-repeat="year in dates.years()" data-ng-click="birth_date_obj[0] = year; set_birth_date(); $parent.show_year_selector = false;">{{ year }}</li>' +
                      '</ul>' +
                    '</div>' +
                  '</div>' +*/
                '</div>' +


                '<div class="__sp_lead_field">' +
                  '<div class="__sp__lead_autocomplete __sp__dates '+mob_class+'" data-ng-init="show_city_selector = false;" data-ng-class="{ state_show_list: show_city_selector }">' +
                    '<div class="__sp__lead_dropdown_overlay" data-ng-click="show_city_selector = false;"></div>' +
                    '<div data-ng-click="show_city_selector = !show_city_selector">' +
                      '<span class="__sp__field_value __sp__text_left">{{ tags[0] || \'Город\' }}</span>' +
                    '</div>' +
                    '<div class="suggestion_wrapper">' +
                      '<ul>' +
                        '<li data-ng-repeat="city in data.cities" data-ng-click="tags[0] = city.name; tags[1] = \'\'; $parent.show_city_selector = false;">{{ city.name }}</li>' +
                      '</ul>' +
                    '</div>' +
                  '</div>' +
                '</div>' +
                '<div class="__sp_lead_field">' +
                  '<div class="__sp__lead_autocomplete __sp__dates '+mob_class+'" data-ng-init="show_clinic_selector = false;" data-ng-class="{ state_show_list: show_clinic_selector }">' +
                    '<div class="__sp__lead_dropdown_overlay" data-ng-click="show_clinic_selector = false;"></div>' +
                    '<div data-ng-click="show_clinic_selector = !show_clinic_selector">' +
                      '<span class="__sp__field_value __sp__text_left">{{ tags[1] || \'Лечебно профилактическое учреждение\' }}</span>' +
                    '</div>' +
                    '<div class="suggestion_wrapper">' +
                      '<ul>' +
                        '<li data-ng-repeat="clinic in get_clinics(tags[0])" data-ng-click="tags[1] = clinic; $parent.show_clinic_selector = false;">{{ clinic }}</li>' +
                      '</ul>' +
                    '</div>' +
                  '</div>' +
                '</div>' +
                '<div class="__sp_lead_field">' +
                  '<span class="__sp_lead_policy_help">' +
                    '<span class="__sp_lead_policy_check" data-ng-class="{ checked: policy_accept }" data-ng-click="policy_accept = !policy_accept">' +
                      '<i class="ion-checkmark-round" data-ng-show="policy_accept"></i>' +
                    '</span>' +
                    'Регистрируясь на сайте <a href="http://www.mnoportal.ru">www.mnoportal.ru</a>, я даю согласие входящим в группу компаний "Рош" лицам, в том числе компании «Roche Diagnostics GmbH» и ООО "Рош Диагностика Рус", на обработку указанных данных (сбор, запись, систематизацию, накопление, хранение, уточнение, извлечение, использование, передачу (включая трансграничную передачу), обезличивание, блокирование, удаление, уничтожение. Настоящее согласие выдается в целях регистрации в акции "День МНО" и информирования меня, как потребителя, о новых продуктах и услугах, предлагаемых ООО «Рош Диагностика Рус» на 5 (пять) лет и может быть отозвано по моему письменному заявлению, отправленному в адрес ООО «Рош Диагностика Рус». По истечении указанного срока действие согласия считается продлённым на каждые следующие пять лет при отсутствии моего письменного отзыва, отправленного в адрес ООО «Рош Диагностика Рус»' +
                  '</span>' +
                '</div>' +
              '</div>' +
              '<div class="__sp_lead_policy_agreement" data-ng-show="show_policy_rules">' +
                '<div class="__sp__lead_cancel ion-close-round" data-ng-click="show_policy_rules = false;"></div>' +
                '<div class="__sp_lead_warning" data-ng-show="policy_accept_notify">ВНИМАНИЕ, ПЕРЕД РЕГИСТРАЦИЕЙ ОЗНАКОМЬТЕСЬ С ИНФОРМАЦИЕЙ</div>' +
                'МНО (международное нормализованное отношение) - показатель свертываемости крови, который необходимо регулярно, как минимум раз в месяц, измерять пациентам, принимающим непрямые антикоагулянты (например: варфарин, маркумар, синкумар, фенилин и др.) </br></br> <strong>О необходимости измерения показателя МНО проконсультируйтесь со своим лечащим врачом или по телефону бесплатной горячей линии </br> 8-800-100-19-68.</strong>' +
              '</div>' +
              '<button data-ng-if="policy_accept_notify" class="__sp_lead_submit_btn" data-ng-disabled="!policy_accept" type="submit">' +
                '<span>ЗАВЕРШИТЬ РЕГИСТРАЦИЮ <i class="ion-chevron-right"></i></span>' +
              '</button>' +
              '<button data-ng-if="!policy_accept_notify" class="__sp_lead_submit_btn" data-ng-disabled="!policy_accept || !is_valid()" type="submit">ПРОДОЛЖИТЬ <i class="ion-chevron-right"></i></button>' +
            '</form>' +
            '<div class="__sp__lead_form __submitted" data-ng-show="form_submitted">' +
              '<div class="__sp__lead_cancel ion-close-round" data-ng-click="hide_lead();"></div>' +
              '<div class="__sp__lead_inner">' +
                'Спасибо, что зарегистрировались, ждем Вас на акции "День МНО".' +
              '</div>' +
            '</div>' +
          '</div>',
        scope: true,
        link: function(scope, elm){

          scope.is_show_lead = false;

          scope.policy_accept = true;

          scope.show_policy_rules = false;

          scope.policy_accept_notify = false;

          scope.birth_date_obj = [];

          scope.form_submitted = false;

          scope.set_birth_date = function(){
            if(scope.birth_date_obj.length == 3){
              scope.form.birthDate = scope.birth_date_obj.join('-');
            }
            else {
              scope.form.birthDate = '';
            }
          };

          var blank_form = {
            firstName: '',
            lastName: '',
            middleName: '',
            phone: '',
            birthDate: ''
          };

          scope.form = angular.copy(blank_form);

          scope.tags = ['', ''];

          scope.data = angular.copy(data);

          scope.show_lead = function(){
            scope.is_show_lead = true;
          };

          scope.hide_lead = function($event){
            if($event && $event.target == elm[0]) {
              scope.is_show_lead = false;
              scope.form_submitted = false;
            }
            else if(!$event) {
              scope.is_show_lead = false;
              scope.form_submitted = false;
            }
          };

          sp.show_mno_lead = function(){
            scope.$apply(function(){
              scope.show_lead();
            });
          };

          scope.submit_lead = function(){
            if(!scope.policy_accept_notify) {
              scope.policy_accept_notify = true;
              scope.show_policy_rules = true;
            }
            else {
              var tags = angular.copy(scope.tags).concat(config.additional_tags);
              sailplay.submit_lead(scope.form, function(res){
                if(res.status == 'ok'){
                  sailplay.add_tags({phone: scope.form.phone }, tags, function(res){
                    scope.policy_accept_notify = false;
                    scope.show_policy_rules = false;
                    scope.form = angular.copy(blank_form);
                    scope.tags = ['', ''];
                    scope.birth_date_obj = [];
                    scope.form_submitted = true;
                  });
                }
              });
            }
          };

          scope.dates = dates.dates;

          scope.get_clinics = function(city_name){
            var current_city = false;
            for(var c in scope.data.cities) {
              if(scope.data.cities[c].name == city_name) current_city = scope.data.cities[c];
            }
            return current_city.clinics;
          };

          scope.is_valid = function(){
            var valid = true;

            for(var i in scope.form){
              if(scope.form[i] == blank_form[i]){
                valid = false;
                scope.errors[i] = true;
              }
            }

            for(var t in scope.tags){
              if(!scope.tags[t] || scope.tags[t] == ''){
                valid = false;
              }
            }

            return valid;

          };

          scope.errors = {};

        }
      };
    }])

    .service('sailplay', ["$http", "config", function($http, config){

      var self = this;

      self.submit_lead = function(form, callback){
        $http.jsonp((config.domain || 'http://sailplay.ru') + '/js-api/' + config.partner_id + '/users/update/?callback=JSON_CALLBACK', { params: form })
          .success(function(res){
            callback && callback(res);
          });
      };

      self.add_tags = function(user, tags, callback){
        var params = angular.copy(user);
        params.tags = tags.join(',');
        $http.jsonp((config.domain || 'http://sailplay.ru') + '/js-api/' + config.partner_id + '/tags/add/?callback=JSON_CALLBACK', { params: params })
          .success(function(res){
            callback && callback(res);
          });
      };

    }])

    .service('dates', function(){

      var self = this;

      function get_range_array(min, max){
        var list = [];
        for (var i = min; i <= max; i++) {
          list.push(i);
        }
        return list;
      }

      self.dates = {

        days: function(){
          return get_range_array(1,31);
        },
        months: function(){
          return {
            1: 'Января',
            2: 'Февраля',
            3: 'Марта',
            4: 'Апреля',
            5: 'Мая',
            6: 'Июня',
            7: 'Июля',
            8: 'Августа',
            9: 'Сентября',
            10: 'Октября',
            11: 'Ноября',
            12: 'Декабря'
          };
        },
        years: function(){
          var current_year = new Date().getFullYear();
          return get_range_array(current_year - 100, current_year).reverse();
        }

      };

    });

  w.addEventListener('load', function(){
    var body = d.getElementsByTagName('body')[0];
    if(body){
      var root = d.createElement('visavis-mno');
      body.appendChild(root);
      angular.bootstrap(root, ['mno.lead']);
    }
  });

  return sp;

}(window, document));

/*
$('.new_select_city').change(function(){
  var city = $(this).val();
  $('.new_select_clin option').filter(function(){
    if($(this).attr('data-city')==city){
      $(this).show();
    } else {
      $(this).hide();
    }
  })
});

*/
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return "unknown";
}