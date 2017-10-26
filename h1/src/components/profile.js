import $ from 'jquery'

class ProfileEditor {
    constructor() {
        let template = require('@templates/edit_profile.html');
        let $template = $(template);
        
        $template.appendTo('body')
        $('body').addClass('__sailplay-no-scroll');

        setTimeout(() => {
            $template.closest('.__sailplay-dialog__shadow').css('opacity', 1);
            $template.find('.__sailplay-dialog')
                .css('opacity', 1)
                .css('-webkit-transform', 'translateY(0)')
                .css('-moz-transform', 'translateY(0)')
                .css('-ms-transform', 'translateY(0)')
                .css('-o-transform', 'translateY(0)')                
                .css('transform', 'translateY(0)')
        })
    }
}

class ProfileView {
    constructor() {
        
    }

    openProfile() {
        new ProfileEditor();
    }
}

module.exports = {
    viewModel: ProfileView,
    template: require('@templates/profile.html')
};