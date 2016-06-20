$(document).ready(function () {

  var _timeout_to_redirect;

  var WAIT_FOR_REDIRECT = 60000;

  var _states = [{"name": "State", "abbreviation": ""}, {"name": "Alabama", "abbreviation": "AL"}, {
    "name": "Alaska",
    "abbreviation": "AK"
  }, {"name": "American Samoa", "abbreviation": "AS"}, {"name": "Arizona", "abbreviation": "AZ"}, {
    "name": "Arkansas",
    "abbreviation": "AR"
  }, {"name": "California", "abbreviation": "CA"}, {"name": "Colorado", "abbreviation": "CO"}, {
    "name": "Connecticut",
    "abbreviation": "CT"
  }, {"name": "Delaware", "abbreviation": "DE"}, {"name": "Dist of Columbia", "abbreviation": "DC"}, {
    "name": "Florida",
    "abbreviation": "FL"
  }, {"name": "Georgia", "abbreviation": "GA"}, {"name": "Guam", "abbreviation": "GU"}, {
    "name": "Hawaii",
    "abbreviation": "HI"
  }, {"name": "Idaho", "abbreviation": "ID"}, {"name": "Illinois", "abbreviation": "IL"}, {
    "name": "Indiana",
    "abbreviation": "IN"
  }, {"name": "Iowa", "abbreviation": "IA"}, {"name": "Kansas", "abbreviation": "KS"}, {
    "name": "Kentucky",
    "abbreviation": "KY"
  }, {"name": "Louisiana", "abbreviation": "LA"}, {"name": "Maine", "abbreviation": "ME"}, {
    "name": "Maryland",
    "abbreviation": "MD"
  }, {"name": "Marshall Islands", "abbreviation": "MH"}, {
    "name": "Massachusetts",
    "abbreviation": "MA"
  }, {"name": "Michigan", "abbreviation": "MI"}, {"name": "Micronesia", "abbreviation": "FM"}, {
    "name": "Minnesota",
    "abbreviation": "MN"
  }, {"name": "Mississippi", "abbreviation": "MS"}, {
    "name": "Missouri",
    "abbreviation": "MO"
  }, {"name": "Montana\tMont", "abbreviation": "MT"}, {"name": "Nebraska", "abbreviation": "NE"}, {
    "name": "Nevada",
    "abbreviation": "NV"
  }, {"name": "New Hampshire", "abbreviation": "NH"}, {
    "name": "New Jersey",
    "abbreviation": "NJ"
  }, {"name": "New Mexico", "abbreviation": "NM"}, {
    "name": "New York",
    "abbreviation": "NY"
  }, {"name": "North Carolina", "abbreviation": "NC"}, {
    "name": "North Dakota",
    "abbreviation": "ND"
  }, {"name": "Northern Marianas", "abbreviation": "MP"}, {"name": "Ohio", "abbreviation": "OH"}, {
    "name": "Oklahoma",
    "abbreviation": "OK"
  }, {"name": "Oregon", "abbreviation": "OR"}, {"name": "Palau", "abbreviation": "PW"}, {
    "name": "Pennsylvania",
    "abbreviation": "PA"
  }, {"name": "Puerto Rico", "abbreviation": "PR"}, {
    "name": "Rhode Island",
    "abbreviation": "RI"
  }, {"name": "South Carolina", "abbreviation": "SC"}, {
    "name": "South Dakota",
    "abbreviation": "SD"
  }, {"name": "Tennessee", "abbreviation": "TN"}, {"name": "Texas", "abbreviation": "TX"}, {
    "name": "Utah",
    "abbreviation": "UT"
  }, {"name": "Vermont\tVt", "abbreviation": "VT"}, {
    "name": "Virginia",
    "abbreviation": "VA"
  }, {"name": "Virgin Islands", "abbreviation": "VI"}, {
    "name": "Washington",
    "abbreviation": "WA"
  }, {"name": "West Virginia", "abbreviation": "WV"}, {
    "name": "Wisconsin",
    "abbreviation": "WI"
  }, {"name": "Wyoming\tWyo", "abbreviation": "WY"}];

  var _cities = {};

  var _config = {
    partner_id: 1573,
    lang: 'en',
    domain: 'https://sailplay.net'
  };

  function _findByFieldValue(field, val) {
    return _states.filter(function (item) {
      return item[field] === val;
    })[0]
  }

  SAILPLAY.send('init', _config);

  SAILPLAY.on('init.success', function () {

    set_state();

    start_timer();

  });

  var params = SAILPLAY.url_params();

  if (params.p_name) {
    $('.p_name').text(params.p_name)
  }

  function set_state(state) {

    if ($('.sp_popup_blocks').is(':visible')) {

      $('.sp_popup_blocks').fadeOut();

    }

    var $elms = $('.sp_wrapper > .sp_l-centered');

    var _map = {
      'welcome': 0,
      'reg': 1,
      'reg_success': 2,
      'login': 3,
      'info': 4
    };

    state = state && _map[state] || 0;

    start_timer();

    if ($elms.eq(state).is(':visible')) return;

    clear_inputs();

    $elms.hide();

    $elms.eq(state).show();

  }

  function clear_inputs() {

    $('form .sp_form__error-cpt').remove();

    $('.js-create-checkbox').prettyCheckable('check');

    $('form .this-error').removeClass('this-error');

    $('form')[0].reset();

    $select_state[0].selectize.setValue("");

    $('[name=login_phone]').val('');

  }

  var clickHandler = "click";

  if ('ontouchstart' in document.documentElement) {
    clickHandler = "touchstart";
  }

  $('body').on(clickHandler, '[data-do]', function (e) {

    var that = $(this);
    set_state(that.data('do'));
    e.preventDefault();

  }).on('submit', 'form.sp_form', function (e) {

    var $form = $(this);

    var data = $form.serializeArray();

    $.each(data, function (index, item) {

      if (!item.value) {

        _error_block(item.name, 'add')

      } else {

        var _el = $form.find('[name=' + item.name + ']');

        if ((_el.data('valid') == 'email' || _el.data('valid') == 'phone') && !_validator(_el.data('valid'), _el.val())) {

          _error_block(item.name, 'add');

        } else {
          _error_block(item.name, 'del');

        }

      }

      if (index == data.length - 1) {

        _submit();

      }

      e.preventDefault();

      e.stopPropagation();

    });

    function _submit() {

      var errors = $form.find('.this-error').length;

      if (errors != 0) return;

      var u_data = getData().user_data;

      SAILPLAY.send('user.update', u_data);

    }

    e.preventDefault();

  }).on(clickHandler, '.btn_login', function (e) {

    e.preventDefault();

    var _phone = $('[name=login_phone]').length && $('[name=login_phone]').val();

    if (!_validator('phone', _phone)) {

      popup({
        title: 'Error',
        text: 'Please enter a valid phone number (United States)'
      }, 'login_error');

      start_timer(15000);

      return;

    }

    $('[name=login_phone]').val('');

    SAILPLAY.send('load.user.info', {user: {phone: _phone}, all: 1});

  }).on(clickHandler, '.sp_popup__close', function (e) {

    e.preventDefault();

    $('.sp_popup_blocks').fadeOut();

    $('.sp_popup').data('type', '');

    start_timer();

  }).on(clickHandler, function () {

    if (isLoginError()) return;
    start_timer();

  }).on('keyup', 'input', function () {

    if (isLoginError()) return;
    start_timer();

  });

  function isLoginError() {

    var popup = $('.sp_popup');

    return popup.length && popup.is(':visible') && popup.data('type') == 'login_error' ? true : false

  }

  function getData() {

    var $form = $('form');

    var form_fields = ['lastName', 'firstName', 'phone', 'addEmail'];

    var user_data = {};

    var vars_fields = ['address1', 'address2', 'zip', 'state', 'city'];

    var vars_data = {};

    var tags_data = [];

    form_fields.forEach(function (field) {

      user_data[field] = $form.find('[name=' + field + ']').val();

    });

    vars_fields.forEach(function (field) {

      if ($form.find('[name=' + field + ']').val()) {

        if (field == 'state') {

          var _new_val = _findByFieldValue('abbreviation', $form.find('[name=' + field + ']').val());

          if (_new_val && _new_val.name) {

            vars_data[field] = _new_val.name;

          }

        } else {

          vars_data[field] = $form.find('[name=' + field + ']').val();

        }

      }

    });

    if ($form.find('[name=agree]').is(':checked')) {

      tags_data.push($form.find('[name=agree]').data('tag'));

    }

    return {
      user_data: user_data,
      vars_data: vars_data,
      tags_data: tags_data
    }

  }

  function start_timer(time) {

    _timeout_to_redirect && clearTimeout(_timeout_to_redirect);

    _timeout_to_redirect = setTimeout(function () {

      set_state('welcome');

    }, time || WAIT_FOR_REDIRECT);

  }

  SAILPLAY.on('user.update.error', function (res) {

    var errors = {
      '-200008': {
        title: 'This phone number is already in use.',
        text: 'Dear customer, if you are already registered, you can <span class="sp_popup__close this-link" data-do="login">check your bonus points by providing you phone number</span>.'
      },
      '-200010': {
        title: 'This email is already in use by someone else.',
        text: 'Dear customer, please use another email. If you are already registered, you can <span class="sp_popup__close this-link" data-do="login">check your bonus points by providing you phone number</span>. If you want to update your profile please ask a cashier for help.'
      }
    };

    popup(errors[res.status_code] || {});

  });

  SAILPLAY.on('user.update.success', function (res) {

    var data = getData();

    SAILPLAY.send('vars.add', {custom_vars: data.vars_data, user: {phone: data.user_data.phone}}, function () {

      if (data.tags_data.length) {

        SAILPLAY.send('tags.add', {tags: data.tags_data, user: {phone: data.user_data.phone}}, function () {

          finish_submit();

        });

      } else {

        finish_submit();

      }

    });

  });

  function popup(params, type) {

    if (!params || !params.title || !params.text)return;

    var $popup = $('.sp_popup');

    if (type) {

      $popup.data('type', type);

    } else {

      $popup.data('type', '');

    }

    $popup.find('.sp_popup__head').html(params.title);

    $popup.find('.sp_popup__txt p').html(params.text);

    $('.sp_popup_blocks').animate({opacity: 'toggle'}, {

      duration: 500, start: function () {
        $(this).css('display', 'table');
      }

    });

  }

  function finish_submit() {

    set_state('reg_success');

    start_timer(15000);

  }

  SAILPLAY.on('load.user.info.success', function (res) {

    $('.user_points').text(res.user_points.confirmed);

    $('.user_name').text(res.user.first_name + ' ' + res.user.last_name);

    set_state('info');

    start_timer(15000);

  });

  SAILPLAY.on('load.user.info.error', function (res) {

    popup({
      title: 'Error',
      text: 'Customer with such phone number is not registered'
    }, 'login_error');

    start_timer(15000);


  });

  function _validator(type, val) {

    if (!type || !val) return;

    if (type == 'email') {

      return _validateEmail();

    } else if (type == 'phone') {

      return _validatePhone();

    }
    else {
      return false
    }

    function _validateEmail() {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(val);
    }

    function _validatePhone() {
      return val.match(/\d/g).length === 11;
    }

  }

  function _error_block(name, action) {

    if (!name || !$('[name=' + name + ']').length || !action) return;

    var $el = $('[name=' + name + ']');

    if (!$el.data('required')) return;

    function _add() {

      var _error_block = $('<div class="sp_form__error-cpt">\n    <div class="sp_form__error-cpt-inn">field is required</div>\n</div>');

      if ($el.siblings('.sp_cmn-selectize').length) {
        $el.siblings('.sp_cmn-selectize').addClass('this-error');
      } else {
        $el.addClass('this-error');
      }

      if (!$el.siblings('.sp_form__error-cpt').length) {
        $el.after(_error_block);
      }

    }

    function _del() {

      if ($el.siblings('.sp_cmn-selectize.this-error').length) {
        $el.siblings('.sp_cmn-selectize.this-error').removeClass('this-error');
      } else {
        $el.removeClass('this-error');
      }

      if ($el.siblings('.sp_form__error-cpt').length) {
        $el.siblings('.sp_form__error-cpt').remove();
      }

    }

    if (action == 'add') {
      _add();
    } else if (action == 'del') {
      _del();
    } else {
      return false
    }

  }

  $('.js-create-checkbox').each(function () {
    $(this).prettyCheckable({
      customClass: 'sp_cmn-checkbox-wr js-target'
    });
  });

  $('.js-satellite').click(function () {
    $(this).siblings('.js-target').find('a').trigger('click');
  });

  var _empty_city = {"name": "City", "value": ""};

  var $select_city = $('.js-create-select#city').selectize({
    options: _empty_city,
    labelField: 'name',
    valueField: 'value',
    sortField: "value"
  });

  $select_city[0].selectize.setValue("");

  $select_city[0].selectize.disable();

  var $select_state = $('.js-create-select#state').selectize({
    options: _states,
    labelField: 'name',
    valueField: 'abbreviation',
    sortField: "abbreviation",
    onChange: function (val) {

      $select_city[0].selectize.clear();
      $select_city[0].selectize.clearOptions();
      $select_city[0].selectize.addOption([_empty_city]);
      $select_city[0].selectize.setValue("");

      if (val) {

        if (_cities[val]) {

          append_elements(_cities[val]);

        } else {

          var url = 'js/json/states/' + val + '.json';

          $.get(url).done(function (res) {

            _cities[val] = res;

            append_elements(res);

          });

        }

        function append_elements(elms) {

          var new_data = [];

          new_data = elms.map(function (arrayItem) {

            return {
              name: arrayItem,
              value: arrayItem
            }

          });

          $select_city[0].selectize.load(function (callback) {

            callback(new_data);

          });

          $select_city[0].selectize.enable();

        }

      } else {

        $select_city[0].selectize.disable();
      }

    }
  });

  $select_state[0].selectize.setValue("");

});