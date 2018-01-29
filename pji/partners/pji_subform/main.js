import mainStyle from '@lib/styles/style.styl';
import { SailPlay } from '@lib/core.js'
import ko from 'knockout';
import 'knockout.validation';
<<<<<<< .merge_file_LzaLjg
import $ from 'jquery';
import "babel-polyfill";
require('@lib/styles/helpers.important.styl');
require('@lib/jquery-ui._autocomplete.js');
require('@lib/jquery-ui.min.css');
=======
require('@lib/styles/helpers.styl')
>>>>>>> .merge_file_wE5w9f

import mainTemplate from './main.pug';
require('./assets/styles/style.styl')

let initiated = false;

window.SAILPLAY = function (opts) {
    if (initiated) return;
    initiated = true;
    let sp = new SailPlay({
        // auth_hash: auth_hash,
        domain: opts.domain || 'http://sailplay.ru',
        language: opts.language || 'en',
        partner_id: opts.partner || 1737
    })

    let pji_subform = {
        mainFields: ko.observableArray(),
        secondaryFields: ko.observableArray(),

        email: ko.observable(),
        step: ko.observable(1),
        last_step: ko.observable(),
        congrat: ko.observable(false),

        btn_text: ko.observable(),
        user_agreement_line_1: ko.observable(),
        user_agreement_line_2: ko.observable(),
        user_agreement_link: ko.observable(),
        user_agreement_link_href: ko.observable(),

        title: ko.observable(),
        title_step_1: ko.observable(),
        title_step_2: ko.observable(),

        thank_title: ko.observable(),
        thank_description: ko.observable(),
        thank_button: ko.observable(),
        thank_image: ko.observable(''),
        thank_link_href: ko.observable(),

        getData(field_set) {
            let data = {};
            ko.utils.arrayForEach(pji_subform[field_set](), chunk => {
                for (let f of chunk) {
                    if ((f.type == 'birthday' || f.type == 'sign_up_date') && f.day() != 'Day' && f.month().id && f.year() != 'Year') {
                        data[f.type] = `${f.year()}-${("0" + f.month().id).slice(-2)}-${("0" + f.day()).slice(-2)}`
                    } else
                        data[f.type] = f.value()
                }
            })

            return data
        },

        submit() {
            let valid = true;
            let field_set = pji_subform.step() == 1 ? 'mainFields' : 'secondaryFields'

            ko.utils.arrayForEach(pji_subform[field_set](), chunk => {
                for (let f of chunk) {
                    if (f.value.isModified) {
                        f.value.isModified(true)
                        if (valid)
                            valid = f.value.isValid()
                    }
                }

            })

            if (!valid) return

            let data = pji_subform.getData(field_set)
            if (!pji_subform.email())
                pji_subform.email(data.email)

            function updateInfo() {
<<<<<<< .merge_file_LzaLjg
                let data_to_update = {
                    addPhone: data.phone,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    sex: data.sex,
                    birthDate: data.birthday
                }

                if (self.allow_edit) {
                    let data_vars = {};
                    for (let key of Reflect.ownKeys(data)) {
                        switch (key) {
                            case 'phone':
                                if (data[key]) data_vars["__form_edit_['phone']"] = data[key];
                                break
                            case 'first_name':
                                if (data[key]) data_vars["__form_edit_['firstName']"] = data[key];
                                break
                            case 'last_name':
                                if (data[key]) data_vars["__form_edit_['lastName']"] = data[key];
                                break
                            case 'sex':
                                if (data[key]) data_vars["__form_edit_['sex']"] = data[key];
                                break
                            case 'birthday':
                                if (data[key]) data_vars["__form_edit_['birthDate']"] = data[key];
                                break
                        }
                    }

                    sp.updateCustomVars({
                        email: self.email(),
                        ...data_vars
                    })
                }

                return sp.updateUserInfo($.extend(true, {
                    email: self.email()
                }, data_to_update))
            }

            function updateVars(empty) {
                if (empty) // нужно всегда иметь список кустом варов даже пустых
                    return sp.updateCustomVars({
                        email: self.email(),
                        'Registration Code': '',
                        'ID Number': '',
                        'Sign Up Date': '',
                        'Store': '',
                        'Street Address 1': '',
                        'Street Address 2': '',
                        'Zip Code': '',
                        'State': '',
                        'City': '',
                        'Region': ''
                    })

                let data_to_update = {
                    'Registration Code': data.reg_code,
                    'ID Number': data.id,
                    'Sign Up Date': data.sign_up_date,
                    'Store': data.store,
                    'Street Address 1': data.address_1,
                    'Street Address 2': data.address_2,
                    'Zip Code': data.zip,
                    'State': data.state,
                    'City': data.city,
                    'Region': data.region
                }

                return sp.updateCustomVars($.extend(true, {
                    email: self.email(),
                }, data_to_update))
            }

            function updateTagsArray(fieldGroupsArray) {
                var tagsArray = []
                $.each(data, (k, v) => {
                    fieldGroupsArray.forEach((fieldsGroupName) => {
                        pji_subform[fieldsGroupName]().forEach((fieldsGroup) => {
                            fieldsGroup.forEach(function (field) {
                                if (field.autocomplete && (field.type.toLowerCase() == k.toLowerCase())) {
                                    field.autocomplete.forEach((entry) => {
                                        if (v && (entry.name.toLowerCase() == v.toLowerCase()) && entry.tag) {
                                            tagsArray.push(entry.tag)
                                        }
                                    })
                                }
                            })
                        })
                    })
=======
                return sp.updateUserInfo({
                    email: pji_subform.email(),
                    addPhone: data.phone || '',
                    firstName: data.first_name || '',
                    lastName: data.last_name || '',
                    sex: data.gender || '',
                    birthDate: data.birthday || ''
>>>>>>> .merge_file_wE5w9f
                })
            }

<<<<<<< .merge_file_LzaLjg
            function updateTags(fieldGroupsArray) {
                var tagsArray = updateTagsArray(fieldGroupsArray)
                if (tagsArray.length) {
                    sp.addTags(tagsArray, {
                        auth_hash: '',
                        email: self.email(),
                        phone: ''
                    })
                }
=======
            function updateVars() {
                return sp.updateCustomVars({
                    email: pji_subform.email(),
                    'Registration Code': data.reg_code || '',
                    'ID Number': data.id || '',
                    'Sign Up Date': data.sign_up_date || '',
                    'Store': data.store || '',
                    'Street Address 1': data.address_1 || '',
                    'Street Address 2': data.address_2 || '',
                    'Zip Code': data.zip || '',
                    'State': data.state || '',
                    'City': data.city || '',
                    'Region': data.region || ''
                })
>>>>>>> .merge_file_wE5w9f
            }

            function updateSmsOpt() {
                var tagsAddArray = []
                var tagsDeleteArray = []

                if (self.sms_opt()) {
                    tagsAddArray.push('SMS Opt-In')
                    tagsDeleteArray.push('SMS Opt-Out')
                }
                else {
                    tagsAddArray.push('SMS Opt-Out')
                    tagsDeleteArray.push('SMS Opt-In')
                }

                if(tagsAddArray) 
                    sp.addTags(tagsAddArray, {
                        auth_hash: '',
                        email: self.email(),
                        phone: ''
                    })
                if(tagsDeleteArray)
                    sp.removeTags(tagsDeleteArray, {
                        auth_hash: '',
                        email: self.email(),
                        phone: ''
                    }) 
            }

            function nextStep() {
                if ((sp.specificConfig.settings.steps || 1) > pji_subform.step()) {
                    pji_subform.step(pji_subform.step() + 1);
                    pji_subform.btn_text(sp.specificConfig.settings.texts.button_step_2)
                    pji_subform.last_step(true);
                } else
                    pji_subform.congrat(true)
            }

            if (sp.specificConfig.settings.reg_on_last_step && sp.specificConfig.settings.steps == 2) {
<<<<<<< .merge_file_LzaLjg
                if (this.last_step()) {
                    let tags = ['Marketing Opt-In'].concat(updateTagsArray(['mainFields', 'secondaryFields']))
                    data = $.extend(true, {}, this.previous_data, data)
                    
                    sp.addTags(tags, {
=======
                if (pji_subform.last_step()) {
                    data = $.extend(true, {}, pji_subform.previous_data, data)
                    sp.addTags(['Marketing Opt-In'], {
>>>>>>> .merge_file_wE5w9f
                        auth_hash: '',
                        email: pji_subform.email(),
                        phone: ''
                    })
                        .then(updateInfo)
<<<<<<< .merge_file_LzaLjg
                        .then(updateVars(0))
                        .then(updateSmsOpt)
                        .then(nextStep)

                    setTimeout(() => this.in_progress(false))
=======
                        .then(updateVars)
                        .then(nextStep)
>>>>>>> .merge_file_wE5w9f
                    return
                } else {
                    pji_subform.previous_data = data;
                    nextStep();
                    return
                }
            }

<<<<<<< .merge_file_LzaLjg
            if (this.step() == 1) {
                let tags = ['Marketing Opt-In', 'Subscription form not finished'].concat(updateTagsArray(['mainFields']))
                sp.addTags(tags, {
=======
            if (pji_subform.step() == 1)
                sp.addTags(['Marketing Opt-In', 'Subscription form not finished'], {
>>>>>>> .merge_file_wE5w9f
                    auth_hash: '',
                    email: pji_subform.email(),
                    phone: ''
                })
                    .then(updateInfo)
<<<<<<< .merge_file_LzaLjg
                    .then(updateVars(0))
                    .then(updateSmsOpt)
                    .then(nextStep)
            }

            if (this.step() == 2)
=======
                    .then(updateVars)
                    .then(nextStep)

            if (pji_subform.step() == 2)
>>>>>>> .merge_file_wE5w9f
                sp.removeTags(['Subscription form not finished'], {
                    auth_hash: '',
                    email: pji_subform.email(),
                    phone: ''
                })
                    .then(updateVars)
                    .then(nextStep)
        }
    }

    // --- utils

    ko.extenders.defaultIfNull = function (target, defaultValue) {
        var result = ko.computed({
            read: target,
            write: function (newValue) {
                if (!newValue) {
                    target(defaultValue);
                } else {
                    target(newValue);
                }
            }
        });

        result(target());

        return result;
    };

    // --- masked input

    ko.extenders.mask = function (observable, mask) {
        observable.mask = mask;
        return observable;
    };

    let origValueUpdate = ko.bindingHandlers.value.update;
    ko.bindingHandlers.value.update = function (element, valueAccessor) {
        let val = valueAccessor(),
            mask = val.mask,
            newValue = val();
        $(element).unmask();
        origValueUpdate.apply(this, arguments);
        if (mask)
            $(element).mask(mask);
    };

    // --- validation

    ko.validation.init({
        registerExtenders: true,
        messagesOnModified: true,
        insertMessages: true,
        parseInputAttributes: true,
        messageTemplate: null
    }, true);

    function buildUI() {
        pji_subform.btn_text(sp.specificConfig.settings.texts.button_step_1);
        pji_subform.user_agreement_line_1(sp.specificConfig.settings.texts.user_agreement_line_1);
        pji_subform.user_agreement_line_2(sp.specificConfig.settings.texts.user_agreement_line_2);
        pji_subform.user_agreement_link(sp.specificConfig.settings.texts.user_agreement_link);
        pji_subform.user_agreement_link_href(sp.specificConfig.settings.user_agreement_link_href);

        pji_subform.title(sp.specificConfig.settings.texts.title)
        pji_subform.title_step_1(sp.specificConfig.settings.texts.title_step_1)
        pji_subform.title_step_2(sp.specificConfig.settings.texts.title_step_2)

        pji_subform.thank_title(sp.specificConfig.settings.texts.thank_title)
        pji_subform.thank_description(sp.specificConfig.settings.texts.thank_description)
        pji_subform.thank_button(sp.specificConfig.settings.texts.thank_button)
        pji_subform.thank_image(sp.specificConfig.settings.texts.thank_image)
        pji_subform.thank_link_href(sp.specificConfig.settings.thank_link_href)

        if (pji_subform.step() == (sp.specificConfig.settings.steps || 1))
            pji_subform.last_step(true)

        for (let fieldSet of [{
            inSettings: 'main_fields',
            inCode: 'mainFields'
        }, {
            inSettings: 'secondary_fields',
            inCode: 'secondaryFields'
        }]) {

            let tempArr = [];
            for (let [index, field] of sp.specificConfig[fieldSet.inSettings].entries()) {
                if (!(index % 2) && tempArr.length) {
                    pji_subform[fieldSet.inCode].push(tempArr)
                    tempArr = [];
                }

                let el = {
                    name: field.name,
                    value: ko.observable(),
                    type: field.type
                }

<<<<<<< .merge_file_LzaLjg
                if (field.autocomplete) {
                    el.autocomplete = field.autocomplete
                    el.autocomplete_visible = 
                        field.autocomplete_visible === undefined ? true : field.autocomplete_visible
                    if (field.autocomplete_required) {
                        el.value.extend({
                            autocompleteRequired: field.autocomplete.map(x => x.name)
                        })
                    }
                }

                if (field.required) el.value.extend({
                    required: true
                })
=======
                if (field.required) el.value.extend({ required: true })
>>>>>>> .merge_file_wE5w9f
                if (field.type == 'email') el.value.extend({
                    required: true,
                    pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
                })

                if (~(['birthday', 'sign_up_date'].indexOf(field.type))) {
                    el.day = ko.observable().extend({ defaultIfNull: 'Day' });
                    el.month = ko.observable().extend({ defaultIfNull: { id: 0, name: 'Month' } });
                    el.year = ko.observable().extend({ defaultIfNull: 'Year' });

                    el.days =
                        (function () {
                            let result = [];
                            for (let y = 1; y <= 31; y++) {
                                result.push(y)
                            }

                            return result;
                        }())

                    el.months = sp.specificConfig.months;

                    el.years =
                        (function () {
                            let result = [];
                            for (let y = 0; y < 117; y++) {
                                result.push(1900 + y)
                            }

                            return result;
                        }())
                }

                if (field.type == 'phone') el.value.extend({
                    mask: (field.phone && field.phone.mask) || '+56 (999) 99-99-99',
                    pattern: (field.phone && field.phone.pattern) || "^(\\+56) \\(([0-9]{3})\\) ([0-9]{2})-([0-9]{2})-([0-9]{2})$"
                })

                tempArr.push(el)
            }

            pji_subform[fieldSet.inCode].push(tempArr)
<<<<<<< .merge_file_LzaLjg
            pji_subform[fieldSet.inCode]().forEach(function (fieldArray) {
                fieldArray.forEach(function (field) {
                    if (field.autocomplete) {
                        var autocomplete = field.autocomplete.map(function (x) { return x.name })
                        $('[data-type=' + field.type + ']')._autocomplete({
                            disabled: !field.autocomplete_visible,
                            source: (request, response) => {
                                var res = autocomplete.filter(x => x.toLowerCase().includes(request.term.toLowerCase()))
                                if (res.length) {
                                    response(res)
                                } else {
                                    response([{
                                        label: sp.specificConfig.settings.texts.autocomplete_no_results_text || "No suggestions",
                                        value: request.term
                                    }])
                                }
                            }
                        });
                    }
                })
            })

=======
>>>>>>> .merge_file_wE5w9f
        }

        document.querySelector('sailplay-magic').style.display = 'block';
    }


    sp.config.subscribe(config => {
        sp.getConfigByName(opts.config || 'pjsubform')
            .then(data => {

                ko.validation.rules.pattern.message = 'Invavid format. Please check the spelling';
                ko.validation.rules.required.message = 'Field is required. Please enter something';

                sp.specificConfig = data.config.config;
                buildUI()
            })
    })

    let sailplay_element = document.querySelector('sailplay-magic');
    sailplay_element.style.display = 'none';
    sailplay_element.innerHTML = mainTemplate()

    pji_subform.errors = ko.validation.group(pji_subform);
    ko.applyBindings(pji_subform, sailplay_element);
}