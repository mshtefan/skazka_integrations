import $ from 'jquery'
let sp = require('@lib/sp');

$.noConflict();
require('maskedinput');

ko.validation.rules['date'] = {
    validator: function (val, on) {
        let valid = true
        let test = val.split(' / ');
        let month = parseInt(test[0]);
        let day = parseInt(test[1]);
        let year = parseInt(test[2]);

        if (month < 1) valid = false;
        if (month > 12) valud = false;
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

class ProfileEditor {
    constructor() {
        let template = require('@templates/edit_profile.html');
        this.$template = $(template);

        this.user = ko.mapping.fromJS(ko.mapping.toJS(sp.user().user));

        this.user.email.extend({ required: true, pattern: '@' })
        this.user.first_name.extend({ required: true });
        this.user.last_name.extend({ required: true });
        this.user.birth_date.extend({ date: true });

        this.address_line_1 = ko.observable();
        this.address_line_2 = ko.observable();
        this.state = ko.observable();
        this.city = ko.observable();
        this.post_code = ko.observable('').extend({ required: true });
        this.country = ko.observable('').extend({ required: true })

        this.errors = ko.validation.group(this);

        sp.getCustomVars({
            names: JSON.stringify(['Address 1', 'Address 2', 'State/Province', 'Postcode', 'City', 'Country']),
        }).then(data => {
            ko.utils.arrayForEach(data.vars, item => {
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
        })

        this.$template.appendTo('body')
        $('body').addClass('__sailplay-no-scroll');

        setTimeout(() => {
            this.$template.attr('aria-hidden', false)
            this.$template.closest('.__sailplay-dialog__shadow').css('opacity', 1);
            this.$template.find('.__sailplay-dialog')
                .css('opacity', 1)
                .css('-webkit-transform', 'translateY(0)')
                .css('-moz-transform', 'translateY(0)')
                .css('-ms-transform', 'translateY(0)')
                .css('-o-transform', 'translateY(0)')
                .css('transform', 'translateY(0)')
        })

        ko.applyBindings(this, this.$template[0])
    }

    close(obj, ev) {
        if (obj !== true && ev && !/shadow/.test(ev.target.className))
            return

        $('body').removeClass('__sailplay-no-scroll');
        this.$template.closest('.__sailplay-dialog__shadow').css('opacity', 0);
        this.$template.find('.__sailplay-dialog')
            .css('opacity', 0)
            .css('-webkit-transform', 'translateY(-50px)')
            .css('-moz-transform', 'translateY(-50px)')
            .css('-ms-transform', 'translateY(-50px)')
            .css('-o-transform', 'translateY(-50px)')
            .css('transform', 'translateY(-50px)')

        setTimeout(() => {
            this.$template.remove()
        }, 200)
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