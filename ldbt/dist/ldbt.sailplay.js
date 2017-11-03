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
(function(module) {
try {
  module = angular.module('htmlTemplates');
} catch (e) {
  module = angular.module('htmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/html/components/cmp.auth.html',
    '<div class="overlay" data-ng-switch="state" data-ng-show="show"><div class="overlay_iner overlay_enter" data-ng-switch-when="1"><h2>Мы рады видеть Вас на сайте<br>Элитной программы ИЛЬ ДЕ БОТЭ!</h2><h3>Вы здесь не случайно! Мы очень ценим Вашу любовь и преданность<br>к ИЛЬ ДЕ БОТЭ и подготовили для Вас уникальные привилегии!</h3><form data-ng-submit="check_card_number()"><div class="input_block"><label for="id_card">Введите номер Дисконтной карты:</label> <input style="width: 220px;" type="text" id="id_card" placeholder="_ ______ ______" autocomplete="off" data-ui-mask="* ****** ******" data-ng-model="$parent.card_number"></div><div class="input_block"><input type="submit" value="Вход" data-ng-disabled="!$parent.card_number"></div></form></div><div class="overlay_iner overlay_enter" data-ng-switch-when="2"><h2 class="mb">Вход в Элитную программу</h2><div class="input_block" data-ng-if="message"><p class="input_block_msg [[ message.type ]]">[[ message.text ]]</p></div><form action="#" data-ng-submit="login();$event.preventDefault();"><div class="input_block"><label for="phone">Телефон</label> <input data-ui-mask="+7 (***) *** - ** - **" type="text" name="phone" placeholder="+7 (___) ___ - __ - __" autocomplete="off" data-ng-model="login_form.phone"></div><div class="input_block"><label for="pas">Пароль</label> <input type="password" id="pas" data-ng-model="$parent.login_form.password" placeholder="Введите Ваш пароль"></div><div class="input_block"><button type="button" data-ng-click="$parent.state = 3" class="restore_pass">Восстановить пароль</button> <input type="submit" value="Войти"></div></form></div><div class="overlay_iner overlay_enter" data-ng-switch-when="3"><div data-auth-form="" data-auth-state="restore_pass_1"><div data-ng-show="auth_state == \'restore_pass_1\'"><h2 class="mb">Восстановление пароля</h2><form data-ng-submit="restore_pass_check_phone()"><div class="input_block"><label for="phone">Укажите номер телефона</label> <input style="width: 250px;" data-ui-mask="+7 (***) *** - ** - **" type="text" name="phone" placeholder="+7 (___) ___ - __ - __" autocomplete="off" data-ng-model="form.phone"><div class="input_block input_errors">[[ errors.restore_pass_check_phone.phone[0] ]]</div></div><div class="input_block"><button type="button" data-ng-click="$parent.$parent.state = 2" style="float: left;">Назад</button> <input type="submit" value="Далее" style="float: right;" data-ng-disabled="!form.phone"></div></form></div><div data-ng-show="auth_state == \'restore_pass_2\'"><h2 class="mb">На ваш номер был выслан код подтверждения</h2><form data-ng-submit="restore_pass_check_sms()"><div class="input_block"><label for="kod">Код подтверждения</label> <input style="width: 250px;" id="kod" type="text" class="password_field" placeholder="SMS-код" name="code" data-ng-model="form.code"><div class="input_block input_errors">[[ errors.restore_pass_check_sms ]]</div></div><div class="input_block"><button type="button" data-ng-click="auth_state = \'restore_pass_1\'" style="float: left;">Назад</button> <input type="submit" value="Далее" style="float: right;" data-ng-disabled="!form.code"></div></form></div><div data-ng-show="auth_state == \'restore_pass_3\'"><h2 class="mb">Укажите новый пароль</h2><form data-ng-submit="check_pass()"><div class="input_block"><label for="password1">Введите новый пароль</label> <input style="width: 250px;" type="password" class="password_field" name="password1" id="password1" data-ng-model="new_password.password1" placeholder="Новый пароль"></div><div class="input_block"><label for="password2">Повторите новый пароль</label> <input style="width: 250px;" type="password" class="password_field" name="password2" id="password2" data-ng-model="new_password.password2" placeholder="Новый пароль"></div><div class="input_block input_errors" style="top: 195px;">[[ errors.check_pass ]]</div><div class="input_block"><button type="button" data-ng-click="auth_state = \'restore_pass_1\'; $parent.$parent.state = 2; reset_forms();" style="float: left;">Отмена</button> <input type="submit" value="Готово" style="float: right;" data-ng-disabled="!new_password.password2 || !new_password.password1"></div></form></div></div></div><div class="overlay_iner overlay_enter_reg_np" data-ng-switch-when="4"><h2 style="font-size: 18px;">Регистрация в Элитной программе ИЛЬ ДЕ БОТЭ</h2><h3 class="req_info">Все поля обязательны</h3><form action="#" data-ng-submit="reg();$event.preventDefault();"><div class="input_block"><label for="name">Имя</label> <input type="text" id="name" data-ng-model="form.first_name" data-ng-disabled="$parent.confirmed_names" autocomplete="off" data-enter-submit="$parent.checkNames();" placeholder="Введите Ваше имя"></div><div class="input_block"><label for="s_name">Фамилия</label> <input type="text" id="s_name" data-ng-model="form.last_name" data-ng-disabled="$parent.confirmed_names" data-enter-submit="$parent.checkNames();" placeholder="Введите Вашу фамилию"></div><div class="input_block"><a href="#" class="confirm_btn" data-ng-show="!$parent.confirmed_names" data-ng-class="{ disabled : !form.first_name || !form.last_name}" data-ng-click="$parent.checkNames();$event.preventDefault();">Проверить</a> <span class="confirmed-data" data-ng-show="$parent.confirmed_names">Проверено</span></div><div class="input_block"><label for="date">Дата рождения</label><date-picker data-model="form.birth_date" id="date" data-disabled="!$parent.confirmed_names"></date-picker></div><div class="input_block"><label for="woman">Пол</label><div class="input_gender"><div class="check"><input type="radio" id="woman" name="gender" data-ng-model="form.sex" data-ng-disabled="!$parent.confirmed_names" value="2"> <label for="woman">Женский</label></div><div class="check"><input type="radio" id="man" name="gender" data-ng-model="form.sex" data-ng-disabled="!$parent.confirmed_names" value="1"> <label for="man">Мужской</label></div></div></div><div class="input_block"><label for="email">Email</label> <input type="text" id="email" data-ng-model="form.email" data-ng-disabled="!$parent.confirmed_names || $parent.confirmedData.email" data-enter-submit="form.email && show_confirm_popup(\'email\');" placeholder="Введите Ваш Email"></div><div class="input_block"><a href="#" class="confirm_btn" data-ng-show="!confirmedData.email" data-ng-class="{ disabled : !validateEmail(form.email) }" data-ng-click="form.email && show_confirm_popup(\'email\');$event.preventDefault();">Подтвердить</a> <span class="confirmed-data" data-ng-show="confirmedData.email">Email подтвержден</span></div><div class="input_block"><label for="phone">Телефон</label> <input type="text" class="inp_ch" id="phone" data-ng-model="form.phone" data-ng-disabled="!$parent.confirmed_names || $parent.confirmedData.phone" data-enter-submit="form.phone && show_confirm_popup(\'phone\');" placeholder="+7 (___) ___ - __ - __" data-ui-mask="+7 (***) *** - ** - **"></div><div class="input_block"><a href="#" class="confirm_btn" data-ng-show="!confirmedData.phone" data-ng-class="{ disabled : !form.phone }" data-ng-click="form.phone && show_confirm_popup(\'phone\');$event.preventDefault();">Подтвердить</a> <span class="confirmed-data" data-ng-show="confirmedData.phone">Телефон подтвержден</span></div><div class="input_block" data-ng-class="{ disabled: !$parent.confirmed_names}"><label for="shop">Город</label><div class="select_block select_shop"><select data-ng-model="form.city" id="city" data-ng-disabled="!$parent.confirmed_names" data-ng-options="o as o for o in city_list" onclick="document.getElementById(\'city_label\').style.display = \'none\'"></select><label for="city" id="city_label" style="top: 13px;">Выберите город</label></div></div><div class="input_block" data-ng-class="{ disabled: !$parent.confirmed_names}"><label for="shop">Любимый магазин</label><div class="select_block select_shop"><select data-ng-model="form.store" id="shop" data-ng-disabled="!$parent.confirmed_names" data-ng-options="o.tag as o.name for o in get_stores(form.city)" onclick="document.getElementById(\'shop_label\').style.display = \'none\'"></select><label for="shop" id="shop_label">Выберите любимый магазин, в котором Вы будете<br>забирать привилегии</label></div></div><span class="form_info mb">Если у Вас возникли проблемы с регистрацией, пожалуйста, обратитесь к Вашему Персональному менеджеру по телефону: 8-800-2001-700-гудок-выберите 7.</span><div class="form_subscribe"><div class="check normal_checkbox"><input type="checkbox" id="subscribe" name="subscribe" data-ng-model="form.subscribe" value="1" data-ng-disabled="!$parent.confirmed_names"> <label for="subscribe">Я согласен с <a href="#" data-ng-click="$parent.agree = true;$event.preventDefault();">обработкой данных и получением информирования</a></label></div><div class="check normal_checkbox"><input type="checkbox" id="agree" name="agree" data-ng-model="form.agree" value="1" data-ng-disabled="!$parent.confirmed_names"> <label for="agree">Я ознакомился и согласен с <a href="#" data-ng-click="$parent.rules = true;$event.preventDefault();">правилами программы</a></label></div></div><div class="input_block input_block_entr"><input type="submit" value="Зарегистрироватся" data-ng-disabled="!valid_form()"></div></form></div><div class="overlay" data-ng-if="confirm_data.show" style="z-index: 2;"><div class="overlay_iner overlay_enter"><a href="#" class="close" data-ng-click="$parent.confirm_data.show = false;$event.preventDefault();"></a><div class="input_block"><label for="confirm_code">Код подтверждения</label> <input type="text" id="confirm_code" data-ng-model="$parent.confirm_data.value" data-enter-submit="confirm();" placeholder="Введите код подтверждения"></div><h3 class="req_info" data-ng-show="$parent.confirm_code_error || $parent.send_password" data-ng-class="{ type_red : $parent.confirm_code_error, type_green : $parent.send_password }" style="position: absolute;top: 85px;text-align: right;left: 0;padding-right: 41px;box-sizing: border-box;" data-ng-bind="$parent.send_password ? \'Повторое письмо отправлено на ваш электронный адрес\' : $parent.confirm_code_error ? \'Неправильный код подтверждения\' : \'\'"></h3><a href="#" class="sorry_return" data-ng-click="$parent.send_password = true;$parent.confirm_code_error = false;get_confirm_code();$event.preventDefault();">Выслать еще раз</a> <a href="#" class="show_confirm_btn" data-ng-class="{ disabled : !$parent.confirm_data.value }" data-ng-click="$parent.send_password = false;$parent.confirm_code_error = false;confirm();$event.preventDefault();">Подтвердить</a></div></div><div class="overlay" data-ng-switch-when="5" style="z-index: 2;"><div class="overlay_iner overlay_enter"><h3>Поздравляем с регистрацией! По СМС Вам направлен пароль для входа на персональную страницу.</h3><a href="#" class="sorry_return" data-ng-click="$parent.sendPassword();$event.preventDefault();">Повторить СМС с паролем</a> <a href="#" class="show_confirm_btn" data-ng-click="$parent.state = 2;$event.preventDefault();">На персональную страницу</a></div></div><div class="overlay" data-ng-if="confirmed_names_error" style="z-index: 2;"><div class="overlay_iner overlay_enter"><h3>К&nbsp;сожалению, Вы&nbsp;не&nbsp;являетесь участником Элитной программы или указали данные, отличные от&nbsp;тех, которые были указаны в&nbsp;анкете в&nbsp;магазине ИЛЬ ДЕ&nbsp;БОТЭ. Обратитесь, пожалуйста, к&nbsp;Вашему Персональному менеджеру по&nbsp;телефону: 8-800-2001-700-гудок-выберите 7</h3><a href="#" class="sorry_return" data-ng-click="$parent.confirmed_names_error = false;$event.preventDefault();">Назад</a></div></div><div class="overlay" data-ng-if="rules" style="z-index: 2;"><div class="overlay_iner overlay_enter" style="margin-top: -285px;"><div style="height: 350px;overflow-y:auto;font-size: 12px;"><h4 class="bold">Добро пожаловать в&nbsp;Элитную программу ИЛЬ ДЕ&nbsp;БОТЭ!</h4><br>Настоящие правила программы &laquo;Элитная программа ИЛЬ ДЕ&nbsp;БОТЭ&raquo; в&nbsp;г.Перми (далее&nbsp;&mdash; Правила) определяют условия и&nbsp;порядок участия ВИП-клиентов ИЛЬ ДЕ&nbsp;БОТЭ в&nbsp;данной программе.<br><br><span class="bold">Термины и&nbsp;определения</span><br><br>&laquo;Элитная программа ИЛЬ ДЕ&nbsp;БОТЭ&raquo; (далее&nbsp;&mdash; Программа)&nbsp;&mdash; комплекс мероприятий, в&nbsp;результате которых Участник может накапливать Бонусы и&nbsp;обменивать их&nbsp;на&nbsp;Привилегии. Привилегии&nbsp;&mdash; товар, услуга, скидка, сертификат от&nbsp;АО&nbsp;ИЛЬ ДЕ&nbsp;БОТЭ или партнеров, указанные в&nbsp;каталоге Привилегий на&nbsp;сайте Программы, которые Участник может получить в&nbsp;обмен на&nbsp;Бонусы, накопленные в&nbsp;процессе участия в&nbsp;Программе.<br><br>В&nbsp;Программе могут быть доступны другие Привилегии, предоставляемые в&nbsp;рамках проводимых специальных акций и&nbsp;промо-мероприятий ИЛЬ ДЕ&nbsp;БОТЭ или Партнеров. Информация о&nbsp;таких акциях и&nbsp;промо-мероприятиях, а&nbsp;также о&nbsp;доступных привилегиях, сроках, месте и&nbsp;порядке их&nbsp;получения размещается на&nbsp;сайте Программы. Перечень Привилегий может изменяться и&nbsp;пополняться.<br><br>Сайт Программы&nbsp;&mdash; интернет-сайт <a href="www.elite.iledebeaute.ru">www.elite.iledebeaute.ru</a><br><br>Участник&nbsp;&mdash; клиент ИЛЬ ДЕ&nbsp;БОТЭ, гражданин&nbsp;РФ, физическое лицо-держатель Дисконтной карты ИЛЬ ДЕ&nbsp;БОТЭ, полученной в&nbsp;соответствии с&nbsp;Положением о&nbsp;Дисконтных картах, зарегистрировавшийся для участия в&nbsp;Программе на&nbsp;сайте Программы, представивший номер свой Дисконтной карты, ФИО, пол, дату рождения, мобильный телефон, email* и&nbsp;согласившийся с&nbsp;обработкой и&nbsp;использованием персональных данных, предоставленных при регистрации в&nbsp;Программу, а&nbsp;также третьими лицами, осуществляющими обработку персональных данных по&nbsp;поручению ОА&nbsp;ИЛЬ ДЕ&nbsp;БОТЭ (далее&nbsp;&mdash; Участник), согласившийся с&nbsp;получением информации от&nbsp;ОА&nbsp;ИЛЬ ДЕ&nbsp;БОТЭ и&nbsp;принявший настоящие правила Программы.<br><br>*номер карты, ФИО, дата рождения, предоставляемые клиентом при регистрации в&nbsp;Программу, должны совпадать с&nbsp;его данными, указанными в&nbsp;регистрационной анкете, заполненной в&nbsp;магазине ИЛЬ ДЕ&nbsp;БОТЭ, на&nbsp;сайте <a href="www.iledebeaute.ru">www.iledebeaute.ru</a> или в&nbsp;мобильном приложении ИЛЬ ДЕ&nbsp;БОТЭ при получении Дисконтной карты или Виртуальной дисконтной карты соответственно.<br><br>Зарегистрироваться в&nbsp;Программе может клиент ИЛЬ ДЕ&nbsp;БОТЭ, получивший свою Дисконтную карту в&nbsp;магазине ИЛЬ ДЕ&nbsp;БОТЭ г.Пермь; первая покупка которого с&nbsp;применением одной и&nbsp;той&nbsp;же Дисконтной карты совершена не&nbsp;позднее 1&nbsp;января 2013&nbsp;года, накопления на&nbsp;1&nbsp;января 2016 года за&nbsp;покупки в&nbsp;магазинах ИЛЬ ДЕ&nbsp;БОТЭ г. Пермь составляют не&nbsp;менее 100&nbsp;000&nbsp;руб., из&nbsp;них не&nbsp;менее 30&nbsp;000&nbsp;руб. &mdash;&nbsp;за&nbsp;2016&nbsp;год. При этом за&nbsp;указанный период ежегодно клиентом совершено не&nbsp;более 52-х покупок с&nbsp;использованием одной и&nbsp;той&nbsp;же Дисконтной карты, а&nbsp;число ежегодно купленных продуктов не&nbsp;превышает 208&nbsp;шт.<br><br>Бонусные баллы (далее&nbsp;&mdash; Бонусы)&nbsp;&mdash; условные единицы, начисляемые АО&nbsp;ИЛЬ ДЕ&nbsp;БОТЭ на&nbsp;Бонусный счет Участника. Бонусы не&nbsp;являются и&nbsp;не&nbsp;могут являться денежными средствами, средствами платежа или каким-либо видом валюты или ценной бумаги. Бонусы не&nbsp;являются скидками при покупках в&nbsp;магазинах ИЛЬ ДЕ&nbsp;БОТЭ.<br><br>Бонусный счет&nbsp;&mdash; совокупность учетных и&nbsp;информационных данных в&nbsp;базе данных об&nbsp;Участнике, предоставленных ему Привилегиях, количестве начисленных, списанных, использованных Участником Бонусов и&nbsp;текущем Балансе Бонусов.<br><br>Баланс Бонусов&nbsp;&mdash; остаток Бонусов на&nbsp;Бонусном счете Участника Программы.<br><br>Каталог Привилегий (на&nbsp;сайте Программы&nbsp;&mdash; &laquo;Сокровищница привилегий&raquo;)&nbsp;&mdash; специальный раздел на&nbsp;сайте Программы, содержащий перечень Привилегий и&nbsp;условия их&nbsp;получения Участниками.<br><br><span class="bold">Регистрация в&nbsp;Программе</span><br><br>Клиент ИЛЬ ДЕ&nbsp;БОТЭ вправе присоединиться к&nbsp;Программе путем регистрации на&nbsp;сайте Программы не&nbsp;позднее 31&nbsp;декабря 2016&nbsp;г. через заполнение анкеты Участника с&nbsp;предоставлением согласия на&nbsp;обработку персональных данных и&nbsp;информирование и&nbsp;согласия с&nbsp;настоящими Правилами участия в&nbsp;Программе:<br><br>&mdash;&nbsp;заполнить поля анкеты, обязательные к&nbsp;заполнению (помечены &laquo;*&raquo;),<br>&mdash;&nbsp;нажать кнопку &laquo;Отправить запрос&raquo;;<br>-получить на&nbsp;указанный номер мобильного телефона SMS-сообщение с&nbsp;паролем, на&nbsp;указанный email&nbsp;&mdash; сообщение с&nbsp;другим паролем,<br>-принять настоящие условия участия в&nbsp;Программе и&nbsp;дать согласие на&nbsp;обработку персональных данных и&nbsp;информирование посредством проставления галочек в&nbsp;соответствующих чек-боксах, сопровождающихся подробной информацией,<br>-ввести полученные пароли и&nbsp;нажать &laquo;Зарегистрироваться&raquo;.<br><br>Участник становится зарегистрированным в&nbsp;Программе и&nbsp;получает доступ на&nbsp;свою Персональную страницу на&nbsp;сайте Программы.<br><br><span class="bold">Получение привилегий</span><br><br><span class="bold">Начисление Бонусов и&nbsp;получение Привилегий в&nbsp;обмен на&nbsp;накопленные Бонусы</span><br><br>В&nbsp;рамках действия Программы Участники получают Бонусы, которые могут быть использованы в&nbsp;соответствии с&nbsp;настоящими Правилами Программы.<br><br>Бонусы начисляются за&nbsp;покупки товаров в&nbsp;магазинах ИЛЬ ДЕ&nbsp;БОТЭ и&nbsp;Онлайн-магазине ИЛЬ ДЕ&nbsp;БОТЭ:<br><br>За&nbsp;каждые 1&nbsp;тыс. рублей покупки товара после всех скидок начисляется 1&nbsp;Бонус.<br><br>Сумма начисляемых Бонусов округляется в&nbsp;меньшую сторону кратно 1&nbsp;тыс. руб. (например, за&nbsp;покупку на&nbsp;сумму 4&nbsp;600&nbsp;руб. после скидок начисляется 4&nbsp;Бонуса, за&nbsp;5100&nbsp;руб. &mdash;&nbsp;5&nbsp;Бонусов).<br>Начисление Бонусов производится только за&nbsp;покупки с&nbsp;использованием Дисконтной карты Участника, указанной при регистрации в&nbsp;Программу.<br>Правило начисления Бонусов применяется к&nbsp;сумме чека после всех скидок. Суммы разных чеков не&nbsp;суммируются.<br>Начисление Бонусов на&nbsp;Бонусный счет участника производится на&nbsp;следующий день после совершения покупки.<br>Бонусы не&nbsp;начисляются, если Дисконтная карта Участника утрачена или заблокирована. Бонусы начисляются на&nbsp;общую сумму покупки товаров Участником, не&nbsp;превышающую 1&nbsp;млн. руб. после всех скидок.<br><br>Бонусы начисляются на&nbsp;Бонусный счет Участника в&nbsp;период с&nbsp;1&nbsp;января 2016 года по&nbsp;31&nbsp;декабря 2016 года (включительно). Только зарегистрированный в&nbsp;Программе Участник получает возможность посещать сайт Программы и&nbsp;использовать накопленные Бонусы.<br><br><span class="bold">Дополнительные бонусы</span><br><br>Дополнительные Бонусы могут начисляться за&nbsp;действия Участника в&nbsp;рамках Программы: за&nbsp;участие в&nbsp;опросах, в&nbsp;день рождения Участника или магазина ИЛЬ ДЕ&nbsp;БОТЭ, за&nbsp;покупку товара определенной марки и&nbsp;в&nbsp;рамках других акций, проводимых по&nbsp;инициативе ИЛЬ ДЕ&nbsp;БОТЭ в&nbsp;соответствии с&nbsp;правилами таких акций.<br><br>Информация об&nbsp;акциях и&nbsp;правилах начисления дополнительных Бонусов размещается на&nbsp;сайте Программы, в&nbsp;маркетинговых и/или рекламных материалах.<br><br>Начисление дополнительных Бонусов происходит сразу после совершения Участником определенных действий и&nbsp;при условии выполнения требуемых условий, если иное не&nbsp;указано в&nbsp;описании соответствующей акции.<br><br><span class="bold">Получение Привилегий в&nbsp;обмен на&nbsp;Бонусы</span><br><br>Участник может обменять Бонусы на&nbsp;Привилегию, стоимость которой, выраженная в&nbsp;Бонусах, меньше или равна количеству Бонусов, накопленных на&nbsp;Бонусном счете.<br><br>Бонусы в&nbsp;обмен на&nbsp;Привилегию списываются в&nbsp;момент ее&nbsp;заказа Участником.<br><br>После списания Бонусов участник получает email, подтверждающий факт ее&nbsp;заказа, сроки и&nbsp;способ ее&nbsp;получения.<br><br>Преимущественным местом получения Привилегии или сертификата Партнера, подтверждающего право ее&nbsp;получения, является магазин ИЛЬ ДЕ&nbsp;БОТЭ по&nbsp;адресу&nbsp;г. Пермь, ул. Ленина, д.&nbsp;60, ТРК &laquo;Колизей&nbsp;&mdash; Атриум&raquo;.<br><br>После списания Бонусов отказ от&nbsp;привилегии и&nbsp;возврат Бонусов невозможны.<br><br>Каждой отдельной Привилегией можно воспользоваться однократно, если иное не&nbsp;указано в&nbsp;правилах получения данной Привилегии.<br><br>Получение Привилегии производится только по&nbsp;предъявлению Дисконтной карты участника и&nbsp;удостоверения личности.<br><br>В&nbsp;случае несовпадения номера Дисконтной карты Участника и&nbsp;ФИО, указанных при регистрации в&nbsp;Программу с&nbsp;номером Дисконтной карты и&nbsp;данными, указанными в&nbsp;удостоверении личности лица, обратившегося за&nbsp;получением Привилегии, Привилегия не&nbsp;выдается.<br><br>В&nbsp;случае отказа лица, обратившегося за&nbsp;получением Привилегии, предъявить Дисконтную карту Участника и/или документ, удостоверяющий личность, Привилегия не&nbsp;выдается.<br><br>АО&nbsp;ИЛЬ ДЕ&nbsp;БОТЭ праве запросить паспортные данные Участника при выдаче Привилегий и&nbsp;подпись в&nbsp;ее&nbsp;получении, в&nbsp;случае отказа Участника&nbsp;&mdash; отказать в&nbsp;выдаче Привилегии.<br><br><span class="bold">Срок действия Бонусов</span><br><br>Бонусы, начисленные Участнику до&nbsp;31&nbsp;декабря 2016 года включительно, действуют до&nbsp;1&nbsp;февраля 2017&nbsp;г., после чего обнуляются в&nbsp;полном объеме неизрасходованных Участником Бонусов.<br><br>По&nbsp;факту прекращения Программы все Бонусы, накопленные и&nbsp;неизрасходованные Участником, могут быть аннулированы.<br><br>АО&nbsp;ИЛЬ ДЕ&nbsp;БОТЭ не&nbsp;несет ответственности за&nbsp;любые потери или убытки, возникшие в&nbsp;результате таких изменений или отмен.<br><br><span class="bold">Выход из&nbsp;Программы</span><br><br>Участник может отказаться от&nbsp;участия в&nbsp;Программе, позвонив на&nbsp;Горячую линию по&nbsp;номеру 8-800-2001-700, направив сообщение в&nbsp;разделе &laquo;Обратная связь&raquo; на&nbsp;сайте Программы или на&nbsp;адрес <a href="mailto:info@iledebeaute.ru">info@iledebeaute.ru</a>.<br><br>После отказа от&nbsp;участия в&nbsp;Программе Участник будет исключен из&nbsp;Программы в&nbsp;течение 72&nbsp;часов и&nbsp;получит подтверждение на&nbsp;свой мобильный телефон.<br><br>АО&nbsp;ИЛЬ ДЕ&nbsp;БОТЭ вправе в&nbsp;одностороннем порядке прекратить участие Участника в&nbsp;Программе с&nbsp;аннулированием накопленных Бонусов и&nbsp;отказом в&nbsp;выдаче уже заказанных Привилегий его без предварительного уведомления, если:<br><br>-Дисконтная карта не&nbsp;используется более двенадцати месяцев подряд без уважительных причин,<br>-Владелец Дисконтной карты нарушает правила использования Дисконтной карты.<br>-Установлен факт совершения мошеннических действий Владельцем Дисконтной карты в&nbsp;отношении имущества Компании.<br><br><span class="bold">Другие условия</span><br><br>АО&nbsp;ИЛЬ ДЕ&nbsp;БОТЭ оставляет за&nbsp;собой право изменять любые Правила Программы, в&nbsp;любое время с&nbsp;обязательным уведомлением Участников путем размещения информации на&nbsp;странице программы за&nbsp;5&nbsp;дней до&nbsp;вступления изменений в&nbsp;силу.<br><br>АО&nbsp;ИЛЬ ДЕ&nbsp;БОТЭ вправе вносить любые изменения в&nbsp;любое время и&nbsp;исключительно по&nbsp;собственному усмотрению в&nbsp;перечень товаров и&nbsp;услуг, в&nbsp;отношении которых начисляются Бонусы, изменять количество Бонусов, которое начисляется за&nbsp;покупку товаров и&nbsp;услуг, списывается с&nbsp;Бонусного счета Участника в&nbsp;обмен на&nbsp;Привилегии, вносить изменения в&nbsp;каталог Привилегий. Информация об&nbsp;указанных изменениях публикуется на&nbsp;сайте Программы за&nbsp;5&nbsp;дней до&nbsp;начала изменений.<br><br>Программа может быть приостановлена или прекращена в&nbsp;любое время с&nbsp;уведомлением Участника за&nbsp;1&nbsp;месяц через сайт Программы.<br><br>Общая сумма Привилегий, полученных Участником из&nbsp;каталога Привилегий может превышать 4000&nbsp;руб. в&nbsp;течение одного календарного года. Уплата налогов и&nbsp;исполнение обязательств, связанных с&nbsp;участием Участника в&nbsp;Программе, являются обязанностью Участника.<br><br>Фактическая стоимость, дата и&nbsp;описание полученных Привилегии в&nbsp;обмен на&nbsp;бонусы указываются в&nbsp;описании Привилегии на&nbsp;сайте Программы в&nbsp;истории списания Бонусов Участником.<br><br>Участник может также получить информацию о&nbsp;полученных им&nbsp;Привилегиях, направив запрос через звонок на&nbsp;Горячую линию по&nbsp;номеру<br>8-800-2001-700, оставив сообщение в&nbsp;разделе &laquo;Обратная связь&raquo; на&nbsp;сайте Программы или направив зарос на&nbsp;адрес <a href="mailto:info@iledebeaute.ru">info@iledebeaute.ru</a>.</div><a href="#" class="sorry_return" data-ng-click="$parent.rules = false;$event.preventDefault();">Назад</a></div></div><div class="overlay" data-ng-if="agree" style="z-index: 2;"><div class="overlay_iner overlay_enter" style="margin-top: -285px;"><h3><span class="bold">Согласие на обработку персональных данных и получение информирования.</span><br><br>Регистрируясь для участия в&nbsp;Элитной программе ИЛЬ ДЕ&nbsp;БОТЭ, Вы&nbsp;соглашаетесь с&nbsp;обработкой и&nbsp;использованием своих персональных данных, указанных в&nbsp;электронной анкете при регистрации, компанией АО&nbsp;ИЛЬ ДЕ&nbsp;БОТЭ, а также третьими лицами, осуществляющим обработку персональных данных по&nbsp;поручению АО&nbsp;ИЛЬ ДЕ&nbsp;БОТЭ, с&nbsp;целью осуществления телефонного информирования, почтовой и&nbsp;электронной информационной рассылки (подарочные сертификаты, бланки с&nbsp;информацией о&nbsp;новинках, открытки, листовки, буклеты, сашеты, сэмплы, пригласительные), а&nbsp;также выражаете согласие на&nbsp;получение рекламных материалов от&nbsp;компании АО&nbsp;ИЛЬ ДЕ БОТЭ бессрочно, до&nbsp;получения компанией АО&nbsp;ИЛЬ ДЕ&nbsp;БОТЭ Вашего письменного уведомления об&nbsp;отказе использования Ваших персональных данных / отказе в&nbsp;получении рекламных материалов следующими способами: по&nbsp;email, по&nbsp;SMS, по&nbsp;почтовому адресу, указанных в&nbsp;электронной анкете при регистрации или при ее&nbsp;редактировании, направленного по&nbsp;следующему адресу: 107041, г.Москва, Столешников пер., д.11. email: info@iledebeaute.ru.<br>Зарегистрированный Участник Элитной программы ИЛЬ ДЕ&nbsp;БОТЭ может отказаться от&nbsp;получения сообщений, выбрав на&nbsp;Персональной странице в&nbsp;разделе Профиль способы информирования, через которые он&nbsp;не&nbsp;хочет получать сообщения.<br></h3><a href="#" class="sorry_return" data-ng-click="$parent.agree = false;$event.preventDefault();">Назад</a></div></div><div class="overlay" data-ng-if="error_popup" style="z-index: 3;"><div class="overlay_iner overlay_enter"><h3 data-ng-bind="$parent.error_popup"></h3><a href="#" class="sorry_return" data-ng-click="$parent.error_popup = false;$event.preventDefault();">Назад</a></div></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('htmlTemplates');
} catch (e) {
  module = angular.module('htmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/html/components/components.test.html',
    '<div class="opros_main"><span class="opros_head">Прохождение опроса <b>+ [[ model.points ]] балла</b></span><div class="opros_item"><span class="qust_from">[[ step + 1 ]] вопрос из [[ model.data.length ]]</span> <span class="qust_text" data-ng-bind="model.data[step].q"></span><div class="answer"><div data-ng-repeat="item in model.data[step].a"><div class="check" data-ng-show="item.type !== \'custom\'"><input type="radio" id="ans[[ $index ]]" name="[[ step ]]" data-ng-click="setAnswer(item, model.data[step].a)"> <label for="ans[[ $index ]]" data-ng-bind="item.text"></label></div><div data-ng-show="item.type === \'custom\'"><input data-ng-init="custom_tag" type="text" data-ng-model="custom_tag" placeholder="[[ item.text ]]" data-ng-change="item.tag = (\'Свой вариант подарка: \' + custom_tag); item.val = !!custom_tag;"></div></div><textarea name="user_ansver" data-ng-model="customAnswer" data-ng-show="showCustomAnswer" placeholder="Напишите свой вариант"></textarea></div><a href="#" class="next_qust" data-ng-click="next();$event.preventDefault();" data-ng-class="{ disabled : !isValid() }">Далее</a></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('htmlTemplates');
} catch (e) {
  module = angular.module('htmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/html/ui/ui.datepicker.html',
    '<div class="input_date" data-ng-if="model"><div class="select_block select_day" data-ng-class="{ disabled : $parent.disabled }"><select data-ng-model="$parent.model[0]" data-ng-disabled="$parent.disabled" data-ng-options="day for day in $parent.range(1, $parent.days[$parent.model[1] || 1])"><option value="">День</option></select></div><div class="select_block select_month" data-ng-class="{ disabled : $parent.disabled }"><select data-ng-model="$parent.model[1]" data-ng-options="+index as month for (index, month) in $parent.months" data-ng-disabled="$parent.disabled"><option value="">Месяц</option></select></div><div class="select_block select_year" data-ng-class="{ disabled : $parent.disabled }"><select data-ng-model="$parent.model[2]" data-ng-options="year for year in $parent.years" data-ng-disabled="$parent.disabled"><option value="">Год</option></select></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('htmlTemplates');
} catch (e) {
  module = angular.module('htmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/html/ui/ui.menu.html',
    '<div><div class="main-wrapper _js_main-wrapper"><div class="newMainMenu _js_newMainMenu _js_level_navigation menu_closed"><div class="newMainMenu__shadow" style="display: none;"></div><span class="menu-close _js_menu-close"></span><ul class="newMainMenu__list"><li data-ng-if="!item.hide" data-ng-repeat="item in model track by $index" class="newMainMenu__item _js_highlighted_item"><a class="newMainMenu__link linkMenu _js_mm_item" href="/shop/" data-ng-bind="item.label" data-ng-class="{type_active_header: item.active}" data-ng-href="[[ generateUrl(item.key) ]]"></a></li><li class="newMainMenu__item _js_highlighted_item _withSeparator"><a class="newMainMenu__link linkMenu _js_mm_item" data-ng-click="exit();$event.preventDefault();">ВЫХОД</a></li></ul></div><div class="sub_menu" data-ng-if="getSubmenu()"><a href="#" data-ng-if="!item.hide" data-ng-repeat="item in getSubmenu()" data-ng-bind="item.label" data-ng-class="{type_active: item.active}" data-ng-href="[[ generateUrl(item.key) ]]"></a></div></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('htmlTemplates');
} catch (e) {
  module = angular.module('htmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/html/routes/routes.actions.html',
    '<div data-ng-show="!currentTest"><h2 class="content_head">Получите больше бонусов</h2><span class="text">Выполняйте задания и получайте за них бонусы, которые Вы можете потратить на привилегии!</span> <span class="text" data-ng-show="hidden" style="margin-top: 20px;">Подождите, пожалуйста, задания загружаются.</span><div class="select_qust" data-ng-show="!hidden"><div class="sq_item" data-ng-repeat="action in actions()"><div class="sq_item_left"><span class="name" data-ng-bind="transformTitle(action)"></span> <span class="sum_bonus">[[ action.points ]] бонусов</span> <a href="#"><span data-ng-if="action.socialType && user" href="#" class="tasks-cell__iframe-wrap" data-sp-action="[[ action._actionId ]]" data-styles="[[ css_link ]]">Получить</span></a></div><div class="sq_item_right [[ getIcon(action) ]]"></div></div><div class="sq_item" data-ng-repeat="item in testsData" data-ng-if="!item.exist"><div class="sq_item_left"><span class="name" data-ng-bind="item.name"></span> <span class="sum_bonus">[[ item.points + \' \' + (plural(item.points, [\'бонус\', \'бонуса\', \'бонусов\']))]]</span> <a href="#" class="bg" data-ng-click="openTest(item);$event.preventDefault();">Пройти</a></div><div class="sq_item_right sir_qust"></div></div></div></div><test-cmp data-ng-show="currentTest" data-model="currentTest" data-on-finish="onFinish"></test-cmp><div class="overlay" data-ng-show="finish_test"><div class="overlay_iner overlay_enter"><h3 class="mt_n">Спасибо за Ваше участие! Бонусы будут начислены на Ваш счет!</h3><a href="#" data-ng-click="$event.preventDefault();finish_test = false;" class="sorry_return">Назад</a></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('htmlTemplates');
} catch (e) {
  module = angular.module('htmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/html/routes/routes.auth.html',
    '<auth></auth>');
}]);
})();

(function(module) {
try {
  module = angular.module('htmlTemplates');
} catch (e) {
  module = angular.module('htmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/html/routes/routes.faq.html',
    '<h2 class="content_head">Часто задаваемые вопросы</h2><div class="faq_main"><div class="faq_item" data-ng-repeat="item in data track by $index"><span class="faq_head" data-ng-bind="item.q"></span> <span class="faq_desc" data-ng-bind-html="\'Ответ: \' + item.a"></span></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('htmlTemplates');
} catch (e) {
  module = angular.module('htmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/html/routes/routes.feedback.html',
    '<h2 class="content_head">Форма обратной связи</h2><div class="faq_main"><div class="text"><p>Если ответа на Ваш вопрос нет среди часто задаваемых вопросов, пожалуйста, напишите нам через Форму обратной связи или позвоните Персональному менеджеру по номеру:</p><ul class="margin_10" style="padding-left: 15px;"><li>в г.Санкт-Петербург и г.Краснодар: 8-800-2001-700, нажать «0» после гудка,</li><li>в г.Пермь: 8-342-214-42-82.</li></ul><p>Вы получите оперативный ответ по СМС.</p></div><div class="feedback_main"><form action="#" class="fedback_form" data-ng-submit="sendFeedBack();$event.preventDefault();"><div class="fb_row"><label style="font-weight: bold;padding-left: 0;">Сообщение</label> <textarea placeholder="Напишите сообщение" data-ng-model="msg"></textarea></div><div class="fb_row"><div class="input_block"><input type="submit" value="Отправить" data-ng-disabled="!msg"></div></div></form></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('htmlTemplates');
} catch (e) {
  module = angular.module('htmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/html/routes/routes.gift_archive.html',
    '<div class="list_privil" style="margin-top: 0;"><div class="list_privil_left"><span class="lpl_head">Архив привилегий</span></div><div class="list_privil_menu"><a href="#" data-ng-class="{ act: type == \'used\' }" data-ng-click="filterBy(\'used\');$event.preventDefault();">Полученные</a> <a href="#" data-ng-class="{ act: type == \'inactive\' }" data-ng-click="filterBy(\'inactive\');$event.preventDefault();">Закончившиеся</a></div></div><div class="archiv_privil_main"><div class="archiv_privil_item" data-ng-repeat="item in current_data track by $index" data-ng-cloak=""><div class="img_block"><img data-ng-src="[[ item.gift ? item.gift.thumbs.url_250x250 : item.thumbs.url_250x250 ]]" alt=""></div><span class="arch_name" data-ng-bind="item.gift ? item.gift.name : item.name"></span> <span class="arch_bon" data-ng-bind="(item.gift ? item.gift.points : item.points) + \' \' + plural(item.gift ? item.gift.points : item.points, [\'бонус\', \'бонуса\', \'бонусов\'])"></span> <span class="when_use" data-ng-if="item.purchase_date">Использованно [[ item.purchase_date | date:\'dd.MM.yyyy\' ]]</span> <span class="when_use" data-ng-if="!item.purchase_date">Срок действия истек</span></div><tools-pagination data-ng-cloak="" data-page="page" data-per-page="per_page" data-items="per_page * total_pages" data-on_change="change_page"></tools-pagination></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('htmlTemplates');
} catch (e) {
  module = angular.module('htmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/html/routes/routes.gifts.html',
    '<div class="lk_top_info" data-ng-if="user() && !gift_detail"><div class="lk_top_info_left"><span class="clien_name" data-ng-bind="user().user.first_name + \',\'"></span> <span class="clien_sub">Получайте бонусы за свои обычные покупки в ИЛЬ ДЕ БОТЭ и обменивайте их на привилегии!</span></div><div class="lk_top_info_right"><div class="bonus_num"><span class="big" data-ng-bind="user().user_points.confirmed"></span> <span class="text" style="width: 95px;">[[ plural(user().user_points.confirmed, [\'бонус\', \'бонуса\', \'бонусов\']) ]]<br>ИЛЬ ДЕ БОТЭ</span></div><div class="bonus_num pr_num" data-ng-if="gifts.avaliable.length"><span class="big" data-ng-bind="gifts.avaliable.length"></span> <span class="text">[[ plural(gifts.avaliable.length, [\'доступная\',\'доступные\', \'доступных\']) ]] [[ plural(gifts.avaliable.length, [\'привилегия\',\'привилегии\', \'привилегий\']) ]]</span></div><span class="lk_top_info_right_note">Каждая привилегия может быть выбрана однократно, кроме детских игровых комнат.</span></div><div class="list_privil"><div class="list_privil_left"><span class="lpl_head">Перечень привилегий</span></div><div class="list_privil_menu"><a href="#" class="two_l" data-ng-class="{ act: type == \'avaliable\' }" data-ng-click="filterBy(\'avaliable\');$event.preventDefault();">Выбирайте прямо<br>сейчас</a> <a href="#" data-ng-class="{ act: type == \'not_avaliable\' }" data-ng-click="filterBy(\'not_avaliable\');$event.preventDefault();">Накопите и получите</a></div></div></div><div class="archiv_privil_main archiv_privil_lk_main" data-ng-if="!gift_detail"><div class="archiv_privil_item" data-ng-repeat="gift in data" data-ng-if="user() && data" data-ng-click="openGift(gift);$event.preventDefault();"><div class="img_block"><img data-ng-src="[[ gift.thumbs.url_250x250 ]]" alt=""></div><span class="arch_name" data-ng-bind="gift.name"></span> <span class="arch_bon">[[ gift.points + \' \' + plural(gift.points, [\'бонус\', \'бонуса\', \'бонусов\']) ]]</span> <a href="#" data-ng-bind="user().user_points.confirmed >= gift.points ? \'Получить\' : \'Подробнее\'"></a></div></div><div data-ng-if="gift_detail"><a href="#" class="back_link no_ml" data-ng-click="$parent.gift_detail = null;$event.preventDefault();">Перечень привилегий</a><div class="one_privil"><div class="op_left"><img data-ng-src="[[ $parent.gift_detail.thumbs.url_250x250 ]]" alt=""> <a href="#" data-ng-click="$parent.gift_ok = $parent.gift_detail;$event.preventDefault();" data-ng-show="$parent.user().user_points.confirmed >= $parent.gift_detail.points">Получить</a></div><div class="op_right"><span class="op_head">[[ $parent.gift_detail.name ]] <b>[[ $parent.gift_detail.points + \' \' + plural($parent.gift_detail.points, [\'бонус\', \'бонуса\', \'бонусов\']) ]]</b></span><div class="op_info"><span data-ng-bind-html="$parent.gift_detail.descr"></span></div></div></div></div><div class="overlay" data-ng-if="get_gift && get_gift.show"><div class="overlay_iner overlay_congr"><div class="congr_right"><span class="congr_head">Спасибо! Вы выбрали привилегию!</span> <span class="congr_text">С Вашего бонусного счета было списано [[ get_gift.points + \' \' + plural(get_gift.points, [\'бонус\', \'бонуса\', \'бонусов\']) ]]. Подробная информация по получению привилегии направлена Вам на электронную почту.</span> <a href="#" data-ng-click="$parent.get_gift = null;$event.preventDefault();">Закрыть</a></div></div></div><div class="overlay" data-ng-if="gift_ok"><div class="overlay_iner overlay_congr"><div class="congr_right"><span class="congr_head">Пожалуйста, подтвердите получение привилегии</span> <span class="congr_text">С вашего бонусного счета будет списано [[ gift_ok.points + \' \' + plural(gift_ok.points, [\'бонус\', \'бонуса\', \'бонусов\']) ]].<br>Приняли решение? Подтвердите, пожалуйста, свой выбор привилегии и списание бонусов.</span> <a href="#" data-ng-click="$parent.gift_purchase($parent.gift_ok);$event.preventDefault();">Продолжить</a> <a href="#" data-ng-click="$parent.gift_ok = null;$event.preventDefault();" style="float: right;">Назад</a></div></div></div><div class="overlay" data-ng-if="gift_limit"><div class="overlay_iner overlay_enter"><h3>К сожалению, Вы не можете выбрать эту привилегию, так как уже получали её и превысили лимит. Пожалуйста, выберите другие Привилегии из раздела Сокровищница привилегий.</h3><a href="#" class="sorry_return" data-ng-click="$parent.gift_limit= false;$event.preventDefault();">Назад</a></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('htmlTemplates');
} catch (e) {
  module = angular.module('htmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/html/routes/routes.history.html',
    '<div class="content_head history">История покупок</div><h2 class="content_head history">На Вашем бонусном счете: <span style="color: #B50069;">[[ user().user_points.confirmed ]] [[ plural(user().user_points.confirmed, [\'бонус\', \'бонуса\', \'бонусов\']) ]]</span></h2><span class="table_info">[[ history && history().length ? \'Здесь Вы можете увидеть историю Ваших покупок, начисленных бонусов и полученных привилегий\' : \'История пуста\' ]]</span><div class="hist_main"><table class="hist_table" cellspacing="0"><tr data-ng-repeat="item in history_data"><td><span data-ng-bind="history_date_format(item.action_date)"></span></td><td><span><b data-ng-bind="get_history_name(item)"></b></span> <span data-ng-if="item.action === \'gift_purchase\'"><b>[[ item.name ]]</b></span> <span data-ng-if="item.action === \'purchase\'"><b data-ng-bind="\'Номер чека: \' + item.order_num" data-ng-click="history_item_click(item);" class="history_purchase_link"></b></span> <span data-ng-show="item.action === \'purchase\' && item.purchase_data" data-ng-repeat="info in item.purchase_data"><b data-ng-bind="info.product.name"></b></span></td><td><span data-ng-bind="(item.points_delta > 0 ? \'+\' : \'\') + item.points_delta + \' \' + plural(item.points_delta, [\'бонус\', \'бонуса\', \'бонусов\'])" data-ng-class="{type_disabled : item.points_delta < 0}"></span> <span data-ng-if="item.action === \'purchase\'" class="type_disabled">[[ item.price ]] руб.</span> <span data-ng-if="item.action === \'purchase\' && item.purchase_data" class="type_disabled" data-ng-repeat="info in item.purchase_data">[[ info.price ]] руб.</span></td></tr></table><tools-pagination data-ng-if="history_data" data-page="page" data-items="history().length" data-per-page="per_page" data-on_change="change_page"></tools-pagination></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('htmlTemplates');
} catch (e) {
  module = angular.module('htmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/html/routes/routes.main.html',
    '<div class="iner_block"><menu></menu><div class="content" data-ng-view=""></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('htmlTemplates');
} catch (e) {
  module = angular.module('htmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/html/routes/routes.menu.html',
    '<div class="overlay"><div class="overlay_iner overlay_wel" data-ng-show="user && user() && gifts && gifts()"><h2>[[ user().user.first_name || \'Здравствуйте\' ]], приветствуем Вас в&nbsp;Элитной программе ИЛЬ&nbsp;ДЕ&nbsp;БОТЭ!</h2><h3 data-ng-if="enough">Теперь за свои самые обычные покупки в ИЛЬ&nbsp;ДЕ&nbsp;БОТЭ Вы накапливаете бонусы, которые можете поменять на приятные привелегии!<br><br>У Вас уже накоплено [[ user().user_points.confirmed ]] [[ plural(user().user_points.confirmed, [\'бонус\', \'бонуса\', \'бонусов\']) ]] и Вам [[ plural(count, [\'доступна\',\'доступны\', \'доступно\']) ]] [[ count ]] [[ plural(count, [\'привилегия\',\'привилегии\', \'привилегий\']) ]], ознакомьтесь с [[ count == 1 ? \'ней\' : \'ними\' ]] в <a href="#/gifts">Сокровищнице привилегий</a>.</h3><h3 data-ng-if="!enough">Вам осталось накопить совсем немного [[ plural((last.points - user().user_points.confirmed), [\'бонус\', \'бонуса\', \'бонусов\']) ]], а именно [[ last.points - user().user_points.confirmed ]] и Вам [[ getMinimalCounts() > 1 ? \'станут\' : \'станет\' ]] [[ plural(getMinimalCounts(), [\'доступна\',\'доступны\', \'доступно\']) ]] [[ getMinimalCounts() ]] [[ plural(getMinimalCounts(), [\'привилегия\',\'привилегии\', \'привилегий\']) ]]! Чтобы узнать, [[ getMinimalCounts() > 1 ? \'какие\' : \'какая\' ]], перейдите в <a href="#/gifts">Сокровищницу привилегий</a>!<br><br>Также Вы можете получать дополнительные бонусы за участие в акциях, опросах и других мероприятиях.</h3><div class="wel_link"><a href="#/actions" class="wl_icon1">Получите больше<br>бонусов</a> <a href="#/gifts" class="wl_icon2">Сокровищница<br>привилегий</a> <a href="#/page/helpful_info" class="wl_icon3">Правила Элитной программы ИЛЬ ДЕ БОТЭ</a> <a href="#/history" class="wl_icon4">История<br>покупок</a> <span>ИЛЬ ДЕ БОТЭ. ЗДЕСЬ ЖИВЕТ КРАСОТА</span></div></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('htmlTemplates');
} catch (e) {
  module = angular.module('htmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/html/routes/routes.pages.html',
    '<div class="page page__[[ className ]]"><h2 class="content_head" data-ng-bind="model.title"></h2><span class="text" data-ng-bind-html="model.text"></span></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('htmlTemplates');
} catch (e) {
  module = angular.module('htmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/html/routes/routes.profile.edit.html',
    '<h2 style="font-size: 18px;">Изменить профиль</h2><form action="#" data-ng-submit="edit();$event.preventDefault();" style="width: 650px;"><div class="input_block"><label for="name">Имя</label> <input type="text" id="name" data-ng-model="form.first_name" data-ng-disabled="user().user.first_name" autocomplete="off" placeholder="Введите Ваше имя"></div><div class="input_block"><label for="s_name">Фамилия</label> <input type="text" id="s_name" data-ng-model="form.last_name" data-ng-disabled="user().user.last_name" placeholder="Введите Вашу фамилию"></div><div class="input_block"><label for="date">Дата рождения</label><date-picker data-model="form.birth_date" id="date"></date-picker></div><div class="input_block"><label for="woman">Пол</label><div class="input_gender"><div class="check"><input type="radio" id="woman" name="gender" data-ng-model="form.sex" value="2" data-ng-disabled="user().user.sex"> <label for="woman">Женский</label></div><div class="check"><input type="radio" id="man" name="gender" data-ng-model="form.sex" value="1" data-ng-disabled="user().user.sex"> <label for="man">Мужской</label></div></div></div><div class="input_block"><label for="email">Email</label> <input type="text" id="email" data-ng-model="form.email" placeholder="Введите Ваш Email"></div><div class="input_block"><label for="phone">Телефон</label> <input type="text" class="inp_ch" id="phone" data-ng-model="form.phone" placeholder="+7 (___) ___ - __ - __" data-ui-mask="+7 (***) *** - ** - **"></div><div class="input_block"><label for="password">Пароль</label> <input type="password" id="password" data-ng-model="form.password" placeholder="Придумайте себе пароль для последующего входа"></div><div class="input_block"><label for="shop">Город</label><div class="select_block select_shop"><select data-ng-model="form.city" id="city" data-ng-options="o as o for o in city_list" onclick="document.getElementById(\'city_label\').style.display = \'none\'"></select><label for="city" id="city_label" style="top: 13px;">Выберите город</label></div></div><div class="input_block"><label for="shop">Любимый магазин</label><div class="select_block select_shop"><select data-ng-model="form.store" id="shop" data-ng-options="o.tag as o.name for o in get_stores(form.city)" onclick="document.getElementById(\'shop_label\').style.display = \'none\'"></select><label for="shop" id="shop_label">Выберите любимый магазин, в котором Вы будете<br>забирать привилегии</label></div></div><div class="input_block input_block_entr"><input type="submit" value="Сохранить" data-ng-disabled="!changed()"></div></form><div class="overlay" data-ng-if="result_popup" style="z-index: 3;"><div class="overlay_iner overlay_enter"><h3 data-ng-bind="$parent.result_popup"></h3><a href="#" class="sorry_return" data-ng-click="$parent.result_popup = false;$event.preventDefault();">ЗАКРЫТЬ</a></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('htmlTemplates');
} catch (e) {
  module = angular.module('htmlTemplates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('/html/routes/routes.sorry.html',
    '<div class="overlay"><div class="overlay_iner overlay_enter"><h3 class="mt_n">Сожалеем, но Вы пока не являетесь участником Программы или указали данные, отличные от тех, что были предоставлены в Вашей анкете в магазине ИЛЬ ДЕ БОТЭ при получении Дисконтной карты.<br><br>Обратитесь за помощью на Горячую линию по телефону<br>8-800-2001-700.</h3><a href="#/" class="sorry_return">Назад</a></div></div>');
}]);
})();

(function () {

  angular.module('iledebeaute', [
    'auth',
    'core',
    'ui',
    'routes',
    'iledebeaute.services.actions',
    'iledebeaute.services.users',
    'iledebeaute.services.faq',
    'iledebeaute.services.pages',
    'iledebeaute.services.cookies',
    'iledebeaute.directives.test',
    'iledebeaute.directives.authorization',
    'htmlTemplates'
  ])

    .run(["sp", "config", "$location", "api", "$window", "$timeout", "routeService", "$rootScope", "tagS", "$http", function (sp, config, $location, api, $window, $timeout, routeService, $rootScope, tagS, $http) {

      if (config.auth_hash && config.auth_hash != 'None') {
        sp.config().auth_hash = config.auth_hash;
        var user_data = {tags: [tagS.auth()[0], tagS.auth()[1], tagS.banned]};

        api.user.tags.exist(user_data).then(function (res) {
          var all = res.length - 1;
          var exists = res.filter(function (tag) {
            return tag.exist && tag.name != tagS.banned
          });
          var banned = res.filter(function (tag) {
            return tag.name == tagS.banned
          })[0];
          if (exists && exists.length == all && !banned.exist) {
            sp.send('login', config.auth_hash);
          } else {
            api.user.logout().then(function () {
              $window.location.reload();
            })
          }
        });

      }

      // config.auth_hash && sp.send('login', config.auth_hash);

      var _preloadPictures = function (pictureUrls, callback) {
        var i,
          j,
          loaded = 0;

        for (i = 0, j = pictureUrls.length; i < j; i++) {
          (function (img, src) {
            img.onload = function () {
              if (++loaded == pictureUrls.length && callback) {
                callback();
              }
            };

            // Use the following callback methods to debug
            // in case of an unexpected behavior.
            img.onerror = function () {
            };
            img.onabort = function () {
            };

            img.src = src;
          }(new Image(), pictureUrls[i]));
        }
      };


      // переделать
      window.func = function (res) {

        _preloadPictures([res.background], function () {

          $('body').css({
            'background-image': 'url(' + res.background + ')',
            'background-position': 'center top'
          })

        });

      };

      $http.jsonp("https://sailplay.ru/_integration/iledebeaute/background_config.js?callback=JSON_CALLBACK.load_config");

      sp.on('login.success', function () {
        api.auth = true;
        $timeout(function () {
          $location.path(routeService.getPrev());
        }, 500);
      });

      sp.on('login.error', function (res) {
        $location.path('/');
      });

      sp.on('logout.success', function () {
        $window.location.reload();
      });

      sp.on('load.user.history.error', function () {
        $('.preloader').hide()
      });
      sp.on('load.user.info.error', function () {
        $('.preloader').hide()
      });
      sp.on('tags.exist.error', function (res) {
        $('.preloader').hide()
      });
      sp.on('load.actions.list.error', function (res) {
        $('.preloader').hide()
      });

    }])

    .directive('iledebeaute', ["api", "$location", "$rootScope", function (api, $location, $rootScope) {

      return {
        restrict: 'E',
        replace: false,
        template: '' +
          '<div class="newHeader _js_newHeader _hasPromoBar">'+
            '<div class="newHeader__main">'+
                '<div class="newHeader__main__in _js_newHeader__main__in">' +
                    '<span class="newHeader__burgerWrap _js_newHeader__burger">' +
                        '<span class="newHeader__burger"></span>' +
                    '</span>' +
                    '<a class="newHeader__logo" href="/"></a>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<div data-ng-if="ready">' +
        '<auth></auth>' +
        ' <div class="iner_block">' +
        '   <menu data-ng-show="show()"></menu>' +
        '   <div class="content" data-ng-show="show() || show_content()" data-ng-view></div>' +
        ' </div>' +
        '<div class="preloader"></div>' +
        '</div>',
        scope: true,
        link: function (scope) {

          scope.ready = false;

          // TODO: перенести в sp_resolve
          api.load_config().then(function(){
            scope.ready = true;
          });

          scope.show = function () {
            return api.auth;
          };

          scope.show_content = function () {
            return $location.path() == '/sorry';
          };

        }
      }

    }]);


}());
(function () {

  angular.module('iledebeaute.directives.authorization', [])

    .directive('auth', ["config", "api", "$location", "tagS", "authApi", "countries", "sp", "userService", "$window", function (config, api, $location, tagS, authApi, countries, sp, userService, $window) {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: '/html/components/cmp.auth.html',
        scope: {
          model: '='
        },
        link: function (scope) {

          $('.preloader').hide();

          var city_prefix = userService.city_prefix;

          scope.show = config && config.auth_hash === 'None' ? true : false;

          scope.state = 1;

          scope.countries = countries;

          var tags = tagS.auth();
          var tags2 = tagS.form();
          tags = tags.concat(userService.city_list().map(function (item) {
            return city_prefix + item;
          }));

          var login_form = {
            partner_id: config.partner_id,
            store_department_id: config.dep_id,
            phone_code: 7,
            country: countries.default,
            password: '',
            phone: '',
            email: '',
            agreement: 'on',
            code: ''
          };

          scope.city_list = angular.copy(userService.city_list());

          scope.get_stores = userService.get_stores;

          scope.gift_ok = null;

          scope.error_popup = null;

          scope.login_form = angular.copy(login_form);

          scope.confirmed_names_error = false;

          scope.form = {
            first_name: null,
            last_name: null,
            sex: 2,
            birth_date: [null, null, null],
            email: null,
            phone: null,
            city: null,
            store: null,
            subscribe: false,
            agree: false
          };

          var _origin_city = null;
          var _origin_store = null;

          scope.validateEmail = userService.validateEmail;

          scope.confirmedData = {
            email: false,
            phone: false
          };

          scope.confirm_code_error = false;

          var _empty_confirm_data = {
            type: null,
            value: null,
            show: null
          };

          scope.confirm_data = angular.copy(_empty_confirm_data);

          scope.confirmed_names = false;

          scope.card_number = '';

          scope.check_card_number = function () {
            if (scope.card_number) {
              api.user.tags.exist({
                user: {origin_user_id: scope.card_number},
                tags: tags
              }).then(function (res) {
                scope.state = 0;
                if (
                  res[0] && res[0].exist
                  && res[1] && !res[1].exist
                ) {
                  scope.confirmedData.email = res[2] && res[2].exist ? true : false;
                  scope.confirmedData.phone = res[3] && res[3].exist ? true : false;
                  res.forEach(function (item) {
                    if (item.exist && userService.city_list().indexOf(item.name.replace(city_prefix, '')) != -1) {
                      scope.form.city = item.name.replace(city_prefix, '');
                      _origin_city = scope.form.city;

                      if (_origin_city) {

                        api.user.tags.exist({
                          user: {origin_user_id: scope.card_number},
                          tags: userService.get_stores(_origin_city).map(function(item){ return item.tag})
                        }).then(function (res2) {

                          res2.forEach(function (item) {
                            if (item.exist) {
                              scope.form.store = item.name;
                              _origin_store = item.name;
                              if (document.getElementById('shop_label'))
                                document.getElementById('shop_label').style.display = 'none'
                            }
                          });

                        })

                      }

                      setTimeout(function () {
                        if (document.getElementById('city_label'))
                          document.getElementById('city_label').style.display = 'none';
                      }, 100);

                    }
                  });
                  scope.state = 4;
                } else if (
                  res[0] && res[0].exist
                  && res[1] && res[1].exist
                  && res[2] && res[2].exist
                  && res[3] && res[3].exist
                ) {
                  scope.state = 2;
                } else {
                  scope.state = 1;
                  $location.path('/sorry');
                }
              })
            }
            else {
              console.error('Enter card number');
            }
          };

          scope.sendPassword = function () {
            if (!scope.card_number) return;
            return api.user.send_password({origin_user_id: scope.card_number})
          };

          scope.checkNames = function () {
            if (!scope.form.first_name || !scope.form.last_name) {
              return;
            }
            var data = {
              origin_user_id: scope.card_number,
              first_name: scope.form.first_name,
              last_name: scope.form.last_name
            };
            api.user.checkName(data).then(function (res) {
              if (res) {
                scope.confirmed_names_error = false;
                scope.confirmed_names = true;
              } else {
                scope.confirmed_names = false;
                scope.confirmed_names_error = true;
              }
            });
          };

          scope.valid_form = function () {
            if (scope.confirmed_names
              && scope.form.first_name
              && scope.form.last_name
              && (scope.form.birth_date && scope.form.birth_date[0] && scope.form.birth_date[1] && scope.form.birth_date[2])
              && (scope.form.sex == 1 || scope.form.sex == 2)
              && scope.confirmedData.email
              && scope.confirmedData.phone
              && scope.form.store
              && scope.form.city
              && scope.form.subscribe
              && scope.form.agree
            ) {
              return true;
            }
            return false;
          };

          scope.reg = function () {

            $('.preloader').show();

            var _form = angular.copy(scope.form);

            var data = {};
            data.sex = scope.form.sex;
            data.birthDate = scope.form.birth_date.join('-');
            data.origin_user_id = scope.card_number;

            var tags = {add: [], delete: []};

            tags.add = tags.add.concat(tags2);

            if (!_origin_city && _form.city || _origin_city && _origin_city != _form.city) {
              tags.add.push(userService.city_prefix + _form.city);
            }

            if (!_origin_store && _form.store || _origin_store && _origin_store != _form.store) {
              tags.add.push(_form.store);
            }

            if(_origin_city && _origin_city != _form.city) {
              tags.delete.push(userService.city_prefix + _origin_city);
            }

            if(_origin_store && _origin_store != _form.store) {
              tags.delete.push(_origin_store);
            }

            var address = userService.store_list().filter(function (item) {
              return item.tag == _form.store
            });

            var variables = address && address.length ? {store_address: address[0].address} : null;

            api.user.update(data).then(function () {

              api.user.tags.delete(tags.delete && tags.delete.length ? tags.delete : null, {origin_user_id: scope.card_number}).then(function () {

                api.user.tags.add(tags.add && tags.add.length ? tags.add : null, {origin_user_id: scope.card_number}).then(function () {

                  api.user.vars.add(variables, {
                    origin_user_id: scope.card_number
                  }).then(function () {

                    scope.sendPassword().then(function () {

                      $('.preloader').hide();
                      scope.state = 5;

                    });

                  })

                });

              });

            });

          };

          scope.confirm = function () {
            if (!scope.confirm_data || !scope.confirm_data.type || !scope.confirm_data.value || !scope.card_number) return;
            var data = {
              origin_user_id: scope.card_number,
              identifier: scope.confirm_data.type,
              value: scope.confirm_data.value
            };
            api.user.check_verification_code(data).then(function (res) {
              if (res.status == 'ok') {
                scope.confirm_code_error = false;
                scope.confirmedData[scope.confirm_data.type] = true;
                scope.confirm_data = angular.copy(_empty_confirm_data);
              } else {
                scope.confirm_code_error = true;
              }
            });
          };

          scope.get_confirm_code = function () {
            if (!scope.confirm_data || !scope.confirm_data.type || !scope.card_number) return;

            var data = {
              origin_user_id: scope.card_number,
              identifier: scope.confirm_data.type,
              value: scope.confirm_data.type === 'phone' ? '7' + scope.form[scope.confirm_data.type] : scope.form[scope.confirm_data.type]
            };
            api.user.send_verification_code(data).then(function (res) {
              if (res && res.status == 'error') {
                scope.confirm_data.show = false;
                if (res.status_code == '-200007') {
                  scope.error_popup = 'Указанный Вами телефон уже зарегистрирован для другого номера Дисконтной карты. Если Вы не регистрировали данный телефон в системе, обратитесь, пожалуйста, к Персональному менеджеру по телефону: 8 (342) 214-42-82';
                } else if (res.status_code == '-200010') {
                  scope.error_popup = 'Указанный Вами e-mail уже зарегистрирован для другого номера Дисконтной карты. Если Вы не регистрировали данный e-mail в системе, обратитесь, пожалуйста, к Персональному менеджеру по телефону: 8 (342) 214-42-82';
                }
              } else {
                scope.confirm_data.show = true;
                scope.error_popup = null;
              }

            });
          };

          scope.show_confirm_popup = function (type) {
            if (!type) return;
            scope.confirm_code_error = false;
            scope.send_password = false;
            scope.confirm_data.type = type;
            scope.get_confirm_code();
          };

          scope.login = function () {
            scope.state = 0;
            api.user.login(scope.login_form).then(function (res) {
              if (res && res.data && res.data.status == 'ok' && res.data.auth_hash) {
                $window.location.reload();
              } else {
                scope.state = 2;
                scope.message = {
                  text: 'Неправильно введен логин или пароль',
                  type: 'error'
                };
              }
            });

          };

          scope.$on('auth:password_reset_success', function () {
            scope.state = 2;
            scope.message = {
              text: 'Пароль успешно сохранен. Вы можете войти под новым паролем.',
              type: 'success'
            };
          });

        }
      }

    }]);

}());
(function () {

  angular.module('iledebeaute.directives.test', [ ])

    .directive('testCmp', ["config", "$q", "api", "tools", function (config, $q, api, tools) {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: '/html/components/components.test.html',
        scope: {
          model: '=',
          onFinish: '='
        },
        link: function (scope) {

          scope.step = 0;
          scope.tags = [];
          scope.vars = [];
          scope.customAnswer = null;
          scope.showCustomAnswer = false;
          scope.sending = false;

          scope.$watch('model', function(){
            scope.step = 0;
          });

          scope.submit = function () {
            scope.exist = true;
            return $q(function (resolve) {
              var tags = angular.copy(scope.tags);
              tags.push(scope.model.tag);
              api.user.tags.add(tags).then(function () {
                api.user.vars.add(scope.vars).then(function () {
                  resolve();
                });
              })
            })
          };

          scope.isValid = function () {
            if (!scope.model || !scope.model.data) return false;
            // TODO: доделать логику, если не объект, а массив
            var active = tools.findByProperty(scope.model.data[scope.step].a, 'val', true);
            return !scope.sending && active && (!active.yourAnswer || active.yourAnswer && scope.customAnswer && scope.customAnswer.length) ? true : false;
          };

          scope.next = function () {
            if (!scope.isValid()) return;
            var tags = [];
            var tagsObj = tools.findByProperty(scope.model.data[scope.step].a, 'val', true);
            if (tagsObj) {
              if (angular.isArray(tagsObj)) {
                tagsObj.map(function (el) {
                  return el.tag
                })
              } else {
                tags = [tagsObj.tag];
              }
            }
            scope.tags = scope.tags.concat(tags);
            if (scope.showCustomAnswer) {
              scope.vars[tagsObj.yourAnswer] = scope.customAnswer;
            }
            scope.customAnswer = null;
            scope.showCustomAnswer = false;
            if (scope.step == scope.model.data.length - 1) {
              scope.submit().then(function () {
                scope.onFinish && scope.onFinish(scope.model, scope.tags, scope.vars);
              });
            } else {
              scope.step++;
            }
          };

          scope.setAnswer = function (item, array) {
            angular.forEach(array, function (el) {
              el.val = false;
            });
            if (item.yourAnswer) {
              scope.customAnswer = null;
              scope.showCustomAnswer = true;
            } else {
              scope.showCustomAnswer = false;
            }
            item.val = true;
          };

        }
      }

    }]);

}());
(function () {

  angular.module('core.api', [])

    .factory('sp_resolve', ["$q", "sp", "config", function ($q, sp, config) {

      return function () {

        return $q(function (resolve, reject) {

          if (!sp) reject(false);

          if (sp || sp.config() === {}) {

            var sp_config = {
              partner_id: config.partner_id,
              domain: config.domain,
              lang: config.lang
            };

            sp.send('init', sp_config);

            sp.on('init.success', function (res) {
              resolve(res);
            });

            sp.on('init.error', function (res) {
              reject(res);
            });

          }

          else {
            resolve(sp.config());
          }

        });

      }

    }])

    .service('routeService', function () {

      var self = this;

      var _default = '/';

      var prev = _default;

      self.getPrev = function () {
        return prev;
      };

      self.setPrev = function (page) {
        prev = page || _default;
      };

      return self;

    })

    .service('tagS', function () {

      var self = this;
      var auth = ['Type_1', 'Пользователь авторизован', 'Пользователь подтвердил E-mail', 'Пользователь подтвердил телефон'];
      var form = ['Подписался на рассылку', 'Согласен с правилами'];

      self.auth = function () {
        return angular.copy(auth);
      };

      self.form = function () {
        return angular.copy(form);
      };

      self.banned = 'Banned';

      return self;

    })

    .service('sp', ["$window", "$log", function ($window, $log) {

      if (!$window.SAILPLAY) {
        $log.error('SAILPLAY HUB not found');
        return false;
      }

      return $window.SAILPLAY;

    }])

    .service('api', ["sp", "$q", "$http", "config", "$location", function (sp, $q, $http, config, $location) {

      var self = this;

      self.auth = false;

      self.config = {
        quiz: [],
        store_list: [],
        city_list: [],
        faq: [],
        pages: {}
      };

      self.domain = function () {
        return sp.config() && sp.config().DOMAIN;
      };

      self.gifts = {};

      self.gifts.list = function (params) {
        return $q(function (resolve, reject) {
          sp.on('load.gifts.list.success', function (data) {
            self.data('gifts.list', data);
            resolve(data);
          });
          sp.send('load.gifts.list', params);
        });
      };

      // Custom method
      self.gifts.archive = function (params) {
        return $q(function (resolve, reject) {
          sp.on('load.gifts.archive.success', function (data) {
            self.data('gifts.archive', data);
            resolve(data);
          });
          sp.send('load.gifts.archive', params);
        });
      };

      self.actions = {};

      self.actions.list = function () {
        return $q(function (resolve, reject) {
          sp.on('load.actions.list.success', function (data) {
            var actions = data.actions.filter(function (item) {
              return item.socialType;
            });
            self.data('actions.list', actions);
            resolve(data);
          });
          sp.send('load.actions.list');
        });

      };

      self.load_config = function (){
        return $q(function (resolve) {
          sp.jsonp.get(sp.config().DOMAIN + sp.config().urls.loyalty_page_config_by_name, { name: 'default' }, function (res) {
            if(res && res.config) {
              self.config = res.config.config;
            }
            resolve(res);
          });
        });
      };

      self.user = {
        tags: {},
        vars: {}
      };

      function getTimeZone() {
        var offset = new Date().getTimezoneOffset(), o = Math.abs(offset);
        return (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
      }

      self.user.history = function () {
        return $q(function (resolve, reject) {
          sp.on('load.user.history.success', function (data) {
            self.data('user.history', data);
            resolve(data);
          });
          sp.send('load.user.history', {tz: getTimeZone()});
        });
      };

      self.user.purchase_info = function (params) {
        if (sp.config() == {}) return;
        params = params || {};
        if (sp.config().auth_hash) {
          params.auth_hash = sp.config().auth_hash;
        }
        return $q(function (resolve) {
          sp.jsonp.get(sp.config().DOMAIN + '/js-api/' + sp.config().partner.id + '/purchases/get/', params, function (res) {
            resolve(res);
          });
        });
      };

      self.user.send_password = function (data) {
        if (sp.config() == {}) return;
        return $q(function (resolve) {
          sp.jsonp.get(sp.config().DOMAIN + '/js-api/' + sp.config().partner.id + '/users/verification/password/send/', data, function (res) {
            resolve(res);
          });
        });
      };

      self.user.login = function (data) {
        if (sp.config() == {}) return;
        return $q(function (resolve) {
          $http({
            method: 'POST',
            url: sp.config().DOMAIN+'/users/ajax/login/',
            data: data,
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
          }).then(function successCallback(res) {
            resolve(res);
          });
        });
      };

      self.user.logout = function (data) {
        if (sp.config() == {}) return;
        var url = '//' + window.location.host;
        return $q(function (resolve) {
          $http({
            method: 'GET',
            url: '/users/logout/?redirect_url=' + url,
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
          }).then(function successCallback(res) {
            resolve(res);
          });
        });
      };

      self.user.info = function (params) {
        params = params || {};
        params.purchases = 1;
        params.all = 1;
        return $q(function (resolve, reject) {
          sp.on('load.user.info.success', function (data) {
            self.data('user.info', data);
            resolve(data);
          });
          sp.send('load.user.info', params);
        });

      };

      self.user.check_verification_code = function (data) {
        if (!data)return;
        return $q(function (resolve) {
          sp.jsonp.get(sp.config().urls.users.verification.code.check, data, function (res) {
            resolve(res);
          });
        });
      };

      self.user.send_verification_code = function (data) {
        if (!data)return;
        return $q(function (resolve) {
          sp.jsonp.get(sp.config().urls.users.verification.code.send, data, function (res) {
            resolve(res);
          });
        });
      };

      self.user.update = function (data) {
        if (!data)return;
        return $q(function (resolve) {
          sp.on('user.update.success', function (data) {
            resolve(data);
          });
          sp.send('user.update', data)
        });
      };

      self.user.tags.add = function (tags, user) {
        return $q(function (resolve) {
          if (!tags || !tags.length) return resolve();

          tags = tags.map(function(tag){
            return tag.replace(/,/g , '.');
          });

          var limit = Math.ceil(tags.length / 10);
          var state = 0;

          var data = {};
          if (user) {
            data.user = user;
          }

          function partialSending() {
            if (!tags.length) return;
            var add = function () {
              if (tags.length > 9) {
                data.tags = tags.splice(0, 9);
                sp.send('tags.add', data);
              } else if (tags.length) {
                data.tags = tags;
                sp.send('tags.add', data);
                tags = [];
              }
            };
            if (tags.length) {
              add();
            }
          }

          function checkState() {
            if (state == limit) {
              resolve();
            } else {
              partialSending();
            }
          }

          sp.on('tags.add.success', function () {
            state++;
            checkState();
          });

          partialSending();

        });
      };

      self.user.tags.delete = function (tags, user) {
        return $q(function (resolve) {
          if (!tags) return resolve();

          tags = tags.map(function(tag){
            return tag.replace(/,/g , '.');
          });

          var limit = Math.ceil(tags.length / 10);
          var state = 0;

          var data = {};
          if (user) {
            data.user = user;
          }

          function partialSending() {
            if (!tags.length) return;
            var del = function () {
              if (tags.length > 9) {
                data.tags = tags.splice(0, 9);
                sp.send('tags.delete', data);
              } else if (tags.length) {
                data.tags = tags;
                sp.send('tags.delete', data);
                tags = [];
              }
            };
            if (tags.length) {
              del();
            }
          }

          function checkState() {
            if (state == limit) {
              resolve();
            } else {
              partialSending();
            }
          }

          sp.on('tags.delete.success', function () {
            state++;
            checkState();
          });

          partialSending();

        });
      };

      self.user.checkName = function (data) {
        if (!data) return;
        data.partner_id = config.partner_id;
        return $q(function (resolve, reject) {
          sp.jsonp.get(sp.config().urls.users.verification.name, data, function (res) {
            if (res.status == 'ok') {
              resolve(true)
            } else {
              resolve(false)
            }
          });
        });
      };

      self.user.tags.exist = function (params) {
        return $q(function (resolve) {

          var response = [];
          if (!params || !params.tags || !params.tags.length) return resolve();
          var limit = Math.ceil(params.tags.length / 10);
          var state = 0;
          var data = {};

          if(params.user) {
            data.user = params.user;
          }

          function partialSending() {

            if (!params.tags.length) return;

            var exist = function () {
              if (params.tags.length > 9) {
                data.tags = params.tags.splice(0, 9);
                sp.send('tags.exist', data);
              } else if (params.tags.length) {
                data.tags = params.tags;
                sp.send('tags.exist', data);
                params.tags = [];
              }
            };
            if (params.tags.length) {
              exist();
            }
          }

          function checkState() {
            if (state == limit) {
              resolve(response);
            } else {
              partialSending();
            }
          }

          sp.on('tags.exist.success', function (res) {
            response = response.concat(res.tags);
            state++;
            checkState();
          });

          partialSending();

        });
      };

      self.user.vars.add = function (vars, user) {
        return $q(function (resolve, reject) {
          if (!vars || !Object.keys(vars).length) return resolve();

          var data = {};
          data.custom_vars = angular.copy(vars);

          if (user) {
            data.user = user;
          }

          sp.on('vars.add.success', function (res) {
            resolve(res);
          });
          sp.send('vars.add', data);
        })
      };

      var data = {};

      self.data = function (key, value) {
        if (value) {
          data[key] = angular.copy(value);
        }
        return function () {
          return data[key];
        };
      };

    }])

    .service('plural', function () {
      var self = this;
      self.get = function (n, forms) {
        return forms[n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
      };
      return self;
    });

}());

(function(){

  angular.module('core', [
    'core.tools',
    'core.api'
  ])

  .constant('config', (auth_config || {}));

}());

(function () {

  angular.module('core.tools', [])

    .service('tools', function () {

      this.find = function (arr, props, index) {

        var found = [];

        if (Object.prototype.toString.call(arr) !== "[object Array]") return [];
        if (Object.prototype.toString.call(props) !== "[object Object]") return arr;

        for (var i = 0, len = arr.length; i < len; i += 1) {

          var obj = arr[i];

          var right = true;

          for (var p in props) {
            if (props[p] !== obj[p]) {
              right = false;
            }
          }

          right && index && found.push({index: i, value: obj});
          right && !index && found.push(obj);

        }

        if (found.length < 1) {
          index && found.push({index: -1, value: null});
        }

        return found;

      };

      this.findByProperty = function (arr, prop, value, index) {
        if (angular.isArray(arr)) {
          for (var i = 0, len = arr.length; i < len; i += 1) {
            if (arr[i] && arr[i][prop] === value) {
              if (index) {
                return {
                  obj: arr[i],
                  index: [i]
                };
              } else {
                return arr[i];
              }
            }
          }
        }
        return false;
      };

      this.remove = function (arr, elm) {

        var rem_index = arr.indexOf(elm);

        if (rem_index > -1) {
          arr.splice(rem_index, 1);
        }

        return arr;

      };

      this.generate_id = function () {
        // always start with a letter (for DOM friendlyness)
        var idstr = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
        do {
          // between numbers and characters (48 is 0 and 90 is Z (42-48 = 90)
          var ascicode = Math.floor((Math.random() * 42) + 48);
          if (ascicode < 58 || ascicode > 64) {
            // exclude all chars between : (58) and @ (64)
            idstr += String.fromCharCode(ascicode);
          }
        } while (idstr.length < 32);

        return (idstr);
      };

    });

}());

(function () {

  angular.module('routes.actions', [])

    .config(["$routeProvider", "config", function ($routeProvider, config) {

      $routeProvider.when('/actions', {

        controller: 'Actions',
        templateUrl: '/html/routes/routes.actions.html',
        resolve: {
          checkout: ["api", "$location", "routeService", function (api, $location, routeService) {
            $('.preloader').show();
            if ($location.path()) {
              routeService.setPrev($location.path());
            }
          }],
          loadInfo: ['api', function (api) {
            return api.user.info();
          }],
          loadActions: ['api', function (api) {
            return api.actions.list().then(function(){
              $('.preloader').hide();
            })
          }]
        }

      });

    }])

    .controller('Actions', ["sp", "api", "$scope", "tools", "actionService", "$timeout", "plural", function (sp, api, $scope, tools, actionService, $timeout, plural) {
      $scope.hidden = true;
      $scope.currentTest = null;
      $scope.css_link = actionService.getActionsCssLink();
      $scope.user = api.data('user.info');
      $scope.testsData = angular.copy(api.config.quiz);
      $scope.actions = api.data('actions.list');
      $scope.plural = plural.get;

      $scope.onFinish = function () {
        $scope.hidden = true;
        $scope.finish_test = true;
        //$scope.testsData = angular.copy(actionService.tests);
        $scope.currentTest.exist = true;
        //console.dir($scope.testsData);
        $timeout(function () {
          update();
        }, 1000);
      };

      $scope.isEmpty = function () {
        var tests = $scope.testsData.filter(function (item) {
          return !item.exist;
        });
        if (($scope.actions && $scope.actions() && !$scope.actions().length) && !tests.length) {
          return true
        } else {
          return false;
        }
      };

      $scope.openTest = function (item) {
        $scope.currentTest = item;
      };

      function getExist() {
        var tags = $scope.testsData.map(function (el) {
          return el.tag;
        });
        api.user.tags.exist({tags: tags}).then(function (res) {
          var el = {};
          angular.forEach(res, function (tag) {
            el = tools.findByProperty($scope.testsData, 'tag', tag.name);
            el.exist = tag.exist;
          });
        });
      }

      function parseActions() {
        api.actions.list().then(function (actions) {
          if ($scope.actions && $scope.actions().length) {
            $timeout(function () {
              sp.send('actions.parse', $scope.actions());
              $scope.hidden = false;
            }, 100);
          } else {
            $scope.hidden = false;
          }
        });
      }

      function update() {
        $scope.hidden = true;
        for (var i = 0, len = $scope.testsData.length; i < len; i++) {
          if ($scope.currentTest && $scope.currentTest.tag === $scope.testsData[i].tag) {
            $scope.testsData[i].exist = true;
          }
        }
        $scope.currentTest = null;
        parseActions();
      }

      getExist();

      parseActions();

      sp.on('actions.perform.success', function (data) {
        update();
        $scope.$digest();
      });

      $scope.transformTitle = actionService.getTitle;
      $scope.getIcon = actionService.getIcon;

    }]);

}());

(function(){

  angular.module('routes.auth', [])

  .config(["$routeProvider", "config", function($routeProvider, config){

    $routeProvider.when('/', {

      controller: 'Auth',
      resolve: {
        checkout: ["api", "$location", "routeService", function (api, $location, routeService) {
          $('.preloader').show();
          $location.path('/menu');
        }]
      }

    });

  }])

  .controller('Auth', function(){
    $('.preloader').hide();
  });

}());

(function () {

  angular.module('routes.faq', ['ngSanitize'])

    .config(["$routeProvider", "config", function ($routeProvider, config) {

      $routeProvider.when('/faq', {

        controller: 'Faq',
        templateUrl: '/html/routes/routes.faq.html',
        resolve: {
          checkout: ["api", "$location", "routeService", function (api, $location, routeService) {
            $('.preloader').show();
            if ($location.path()) {
              routeService.setPrev($location.path());
            }
            $('.preloader').hide();
          }],
        }

      });

    }])

    .controller('Faq', ["$scope", "faqService", function ($scope, faqService) {
      $('.preloader').hide();
      $scope.data = faqService.data();
    }]);

}());

(function () {

  angular.module('routes.feedback', [])

    .config(["$routeProvider", "config", function ($routeProvider, config) {

      $routeProvider.when('/feedback', {

        controller: 'Feedback',
        templateUrl: '/html/routes/routes.feedback.html',
        resolve: {
          checkout: ["api", "$location", "routeService", function (api, $location, routeService) {
            $('.preloader').show();
            if ($location.path()) {
              routeService.setPrev($location.path());
            }
            $('.preloader').hide();
          }]
        }

      });

    }])

    .controller('Feedback', ["$scope", "api", "faqService", function ($scope, api, faqService) {
      $('.preloader').hide();
      $scope.msg = '';
      $scope.sendFeedBack = function () {
        if (!$scope.msg) return;
        $('.preloader').show();
        api.user.vars.add({feedbackMessage: $scope.msg}).then(function () {
          api.user.tags.add([faqService.feedback_tag]).then(function () {
            $scope.msg = '';
            $('.preloader').hide();
          })
        })
      };
    }]);

}());

(function () {

  angular.module('routes.gift_archive', [])

    .config(["$routeProvider", function ($routeProvider) {

      $routeProvider.when('/gift_archive', {

        controller: 'GiftArchive',
        templateUrl: '/html/routes/routes.gift_archive.html',
        resolve: {
          checkout: ["api", "$location", "routeService", function (api, $location, routeService) {
            $('.preloader').show();
            if ($location.path()) {
              routeService.setPrev($location.path());
            }
          }],
          loadGift: ["api", function (api) {
            return api.gifts.list({
              verbose: 1,
              show_disabled: 1
            });
          }],
          loadArchive: ["api", function (api) {
            if (!api.auth) {
              $('.preloader').hide();
            }
            return api.gifts.archive({per_page: 8})

          }]
        }

      });

    }])

    .controller('GiftArchive', ["tools", "api", "$scope", "plural", "$q", function (tools, api, $scope, plural, $q) {

      $scope.plural = plural.get;

      $scope.archive = api.data('gifts.archive');

      $scope.gifts = api.data('gifts.list');

      // Default type of list
      $scope.type = 'used';

      // Array of all data and current( default archive gifts )
      $scope.data = $scope.current_data = $scope.archive().purchase_gifts;

      var now = new Date();

      // Array of inactive gifts
      $scope.inactive = $scope.gifts().filter(function (item) {
        return item.enabled == false && (item.quantity == 0 || item.end_date && new Date(item.end_date) < now);
      });

      $scope.page = 1;

      $scope.per_page = 8;

      $scope.total_pages = $scope.archive().num_pages;

      $scope.filterBy = function (type) {

        if (type == $scope.type) return;
        $scope.type = type;
        $scope.page = 1;
        $scope.data = $scope[type];
        $scope.change_page();
      };

      $scope.change_page = function (page) {

        $('.preloader').show();

        $scope.page = +page || 1;

        if ($scope.type == 'used') {

          api.gifts.archive({page: $scope.page, per_page: $scope.per_page}).then(function (res) {

            $scope.current_data = res.purchase_gifts;

            $scope.total_pages = res.num_pages;

            $('.preloader').hide();

          });

        } else if ($scope.type == 'inactive') {

          $scope.current_data = $scope.data.slice(($scope.page - 1) * $scope.per_page, ($scope.page - 1) * $scope.per_page + $scope.per_page);

          $scope.total_pages = Math.ceil($scope.data / $scope.per_page);

          $('.preloader').hide();

        }

      };

      $('.preloader').hide();

    }]);

}());

(function () {

  angular.module('routes.gifts', [])

    .config(["$routeProvider", "config", function ($routeProvider, config) {

      $routeProvider.when('/gifts', {

        controller: 'Gifts',
        templateUrl: '/html/routes/routes.gifts.html',
        resolve: {
          checkout: ["api", "$location", "routeService", function (api, $location, routeService) {
            $('.preloader').show();
            if ($location.path()) {
              routeService.setPrev($location.path());
            }
          }],
          loadInfo: ["api", function (api) {
            return api.user.info();
          }],
          loadGifts: ['api', function (api) {
            return api.gifts.list({verbose: 1}).then(function () {
              $('.preloader').hide();
            })
          }
          ]
        }

      });

    }])

    .controller('Gifts', ["sp", "api", "$scope", "$timeout", "plural", function (sp, api, $scope, $timeout, plural) {

      var _default = {
        avaliable: [],
        not_avaliable: []
      };

      $scope.get_gift = null;
      $scope.gift_detail = null;

      //TODO: переделать фильтр
      $scope.plural = plural.get;
      $scope.user = api.data('user.info');
      $scope.list = api.data('gifts.list');

      $scope.gifts = angular.copy(_default);

      $scope.filterBy = function (type) {
        $scope.type = type;
        $scope.data = $scope.gifts[type];
      };

      $scope.openGift = function (gift) {
        $scope.gift_detail = angular.copy(gift);
      };

      $scope.gift_purchase = function (gift) {
        $scope.get_gift = angular.copy(gift);
        $scope.gift_detail = null;
        $scope.gift_ok = null;
        if ($scope.user().user_points.confirmed < gift.points) {
          return;
        }
        sp.send('gifts.purchase', {gift: gift, options: {no_user_sms: 1}});
      };

      function orderArrays() {
        $scope.gifts = angular.copy(_default);
        if (!$scope.user || !$scope.user() || !$scope.list || !$scope.list()) return;
        var _list = $scope.list().filter(function(gift){
          return !gift.is_over_quantity_per_user;
        });
        angular.forEach(_list, function (val, key) {
          if (val.points <= $scope.user().user_points.confirmed) {
            $scope.gifts.avaliable.push(val);
          } else {
            $scope.gifts.not_avaliable.push(val);
          }
        });
        $scope.filterBy('avaliable');
      }

      function update() {
        api.user.info().then(function () {
          api.gifts.list({verbose: 1}).then(function () {
            orderArrays();
          })
        });
      }

      orderArrays();

      sp.on('gifts.purchase.success', function (res) {

        $scope.$apply(function() {

          if ($scope.get_gift) {
            $scope.get_gift.show = true;
          }

          $timeout(function () {
            update();
          }, 1000);

        });
      });
      sp.on('gift.purchase.error', function (res) {

        $scope.$apply(function(){

          $scope.get_gift = null;
          $scope.gift_limit = null;
          if (res && res.status == 'error' && res.status_code && res.status_code == '-6001') {
            $scope.gift_limit = true;
          }

        });

      });


    }]);

}());

(function () {

  angular.module('routes.history', [])

    .config(["$routeProvider", "config", function ($routeProvider, config) {

      $routeProvider.when('/history', {

        controller: 'History',
        templateUrl: '/html/routes/routes.history.html',
        resolve: {
          checkout: ["api", "$location", "routeService", function (api, $location, routeService) {
            $('.preloader').show();
            if ($location.path()) {
              routeService.setPrev($location.path());
            }
          }],
          loadInfo: ['api', function (api) {
            return api.user.info();
          }],
          loadHistory: ['api', function (api) {
            return api.user.history().then(function () {
              $('.preloader').hide();
            });
          }
          ]
        }

      })

    }])

    .controller('History', ["sp", "api", "$scope", "userService", "plural", function (sp, api, $scope, userService, plural) {

      $scope.user = api.data('user.info');
      $scope.history = api.data('user.history');
      $scope.history_data = null;
      $scope.history_date_format = userService.historyDateFormat;
      $scope.get_history_name = userService.getHistoryActionName;
      $scope.per_page = 15;
      $scope.plural = plural.get;

      $scope.change_page = function (page) {
        $scope.page = +page || 1;
        $scope.history_data = $scope.history && $scope.history() && $scope.history().slice(($scope.page - 1) * $scope.per_page, ($scope.page - 1) * $scope.per_page + $scope.per_page);
      };

      function update() {
        api.user.info();
        api.user.history();
      }

      $scope.history_item_click = function(action){
        $('.preloader').show();
        if(action.action == 'purchase'){
          if(!action.purchase_data) {
            api.user.purchase_info({id : action.id}).then(function(res){
              if(res && res.cart && res.cart.cart && res.cart.cart.positions) {
                action.purchase_data = res && res.cart.cart.positions;
              }
              $('.preloader').hide();
            })
          } else {
            delete action.purchase_data;
            $('.preloader').hide();
          }
        }
      };

      $scope.change_page();

      sp.on('gift.purchase.force_complete.success', function (res) {
        update();
      });

      sp.on('actions.perform.success', function (data) {
        update();
      });

    }]);

}());

(function(){

  angular.module('routes', [

    'ngRoute',
    'routes.auth',
    'routes.faq',
    'routes.feedback',
    'routes.history',
    'routes.actions',
    'routes.gifts',
    'routes.gift_archive',
    'routes.menu',
    'routes.sorry',
    'routes.profile',
    'routes.pages'

  ])


}());

(function () {

  angular.module('routes.menu', [])

    .config(["$routeProvider", "config", function ($routeProvider, config) {

      $routeProvider.when('/menu', {
        controller: 'Menu',
        templateUrl: '/html/routes/routes.menu.html',
        resolve: {
          checkout: ["api", "$location", "routeService", function (api, $location, routeService) {
            $('.preloader').show();
            if($location.path()){
              routeService.setPrev($location.path());
            }
          }],
          loadInfo: ['api', function (api) {
            return api.user.info();
          }],
          loadGifts: ['api', function (api) {
            return api.gifts.list().then(function(){
              $('.preloader').hide();
            })
          }
          ]
        }
      });

    }])

    .controller('Menu', ["$scope", "api", "plural", function ($scope, api, plural) {
      $scope.user = api.data('user.info');
      $scope.gifts = api.data('gifts.list');
      $scope.enough = false;

      $scope.plural = plural.get;

      function compare(a, b) {
        if (a.points < b.points)
          return -1;
        else if (a.points > b.points)
          return 1;
        else
          return 0;
      }

      $scope.count = 0;

      $scope.gifts().sort(compare);

      $scope.getMinimalCounts = function(){
        if(!$scope.gifts || !$scope.gifts()) return 0;
        return $scope.gifts().filter(function(item){
          return $scope.gifts()[0].points == item.points;
        }).length;
      };

      if ($scope.gifts && $scope.gifts() && $scope.user && $scope.user()) {
        var points = $scope.user().user_points.confirmed;
        for (var i = 0, len = $scope.gifts().length; i < len; i++) {
          var item = $scope.gifts()[i];
          if (points >= item.points) {
            $scope.enough = true;
            $scope.last = item;
            $scope.count++;
          }
        }
      }

      if (!$scope.enough) {
        $scope.last = $scope.gifts()[0];
      }


    }]);

}());

(function () {

  angular.module('routes.pages', [])

    .config(["$routeProvider", "config", function ($routeProvider, config) {

      $routeProvider.when('/page/:pageName', {
        controller: 'Pages',
        templateUrl: '/html/routes/routes.pages.html',
        resolve: {
          checkout: ["api", "$location", "routeService", function (api, $location, routeService) {
            $('.preloader').show();
            if ($location.path()) {
              routeService.setPrev($location.path());
            }
            $('.preloader').hide();
          }]
        }
      });

    }])

    .controller('Pages', ["$scope", "$location", "pageService", "$routeParams", function ($scope, $location, pageService, $routeParams) {

      var name = $routeParams.pageName;
      if (pageService.getPage(name)) {
        $scope.className = name;
        $scope.model = pageService.getPage(name);
      } else {
        $location.path('/')
      }
    }]);

}());

(function () {

  angular.module('routes.profile', [])

    .config(["$routeProvider", function ($routeProvider) {

      $routeProvider.when('/profile/edit', {
        controller: 'ProfileEdit',
        templateUrl: '/html/routes/routes.profile.edit.html',
        resolve: {
          checkout: ["api", "$location", "routeService", function (api, $location, routeService) {
            $('.preloader').show();
            if ($location.path()) {
              routeService.setPrev($location.path());
            }
            $('.preloader').hide();
          }],
          loadInfo: ["api", function (api) {
            return api.user.info();
          }]
        }
      });

    }])

    .controller('ProfileEdit', ["$scope", "api", "userService", function ($scope, api, userService) {

      $('.preloader').show();

      $scope.user = api.data('user.info');

      var city_prefix = userService.city_prefix;

      $scope.city_list = angular.copy(userService.city_list());

      $scope.get_stores = userService.get_stores;

      var _origin_store = null;

      var _origin_city = null;

      var tags = userService.city_list().map(function (item) {
        return city_prefix + item;
      });

      $scope.form = {
        first_name: $scope.user().user.first_name || null,
        last_name: $scope.user().user.last_name || null,
        sex: $scope.user().user.sex || 2,
        birth_date: userService.dateToArray($scope.user().user.birth_date),
        email: $scope.user().user.email || null,
        phone: $scope.user().user.phone && $scope.user().user.phone.slice(1) || null,
        password: null,
        store: null,
        city: null
      };

      api.user.tags.exist({tags: tags.slice(0, 10)}).then(function (res) {

        if (res) {
          res.forEach(function (item) {
            if (item.exist && userService.city_list().indexOf(item.name.replace(city_prefix, '')) != -1) {
              $scope.form.city = item.name.replace(city_prefix, '');
              _origin_city = item.name.replace(city_prefix, '');
              document.getElementById('city_label').style.display = 'none'
            }
          });

          if (_origin_city) {

            api.user.tags.exist({tags: userService.get_stores(_origin_city).map(function(item){ return item.tag})}).then(function (res2) {

              res2.forEach(function (item) {
                if (item.exist) {
                  $scope.form.store = item.name;
                  _origin_store = item.name;
                  document.getElementById('shop_label').style.display = 'none'
                }
              });

            })

          }

        }
        $('.preloader').hide();
      });

      function success_popup() {
        $scope.result_popup = 'Данные успешно сохранены';
      }

      $scope.changed = function () {

        var _form = angular.copy($scope.form);

        var data = {};

        if (_form.sex && _form.sex != $scope.user().user.sex) {
          data.sex = _form.sex;
        }

        if (_form.first_name && _form.first_name != $scope.user().user.first_name) {
          data.firstName = _form.first_name;
        }

        if (_form.last_name && _form.last_name != $scope.user().user.last_name) {
          data.lastName = _form.last_name;
        }

        if (_form.phone && ('7' + _form.phone) != $scope.user().user.phone) {
          data.addPhone = '7' + _form.phone;
        }

        if (_form.email && _form.email != $scope.user().user.email) {
          data.addEmail = _form.email;
        }

        if (_form.password && _form.password.length >= 8) {
          data.addPass = _form.password;
        }

        if (_form.birth_date
          && _form.birth_date[0] && _form.birth_date[1] && _form.birth_date[2]
          && !angular.equals(_form.birth_date, userService.dateToArray($scope.user().user.birth_date))
        ) {
          data.birthDate = _form.birth_date.join('-');
        }

        if (!_origin_store && _form.store || _origin_store && _origin_store != _form.store) {
          data.store = _form.store;
        }

        if (!_origin_city && _form.city || _origin_city && _origin_city != _form.city) {
          data.city = _form.city;
        }

        if (data && Object.keys(data).length) {
          return true;
        } else {
          return false;
        }

      };

      $scope.edit = function () {

        $('.preloader').show();

        var _form = angular.copy($scope.form);

        var data = {};

        if (_form.sex && _form.sex != $scope.user().user.sex) {
          data.sex = _form.sex;
        }

        if (_form.first_name && _form.first_name != $scope.user().user.first_name) {
          data.firstName = _form.first_name;
        }

        if (_form.last_name && _form.last_name != $scope.user().user.last_name) {
          data.lastName = _form.last_name;
        }

        if (_form.phone && ('7' + _form.phone) != $scope.user().user.phone) {
          data.addPhone = '7' + _form.phone;
        }

        if (_form.email && _form.email != $scope.user().user.email) {
          data.addEmail = _form.email;
        }

        if (_form.password && _form.password.length >= 8) {
          data.addPass = _form.password;
        }

        if (_form.birth_date
          && _form.birth_date[0] && _form.birth_date[1] && _form.birth_date[2]
          && !angular.equals(_form.birth_date, userService.dateToArray($scope.user().user.birth_date))
        ) {
          data.birthDate = _form.birth_date.join('-');
        }


        function tagUpdate() {

          var tags = {add: [], delete: []};

          if (!_origin_city && _form.city || _origin_city && _origin_city != _form.city) {
            tags.add.push(userService.city_prefix + _form.city);
          }

          if (!_origin_store && _form.store || _origin_store && _origin_store != _form.store) {
            tags.add.push(_form.store);
          }

          if(_origin_city && _origin_city != _form.city) {
            tags.delete.push(userService.city_prefix + _origin_city);
          }

          if(_origin_store && _origin_store != _form.store) {
            tags.delete.push(_origin_store);
          }

          var address = userService.store_list().filter(function (item) {
            return item.tag == _form.store
          });

          var variables = address && address.length ? {store_address: address[0].address} : null;

          api.user.tags.delete(tags.delete && tags.delete.length ? tags.delete : null).then(function () {

            api.user.tags.add(tags.add && tags.add.length ? tags.add : null).then(function () {

              if (tags.add.length) {

                _origin_city = _form.city;

                _origin_store = _form.store;

              }

              api.user.vars.add(variables).then(function () {

                api.user.info().then(function () {

                  $('.preloader').hide();

                  success_popup();

                });

              });



            });

          });

        }

        if (data && Object.keys(data).length) {

          api.user.update(data).then(function (res) {

            if (
              (!_origin_store && _form.store || _origin_store && _origin_store != _form.store) ||
              (!_origin_city && _form.city || _origin_city && _origin_city != _form.city)
            ) {

              tagUpdate();

            } else {

              api.user.info().then(function () {

                $('.preloader').hide();

                success_popup();

              });

            }

          });

        } else {
          if (
            (!_origin_store && _form.store || _origin_store && _origin_store != _form.store) ||
            (!_origin_city && _form.city || _origin_city && _origin_city != _form.city)
          ) {

            tagUpdate();

          } else {

            $('.preloader').hide();

          }

        }

      };


    }]);

}());

(function () {

  angular.module('routes.sorry', [])

    .config(["$routeProvider", "config", function ($routeProvider, config) {

      $routeProvider.when('/sorry', {
        controller: 'Sorry',
        templateUrl: '/html/routes/routes.sorry.html',
        resolve: {}
      });

    }])

    .controller('Sorry', ["$scope", function ($scope) {
      $('.preloader').hide();
    }]);

}());

(function () {

  angular.module('iledebeaute.services.actions', [ ])

    .service('actionService', function () {

      var self = this;

      var TAGS = {
        profile: 'Заполнил профиль'
      };

      var cssLink = 'http://iledebeaute.dev4you.info/css/btn_styles.css';

      self.getTitle = function (action) {
        if (!action) return 'Нет описания';
        var obj = {
          like: 'Вступить в группу ',
          partner_page: 'Рассказать о нас друзьям в '
        };
        var socObj = {
          fb: 'Facebook',
          ok: 'Одноклассниках',
          vk: 'Вконтакте',
          tw: 'Twitter',
          gp: 'Google +'
        };
        var result = (obj[action.action] ? obj[action.action] : '') + (socObj[action.socialType] ? socObj[action.socialType] : '');
        return result || 'Нет описания';
      };

      self.getIcon = function (action) {
        if (!action) return '';
        var classNames = {
          fb: 'sir_fb',
          vk: 'sir_vk',
          ok: 'sir_ok',
          tw: 'sir_tw',
          gp: 'sir_gp'
        };
        var obj = {
          partner_page: classNames,
          like: classNames,
          purchase: classNames
        };
        if (action.socialType && obj[action.action] && obj[action.action][action.socialType]) {
          return obj[action.action][action.socialType];
        } else {
          return '';
        }
      };

      self.tests = [
        {
          name: 'Пройти опрос',
          points: 3,
          tag: 'Прошел опрос',
          data: [
            {
              q: 'Подскажите, пожалуйста, как часто Вы пользуетесь услугами Кабины красоты и прокомментируйте ваш ответ:',
              a: [
                {
                  text: 'не пользуюсь, услуга не заинтересовала',
                  tag: 'не пользуюсь услугами Кабины красоты'
                }, {
                  text: 'иногда, если есть время',
                  tag: 'иногда пользуюсь услугами Кабины красоты'
                }, {
                  text: 'всегда, если покупка соответствует условиям для записи в Кабину красоты',
                  tag: 'всегда пользуюсь услугами Кабины красоты'
                }, {
                  text: 'раньше посещала, не понравилось, больше не хожу',
                  tag: 'раньше пользовалась услугами Кабины красоты',
                  yourAnswer: 'dislike_reason'
                }
              ]
            },
            {
              q: 'Пожалуйста, выберете выражение, которое Вам ближе всего:\nДля меня Кабина красоты в ИЛЬ ДЕ БОТЭ - это',
              a: [
                {
                  text: 'возможность получить консультацию косметолога по подбору средств марки именно для моей кожи',
                  tag: 'возможность получить консультацию косметолога по подбору средств марки именно для моей кожи'
                },  {
                  text: 'знакомство и тестирование продуктов новой марки или новых товаров в сети',
                  tag: 'знакомство и тестирование продуктов новой марки или новых товаров в сети'
                },  {
                  text: 'наглядное руководство по способу использования товаров марки',
                  tag: 'наглядное руководство по способу использования товаров марки'
                },  {
                  text: 'приятный комплимент от сети, так как предоставляют дополнительный сервис по уходу',
                  tag: 'приятный комплимент от сети. так как предоставляют дополнительный сервис по уходу'
                }
              ]
            },
            {
              q: 'Подскажите, пожалуйста, совершали ли Вы покупку  продукции марки, которая использовалась в Кабине Красоты?',
              a: [
                {
                  text: 'да, заинтересовал продукт, приобрела в тот же день, через некоторое время',
                  tag: 'да. заинтересовал продукт'
                },  {
                  text: 'нет, не было необходимости',
                  tag: 'нет. не было необходимости'
                }
              ]
            }
          ]
        },
        {
          name: 'Пройти опрос',
          points: 3,
          tag: 'Прошел опрос 15 лет',
          data: [
            {
              q: 'В этом году ИЛЬ ДЕ БОТЭ празднует свое 15-е и готовит акцию с подарками для своих любимых клиентов! Помогите нам, пожалуйста, с ответами на вопросы о подарках:' +
                 '\n\n1. Пожалуйста, выберете вариант акции, который Вам ближе всего:',
              a: [
                {
                  text: 'Мне приятнее получать небольшой комплимент за небольшую покупку',
                  tag: 'Вариант акции: Мне приятнее получать небольшой комплимент за небольшую покупку'
                }, {
                  text: 'Мне приятнее получать существенный подарок за крупную покупку',
                  tag: 'Вариант акции: Мне приятнее получать существенный подарок за крупную покупку'
                }
              ]
            },
            {
              q: 'Какой из подарков в качестве небольшого комплимента за небольшую покупку Вам было бы приятнее получить:',
              a: [
                {
                  text: 'Красивая флешка в виде футляра для губной помады на 16 Гб',
                  tag: 'Предпочтительный небольшой подарок: Красивая флешка в виде футляра для губной помады на 16 Гб'
                },  {
                  text: 'Мягкая игрушка (мишка, кролик)',
                  tag: 'Предпочтительный небольшой подарок: Мягкая игрушка (мишка или кролик)'
                },  {
                  text: 'Банный халат',
                  tag: 'Предпочтительный небольшой подарок: Банный халат'
                },  {
                  text: 'Банное полотенце',
                  tag: 'Предпочтительный небольшой подарок: Банное полотенце'
                },  {
                  text: 'Брелок для ключей',
                  tag: 'Предпочтительный небольшой подарок: Брелок для ключей'
                }
              ]
            },
            {
              q: 'Какой из подарков в качестве существенного подарка за крупную покупку Вам было бы приятнее получить:',
              a: [
                {
                  text: 'Брендированная расческа',
                  tag: 'Предпочтительный существенный подарок: брендированная расческа'
                },
                {
                  text: 'Маска для сна для путешествий',
                  tag: 'Предпочтительный существенный подарок: маска для сна для путешествий'
                },
                {
                  text: 'Надувная подушка для путешествий',
                  tag: 'Предпочтительный существенный подарок: надувная подушка для путешествий'
                },
                {
                  text: 'Кейс для макияжа',
                  tag: 'Предпочтительный существенный подарок: кейс для макияжа'
                },
                {
                  text: 'Игрушка-антистресс (змейка, мяч)',
                  tag: 'Предпочтительный существенный подарок: игрушка-антистресс (змейка или мяч)'
                }
              ]
            },
            {
              q: 'Предложите свой вариант подарка:',
              a: [
                {
                  text: 'Свой вариант подарка',
                  tag: '',
                  type: 'custom'
                }
              ]
            }
          ]
        }
      ];

      self.getTags = function () {
        return TAGS;
      };

      self.getActionsCssLink = function () {
        return cssLink;
      };

      return self;

    });

}());
(function () {

  angular.module('iledebeaute.services.cookies', [])

    .service('cookieS', function () {

      var self = this;

      self.set = function (name, value, days) {
        var expires;
        if (days) {
          var date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          expires = "; expires=" + date.toGMTString();
        }
        else expires = "";
        window.document.cookie = name + "=" + value + expires + "; path=/";
      };

      self.get = function (name) {
        var nameEQ = name + "=";
        var ca = window.document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
      };

      self.remove = function (name) {
        self.set(name, "", -1);
      };

      return self;

    });

}());
(function () {

  angular.module('iledebeaute.services.faq', [])

    .service('faqService', ["api", function (api) {

      var self = this;

      self.feedback_tag = 'Заполнил  форму обратной связи';

      self.data = function(){
        return api.config.faq || [];
      };

      return self;

    }]);

})();
(function () {

  angular.module('iledebeaute.services.pages', [])

    .service('pageService', ["api", function (api) {

      var self = this;

      self.getPage = function(pageId){
        return api.config.pages[pageId] || {}
      };

      return self;

    }]);

}());
(function (angular, sp) {

  angular.module('iledebeaute.services.users', [])

    .service('userService', ["api", function (api) {

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


    }]);

}(window.angular, window.SAILPLAY));
(function () {

  angular.module('ui.datepicker', [])

    .service('dateService', function () {

      var self = this;

      self.days = {
        1: 31,
        2: 29,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
      };

      var current_year = new Date().getFullYear();
      var arr = [];
      for (var i = 90; i > 0; i--) {
        arr.push(current_year - i);
      }



      self.years = arr.reverse();

      self.months = {
        1: "январь",
        2: "февраль",
        3: "март",
        4: "апрель",
        5: "май",
        6: "июнь",
        7: "июль",
        8: "август",
        9: "сентябрь",
        10: "октябрь",
        11: "ноябрь",
        12: "декабрь"
      };

      return this;

    })

    .directive('datePicker', ["config", "dateService", function (config, dateService) {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: '/html/ui/ui.datepicker.html',
        scope: {
          model: '=',
          disabled: '=?'
        },
        link: function (scope) {

          scope.days = dateService.days;
          scope.months = dateService.months;
          scope.years = dateService.years;

          scope.range = function (start, end) {
            var result = [];
            for (var i = start; i <= end; i++) {
              result.push(i);
            }
            return result;
          };

        }
      }

    }]);


}());
(function () {
  angular.module('ui.enter', [])
    .directive('enterSubmit', function () {
      return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
          elem.bind('keydown', function (event) {
            var code = event.keyCode || event.which;
            if (code === 13) {
              if (!event.shiftKey) {
                event.preventDefault();
                scope.$apply(attrs.enterSubmit);
              }
            }
          });
        }
      }
    });
})();
(function(){

  angular.module('ui', [
    'ui.pagination',
    'ui.url.static',
    'ui.menu',
    'ui.datepicker',
    'ui.enter',
    'ui.mask'
  ])

}());
/*!
 * angular-ui-mask
 * https://github.com/angular-ui/ui-mask
 * Version: 1.6.8 - 2016-01-20T02:50:08.068Z
 * License: MIT
 */


(function () {
  'use strict';
  /*
   Attaches input mask onto input element
   */
  angular.module('ui.mask', [])
    .value('uiMaskConfig', {
      maskDefinitions: {
        '9': /\d/,
        'A': /[a-zA-Z]/,
        '*': /[a-zA-Z0-9]/
      },
      clearOnBlur: true,
      eventsToHandle: ['input', 'keyup', 'click', 'focus']
    })
    .directive('uiMask', ['uiMaskConfig', function(maskConfig) {
      function isFocused (elem) {
        return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
      }

      return {
        priority: 100,
        require: 'ngModel',
        restrict: 'A',
        compile: function uiMaskCompilingFunction() {
          var options = maskConfig;

          return function uiMaskLinkingFunction(scope, iElement, iAttrs, controller) {
            var maskProcessed = false, eventsBound = false,
              maskCaretMap, maskPatterns, maskPlaceholder, maskComponents,
            // Minimum required length of the value to be considered valid
              minRequiredLength,
              value, valueMasked, isValid,
            // Vars for initializing/uninitializing
              originalPlaceholder = iAttrs.placeholder,
              originalMaxlength = iAttrs.maxlength,
            // Vars used exclusively in eventHandler()
              oldValue, oldValueUnmasked, oldCaretPosition, oldSelectionLength,
            // Used for communicating if a backspace operation should be allowed between
            // keydownHandler and eventHandler
              preventBackspace;

            var originalIsEmpty = controller.$isEmpty;
            controller.$isEmpty = function(value) {
              if (maskProcessed) {
                return originalIsEmpty(unmaskValue(value || ''));
              } else {
                return originalIsEmpty(value);
              }
            };

            function initialize(maskAttr) {
              if (!angular.isDefined(maskAttr)) {
                return uninitialize();
              }
              processRawMask(maskAttr);
              if (!maskProcessed) {
                return uninitialize();
              }
              initializeElement();
              bindEventListeners();
              return true;
            }

            function initPlaceholder(placeholderAttr) {
              if ( ! placeholderAttr) {
                return;
              }

              maskPlaceholder = placeholderAttr;

              // If the mask is processed, then we need to update the value
              // but don't set the value if there is nothing entered into the element
              // and there is a placeholder attribute on the element because that
              // will only set the value as the blank maskPlaceholder
              // and override the placeholder on the element
              if (maskProcessed && !(iElement.val().length === 0 && angular.isDefined(iAttrs.placeholder))) {
                iElement.val(maskValue(unmaskValue(iElement.val())));
              }
            }

            function initPlaceholderChar() {
              return initialize(iAttrs.uiMask);
            }

            var modelViewValue = false;
            iAttrs.$observe('modelViewValue', function(val) {
              if (val === 'true') {
                modelViewValue = true;
              }
            });

            function formatter(fromModelValue) {
              if (!maskProcessed) {
                return fromModelValue;
              }
              value = unmaskValue(fromModelValue || '');
              isValid = validateValue(value);
              controller.$setValidity('mask', isValid);
              return isValid && value.length ? maskValue(value) : undefined;
            }

            function parser(fromViewValue) {
              if (!maskProcessed) {
                return fromViewValue;
              }
              value = unmaskValue(fromViewValue || '');
              isValid = validateValue(value);
              // We have to set viewValue manually as the reformatting of the input
              // value performed by eventHandler() doesn't happen until after
              // this parser is called, which causes what the user sees in the input
              // to be out-of-sync with what the controller's $viewValue is set to.
              controller.$viewValue = value.length ? maskValue(value) : '';
              controller.$setValidity('mask', isValid);
              if (isValid) {
                return modelViewValue ? controller.$viewValue : value;
              } else {
                return undefined;
              }
            }

            var linkOptions = {};

            if (iAttrs.uiOptions) {
              linkOptions = scope.$eval('[' + iAttrs.uiOptions + ']');
              if (angular.isObject(linkOptions[0])) {
                // we can't use angular.copy nor angular.extend, they lack the power to do a deep merge
                linkOptions = (function(original, current) {
                  for (var i in original) {
                    if (Object.prototype.hasOwnProperty.call(original, i)) {
                      if (current[i] === undefined) {
                        current[i] = angular.copy(original[i]);
                      } else {
                        if (angular.isObject(current[i]) && !angular.isArray(current[i])) {
                          current[i] = angular.extend({}, original[i], current[i]);
                        }
                      }
                    }
                  }
                  return current;
                })(options, linkOptions[0]);
              } else {
                linkOptions = options;  //gotta be a better way to do this..
              }
            } else {
              linkOptions = options;
            }

            iAttrs.$observe('uiMask', initialize);
            if (angular.isDefined(iAttrs.uiMaskPlaceholder)) {
              iAttrs.$observe('uiMaskPlaceholder', initPlaceholder);
            }
            else {
              iAttrs.$observe('placeholder', initPlaceholder);
            }
            if (angular.isDefined(iAttrs.uiMaskPlaceholderChar)) {
              iAttrs.$observe('uiMaskPlaceholderChar', initPlaceholderChar);
            }

            controller.$formatters.push(formatter);
            controller.$parsers.unshift(parser);

            function uninitialize() {
              maskProcessed = false;
              unbindEventListeners();

              if (angular.isDefined(originalPlaceholder)) {
                iElement.attr('placeholder', originalPlaceholder);
              } else {
                iElement.removeAttr('placeholder');
              }

              if (angular.isDefined(originalMaxlength)) {
                iElement.attr('maxlength', originalMaxlength);
              } else {
                iElement.removeAttr('maxlength');
              }

              iElement.val(controller.$modelValue);
              controller.$viewValue = controller.$modelValue;
              return false;
            }

            function initializeElement() {
              value = oldValueUnmasked = unmaskValue(controller.$modelValue || '');
              valueMasked = oldValue = maskValue(value);
              isValid = validateValue(value);
              if (iAttrs.maxlength) { // Double maxlength to allow pasting new val at end of mask
                iElement.attr('maxlength', maskCaretMap[maskCaretMap.length - 1] * 2);
              }
              if ( ! originalPlaceholder) {
                iElement.attr('placeholder', maskPlaceholder);
              }
              var viewValue = controller.$modelValue;
              var idx = controller.$formatters.length;
              while(idx--) {
                viewValue = controller.$formatters[idx](viewValue);
              }
              controller.$viewValue = viewValue || '';
              controller.$render();
              // Not using $setViewValue so we don't clobber the model value and dirty the form
              // without any kind of user interaction.
            }

            function bindEventListeners() {
              if (eventsBound) {
                return;
              }
              iElement.bind('blur', blurHandler);
              iElement.bind('mousedown mouseup', mouseDownUpHandler);
              iElement.bind('keydown', keydownHandler);
              iElement.bind(linkOptions.eventsToHandle.join(' '), eventHandler);
              eventsBound = true;
            }

            function unbindEventListeners() {
              if (!eventsBound) {
                return;
              }
              iElement.unbind('blur', blurHandler);
              iElement.unbind('mousedown', mouseDownUpHandler);
              iElement.unbind('mouseup', mouseDownUpHandler);
              iElement.unbind('keydown', keydownHandler);
              iElement.unbind('input', eventHandler);
              iElement.unbind('keyup', eventHandler);
              iElement.unbind('click', eventHandler);
              iElement.unbind('focus', eventHandler);
              eventsBound = false;
            }

            function validateValue(value) {
              // Zero-length value validity is ngRequired's determination
              return value.length ? value.length >= minRequiredLength : true;
            }

            function unmaskValue(value) {
              var valueUnmasked = '',
                maskPatternsCopy = maskPatterns.slice();
              // Preprocess by stripping mask components from value
              value = value.toString();
              angular.forEach(maskComponents, function(component) {
                value = value.replace(component, '');
              });
              angular.forEach(value.split(''), function(chr) {
                if (maskPatternsCopy.length && maskPatternsCopy[0].test(chr)) {
                  valueUnmasked += chr;
                  maskPatternsCopy.shift();
                }
              });

              return valueUnmasked;
            }

            function maskValue(unmaskedValue) {
              var valueMasked = '',
                maskCaretMapCopy = maskCaretMap.slice();

              angular.forEach(maskPlaceholder.split(''), function(chr, i) {
                if (unmaskedValue.length && i === maskCaretMapCopy[0]) {
                  valueMasked += unmaskedValue.charAt(0) || '_';
                  unmaskedValue = unmaskedValue.substr(1);
                  maskCaretMapCopy.shift();
                }
                else {
                  valueMasked += chr;
                }
              });
              return valueMasked;
            }

            function getPlaceholderChar(i) {
              var placeholder = angular.isDefined(iAttrs.uiMaskPlaceholder) ? iAttrs.uiMaskPlaceholder : iAttrs.placeholder,
                defaultPlaceholderChar;

              if (angular.isDefined(placeholder) && placeholder[i]) {
                return placeholder[i];
              } else {
                defaultPlaceholderChar = angular.isDefined(iAttrs.uiMaskPlaceholderChar) && iAttrs.uiMaskPlaceholderChar ? iAttrs.uiMaskPlaceholderChar : '_';
                return (defaultPlaceholderChar.toLowerCase() === 'space') ? ' ' : defaultPlaceholderChar[0];
              }
            }

            // Generate array of mask components that will be stripped from a masked value
            // before processing to prevent mask components from being added to the unmasked value.
            // E.g., a mask pattern of '+7 9999' won't have the 7 bleed into the unmasked value.
            function getMaskComponents() {
              var maskPlaceholderChars = maskPlaceholder.split(''),
                maskPlaceholderCopy;

              //maskCaretMap can have bad values if the input has the ui-mask attribute implemented as an obversable property, i.e. the demo page
              if (maskCaretMap && !isNaN(maskCaretMap[0])) {
                //Instead of trying to manipulate the RegEx based on the placeholder characters
                //we can simply replace the placeholder characters based on the already built
                //maskCaretMap to underscores and leave the original working RegEx to get the proper
                //mask components
                angular.forEach(maskCaretMap, function(value) {
                  maskPlaceholderChars[value] = '_';
                });
              }
              maskPlaceholderCopy = maskPlaceholderChars.join('');
              return maskPlaceholderCopy.replace(/[_]+/g, '_').split('_');
            }

            function processRawMask(mask) {
              var characterCount = 0;

              maskCaretMap = [];
              maskPatterns = [];
              maskPlaceholder = '';

              if (angular.isString(mask)) {
                minRequiredLength = 0;

                var isOptional = false,
                  numberOfOptionalCharacters = 0,
                  splitMask = mask.split('');

                angular.forEach(splitMask, function(chr, i) {
                  if (linkOptions.maskDefinitions[chr]) {

                    maskCaretMap.push(characterCount);

                    maskPlaceholder += getPlaceholderChar(i - numberOfOptionalCharacters);
                    maskPatterns.push(linkOptions.maskDefinitions[chr]);

                    characterCount++;
                    if (!isOptional) {
                      minRequiredLength++;
                    }

                    isOptional = false;
                  }
                  else if (chr === '?') {
                    isOptional = true;
                    numberOfOptionalCharacters++;
                  }
                  else {
                    maskPlaceholder += chr;
                    characterCount++;
                  }
                });
              }
              // Caret position immediately following last position is valid.
              maskCaretMap.push(maskCaretMap.slice().pop() + 1);

              maskComponents = getMaskComponents();
              maskProcessed = maskCaretMap.length > 1 ? true : false;
            }

            var prevValue = iElement.val();
            function blurHandler() {
              if (linkOptions.clearOnBlur) {
                oldCaretPosition = 0;
                oldSelectionLength = 0;
                if (!isValid || value.length === 0) {
                  valueMasked = '';
                  iElement.val('');
                  scope.$apply(function() {
                    //don't call $setViewValue to avoid changing $pristine state.
                    controller.$viewValue = '';
                  });
                }
              }
              //Check for different value and trigger change.
              if (value !== prevValue) {
                triggerChangeEvent(iElement[0]);
              }
              prevValue = value;
            }

            function triggerChangeEvent(element) {
              var change;
              if (angular.isFunction(window.Event) && !element.fireEvent) {
                // modern browsers and Edge
                change = new Event('change', {
                  view: window,
                  bubbles: true,
                  cancelable: false
                });
                element.dispatchEvent(change);
              } else if ('createEvent' in document) {
                // older browsers
                change = document.createEvent('HTMLEvents');
                change.initEvent('change', false, true);
                element.dispatchEvent(change);
              }
              else if (element.fireEvent) {
                // IE <= 11
                element.fireEvent('onchange');
              }
            }

            function mouseDownUpHandler(e) {
              if (e.type === 'mousedown') {
                iElement.bind('mouseout', mouseoutHandler);
              } else {
                iElement.unbind('mouseout', mouseoutHandler);
              }
            }

            iElement.bind('mousedown mouseup', mouseDownUpHandler);

            function mouseoutHandler() {
              /*jshint validthis: true */
              oldSelectionLength = getSelectionLength(this);
              iElement.unbind('mouseout', mouseoutHandler);
            }

            function keydownHandler(e) {
              /*jshint validthis: true */
              var isKeyBackspace = e.which === 8,
                caretPos = getCaretPosition(this) - 1 || 0; //value in keydown is pre change so bump caret position back to simulate post change

              if (isKeyBackspace) {
                while(caretPos >= 0) {
                  if (isValidCaretPosition(caretPos)) {
                    //re-adjust the caret position.
                    //Increment to account for the initial decrement to simulate post change caret position
                    setCaretPosition(this, caretPos + 1);
                    break;
                  }
                  caretPos--;
                }
                preventBackspace = caretPos === -1;
              }
            }

            function eventHandler(e) {
              /*jshint validthis: true */
              e = e || {};
              // Allows more efficient minification
              var eventWhich = e.which,
                eventType = e.type;

              // Prevent shift and ctrl from mucking with old values
              if (eventWhich === 16 || eventWhich === 91) {
                return;
              }

              var val = iElement.val(),
                valOld = oldValue,
                valMasked,
                valAltered = false,
                valUnmasked = unmaskValue(val),
                valUnmaskedOld = oldValueUnmasked,
                caretPos = getCaretPosition(this) || 0,
                caretPosOld = oldCaretPosition || 0,
                caretPosDelta = caretPos - caretPosOld,
                caretPosMin = maskCaretMap[0],
                caretPosMax = maskCaretMap[valUnmasked.length] || maskCaretMap.slice().shift(),
                selectionLenOld = oldSelectionLength || 0,
                isSelected = getSelectionLength(this) > 0,
                wasSelected = selectionLenOld > 0,
              // Case: Typing a character to overwrite a selection
                isAddition = (val.length > valOld.length) || (selectionLenOld && val.length > valOld.length - selectionLenOld),
              // Case: Delete and backspace behave identically on a selection
                isDeletion = (val.length < valOld.length) || (selectionLenOld && val.length === valOld.length - selectionLenOld),
                isSelection = (eventWhich >= 37 && eventWhich <= 40) && e.shiftKey, // Arrow key codes

                isKeyLeftArrow = eventWhich === 37,
              // Necessary due to "input" event not providing a key code
                isKeyBackspace = eventWhich === 8 || (eventType !== 'keyup' && isDeletion && (caretPosDelta === -1)),
                isKeyDelete = eventWhich === 46 || (eventType !== 'keyup' && isDeletion && (caretPosDelta === 0) && !wasSelected),
              // Handles cases where caret is moved and placed in front of invalid maskCaretMap position. Logic below
              // ensures that, on click or leftward caret placement, caret is moved leftward until directly right of
              // non-mask character. Also applied to click since users are (arguably) more likely to backspace
              // a character when clicking within a filled input.
                caretBumpBack = (isKeyLeftArrow || isKeyBackspace || eventType === 'click') && caretPos > caretPosMin;

              oldSelectionLength = getSelectionLength(this);

              // These events don't require any action
              if (isSelection || (isSelected && (eventType === 'click' || eventType === 'keyup'))) {
                return;
              }

              if (isKeyBackspace && preventBackspace) {
                iElement.val(maskPlaceholder);
                // This shouldn't be needed but for some reason after aggressive backspacing the controller $viewValue is incorrect.
                // This keeps the $viewValue updated and correct.
                scope.$apply(function () {
                  controller.$setViewValue(''); // $setViewValue should be run in angular context, otherwise the changes will be invisible to angular and user code.
                });
                setCaretPosition(this, caretPosOld);
                return;
              }

              // Value Handling
              // ==============

              // User attempted to delete but raw value was unaffected--correct this grievous offense
              if ((eventType === 'input') && isDeletion && !wasSelected && valUnmasked === valUnmaskedOld) {
                while (isKeyBackspace && caretPos > caretPosMin && !isValidCaretPosition(caretPos)) {
                  caretPos--;
                }
                while (isKeyDelete && caretPos < caretPosMax && maskCaretMap.indexOf(caretPos) === -1) {
                  caretPos++;
                }
                var charIndex = maskCaretMap.indexOf(caretPos);
                // Strip out non-mask character that user would have deleted if mask hadn't been in the way.
                valUnmasked = valUnmasked.substring(0, charIndex) + valUnmasked.substring(charIndex + 1);

                // If value has not changed, don't want to call $setViewValue, may be caused by IE raising input event due to placeholder
                if (valUnmasked !== valUnmaskedOld)
                  valAltered = true;
              }

              // Update values
              valMasked = maskValue(valUnmasked);

              oldValue = valMasked;
              oldValueUnmasked = valUnmasked;

              //additional check to fix the problem where the viewValue is out of sync with the value of the element.
              //better fix for commit 2a83b5fb8312e71d220a497545f999fc82503bd9 (I think)
              if (!valAltered && val.length > valMasked.length)
                valAltered = true;

              iElement.val(valMasked);

              //we need this check.  What could happen if you don't have it is that you'll set the model value without the user
              //actually doing anything.  Meaning, things like pristine and touched will be set.
              if (valAltered) {
                scope.$apply(function () {
                  controller.$setViewValue(valUnmasked); // $setViewValue should be run in angular context, otherwise the changes will be invisible to angular and user code.
                });
              }

              // Caret Repositioning
              // ===================

              // Ensure that typing always places caret ahead of typed character in cases where the first char of
              // the input is a mask char and the caret is placed at the 0 position.
              if (isAddition && (caretPos <= caretPosMin)) {
                caretPos = caretPosMin + 1;
              }

              if (caretBumpBack) {
                caretPos--;
              }

              // Make sure caret is within min and max position limits
              caretPos = caretPos > caretPosMax ? caretPosMax : caretPos < caretPosMin ? caretPosMin : caretPos;

              // Scoot the caret back or forth until it's in a non-mask position and within min/max position limits
              while (!isValidCaretPosition(caretPos) && caretPos > caretPosMin && caretPos < caretPosMax) {
                caretPos += caretBumpBack ? -1 : 1;
              }

              if ((caretBumpBack && caretPos < caretPosMax) || (isAddition && !isValidCaretPosition(caretPosOld))) {
                caretPos++;
              }
              oldCaretPosition = caretPos;
              setCaretPosition(this, caretPos);
            }

            function isValidCaretPosition(pos) {
              return maskCaretMap.indexOf(pos) > -1;
            }

            function getCaretPosition(input) {
              if (!input)
                return 0;
              if (input.selectionStart !== undefined) {
                return input.selectionStart;
              } else if (document.selection) {
                if (isFocused(iElement[0])) {
                  // Curse you IE
                  input.focus();
                  var selection = document.selection.createRange();
                  selection.moveStart('character', input.value ? -input.value.length : 0);
                  return selection.text.length;
                }
              }
              return 0;
            }

            function setCaretPosition(input, pos) {
              if (!input)
                return 0;
              if (input.offsetWidth === 0 || input.offsetHeight === 0) {
                return; // Input's hidden
              }
              if (input.setSelectionRange) {
                if (isFocused(iElement[0])) {
                  input.focus();
                  input.setSelectionRange(pos, pos);
                }
              }
              else if (input.createTextRange) {
                // Curse you IE
                var range = input.createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
              }
            }

            function getSelectionLength(input) {
              if (!input)
                return 0;
              if (input.selectionStart !== undefined) {
                return (input.selectionEnd - input.selectionStart);
              }
              if (document.selection) {
                return (document.selection.createRange().text.length);
              }
              return 0;
            }

            // https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/indexOf
            if (!Array.prototype.indexOf) {
              Array.prototype.indexOf = function(searchElement /*, fromIndex */) {
                if (this === null) {
                  throw new TypeError();
                }
                var t = Object(this);
                var len = t.length >>> 0;
                if (len === 0) {
                  return -1;
                }
                var n = 0;
                if (arguments.length > 1) {
                  n = Number(arguments[1]);
                  if (n !== n) { // shortcut for verifying if it's NaN
                    n = 0;
                  } else if (n !== 0 && n !== Infinity && n !== -Infinity) {
                    n = (n > 0 || -1) * Math.floor(Math.abs(n));
                  }
                }
                if (n >= len) {
                  return -1;
                }
                var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
                for (; k < len; k++) {
                  if (k in t && t[k] === searchElement) {
                    return k;
                  }
                }
                return -1;
              };
            }

          };
        }
      };
    }
    ]);

}());
(function () {

  angular.module('ui.menu', [])

    .service('menuService', function () {

      var self = this;

      self.menu = [
        {
          label: 'О программе',
          key: 'page/about',
          // DEFAULT ACTIVE ELEMENT
          active: true
        },
        {
          label: 'Условия участия',
          key: 'page/rules',
          items: [
            {
              label: 'Правила начисления бонусов',
              key: 'page/rules'
            },
            {
              label: 'Правила списания бонусов',
              key: 'page/cut_bonus_rules'
            },
            {
              label: 'Полезная информация',
              key: 'page/helpful_info'
            }
          ]
        },
        {
          label: 'История покупок',
          key: 'history',
          items: [
            {
              label:'Профиль',
              key: 'profile/edit'
            },
            {
              label: 'История покупок',
              key: 'history'
            },
            {
              label: 'Получите больше бонусов',
              key: 'actions'
            }
          ]
        },
        {
          label: 'Сокровищница привилегий',
          key: 'gifts',
          items: [
            {
              label: 'Сокровищница привилегий',
              key: 'gifts'
            },
            {
              label: 'Архив привилегий',
              key: 'gift_archive'
            }
          ]
        },
        {
          label: 'Вопрос-ответ',
          key: 'faq',
          items: [
            {
              label: 'Часто задаваемые вопросы',
              key: 'faq'
            },
            {
              label: 'Форма обратной связи',
              key: 'feedback'
            }
          ]
        }
      ];

      return this;
    })

    .directive('menu', ["menuService", "$location", "config", "$rootScope", "api", "$window", function (menuService, $location, config, $rootScope, api, $window) {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: '/html/ui/ui.menu.html',
        scope: true,
        link: function (scope) {

          scope.model = menuService.menu;

          scope.generateUrl = function (key) {
            return key ? '#/' + key : '#/';
          };

          $rootScope.$on("$routeChangeSuccess", function (event, next, current) {
            update();
          });

          function update() {
            var url = $location.path().replace('/', '');
            for (var i = 0, len = scope.model.length; i < len; i++) {
              var item = scope.model[i];
              if (item.key == url) {
                item.active = true;
              } else {
                item.active = false;
              }
              if (item.items && item.items.length) {
                for (var y = 0, leny = item.items.length; y < leny; y++) {
                  var subItem = item.items[y];
                  if (subItem.key == url) {
                    subItem.active = true;
                    item.active = true;
                  } else {
                    subItem.active = false;
                  }
                }
              }
            }
          }

          scope.getSubmenu = function () {
            if (!scope.model) return;
            for (var i = 0, len = scope.model.length; i < len; i++) {
              var item = scope.model[i];
              if (item.active && item.items && item.items.length) {
                return item.items;
                break;
              }
            }
          };

          scope.exit = function () {
            $('.preloader').show();
            api.user.logout().then(function(res){
              $window.location.reload();
            })
          };

        }
      }

    }]);

}());

(function () {

    angular.module('ui.pagination', [])

        .directive('toolsPagination', [function () {
            return {
                restrict: 'E',
                replace: true,
                template:
                  '<div class="tools-paginations_wrapp paging">' +
                  '  <div data-ng-if="page && perPage && items && need_to_show(items, perPage)" class="common-paginate">' +
                  '    <a class="tools-paginations_item common-paginate__item" data-ng-if="need_to_show(items, perPage)" data-ng-click="item.go && onChange(item.text)" data-ng-class="{act : page == item.text}" style="cursor: pointer" data-ng-repeat="item in pages" data-ng-bind="item.text"></a>' +
                  '  </div>' +
                  '</div>',
                scope: {
                    page: '=',
                    perPage: '=',
                    items: '=',
                    onChange: '='
                },
                link: function (scope) {
                    scope.need_to_show = function (items, per_page) {
                        if (!items || !per_page) {
                            return false;
                        }
                        return Math.ceil(items / per_page) > 1 ? true : false;
                    };
                    scope.pages = [];
                    scope.get_pages = function (num, items, per_page, range) {
                        var limit = Math.ceil(items / per_page);
                        range = range || 3;
                        arr = [];
                        for (var i = 1; i <= limit; i++) {
                            if (i <= range || (i > num - range / 2 && i < num + range / 2) || i > limit - range) {
                                if (arr[arr.length - 1] && i != arr[arr.length - 1].text + 1)arr.push({text: '...'});
                                arr.push({go: true, text: i})
                            }

                        }
                        return arr || [];
                    };
                    scope.pages = scope.get_pages(scope.page, scope.items, scope.perPage);
                }
            }

        }]);


}());
(function () {

  angular.module('ui.url.static', [])

    .filter('static', ["config", function (config) {
      return function (url) {

        return config.static_url + url;

      };
    }]);

}());
