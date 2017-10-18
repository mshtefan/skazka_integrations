$(function(){

  SAILPLAY.jsonp.get("https://sailplay.ru/js-api/5/loyalty-page/config/by-name/", {name: 'leadform'}, function(data){
    var magic_config = data.config
    var regions = magic_config.config.regions
    var DOMAIN = 'http://sailplay.ru';

    var elms = {
      region_input: $('#region'),
      department_input: $( "#department" ),
      manager_input: $( "#manager" )
    };

    var saved_data = {
      managers: $.cookie('managers') ? $.cookie('managers').split(',') : [],
      last_department: $.cookie('department') ? $.cookie('department') : '',
      last_region: $.cookie('region') ? $.cookie('region') : ''
    };

    for(var i in regions){
      var reg = regions[i];
      var option = $('<option></option>');
      option.val(reg.id);
      option.text(reg.name);
      option.attr('selected', (reg.id  == saved_data.last_region));
      elms.region_input.append(option);
    }

    var current_region = SAILPLAY.find_by_properties(regions, { id: saved_data.last_region })[0] || regions[0];
    SAILPLAY.send('init', { partner_id: current_region.partner_id, dep_id: current_region.dep_id, domain: DOMAIN });

    elms.region_input.on('change', function(){
      current_region = SAILPLAY.find_by_properties(regions, { id: $(this).val() })[0];
      SAILPLAY.send('init', { partner_id: current_region.partner_id, dep_id: current_region.dep_id, domain: DOMAIN });

      elms.department_input.autocomplete({
        minLength: 0,
        source: current_region.departments
      }).focus(function () {
          $(this).autocomplete("search", "");
        });

    });

    elms.department_input.autocomplete({
      minLength: 0,
      source: current_region.departments
    }).focus(function () {
        $(this).autocomplete("search", "");
      });

    elms.manager_input.autocomplete({
      minLength: 0,
      source: saved_data.managers
    }).focus(function () {
        $(this).autocomplete("search", "");
      });

    elms.region_input.val(current_region.id);

    elms.department_input.val(saved_data.last_department);

    SAILPLAY.on('init.success', function(){
      var form = $('#pj_lead_form');
      form.unbind('submit');
      form.on('submit', function(e){
        e.preventDefault();
        var email =  $(this).find('input[name=email]').first().val();
        var department =  $(this).find('input[name=department]').first().val();
        var manager =  $(this).find('input[name=manager]').first().val();
        if(email){
          SAILPLAY.jsonp.get(DOMAIN + '/js-api/' + current_region.partner_id + '/users/update/', { email: email }, function(){
            SAILPLAY.jsonp.get(DOMAIN + '/js-api/' + current_region.partner_id + '/tags/add/', {action: 'add', tags: [ 'Заполнил анкету в ресторане', department, manager ], email: email}, function(){
              alert('Клиент успешно подписан. E-Mail: ' + email);
            });
          });
          if(saved_data.managers.indexOf(manager) < 0){
            saved_data.managers.push(manager);
            $.cookie('managers', saved_data.managers.join(','));
          }
          $.cookie('department', department);
          $.cookie('region', current_region.id);
        }
        else {
          alert('Введите электронный адрес клиента');
        }
        return false;
      })
    });

    SAILPLAY.on('init.error', function(res){
      alert('Ошибка при инициализации SailPlay');
      console.dir(res);
    });
  })

});