import $ from 'jquery'
let sp = require('@lib/sp');

$.noConflict();
require('maskedinput');

class ProfileEditor {
    constructor() {
        let template = require('@templates/edit_profile.html');
        let $template = $(template);
        
        $template.appendTo('body')
        $('body').addClass('__sailplay-no-scroll');

        setTimeout(() => {
            $template.attr('aria-hidden', false)
            $template.closest('.__sailplay-dialog__shadow').css('opacity', 1);
            $template.find('.__sailplay-dialog')
                .css('opacity', 1)
                .css('-webkit-transform', 'translateY(0)')
                .css('-moz-transform', 'translateY(0)')
                .css('-ms-transform', 'translateY(0)')
                .css('-o-transform', 'translateY(0)')                
                .css('transform', 'translateY(0)')

            $template.find('.__sailplay-date-input').mask("99 / 99 / 9999",{placeholder:"MM / DD / YYYY"});
        })
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