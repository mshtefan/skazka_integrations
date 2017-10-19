import mainStyle from '@lib/styles/style.styl';
import { SailPlay } from '@lib/core.js'
import ko from 'knockout';
import 'knockout.validation';
require('@lib/styles/helpers.styl')

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

        in_progress: ko.observable(false),

        sms_opt: ko.observable(false),
        email_opt: ko.observable(false),

        sms_opt_text: ko.observable(),
        email_opt_text: ko.observable(),
        sms_opt_on: ko.observable(false),
        email_opt_on: ko.observable(false),

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
            setTimeout(function(){
                pji_subform.in_progress(true);
            });

            let valid = true;
            let field_set = pji_subform.step() == 1 ? 'mainFields' : 'secondaryFields'

            pji_subform.email_opt.isModified(true);
            if (valid)
                pji_subform.email_opt.isValid();

            ko.utils.arrayForEach(pji_subform[field_set](), chunk => {
                for (let f of chunk) {
                    if (f.value.isModified) {
                        f.value.isModified(true)
                        if (valid)
                            valid = f.value.isValid()
                    }
                }
            })

            if (!valid) {
                setTimeout(function(){
                    pji_subform.in_progress(false);
                });
                return
            }

            let data = pji_subform.getData(field_set)
            if (!pji_subform.email())
                pji_subform.email(data.email)

            function updateInfo() {
                let data_to_update = {
                    addPhone: data.phone,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    sex: data.gender,
                    birthDate: data.birthday
                }

                return sp.updateUserInfo($.extend(true, {
                    email: pji_subform.email()
                }, data_to_update))
            }

            function updateVars(empty) {
                if (empty) // нужно всегда иметь список кустом варов даже пустых
                    return sp.updateCustomVars({
                        email: pji_subform.email(),
                        'Registration Code': '',
                        'ID Number': '',
                        'Sign Up Date':  '',
                        'Store':  '',
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
                    email: pji_subform.email(),
                }, data_to_update))
            }

            function nextStep() {
                if ((sp.specificConfig.settings.steps || 1) > pji_subform.step()) {
                    pji_subform.step(pji_subform.step() + 1);
                    pji_subform.btn_text(sp.specificConfig.settings.texts.button_step_2)
                    pji_subform.last_step(true);
                } else
                    pji_subform.congrat(true)

                setTimeout(function(){
                    pji_subform.in_progress(false);
                });
            }

            if (sp.specificConfig.settings.reg_on_last_step && sp.specificConfig.settings.steps == 2) {
                if (pji_subform.last_step()) {
                    data = $.extend(true, {}, pji_subform.previous_data, data)
                    sp.addTags(['Marketing Opt-In'], {
                        auth_hash: '',
                        email: pji_subform.email(),
                        phone: ''
                    })
                        .then(updateVars(1))
                        .then(updateInfo)
                        .then(updateVars(0))
                        .then(nextStep)

                    setTimeout(function(){
                        pji_subform.in_progress(false);
                    });
                    return
                } else {
                    pji_subform.previous_data = data;
                    nextStep();
                    setTimeout(function(){
                        pji_subform.in_progress(false);
                    });
                    return
                }
            }

            if (pji_subform.step() == 1)
                sp.addTags(['Marketing Opt-In', 'Subscription form not finished'], {
                    auth_hash: '',
                    email: pji_subform.email(),
                    phone: ''
                })
                    .then(updateVars(2))
                    .then(updateInfo)
                    .then(updateVars(0))
                    .then(nextStep)

            if (pji_subform.step() == 2)
                sp.removeTags(['Subscription form not finished'], {
                    auth_hash: '',
                    email: pji_subform.email(),
                    phone: ''
                })
                    .then(updateVars(0))
                    .then(nextStep)

            pji_subform.in_progress(false);
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

        pji_subform.sms_opt_on(sp.specificConfig.settings.sms_opt)
        pji_subform.email_opt_on(sp.specificConfig.settings.email_opt)
        pji_subform.sms_opt_text(sp.specificConfig.settings.texts.sms_opt_text)
        pji_subform.email_opt_text(sp.specificConfig.settings.texts.email_opt_text)

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

                if (field.required) el.value.extend({ required: true })
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
        }

        document.querySelector('sailplay-magic').style.display = 'block';
    }


    sp.config.subscribe(config => {
        sp.getConfigByName(opts.config || 'pjsub form')
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