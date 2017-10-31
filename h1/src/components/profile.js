import $ from 'jquery'
import { Dialog } from '@lib/dialog'
let sp = require('@lib/sp');

$.noConflict();
require('maskedinput');

ko.validation.rules['date'] = {
    validator: function (val, on) {
        let valid = true
        if (!val) return true
        let test = val.split(' / ');
        let month = parseInt(test[0]);
        let day = parseInt(test[1]);
        let year = parseInt(test[2]);

        if (month < 1) valid = false;
        if (month > 12) valid = false;
        if (day < 1) valid = false;
        if (day > 31) valid = false;
        if (year < 1900) valid = false;
        if (year > 2017) valid = false;

        return valid;
    },
    message: 'error'
};

ko.validation.init({
    registerExtenders: true,
    messagesOnModified: true,
    insertMessages: false,
    parseInputAttributes: false,
    messageTemplate: null
}, true);

ko.bindingHandlers.masked = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        var mask = allBindingsAccessor().mask || {};
        var options = allBindingsAccessor().mask_options || {};
        $(element).mask(mask, options);
        ko.utils.registerEventHandler(element, 'focusout', function () {
            var observable = valueAccessor();
            observable($(element).val());
        });
    },
    update: function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        $(element).val(value);
        $(element).trigger('input.mask') // apply mask
    }
};

class ProfileEditor extends Dialog {
    init(preventClose) {
        this.$template = $(require('@templates/edit_profile.html'));

        this.preventClose = preventClose;
        this.user = ko.mapping.fromJS(ko.mapping.toJS(sp.user().user));

        this.user.email.extend({
            required: true,
            pattern: '@'
        })
        this.user.first_name.extend({
            required: true
        });
        this.user.last_name.extend({
            required: true
        });
        this.user.birth_date.extend({
            date: true
        });

        this.address_line_1 = ko.observable();
        this.address_line_2 = ko.observable();
        this.state = ko.observable();
        this.city = ko.observable('').extend({
            required: true
        });
        this.post_code = ko.observable('').extend({
            required: true
        });
        this.country = ko.observable('').extend({
            required: true
        })

        this.errors = ko.validation.group({
            email: this.user.email,
            firstName: this.user.first_name,
            lastName: this.user.last_name,
            birthDate: this.user.birth_date,
            postCode: this.post_code,
            country: this.country,
            city: this.city
        });

        ko.utils.arrayForEach(sp.custom_variables(), item => {
            switch (item.name) {
                case 'Address 1':
                    this.address_line_1(item.value);
                    break;
                case 'Address 2':
                    this.address_line_2(item.value);
                    break;
                case 'Postcode':
                    this.post_code(item.value);
                    break;
                case 'State/Province':
                    this.state(item.value);
                    break;
                case 'City':
                    this.city(item.value);
                    break;
                case 'Country':
                    this.country(item.value);
                    break;
            }
        })
    }

    update() {
        if (this.errors().length) return

        sp.updateUserInfo(ko.mapping.toJS(this.user));
        sp.updateCustomVars({
            'Address 1': this.address_line_1() || '',
            'Address 2': this.address_line_2() || '',
            'State/Province': this.state() || '',
            'Postcode': this.post_code() || '',
            'City': this.city() || '',
            'Country': this.country() || ''
        });

        this.preventClose = false;
        this.close();
    }
}

class ProfileView {
    constructor() {
        this.user = ko.observable(0);
        this.user_points = ko.observable(0);

        sp.user.subscribe(data => {
            this.user(data.user);
            this.user_points(data.user_points);

            if (!this.user()) return
            let filled = true;
            if (!data.user.first_name()) filled = false;
            if (!data.user.last_name()) filled = false;

            if (sp.auth_hash) {
                sp.getCustomVars({
                    names: JSON.stringify(['Address 1', 'Address 2', 'State/Province', 'Postcode', 'City', 'Country']),
                }).then(data => {
                    ko.utils.arrayForEach(data.vars, item => {
                        switch (item.name) {
                            case 'City':
                                if (!item.value) filled = false;
                                break;
                            case 'Postcode':
                                if (!item.value) filled = false;
                                break;
                            case 'Country':
                                if (!item.value) filled = false;
                                break;
                        }
                    })

                    if (!filled)
                        new ProfileEditor(true)
                })
            }
        })
    }

    openProfile() {
        new ProfileEditor();
    }
}

module.exports = {
    viewModel: ProfileView,
    template: require('@templates/profile.html')
};